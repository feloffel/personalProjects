// Kleine Helfer, die alle Ansichten brauchen.

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/** Text für innerHTML entschärfen. */
export function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c]);
}

/** Zeigt die gewünschte Ansicht (<section data-view="...">) und versteckt alle anderen. */
export function showView(name) {
  $$('[data-view]').forEach((el) => { el.hidden = el.dataset.view !== name; });
  document.body.dataset.mode = name;
}

/** Ganzseitiger Hinweis (Fehler, "noch nicht bereit" …). */
export function showMessage(title, text, icon = '⚠️') {
  $('#messageTitle').textContent = title;
  $('#messageText').textContent = text;
  $('#messageIcon').textContent = icon;
  showView('message');
}

let toastTimer;
/** Kurze Statusmeldung unten am Bildschirm. kind: 'ok' | 'error' | 'info' */
export function toast(message, kind = 'info') {
  let el = $('#toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    document.body.append(el);
  }
  el.textContent = message;
  el.dataset.kind = kind;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
}

/** SHA-256 als Hex-String (für das Admin-Passwort). */
export async function sha256(text) {
  const bytes = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function randomId(length = 16) {
  const alphabet = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return [...bytes].map((b) => alphabet[b % alphabet.length]).join('');
}

/** Promise mit Zeitlimit (für wackliges Event-WLAN). */
export function withTimeout(promise, ms, message = 'timeout') {
  let timer;
  return Promise.race([
    promise,
    new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(message)), ms); }),
  ]).finally(() => clearTimeout(timer));
}

/**
 * Bestätigungsdialog (#confirm). bodyHtml muss bereits entschärft sein.
 * Liefert true, wenn bestätigt wurde.
 */
export function confirmDialog({ title, bodyHtml, ok = 'OK', cancel = 'Abbrechen', danger = false }) {
  const dialog = $('#confirm');
  $('#confirmTitle').textContent = title;
  $('#confirmBody').innerHTML = bodyHtml;
  $('#confirmOk').textContent = ok;
  $('#confirmCancel').textContent = cancel;
  $('#confirmOk').classList.toggle('btn-danger', danger);
  $('#confirmOk').classList.toggle('btn-primary', !danger);
  dialog.returnValue = '';
  dialog.showModal();
  (danger ? $('#confirmCancel') : $('#confirmOk')).focus();
  return new Promise((resolve) => {
    dialog.addEventListener('close', () => resolve(dialog.returnValue === 'ok'), { once: true });
  });
}

/** URL eines Modus ('' = Gäste), behält ?live beim lokalen Testen. */
export function modeUrl(mode = '') {
  const url = new URL(location.href);
  const keep = url.searchParams.has('live');
  url.search = '';
  url.hash = '';
  if (mode) url.searchParams.set(mode, '');
  if (keep) url.searchParams.set('live', '');
  return url.toString().replace(/=(&|$)/g, '$1');
}

export const plural =(n, one, many) => `${n} ${n === 1 ? one : many}`;
