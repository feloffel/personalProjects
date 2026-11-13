// Abstimmung für Gäste (ein Stimmzettel pro Gerät) und Mehrfach-Modus (Gerät wird weitergereicht).
//
// Je Kategorie wählt man genau 3 Bilder und verteilt darauf genau 6 Stimmen (jedes Bild 1–3),
// also 3-2-1 oder 2-2-2. Die Zahl 6 ist im Admin-Bereich einstellbar.
import {
  db, doc, getDoc, setDoc, serverTimestamp,
} from './firebase.js';
import {
  $, $$, esc, showView, showMessage, toast, randomId, withTimeout, plural, confirmDialog,
} from './util.js';
import {
  CATEGORIES, PICKS, MAX_PER_PHOTO, watchConfig, watchPhotos, ballotId, getFullImage, pointsFor,
} from './data.js';

const KIOSK_PAUSE_SECONDS = 15;
const localKey = (round) => `tcd-voted-round-${round}`;
const stimmen = (n) => plural(n, 'Stimme', 'Stimmen');

let state;

export function startVote(user, { kiosk }) {
  state = {
    uid: user.uid,
    kiosk,
    config: undefined,
    photos: undefined,
    myBallot: undefined, // undefined = unbekannt, null = noch nicht abgestimmt
    checkedRound: null,
    selection: Object.fromEntries(CATEGORIES.map((c) => [c.key, new Map()])), // photoId → Stimmen
    activeTab: CATEGORIES[0].key,
    sending: false,
    builtFor: null,
  };
  $('#kioskBadge').hidden = !kiosk;
  document.body.classList.toggle('is-kiosk', kiosk);
  setupStaticUi();

  const onError = (err) => {
    console.error(err);
    showMessage('Keine Verbindung', 'Die Abstimmung konnte nicht geladen werden. Bitte lade die Seite neu.');
  };
  watchConfig((config) => { state.config = config; update(); }, onError);
  watchPhotos((photos) => { state.photos = photos; update(); }, onError);
}

/* ---------- Regeln für die Stimmenverteilung ---------- */

const points = (cat) => pointsFor(state.config, cat);
const sum = (cat) => [...state.selection[cat].values()].reduce((a, b) => a + b, 0);
/** Höchste Stimmenzahl, die ein Bild überhaupt bekommen kann. */
const maxPerPhoto = (cat) => Math.min(MAX_PER_PHOTO, points(cat) - (PICKS - 1));
/** Höchste Stimmenzahl, die dieses (gewählte) Bild gerade bekommen darf. */
function maxFor(cat, id) {
  const sel = state.selection[cat];
  const others = sum(cat) - (sel.get(id) || 0);
  const emptySlots = PICKS - sel.size;
  return Math.min(maxPerPhoto(cat), points(cat) - others - emptySlots);
}
const complete = (cat) => state.selection[cat].size === PICKS && sum(cat) === points(cat);

/* ---------- Ablauf ---------- */

async function update() {
  const { config, photos } = state;
  if (config === undefined || photos === undefined) return;

  if (config === null) {
    showMessage('Noch nicht bereit', 'Die Abstimmung wurde noch nicht eingerichtet. Bitte später noch einmal versuchen.', '⏳');
    return;
  }

  document.title = `${config.title} – Abstimmung`;
  $('#voteTitle').textContent = config.title;
  const pts = CATEGORIES.map((c) => config[c.pointsField]);
  $('#voteLead').textContent = pts[0] === pts[1]
    ? `Wähle in jeder Kategorie deine ${PICKS} Lieblingsbilder und verteile ${pts[0]} Stimmen auf sie.`
    : `Wähle in jeder Kategorie deine ${PICKS} Lieblingsbilder und verteile deine Stimmen auf sie.`;

  // Hat dieses Gerät in dieser Runde schon abgestimmt?
  if (!state.kiosk && state.checkedRound !== config.round) {
    state.checkedRound = config.round;
    state.myBallot = undefined;
    try {
      const snap = await getDoc(doc(db, 'ballots', ballotId(config.round, state.uid)));
      state.myBallot = snap.exists() ? snap.data() : null;
    } catch {
      state.myBallot = null;
    }
    if (!state.myBallot) {
      const local = readLocal(config.round);
      if (local) state.myBallot = local;
    }
    if (state.checkedRound !== config.round) return; // inzwischen neue Runde
  }

  buildBallotIfNeeded();
  showView('vote');

  if (!state.kiosk && state.myBallot) {
    showState('done');
  } else if (!config.open) {
    showState('closed');
  } else if (photos.all.length === 0) {
    showState('empty');
  } else {
    showState(null);
  }
}

