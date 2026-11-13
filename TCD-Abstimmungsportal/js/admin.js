// Admin: Ergebnisse, Bilder verwalten, Einstellungen.
import {
  db, doc, collection, onSnapshot, updateDoc, setDoc, writeBatch,
} from './firebase.js';
import {
  $, $$, esc, showView, toast, plural, confirmDialog, modeUrl,
} from './util.js';
import {
  CATEGORIES, PICKS, watchConfig, watchPhotos, watchBallots, tally, saveConfig,
} from './data.js';
import { changePassword, logout } from './adminAuth.js';
import { prepareImage } from './images.js';
import { PLACEHOLDERS } from './placeholders.js';
import { qrSvg } from './qr.js';

const s = {
  user: null, config: null, photos: null, ballots: [], authors: {}, stopBallots: null, round: null,
};

export function startAdmin(user) {
  s.user = user;
  showView('admin');
  setupTabs();
  setupResults();
  setupPhotos();
  setupSettings();

  $('#linkPresent').href = modeUrl('presentation');
  $('#linkKiosk').href = modeUrl('multi');
  $('#linkGuest').href = modeUrl('');

  watchConfig((config) => {
    s.config = config;
    if (config && config.round !== s.round) {
      s.round = config.round;
      s.stopBallots?.();
      s.stopBallots = watchBallots(config.round, (ballots) => { s.ballots = ballots; renderResults(); }, onError);
    }
    renderStatus();
    renderSettings();
    renderResults();
    renderPhotoList();
  }, onError);
  watchPhotos((photos) => { s.photos = photos; renderResults(); renderPhotoList(); }, onError);
  onSnapshot(collection(db, 'authors'), (snap) => {
    s.authors = Object.fromEntries(snap.docs.map((d) => [d.id, d.data().name || '']));
    renderResults();
    renderPhotoList();
  }, onError);
}

function onError(err) {
  console.error(err);
  toast('Fehler beim Laden: ' + (err.code || err.message), 'error');
}

/* ---------- Tabs ---------- */

function setupTabs() {
  const tabs = $$('.admin-tabs [role="tab"]');
  const select = (tab) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      $(`#${t.getAttribute('aria-controls')}`).hidden = !on;
    });
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (e) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
      const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      select(next);
      next.focus();
    });
  });
}

/* ---------- Ergebnisse ---------- */

function setupResults() {
  $('#toggleOpen').addEventListener('click', async () => {
    try {
      await saveConfig(s.config, { open: !s.config.open });
    } catch (err) { onError(err); }
  });

  $('#newRound').addEventListener('click', async () => {
    const ok = await confirmDialog({
      title: 'Alle Stimmen zurücksetzen?',
      bodyHtml: `<p>Es startet eine neue Runde mit 0 Stimmen. Jedes Handy kann danach wieder einmal abstimmen.</p>
        <p class="muted small">Die ${esc(plural(s.ballots.length, 'bisherige Stimmzettel', 'bisherigen Stimmzettel'))} zählen dann nicht mehr.</p>`,
      ok: 'Zurücksetzen',
      danger: true,
    });
    if (!ok) return;
    try {
      await saveConfig(s.config, { round: s.config.round + 1 });
      toast('Neue Runde gestartet.', 'ok');
    } catch (err) { onError(err); }
  });

  $('#exportCsv').addEventListener('click', exportCsv);
}

function renderStatus() {
  if (!s.config) return;
  $('#adminTitle').textContent = s.config.title;
  document.title = `Admin – ${s.config.title}`;
  $('#openText').textContent = s.config.open ? 'Abstimmung offen' : 'Abstimmung geschlossen';
  $('#openDot').classList.toggle('on', s.config.open);
  $('#toggleOpen').textContent = s.config.open ? 'Abstimmung schließen' : 'Abstimmung öffnen';
  $('#roundText').textContent = `Runde ${s.config.round}`;
}

function renderResults() {
  if (!s.config || !s.photos) return;
  const r = tally(s.ballots, s.photos);
  $('#ballotCount').textContent = plural(r.ballots, 'Stimmzettel', 'Stimmzettel') + ' abgegeben';
  $('#resultsLists').innerHTML = CATEGORIES.map((c) => {
    const list = r[c.key];
    const max = Math.max(1, ...list.map((p) => p.votes));
    return `
      <section class="result-card">
        <h2>${c.icon} ${esc(c.label)}</h2>
        <ol class="result-list">
          ${list.map((p) => `
            <li class="${p.place <= 3 && p.votes > 0 ? `top top-${p.place}` : ''}">
              <span class="result-place">${p.place}.</span>
              <img src="${p.thumb}" alt="" loading="lazy">
              <span class="result-name">
                <strong>${esc(p.label)}</strong>
                <small>${esc(s.authors[p.id] || '–')} · ${plural(p.voters, 'Person', 'Personen')}</small>
              </span>
              <span class="result-bar"><span style="width:${(p.votes / max) * 100}%"></span></span>
              <span class="result-votes">${p.votes}</span>
            </li>`).join('') || '<li class="muted">Keine Bilder.</li>'}
        </ol>
      </section>`;
  }).join('');
}

