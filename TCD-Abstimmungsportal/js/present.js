// Präsentation für den Beamer (16:9).
//   Start: Diashow aller Bilder, unten eine Leiste mit QR-Code, Stimmzettel-Zähler und "Abstimmung beenden".
//   Danach: Siegerehrung je Kategorie (Platz 3 → 1), Podest, Abschluss.
// Steuerung: → / Leertaste = weiter, ← = zurück, F = Vollbild.
import {
  db, collection, onSnapshot,
} from './firebase.js';
import {
  $, esc, showView, plural, modeUrl, toast,
} from './util.js';
import {
  CATEGORIES, PICKS, watchConfig, watchPhotos, watchBallots, tally, podium, getFullImage, saveConfig,
} from './data.js';
import { qrSvg } from './qr.js';

const SLIDE_SECONDS = 7;

const p = {
  config: null, photos: null, ballots: [], authors: {}, round: null, stopBallots: null,
  step: 0, frozen: null, show: { index: -1, timer: null, busy: false },
};

const MEDALS = { 1: '🥇', 2: '🥈', 3: '🥉' };
const stimmen = (n) => plural(n, 'Stimme', 'Stimmen');

export function startPresentation() {
  showView('present');
  document.documentElement.classList.add('present-mode');
  $('#presentExit').href = modeUrl('admin');

  watchConfig((config) => {
    p.config = config;
    if (config && config.round !== p.round) {
      p.round = config.round;
      p.stopBallots?.();
      p.stopBallots = watchBallots(config.round, (b) => { p.ballots = b; liveUpdate(); }, console.error);
    }
    liveUpdate();
  }, console.error);
  watchPhotos((photos) => { p.photos = photos; liveUpdate(); }, console.error);
  onSnapshot(collection(db, 'authors'), (snap) => {
    p.authors = Object.fromEntries(snap.docs.map((d) => [d.id, d.data().name || '']));
  }, console.error);

  setupControls();
}

/** Liste aller Folien, basierend auf dem eingefrorenen Ergebnis. */
function slides() {
  const list = [{ type: 'intro' }];
  const r = p.frozen;
  if (!r) return list;
  for (const c of CATEGORIES) {
    list.push({ type: 'category', cat: c });
    const groups = podium(r[c.key]);
    if (!groups.length) list.push({ type: 'empty', cat: c });
    groups.forEach((g) => list.push({ type: 'place', cat: c, group: g }));
    if (groups.length) list.push({ type: 'summary', cat: c, groups: [...groups].reverse() });
  }
  list.push({ type: 'end' });
  return list;
}

function liveUpdate() {
  if (!p.config || !p.photos) return;
  if (p.step !== 0) return;
  try {
    if ($('#presentStage [data-intro]')) updateIntro();
    else render();
  } catch (err) {
    console.error('Präsentation:', err);
  }
}

function go(delta) {
  if (!p.config || !p.photos) return;
  if (p.step === 0 && delta > 0) p.frozen = tally(p.ballots, p.photos); // Ergebnis für die Show festhalten
  const count = slides().length;
  const next = Math.max(0, Math.min(count - 1, p.step + delta));
  if (next === p.step) return;
  p.step = next;
  render();
}

function render() {
  const all = slides();
  const slide = all[p.step];
  const stage = $('#presentStage');
  stage.dataset.type = slide.type;
  stopSlideshow();
  stage.innerHTML = renderSlide(slide);
  stage.firstElementChild?.classList.add('enter');

  $('#presentProgress').innerHTML = p.step === 0 ? ''
    : all.map((_, i) => `<span class="${i === p.step ? 'on' : ''}"></span>`).join('');
  $('#presentPrev').disabled = p.step === 0;
  $('#presentNext').disabled = p.step > 0 && p.step === all.length - 1;

  if (slide.type === 'intro') {
    updateIntro();
    startSlideshow();
    return;
  }

  // große Bilder nachladen
  stage.querySelectorAll('img[data-full]').forEach(async (img) => {
    const photo = p.photos.byId[img.dataset.full];
    if (photo) img.src = await getFullImage(photo);
  });
}

/* ---------- Start: Diashow + Leiste ---------- */