function showState(kind) {
  const box = $('#voteState');
  $('#voteBallot').hidden = !!kind;
  $('#voteLead').hidden = !!kind;
  box.hidden = !kind;
  $('#voteStatePicks').innerHTML = '';
  if (!kind) return;

  const set = (icon, title, text) => {
    $('#voteStateIcon').textContent = icon;
    $('#voteStateTitle').textContent = title;
    $('#voteStateText').textContent = text;
  };
  if (kind === 'done') {
    set('✓', 'Danke fürs Abstimmen!', 'Deine Stimmen sind gezählt.');
    renderMiniPicks(state.myBallot);
  } else if (kind === 'closed') {
    set('⏸', 'Abstimmung geschlossen', 'Gerade kann nicht abgestimmt werden. Diese Seite aktualisiert sich automatisch, sobald es losgeht.');
  } else {
    set('🖼', 'Noch keine Bilder', 'Die Bilder werden gerade vorbereitet. Diese Seite aktualisiert sich automatisch.');
  }
}

/** { photoId: stimmen } eines Stimmzettels (auch altes Listen-Format). */
function entriesOf(ballot, cat) {
  const v = ballot?.[cat];
  if (Array.isArray(v)) return v.map((id) => [id, 1]);
  return Object.entries(v || {}).sort((a, b) => b[1] - a[1]);
}

function renderMiniPicks(ballot) {
  if (!ballot || !state.photos) return;
  $('#voteStatePicks').innerHTML = CATEGORIES.map((c) => {
    const items = entriesOf(ballot, c.key).map(([id, pts]) => [state.photos.byId[id], pts]).filter(([p]) => p);
    if (!items.length) return '';
    return `<div><h3>${c.icon} ${esc(c.label)}</h3><ul>${items.map(([p, pts]) => `
      <li><span class="mini-img"><img src="${p.thumb}" alt=""><span class="pts-badge">${pts}</span></span>
      <span>${esc(p.label)}</span></li>`).join('')}</ul></div>`;
  }).join('');
}

/* ---------- Stimmzettel aufbauen ---------- */

function buildBallotIfNeeded() {
  const signature = state.photos.all.map((p) => `${p.id}:${p.category}:${p.order}:${p.title}:${p.thumb?.length}`).join('|')
    + JSON.stringify(CATEGORIES.map((c) => state.config[c.pointsField]));
  if (signature === state.builtFor) { refreshSelectionUi(); return; }
  state.builtFor = signature;

  // Auswahl bereinigen (Bilder gelöscht oder Stimmenzahl geändert)
  for (const c of CATEGORIES) {
    for (const id of state.selection[c.key].keys()) {
      if (state.photos.byId[id]?.category !== c.key) state.selection[c.key].delete(id);
    }
    if (sum(c.key) > points(c.key) - (PICKS - state.selection[c.key].size)) {
      for (const id of state.selection[c.key].keys()) state.selection[c.key].set(id, 1);
    }
  }

  $('.tabs', $('#voteBallot')).innerHTML = CATEGORIES.map((c) => `
    <button role="tab" type="button" id="vtab-${c.key}" aria-controls="vpanel-${c.key}" data-cat="${c.key}">
      <span><span class="tab-icon" aria-hidden="true">${c.icon} </span>${esc(c.label)}</span>
      <span class="tab-count" data-count="${c.key}"></span>
    </button>`).join('');

  $('#votePanels').innerHTML = CATEGORIES.map((c) => {
    const max = maxPerPhoto(c.key);
    const cards = state.photos[c.key].map((p) => `
      <div class="pick-card" data-card="${p.id}">
        <label class="pick">
          <input type="checkbox" name="${c.key}" value="${p.id}">
          <span class="pick-media">
            <img src="${p.thumb}" alt="" loading="lazy" decoding="async" width="480" height="360">
            <span class="pick-num" aria-hidden="true">${p.number}</span>
            <span class="pick-check" aria-hidden="true"></span>
          </span>
          <span class="pick-caption">${p.title?.trim() ? esc(p.title) : ''}</span>
          <span class="sr-only">Bild ${p.number}</span>
        </label>
        <div class="pts" role="group" aria-label="Stimmen für Bild ${p.number}">
          ${Array.from({ length: max }, (_, i) => i + 1).map((n) => `
            <button type="button" data-pts="${n}" aria-label="${stimmen(n)}">${n}</button>`).join('')}
        </div>
        <button type="button" class="pick-zoom" data-zoom="${p.id}" aria-label="Bild ${p.number} groß ansehen">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.5 3a7.5 7.5 0 0 1 5.9 12.1l4.3 4.3-1.4 1.4-4.3-4.3A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/></svg>
        </button>
      </div>`).join('');
    return `
      <div role="tabpanel" id="vpanel-${c.key}" aria-labelledby="vtab-${c.key}" data-panel="${c.key}">
        <fieldset class="pick-grid">
          <legend class="sr-only">${esc(c.label)}: wähle ${PICKS} Bilder und verteile ${stimmen(points(c.key))}</legend>
          ${cards || '<p class="muted">Keine Bilder in dieser Kategorie.</p>'}
        </fieldset>
      </div>`;
  }).join('');

  refreshSelectionUi();
}