function exportCsv() {
  if (!s.photos) return;
  const r = tally(s.ballots, s.photos);
  const rows = [['Kategorie', 'Platz', 'Nr', 'Titel', 'Fotograf:in', 'Stimmen', 'Personen', 'Höchste Stimme']];
  for (const c of CATEGORIES) {
    for (const p of r[c.key]) rows.push([c.label, p.place, p.number, p.title || '', s.authors[p.id] || '', p.votes, p.voters, p.tops]);
  }
  const csv = '﻿' + rows.map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(';')).join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = `ergebnisse-runde-${s.config.round}.csv`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ---------- Bilder ---------- */

function setupPhotos() {
  $('#uploadCategory').innerHTML = CATEGORIES.map((c) => `<option value="${c.key}">${esc(c.label)}</option>`).join('');

  $('#uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const files = [...$('#uploadFiles').files];
    if (!files.length) return;
    const category = $('#uploadCategory').value;
    await addPhotos(files.map((file) => ({ category, source: file, author: '' })));
    $('#uploadFiles').value = '';
  });

  $('#importPlaceholders').addEventListener('click', async () => {
    const items = PLACEHOLDERS.map((p) => ({
      category: p.category,
      author: p.author,
      source: () => fetch(p.url).then((res) => { if (!res.ok) throw new Error(p.url); return res.blob(); }),
    }));
    await addPhotos(items);
  });

  const lists = $('#photoLists');
  lists.addEventListener('change', async (e) => {
    const row = e.target.closest('[data-photo]');
    if (!row) return;
    const id = row.dataset.photo;
    try {
      if (e.target.name === 'title') {
        await updateDoc(doc(db, 'photos', id), { title: e.target.value.trim().slice(0, 80) });
      } else if (e.target.name === 'author') {
        await setDoc(doc(db, 'authors', id), { name: e.target.value.trim().slice(0, 80) });
      } else if (e.target.name === 'category') {
        await updateDoc(doc(db, 'photos', id), { category: e.target.value, order: Date.now() });
      }
      flashSaved(row);
    } catch (err) { onError(err); }
  });

  lists.addEventListener('click', async (e) => {
    const btn = e.target.closest('button[data-act]');
    if (!btn) return;
    const id = btn.closest('[data-photo]').dataset.photo;
    if (btn.dataset.act === 'up') move(id, -1);
    if (btn.dataset.act === 'down') move(id, 1);
    if (btn.dataset.act === 'delete') removePhoto(id);
  });
}

async function addPhotos(items) {
  const progress = $('#uploadProgress');
  const submit = $('#uploadSubmit');
  submit.disabled = true;
  $('#importPlaceholders').disabled = true;
  let done = 0;
  let failed = 0;
  let order = Math.max(0, ...(s.photos?.all || []).map((p) => p.order || 0)) + 1;
  for (const item of items) {
    progress.textContent = `Bild ${done + failed + 1} von ${items.length} wird verarbeitet …`;
    try {
      const source = typeof item.source === 'function' ? await item.source() : item.source;
      const { thumb, full } = await prepareImage(source);
      const ref = doc(collection(db, 'photos'));
      const batch = writeBatch(db);
      batch.set(ref, { title: '', category: item.category, order: order++, thumb });
      batch.set(doc(db, 'photoFull', ref.id), { data: full });
      batch.set(doc(db, 'authors', ref.id), { name: item.author || '' });
      await batch.commit();
      done += 1;
    } catch (err) {
      console.error(err);
      failed += 1;
    }
  }
  progress.textContent = `${plural(done, 'Bild', 'Bilder')} hochgeladen${failed ? `, ${failed} fehlgeschlagen` : ''}.`;
  toast(progress.textContent, failed ? 'error' : 'ok');
  submit.disabled = false;
  $('#importPlaceholders').disabled = false;
}

async function move(id, delta) {
  const p = s.photos.byId[id];
  const list = [...s.photos[p.category]];
  const idx = list.findIndex((x) => x.id === id);
  const target = idx + delta;
  if (target < 0 || target >= list.length) return;
  [list[idx], list[target]] = [list[target], list[idx]];
  const base = Math.min(...list.map((x) => x.order || 0));
  const batch = writeBatch(db);
  list.forEach((x, i) => { if (x.order !== base + i) batch.update(doc(db, 'photos', x.id), { order: base + i }); });
  try { await batch.commit(); } catch (err) { onError(err); }
}

