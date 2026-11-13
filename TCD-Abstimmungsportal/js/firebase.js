// Firebase-Verbindung. Alle anderen Module importieren von hier.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js';
import {
  getAuth, signInAnonymously, onAuthStateChanged, connectAuthEmulator,
} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js';
import {
  getFirestore, connectFirestoreEmulator,
} from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js';

export * from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCdsFT0iYZ7cHtynGpOfislThM789pP2zo',
  authDomain: 'voting-portal-8bde4.firebaseapp.com',
  projectId: 'voting-portal-8bde4',
  storageBucket: 'voting-portal-8bde4.firebasestorage.app',
  messagingSenderId: '736424824403',
  appId: '1:736424824403:web:2baed488d9c0f240fe00a6',
};

// Auf localhost wird automatisch der lokale Firebase-Emulator benutzt (siehe SETUP.md),
// damit Tests nie echte Stimmen verändern. Mit ?live lokal gegen das echte Firebase testen.
const params = new URLSearchParams(location.search);
export const useEmulator =
  ['localhost', '127.0.0.1'].includes(location.hostname) && !params.has('live');

const app = initializeApp(useEmulator ? { ...firebaseConfig, projectId: 'demo-tcd' } : firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

if (useEmulator) {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
}

/** Meldet das Gerät anonym an (einmal pro Browser) und liefert die UID. */
export function ensureSignedIn() {
  return new Promise((resolve, reject) => {
    const stop = onAuthStateChanged(auth, async (user) => {
      stop();
      if (user) return resolve(user);
      try {
        const cred = await signInAnonymously(auth);
        resolve(cred.user);
      } catch (err) {
        reject(err);
      }
    });
  });
}
