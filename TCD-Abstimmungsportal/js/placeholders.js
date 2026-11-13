// Platzhalter: die Bilder aus dem Ordner /images (vom letzten Jahr).
// Im Admin-Bereich unter "Bilder" einmalig importierbar, solange noch keine Bilder hochgeladen sind.

const suess = [
  'Sabine Michel', 'Markus Dauner', 'Frank Rotzinger', 'Markus Dauner', 'Sabine Michel',
  'Frank Rotzinger', 'Sabine Michel', 'Markus Dauner', 'Frank Rotzinger',
];
const salz = [
  'Manuela Wehlage', 'Peter Alexander', 'Martin Haschka', 'Annette Grimm', 'Manfred Grimm',
  'Joseline Koch', 'Manuela Wehlage', 'Peter Alexander', 'Joseline Koch', 'Peter Alexander',
  'Martin Haschka', 'Annette Grimm', 'Manfred Grimm', 'Manuela Wehlage', 'Anne Muck',
  'Annette Grimm', 'Joseline Koch', 'Martin Haschka', 'Manfred Grimm', 'Sabine Michel',
  'Frank Rotzinger', 'Markus Dauner', 'Frank Rotzinger', 'Markus Dauner', 'Volker Schwab',
  'Sabine Michel', 'Frank Rotzinger', 'Volker Schwab', 'Sabine Michel', 'Volker Schwab',
  'Markus Dauner',
];

const pad = (n) => String(n).padStart(2, '0');

export const PLACEHOLDERS = [
  ...suess.map((author, i) => ({ category: 'suess', url: `images/Suess_${pad(i + 1)}.jpg`, author })),
  ...salz.map((author, i) => ({ category: 'salz', url: `images/Salz_${pad(i + 1)}.jpg`, author })),
];