async function removePhoto(id) {
  const p = s.photos.byId[id];
  const ok = await confirmDialog({
    title: 'Bild löschen?',
    bodyHtml: `<p><img class="confirm-thumb" src="${p.thumb}" alt=""></p><p>${esc(p.label)} wird gelöscht. Bereits abgegebene Stimmen dafür zählen dann nicht mehr.</p>`,
    ok: 'Löschen',
    danger: true,
  });
  if (!ok) return;
  const batch = writeBatch(db);
  ['photos', 'photoFull', 'authors'].forEach((col) => batch.delete(doc(db, col, id)));
  try { await batch.commit(); toast('Bild gelöscht.', 'ok'); } catch (err) { onError(err); }
}

let photoListSignature = '';
function renderPhotoList() {
  if (!s.photos || !s.config) return;
  $('#placeholderBox').hidden = s.photos.all.length > 0;
  const signature = s.photos.all.map((p) => `${p.id}:${p.category}:${p.order}:${p.thumb?.length}`).join('|');
  const lists = $('#photoLists');

  if (signature !== photoListSignature) {
    photoListSignature = signature;
    lists.innerHTML = CATEGORIES.map((c) => {
      const items = s.photos[c.key];
      const warn = items.length < PICKS
        ? `<p class="form-error">Mindestens ${PICKS} Bilder nötig, sonst kann in dieser Kategorie niemand abstimmen.</p>` : '';
      return `
        <section class="photo-section">
          <h2>${c.icon} ${esc(c.label)} <span class="muted">(${items.length})</span></h2>
          ${warn}
          <ol class="photo-list">
            ${items.map((p, i) => `
              <li class="photo-row" data-photo="${p.id}">
                <img src="${p.thumb}" alt="">
                <span class="photo-num">${p.number}</span>
                <label class="field compact"><span>Titel (optional)</span>
                  <input name="title" type="text" maxlength="80" placeholder="${esc(`${c.label} ${p.number}`)}"></label>
                <label class="field compact"><span>Fotograf:in</span>
                  <input name="author" type="text" maxlength="80" autocomplete="off"></label>
                <label class="field compact"><span>Kategorie</span>
                  <select name="category">${CATEGORIES.map((o) => `<option value="${o.key}"${o.key === c.key ? ' selected' : ''}>${esc(o.label)}</option>`).join('')}</select></label>
                <span class="photo-actions">
                  <button type="button" class="icon-btn" data-act="up" aria-label="Bild ${p.number} nach oben" ${i === 0 ? 'disabled' : ''}>↑</button>
                  <button type="button" class="icon-btn" data-act="down" aria-label="Bild ${p.number} nach unten" ${i === items.length - 1 ? 'disabled' : ''}>↓</button>
                  <button type="button" class="icon-btn danger" data-act="delete" aria-label="Bild ${p.number} löschen">🗑</button>
                </span>
              </li>`).join('')}
          </ol>
        </section>`;
    }).join('');
  }

  // Werte nachtragen, ohne gerade bearbeitete Felder zu überschreiben
  $$('[data-photo]', lists).forEach((row) => {
    const p = s.photos.byId[row.dataset.photo];
    const title = $('input[name="title"]', row);
    const author = $('input[name="author"]', row);
    if (p && document.activeElement !== title) title.value = p.title || '';
    if (document.activeElement !== author) author.value = s.authors[row.dataset.photo] || '';
  });
}

function flashSaved(row) {
  row.classList.add('saved');
  setTimeout(() => row.classList.remove('saved'), 900);
}

/* ---------- Einstellungen ---------- */

function setupSettings() {
  $('#settingsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const clamp = (v) => Math.max(3, Math.min(9, parseInt(v, 10) || 6));
    try {
      await saveConfig(s.config, {
        title: $('#setTitle').value.trim().slice(0, 80) || 'Fotowettbewerb',
        pointsSuess: clamp($('#setPointsSuess').value),
        pointsSalz: clamp($('#setPointsSalz').value),
      });
      toast('Gespeichert.', 'ok');
    } catch (err) { onError(err); }
  });

  $('#passwordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      await changePassword(s.user, $('#newPassword').value);
      $('#newPassword').value = '';
      toast('Passwort geändert.', 'ok');
    } catch (err) { onError(err); }
  });

  $('#logout').addEventListener('click', async () => {
    await logout(s.user).catch(onError);
    location.href = modeUrl('');
  });

  const url = modeUrl('');
  $('#guestUrl').href = url;
  $('#guestUrl').textContent = url;
  $('#guestQr').innerHTML = qrSvg(url);
}

function renderSettings() {
  if (!s.config) return;
  const set = (id, v) => { if (document.activeElement !== $(id)) $(id).value = v; };
  set('#setTitle', s.config.title);
  set('#setPointsSuess', s.config.pointsSuess);
  set('#setPointsSalz', s.config.pointsSalz);
}
