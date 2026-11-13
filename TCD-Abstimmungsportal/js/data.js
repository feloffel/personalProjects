// Datenmodell in Firestore
//
//   system/config        { title, round, open, pointsSuess, pointsSalz }  – öffentlich lesbar, nur Admin schreibt
//   photos/{id}          { title, category: 'suess'|'salz', order, thumb } – öffentlich lesbar, nur Admin schreibt
//   photoFull/{id}       { data }   – großes Bild (Data-URL), öffentlich lesbar, nur Admin schreibt
//   authors/{id}         { name }   – Fotograf:in, nur für Admin lesbar (anonyme Abstimmung)
//   ballots/{round}_{uid}{ round, uid, suess: {photoId: stimmen}, salz: {…}, kiosk, createdAt }
//                         – ein Stimmzettel pro Gerät und Runde. Je Kategorie genau 3 Bilder,
//                           zusammen genau pointsXxx Stimmen (jedes Bild 1–3).
//                           Kann nur einmal angelegt, nie geändert oder gelöscht werden.
//   secret/admin         { key }    – SHA-256 des Admin-Passworts, für niemanden lesbar
//   admins/{uid}         { key }    – Gerät, auf dem das Admin-Passwort eingegeben wurde
//
// "Zurücksetzen" erhöht nur config.round. Alte Stimmzettel bleiben liegen, zählen aber nicht mehr.

import {
  db, doc, collection, query, orderBy, where, onSnapshot, getDoc, setDoc,
} from './firebase.js';

/** Anzahl Bilder, auf die man je Kategorie seine Stimmen verteilt. */
export const PICKS = 3;
/** Höchstens so viele Stimmen darf ein einzelnes Bild bekommen. */
export const MAX_PER_PHOTO = 3;

export const CATEGORIES = [
  { key: 'suess', label: 'Süßwasser', icon: '🌊', pointsField: 'pointsSuess' },
  { key: 'salz', label: 'Salzwasser', icon: '🐠', pointsField: 'pointsSalz' },
];

export const DEFAULT_CONFIG = {
  title: 'Fotowettbewerb',
  round: 1,
  open: true,
  pointsSuess: 6,
  pointsSalz: 6,
};

export const configRef = () => doc(db, 'system', 'config');

/** Einstellungen speichern (immer vollständig, damit alte Felder verschwinden). Nur Admin. */
export function saveConfig(current, patch) {
  const next = { ...DEFAULT_CONFIG, ...current, ...patch };
  return setDoc(configRef(), {
    title: next.title, round: next.round, open: next.open, pointsSuess: next.pointsSuess, pointsSalz: next.pointsSalz,
  });
}
export const ballotId = (round, uid) => `${round}_${uid}`;

/** Stimmen, die man in einer Kategorie verteilt. */
export const pointsFor = (config, catKey) => config[CATEGORIES.find((c) => c.key === catKey).pointsField];

/** Ruft cb(config | null) bei jeder Änderung auf. null = noch nicht eingerichtet. */
export function watchConfig(cb, onError) {
  return onSnapshot(configRef(), (snap) => {
    if (!snap.exists()) return cb(null);
    const data = snap.data();
    // ältere Einstellungen (picksSuess/picksSalz) ignorieren
    cb({
      ...DEFAULT_CONFIG,
      title: data.title ?? DEFAULT_CONFIG.title,
      round: data.round ?? 1,
      open: data.open ?? true,
      pointsSuess: data.pointsSuess ?? DEFAULT_CONFIG.pointsSuess,
      pointsSalz: data.pointsSalz ?? DEFAULT_CONFIG.pointsSalz,
    });
  }, onError);
}

/** Ruft cb({ all, suess: [...], salz: [...], byId }) auf, sortiert nach order, mit laufender Nummer je Kategorie. */
export function watchPhotos(cb, onError) {
  const q = query(collection(db, 'photos'), orderBy('order'));
  return onSnapshot(q, (snap) => {
    const all = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    cb(groupPhotos(all));
  }, onError);
}