function setupStaticUi() {
  const ballot = $('#voteBallot');

  ballot.addEventListener('click', (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (tab) { setTab(tab.dataset.cat, true); return; }
    const zoom = event.target.closest('[data-zoom]');
    if (zoom) { openLightbox(zoom.dataset.zoom); return; }
    const ptsBtn = event.target.closest('[data-pts]');
    if (ptsBtn && !ptsBtn.disabled) {
      const id = ptsBtn.closest('[data-card]').dataset.card;
      setPoints(state.photos.byId[id].category, id, Number(ptsBtn.dataset.pts));
    }
  });

  ballot.addEventListener('keydown', (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (!tab || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    const idx = CATEGORIES.findIndex((c) => c.key === tab.dataset.cat);
    const next = CATEGORIES[(idx + (event.key === 'ArrowRight' ? 1 : CATEGORIES.length - 1)) % CATEGORIES.length];
    setTab(next.key, false);
    $(`#vtab-${next.key}`).focus();
  });

  ballot.addEventListener('change', (event) => {
    const input = event.target;
    if (input.type !== 'checkbox') return;
    togglePick(input.name, input.value, input.checked);
  });

  $('#voteNext').addEventListener('click', onNext);
  setupLightbox();
}

function setTab(key, scroll) {
  state.activeTab = key;
  refreshSelectionUi();
  if (scroll) $('#voteBallot').scrollIntoView({ block: 'start', behavior: 'smooth' });
}

function togglePick(cat, id, wanted) {
  const sel = state.selection[cat];
  if (wanted && !sel.has(id)) {
    if (sel.size >= PICKS) {
      toast(`Du hast schon ${PICKS} Bilder gewählt. Tippe ein gewähltes Bild an, um es abzuwählen.`);
    } else {
      sel.set(id, 1);
    }
  } else if (!wanted) {
    sel.delete(id);
  }
  refreshSelectionUi();
}

/** Wie viele Stimmen die anderen gewählten Bilder abgeben könnten (jedes behält mind. 1). */
function spareFromOthers(cat, id) {
  return [...state.selection[cat]].filter(([k]) => k !== id).reduce((a, [, v]) => a + (v - 1), 0);
}
/** Erreichbar, wenn nötig indem andere Bilder Stimmen abgeben. */
const reachable = (cat, id, n) => n <= maxFor(cat, id) + spareFromOthers(cat, id);

function setPoints(cat, id, n) {
  const sel = state.selection[cat];
  if (!sel.has(id) || !reachable(cat, id, n)) return;
  // Fehlende Stimmen bei den anderen Bildern abziehen (zuerst beim Bild mit den meisten)
  let deficit = n - maxFor(cat, id);
  while (deficit > 0) {
    const [donor] = [...sel].filter(([k, v]) => k !== id && v > 1).sort((a, b) => b[1] - a[1])[0];
    sel.set(donor, sel.get(donor) - 1);
    deficit -= 1;
  }
  sel.set(id, n);
  refreshSelectionUi();
}

function budgetText(cat) {
  const sel = state.selection[cat];
  const left = points(cat) - sum(cat);
  if (sel.size === 0) return `Wähle ${PICKS} Bilder und verteile ${stimmen(points(cat))}`;
  if (sel.size < PICKS) return `Noch ${plural(PICKS - sel.size, 'Bild', 'Bilder')} wählen`;
  if (left > 0) return `Noch ${stimmen(left)} verteilen – tippe unter einem Bild auf eine höhere Zahl`;  return '✓ Alle Stimmen verteilt';
}

function refreshSelectionUi() {
  for (const c of CATEGORIES) {
    const sel = state.selection[c.key];
    const active = state.activeTab === c.key;
    const tab = $(`#vtab-${c.key}`);
    if (!tab) continue;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    const count = $(`[data-count="${c.key}"]`);
    count.textContent = `${sum(c.key)}/${points(c.key)}`;
    count.classList.toggle('complete', complete(c.key));
    $(`#vpanel-${c.key}`).hidden = !active;

    $$(`input[name="${c.key}"]`).forEach((input) => {
      const card = input.closest('.pick-card');
      const pts = sel.get(input.value) || 0;
      input.checked = pts > 0;
      card.classList.toggle('is-picked', pts > 0);
      card.classList.toggle('is-full', !pts && sel.size >= PICKS);
      $('.pick-check', card).textContent = pts ? String(pts) : '';
      if (pts) {
        $$('[data-pts]', card).forEach((btn) => {
          const n = Number(btn.dataset.pts);
          btn.setAttribute('aria-pressed', String(n === pts));
          btn.disabled = !reachable(c.key, input.value, n);
        });
      }
    });
  }

  const cur = state.activeTab;
  $('#voteBudget').textContent = budgetText(cur);
  $('#voteBudget').classList.toggle('complete', complete(cur));
  $('#voteStatus').textContent = CATEGORIES
    .map((c) => `${c.label} ${sum(c.key)}/${points(c.key)}`).join(' · ') + ' Stimmen';

  const btn = $('#voteNext');
  if (state.sending) return;
  const other = CATEGORIES.find((c) => c.key !== cur && !complete(c.key));
  const sel = state.selection[cur];
  if (sel.size < PICKS) {
    btn.disabled = true;
    btn.textContent = `Noch ${plural(PICKS - sel.size, 'Bild', 'Bilder')} wählen`;
  } else if (!complete(cur)) {
    btn.disabled = true;
    btn.textContent = `Noch ${stimmen(points(cur) - sum(cur))} verteilen`;
  } else if (other) {
    btn.disabled = false;
    btn.textContent = `Weiter zu ${other.label} →`;
    btn.dataset.next = other.key;
  } else {
    btn.disabled = false;
    btn.textContent = 'Auswahl prüfen';
    btn.dataset.next = '';
  }
}

function onNext() {
  const target = $('#voteNext').dataset.next;
  if (target) { setTab(target, true); return; }
  openConfirm();
}

/* ---------- Bestätigen & absenden ---------- */

async function openConfirm() {
  const bodyHtml = CATEGORIES.map((c) => `
    <h3>${c.icon} ${esc(c.label)}</h3>
    <ul class="confirm-list">${[...state.selection[c.key]].sort((a, b) => b[1] - a[1]).map(([id, pts]) => {
      const p = state.photos.byId[id];
      return `<li><span class="mini-img"><img src="${p.thumb}" alt=""><span class="pts-badge">${pts}</span></span>
        <span>${esc(p.title?.trim() ? `${p.number} · ${p.title}` : `Bild ${p.number}`)}</span></li>`;
    }).join('')}</ul>`).join('')
    + `<p class="muted small">${state.kiosk ? 'Danach ist die nächste Person dran.' : 'Danach kannst du nichts mehr ändern.'}</p>`;
  const ok = await confirmDialog({
    title: 'Deine Auswahl', bodyHtml, ok: 'Jetzt abstimmen', cancel: 'Ändern',
  });
  if (ok) submit();
}

async function submit() {
  if (state.sending) return;
  if (!CATEGORIES.every((c) => complete(c.key))) return;
  state.sending = true;
  const btn = $('#voteNext');
  btn.disabled = true;
  btn.textContent = 'Wird gesendet …';

  const { round } = state.config;
  const id = state.kiosk ? `${round}_k_${randomId(20)}` : ballotId(round, state.uid);
  const ballot = {
    round,
    uid: state.uid,
    kiosk: state.kiosk,
    createdAt: serverTimestamp(),
    ...Object.fromEntries(CATEGORIES.map((c) => [c.key, Object.fromEntries(state.selection[c.key])])),
  };

  try {
    await withTimeout(setDoc(doc(db, 'ballots', id), ballot), 20000, 'timeout');
    onSubmitted(ballot);
  } catch (err) {
    console.warn('Abstimmen fehlgeschlagen:', err);
    if (err.message === 'timeout') {
      toast('Die Verbindung ist gerade langsam. Bitte noch einmal auf „Auswahl prüfen“ tippen.', 'error');
    } else if (!state.kiosk && await alreadyVoted(round)) {
      onSubmitted(state.myBallot, true);
    } else if (!state.config.open) {
      toast('Die Abstimmung ist inzwischen geschlossen.', 'error');
    } else {
      toast('Abstimmen hat nicht geklappt. Bitte noch einmal versuchen.', 'error');
    }
  } finally {
    state.sending = false;
    refreshSelectionUi();
  }
}

async function alreadyVoted(round) {
  try {
    const snap = await getDoc(doc(db, 'ballots', ballotId(round, state.uid)));
    if (snap.exists()) { state.myBallot = snap.data(); return true; }
  } catch { /* ignorieren */ }
  return false;
}

function onSubmitted(ballot, wasAlready = false) {
  for (const c of CATEGORIES) state.selection[c.key].clear();
  state.activeTab = CATEGORIES[0].key;
  refreshSelectionUi();
  window.scrollTo({ top: 0 });

  if (state.kiosk) {
    startKioskPause();
    return;
  }
  const plain = Object.fromEntries(CATEGORIES.map((c) => [c.key, ballot[c.key]]));
  try { localStorage.setItem(localKey(state.config.round), JSON.stringify(plain)); } catch { /* privat */ }
  state.myBallot = plain;
  showState('done');
  if (wasAlready) toast('Von diesem Gerät wurde bereits abgestimmt.');
}

function readLocal(round) {
  try {
    const raw = localStorage.getItem(localKey(round));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function startKioskPause() {
  const overlay = $('#cooldown');
  const timer = $('#cooldownTimer');
  let left = KIOSK_PAUSE_SECONDS;
  timer.textContent = left;
  overlay.hidden = false;
  const tick = setInterval(() => {
    left -= 1;
    timer.textContent = left;
    if (left <= 0) {
      clearInterval(tick);
      overlay.hidden = true;
    }
  }, 1000);
}

/* ---------- Großansicht ---------- */

let lightboxPhoto = null;

function setupLightbox() {
  const dialog = $('#lightbox');
  $('#lightboxClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  $('#lightboxPrev').addEventListener('click', () => stepLightbox(-1));
  $('#lightboxNext').addEventListener('click', () => stepLightbox(1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') stepLightbox(-1);
    if (event.key === 'ArrowRight') stepLightbox(1);
  });
  $('#lightboxPick').addEventListener('click', () => {
    const p = lightboxPhoto;
    togglePick(p.category, p.id, !state.selection[p.category].has(p.id));
    renderLightboxPick();
  });

  // Wischen links/rechts
  let startX = null;
  const img = $('#lightboxImg');
  img.addEventListener('touchstart', (e) => { startX = e.touches.length === 1 ? e.touches[0].clientX : null; }, { passive: true });
  img.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 60) stepLightbox(dx < 0 ? 1 : -1);
    startX = null;
  });
}

async function openLightbox(id) {
  lightboxPhoto = state.photos.byId[id];
  await showLightboxPhoto();
  const dialog = $('#lightbox');
  if (!dialog.open) dialog.showModal();
}

function stepLightbox(delta) {
  const list = state.photos[lightboxPhoto.category];
  const idx = list.findIndex((p) => p.id === lightboxPhoto.id);
  lightboxPhoto = list[(idx + delta + list.length) % list.length];
  showLightboxPhoto();
}

async function showLightboxPhoto() {
  const p = lightboxPhoto;
  const cat = CATEGORIES.find((c) => c.key === p.category);
  $('#lightboxTitle').textContent = `${cat.label} · Bild ${p.number}${p.title?.trim() ? ` – ${p.title}` : ''}`;
  const img = $('#lightboxImg');
  img.src = p.thumb;
  img.alt = `Bild ${p.number}`;
  renderLightboxPick();
  const full = await getFullImage(p);
  if (lightboxPhoto === p) img.src = full;
}

function renderLightboxPick() {
  const p = lightboxPhoto;
  const pts = state.selection[p.category].get(p.id);
  const btn = $('#lightboxPick');
  btn.textContent = pts ? `✓ Ausgewählt (${stimmen(pts)}) – abwählen` : 'Auswählen';
  btn.classList.toggle('is-picked', !!pts);
}