function renderIntro() {
  const url = modeUrl('');
  return `
    <div class="slide slide-intro" data-intro>
      <div class="slideshow" id="show"></div>
      <div class="show-caption" id="showCaption"></div>
      <div class="show-qr">${qrSvg(url)}</div>
      <div class="show-bar">
        <div class="bar-text">
          <strong>Jetzt abstimmen!</strong>
          <span id="introHow"></span>
          <small>${esc(url.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</small>
        </div>
        <div class="bar-count" aria-live="polite"><strong id="introCount">0</strong><span id="introCountLabel">Stimmzettel</span></div>
        <div class="bar-action" id="introAction"></div>
      </div>
    </div>`;
}

function updateIntro() {
  const { config } = p;
  const r = tally(p.ballots, p.photos);
  $('#introCount').textContent = r.ballots;
  $('#introCountLabel').textContent = 'Stimmzettel abgegeben';
  const pts = CATEGORIES.map((c) => config[c.pointsField]);
  $('#introHow').textContent = pts[0] === pts[1]
    ? `QR-Code scannen · ${PICKS} Bilder, ${pts[0]} Stimmen pro Kategorie`
    : `QR-Code scannen · ${PICKS} Bilder pro Kategorie`;

  const action = $('#introAction');
  const want = config.open ? 'open' : 'closed';
  if (action.dataset.state === want) return;
  action.dataset.state = want;
  if (config.open) {
    action.innerHTML = '<button class="present-btn" id="closeVoting" type="button">Abstimmung beenden</button>';
    $('#closeVoting').addEventListener('click', async (e) => {
      e.stopPropagation();
      e.currentTarget.disabled = true;
      try {
        await saveConfig(p.config, { open: false });
        toast('Abstimmung geschlossen.', 'ok');
      } catch (err) { toast('Fehler: ' + err.message, 'error'); }
    });
  } else {
    action.innerHTML = '<p class="closed-note">Abstimmung beendet<br><span>weiter zur Siegerehrung mit →</span></p>';
  }
}

function slideshowList() {
  return CATEGORIES.flatMap((c) => p.photos[c.key]);
}

function startSlideshow() {
  stopSlideshow();
  p.show.index = -1;
  nextShowPhoto();
}

function stopSlideshow() {
  clearTimeout(p.show.timer);
  p.show.timer = null;
}

async function nextShowPhoto() {
  const list = slideshowList();
  const show = $('#show');
  if (!show || p.step !== 0) return;
  if (!list.length) {
    $('#showCaption').innerHTML = '';
    show.innerHTML = '<p class="show-empty">Noch keine Bilder hochgeladen.</p>';
    p.show.timer = setTimeout(nextShowPhoto, 3000);
    return;
  }
  p.show.index = (p.show.index + 1) % list.length;
  const photo = list[p.show.index];
  const src = await getFullImage(photo);
  try {
    const pre = new Image();
    pre.src = src;
    await pre.decode();
  } catch { /* trotzdem zeigen */ }
  if (!$('#show') || p.step !== 0) return;

  const layer = document.createElement('div');
  layer.className = 'show-layer';
  layer.innerHTML = `<img class="show-bg" src="${src}" alt=""><img class="show-img" src="${src}" alt="${esc(photo.label)}">`;
  show.append(layer);
  requestAnimationFrame(() => layer.classList.add('in'));
  [...show.children].slice(0, -1).forEach((old) => setTimeout(() => old.remove(), 1500));

  const cat = CATEGORIES.find((c) => c.key === photo.category);
  $('#showCaption').innerHTML = `
    <span class="cap-cat">${cat.icon} ${esc(cat.label)}</span>
    <span class="cap-num">Bild ${photo.number}</span>
    ${photo.title?.trim() ? `<span class="cap-title">${esc(photo.title)}</span>` : ''}`;

  // nächstes Bild schon vorladen
  const upcoming = list[(p.show.index + 1) % list.length];
  if (upcoming) getFullImage(upcoming);

  p.show.timer = setTimeout(nextShowPhoto, SLIDE_SECONDS * 1000);
}

/* ---------- Siegerehrung ---------- */