export function groupPhotos(all) {
  const grouped = { all };
  for (const cat of CATEGORIES) {
    grouped[cat.key] = all
      .filter((p) => p.category === cat.key)
      .map((p, i) => ({ ...p, number: i + 1, label: p.title?.trim() || `${cat.label} ${i + 1}` }));
  }
  grouped.byId = Object.fromEntries(CATEGORIES.flatMap((c) => grouped[c.key].map((p) => [p.id, p])));
  return grouped;
}

/** Stimmzettel einer Runde live beobachten (nur Admin). */
export function watchBallots(round, cb, onError) {
  const q = query(collection(db, 'ballots'), where('round', '==', round));
  return onSnapshot(q, (snap) => cb(snap.docs.map((d) => ({ id: d.id, ...d.data() }))), onError);
}

const fullCache = new Map();
/** Großes Bild laden (mit Cache). Fällt auf das Vorschaubild zurück. */
export async function getFullImage(photo) {
  if (fullCache.has(photo.id)) return fullCache.get(photo.id);
  try {
    const snap = await getDoc(doc(db, 'photoFull', photo.id));
    const url = snap.exists() ? snap.data().data : photo.thumb;
    fullCache.set(photo.id, url);
    return url;
  } catch {
    return photo.thumb;
  }
}

/** Stimmen eines Stimmzettels in einer Kategorie als { photoId: stimmen }. */
function ballotEntries(ballot, catKey) {
  const value = ballot[catKey];
  if (Array.isArray(value)) return Object.fromEntries(value.map((id) => [id, 1])); // altes Format
  return value && typeof value === 'object' ? value : {};
}

/**
 * Stimmen zählen. Ergebnis je Kategorie: [{ ...photo, votes, voters, tops, place }], bestes zuerst.
 *   votes  = Summe der Stimmen
 *   voters = wie viele Personen das Bild gewählt haben (1. Gleichstand-Regel)
 *   tops   = wie oft das Bild die meisten Stimmen eines Zettels bekam (2. Gleichstand-Regel)
 * Nur wenn alles gleich ist, teilen sich Bilder einen Platz.
 */
export function tally(ballots, photos) {
  const stats = {};
  for (const b of ballots) {
    for (const cat of CATEGORIES) {
      const entries = Object.entries(ballotEntries(b, cat.key))
        .filter(([id, pts]) => photos.byId[id]?.category === cat.key && Number.isInteger(pts) && pts > 0);
      const max = Math.max(0, ...entries.map(([, pts]) => pts));
      for (const [id, pts] of entries) {
        const s = stats[id] || (stats[id] = { votes: 0, voters: 0, tops: 0 });
        s.votes += pts;
        s.voters += 1;
        if (pts === max) s.tops += 1;
      }
    }
  }
  const same = (a, b) => a.votes === b.votes && a.voters === b.voters && a.tops === b.tops;
  const result = { ballots: ballots.length };
  for (const cat of CATEGORIES) {
    const list = photos[cat.key]
      .map((p) => ({ ...p, votes: 0, voters: 0, tops: 0, ...stats[p.id] }))
      .sort((a, b) => b.votes - a.votes || b.voters - a.voters || b.tops - a.tops || a.number - b.number);
    list.forEach((p, i) => {
      p.place = i > 0 && same(p, list[i - 1]) ? list[i - 1].place : i + 1;
    });
    result[cat.key] = list;
  }
  return result;
}

/** Podest-Gruppen (Platz 1–3, Gleichstände zusammen), in Enthüllungs-Reihenfolge 3 → 1. */
export function podium(list) {
  const groups = [];
  for (const p of list) {
    if (p.place > 3 || p.votes === 0) break;
    const g = groups.find((x) => x.place === p.place);
    if (g) g.photos.push(p); else groups.push({ place: p.place, photos: [p] });
  }
  return groups.reverse();
}
