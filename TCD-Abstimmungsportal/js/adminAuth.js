// Admin-Passwort.
//
// Das Passwort wird nie im Klartext gespeichert. Die Firestore-Regeln vergleichen den
// SHA-256-Wert, den dieses Gerät in admins/{uid} schreibt, mit secret/admin (das niemand
// lesen kann). Nur wenn beide gleich sind, darf das Gerät Admin-Dinge tun.
import {
  db, doc, getDoc, setDoc, deleteDoc, writeBatch,
} from './firebase.js';
import { $, showView, sha256 } from './util.js';
import { configRef, DEFAULT_CONFIG } from './data.js';

const SALT = 'tcd-abstimmungsportal:';
export const hashPassword = (pw) => sha256(SALT + pw);

/** Prüft, ob dieses Gerät gerade Admin-Rechte hat (liest ein Dokument, das nur Admins lesen dürfen). */
export async function isAdmin() {
  try {
    await getDoc(doc(db, 'authors', '_probe'));
    return true;
  } catch {
    return false;
  }
}

/** Zeigt bei Bedarf die Anmeldung und kehrt erst zurück, wenn das Gerät Admin ist. */
export async function requireAdmin(user) {
  if (await isAdmin()) return;

  const configExists = await getDoc(configRef()).then((s) => s.exists()).catch(() => true);
  let setupMode = !configExists;

  const form = $('#loginForm');
  const pw = $('#loginPassword');
  const repeat = $('#loginRepeat');
  const error = $('#loginError');
  const submit = $('#loginSubmit');

  const render = () => {
    $('#loginTitle').textContent = setupMode ? 'Ersteinrichtung' : 'Admin-Bereich';
    $('#loginHint').textContent = setupMode
      ? 'Lege ein Admin-Passwort fest (mind. 6 Zeichen). Damit öffnest du Admin, Präsentation und Mehrfach-Modus.'
      : 'Bitte das Admin-Passwort eingeben. Auf diesem Gerät bleibst du danach angemeldet.';
    $('#loginRepeatField').hidden = !setupMode;
    repeat.required = setupMode;
    pw.autocomplete = setupMode ? 'new-password' : 'current-password';
    submit.textContent = setupMode ? 'Passwort festlegen' : 'Anmelden';
  };
  render();
  showView('login');
  pw.focus();

  await new Promise((resolve) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      error.textContent = '';
      if (setupMode && pw.value !== repeat.value) {
        error.textContent = 'Die Passwörter stimmen nicht überein.';
        return;
      }
      submit.disabled = true;
      try {
        const key = await hashPassword(pw.value);
        if (setupMode) {
          try {
            const batch = writeBatch(db);
            batch.set(doc(db, 'secret', 'admin'), { key });
            batch.set(doc(db, 'admins', user.uid), { key });
            await batch.commit();
          } catch (err) {
            console.warn('Ersteinrichtung fehlgeschlagen:', err);
            // Passwort existiert schon (z. B. halbe Einrichtung) → normal anmelden
            setupMode = false;
            render();
            error.textContent = 'Es gibt bereits ein Admin-Passwort. Bitte damit anmelden.';
            return;
          }
          await setDoc(configRef(), DEFAULT_CONFIG);
        } else {
          try {
            await setDoc(doc(db, 'admins', user.uid), { key });
          } catch (err) {
            console.warn('Anmeldung fehlgeschlagen:', err);
            error.textContent = 'Falsches Passwort.';
            pw.select();
            return;
          }
          if (!(await getDoc(configRef())).exists()) await setDoc(configRef(), DEFAULT_CONFIG);
        }
        resolve();
      } catch (err) {
        console.error(err);
        error.textContent = 'Fehler: ' + (err.message || err);
      } finally {
        submit.disabled = false;
      }
    });
  });
  pw.value = '';
  repeat.value = '';
}

export async function changePassword(user, newPassword) {
  const key = await hashPassword(newPassword);
  const batch = writeBatch(db);
  batch.set(doc(db, 'secret', 'admin'), { key });
  batch.set(doc(db, 'admins', user.uid), { key });
  await batch.commit();
}

export async function logout(user) {
  await deleteDoc(doc(db, 'admins', user.uid));
}
