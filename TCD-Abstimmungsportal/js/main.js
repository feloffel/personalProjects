// Einstieg: wählt anhand der URL den Modus.
//   ./               → Abstimmung für Gäste
//   ?admin           → Admin (Passwort nötig)
//   ?multi           → Mehrfach-Modus für ein weitergereichtes Gerät (Passwort nötig)
//   ?presentation    → Präsentation für den Beamer (Passwort nötig)
import { ensureSignedIn } from './firebase.js';
import { $, showMessage } from './util.js';
import { requireAdmin } from './adminAuth.js';

const params = new URLSearchParams(location.search);

$('#messageRetry').addEventListener('click', () => location.reload());

async function start() {
  let user;
  try {
    user = await ensureSignedIn();
  } catch (err) {
    console.error(err);
    showMessage('Keine Verbindung', 'Die Abstimmung konnte nicht geladen werden. Bitte prüfe deine Internetverbindung und lade die Seite neu.');
    return;
  }

  if (params.has('admin') || params.has('multi') || params.has('presentation')) {
    await requireAdmin(user);
    if (params.has('admin')) {
      (await import('./admin.js')).startAdmin(user);
    } else if (params.has('multi')) {
      (await import('./vote.js')).startVote(user, { kiosk: true });
    } else {
      (await import('./present.js')).startPresentation(user);
    }
  } else {
    (await import('./vote.js')).startVote(user, { kiosk: false });
  }
}

start();