function photoFigure(photo, place, { big = false } = {}) {
  const author = p.authors[photo.id];
  return `
    <figure class="podium-photo ${big ? 'big' : ''} place-${place}">
      <div class="frame"><img src="${photo.thumb}" data-full="${photo.id}" alt="${esc(photo.label)}"></div>
      <figcaption>
        <span class="photo-title">${esc(photo.label)}</span>
        ${author ? `<span class="photo-author">${esc(author)}</span>` : ''}
        <span class="photo-votes">${stimmen(photo.votes)} · ${plural(photo.voters, 'Person', 'Personen')}</span>
      </figcaption>
    </figure>`;
}

function renderSlide(slide) {
  switch (slide.type) {
    case 'intro':
      return renderIntro();
    case 'category':
      return `
        <div class="slide slide-category">
          <div class="cat-icon">${slide.cat.icon}</div>
          <h1>${esc(slide.cat.label)}</h1>
          <p class="kicker">Die Gewinner</p>
        </div>`;
    case 'empty':
      return `<div class="slide slide-category"><h1>${esc(slide.cat.label)}</h1><p class="kicker">Noch keine Stimmen</p></div>`;
    case 'place': {
      const { place, photos } = slide.group;
      return `
        <div class="slide slide-place">
          <header class="place-head">
            <span class="medal">${MEDALS[place]}</span>
            <span><span class="place-label">${place}. Platz${photos.length > 1 ? ' (geteilt)' : ''}</span>
            <span class="place-cat">${slide.cat.icon} ${esc(slide.cat.label)}</span></span>
          </header>
          <div class="place-photos count-${photos.length}">
            ${photos.map((ph) => photoFigure(ph, place, { big: true })).join('')}
          </div>
        </div>`;
    }
    case 'summary':
      return `
        <div class="slide slide-summary">
          <h1>${slide.cat.icon} ${esc(slide.cat.label)}</h1>
          <div class="podium">
            ${[2, 1, 3].map((place) => {
              const g = slide.groups.find((x) => x.place === place);
              if (!g) return `<div class="podium-col place-${place} empty"><div class="step"><span class="step-medal">${MEDALS[place]}</span></div></div>`;
              return `
                <div class="podium-col place-${place}">
                  <div class="podium-figs">${g.photos.map((ph) => photoFigure(ph, place)).join('')}</div>
                  <div class="step"><span class="step-medal">${MEDALS[place]}</span></div>
                </div>`;
            }).join('')}
          </div>
        </div>`;
    case 'end':
      return `
        <div class="slide slide-end">
          <p class="kicker">Herzlichen Glückwunsch</p>
          <h1>Danke fürs Mitmachen!</h1>
          <div class="end-winners">
            ${CATEGORIES.map((c) => {
              const winners = (p.frozen?.[c.key] || []).filter((x) => x.place === 1 && x.votes > 0);
              return winners.map((w) => `
                <figure>
                  <img src="${w.thumb}" data-full="${w.id}" alt="${esc(w.label)}">
                  <figcaption>${c.icon} ${esc(c.label)}<br><strong>${esc(p.authors[w.id] || w.label)}</strong></figcaption>
                </figure>`).join('');
            }).join('')}
          </div>
        </div>`;
    default:
      return '';
  }
}

function setupControls() {
  $('#presentNext').addEventListener('click', (e) => { e.stopPropagation(); go(1); });
  $('#presentPrev').addEventListener('click', (e) => { e.stopPropagation(); go(-1); });
  $('#presentFull').addEventListener('click', (e) => { e.stopPropagation(); toggleFullscreen(); });
  // Klick aufs Bild = weiter (nicht auf der Start-Folie, damit man nicht aus Versehen die Ergebnisse zeigt)
  $('#presentStage').addEventListener('click', (e) => {
    if (p.step === 0 || e.target.closest('button, a')) return;
    go(1);
  });
  document.addEventListener('keydown', (e) => {
    if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); go(1); }
    if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); go(-1); }
    if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  });

  // Steuerknöpfe ausblenden, wenn die Maus ruht
  let idle;
  const wake = () => {
    document.body.classList.remove('idle');
    clearTimeout(idle);
    idle = setTimeout(() => document.body.classList.add('idle'), 2500);
  };
  document.addEventListener('mousemove', wake);
  wake();
}

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen?.().catch(() => {});
}
