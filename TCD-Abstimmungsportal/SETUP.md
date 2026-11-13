# Abstimmungsportal – Setup

## What changed

- **One vote per phone.** Each phone gets an anonymous Firebase sign-in, and the database stores one ballot per phone per round. The database rules refuse a second ballot from the same phone, even after a reload, clearing the cache or tapping twice. Votes can't be changed or deleted afterwards.
- **Admin password.** `?admin`, `?multi` and `?presentation` now ask for a password once per device. The database checks the password itself, so nobody can reset or change votes with a script.
- **Photos are managed in the admin page.** Under **Bilder** you can upload, name, sort, move between categories and delete photos. Photographer names are only visible to admins, so the vote stays anonymous.
- **Open/close voting.** In the admin page, **Abstimmung schließen / öffnen**. Guests' screens update live.
- **Reset** starts a new round. Old ballots stay in the database but no longer count.
- **New design.** Two-column photo grid on phones, category tabs, a large photo view with swipe, a review step before voting, dark mode, keyboard and screen-reader support.
- **Voting.** In each category everyone picks exactly 3 photos and spreads 6 votes over them; each photo gets 1–3 votes (3-2-1 or 2-2-2). The 6 can be changed under Einstellungen (3–9). The database rejects any other split.
- **Ranking.** Most votes wins. On equal votes, the photo chosen by more people wins. If that's equal too, the photo that more people gave their highest vote wins. Only if all three are equal do photos share a place.
- **Presentation.** Starts with a slideshow of all photos, plus a bottom bar with the QR code, the live ballot count and "Abstimmung beenden". Then for each category it reveals 3rd, 2nd and 1st place, then shows a podium.

Remaining limitation: someone who opens the page in a private tab or a second browser counts as a new phone. Without printed codes or logins, no website can prevent that. The rules only make it as inconvenient as possible.

## Setup in the Firebase console (once)

1. **Turn on anonymous sign-in.** In console.firebase.google.com, open project `voting-portal-8bde4`. Go to **Authentication**, choose **Get started** if shown, then **Sign-in method → Anonymous → Enable**. It is currently off; the page can't load without it.
2. **Publish the new rules.** Go to **Firestore Database → Rules**, replace everything with the content of `firestore.rules` and click **Publish**. From then on the old site version stops working, so upload the new files right away.
3. **Upload the new files** to GitHub Pages:
   - `index.html`, `styles.css`, the `js/` folder
   - `images/` only if you want to import the placeholders
   - Do **not** upload `firebase.json`, `.claude/` or `_backup_2025/`. They aren't needed online.
4. **Set the admin password.** Open `…/index.html?admin` right after publishing and set the password. The first person who opens `?admin` sets it.
5. **Add the photos.** Under **Bilder**, upload them, or click "40 Platzhalter-Bilder importieren" for a test run. Fill in titles (optional) and photographers.
6. Under **Einstellungen**, check the title and the number of votes per category. The guest link and its QR code are there too.

Optional: in Firestore you can delete the old `votes` collection from last year. The new site no longer uses it, and the rules block it.

## On the event day

- **Before the event:** vote with two phones as a test, then click **Zurücksetzen** in the admin page to remove the test votes.
- **Projector laptop:** open `?presentation` and log in once. The first slide shows the QR code and a live count. **→ / space / click** goes forward, **←** goes back, **F** toggles fullscreen. "Abstimmung beenden" closes voting directly from the projector.
- **Shared device for members without a phone:** open `?multi` and log in once. After each vote there is a 15-second pause, then the next person can vote.
- **Limits:** Firebase allows about 100 new anonymous sign-ins per hour from one internet connection. That is fine for 40 members on the same Wi-Fi.

## Testing locally (optional)

On `localhost` the page automatically uses a local test database, never the real one. Add `?live` to the URL to test locally against the real Firebase.

```bash
npx firebase-tools emulators:start --only auth,firestore --project demo-tcd
```

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173/?admin.

## Files

| File | Purpose |
|---|---|
| `index.html` | All screens (guests, admin, presentation) |
| `styles.css` | Design (light/dark, presentation) |
| `js/main.js` | Picks the mode from the URL |
| `js/vote.js` | Voting for guests and multi mode |
| `js/admin.js` | Results, photos, settings |
| `js/present.js` | Presentation |
| `js/adminAuth.js` | Admin password |
| `js/data.js` | Data model and vote counting |
| `firestore.rules` | Database rules (paste into the Firebase console) |
| `_backup_2025/` | Last year's version |

`index copy.html`, `index copy 2.html`, `index_old.html` and `xx.js` are old and no longer used. They can be deleted.
