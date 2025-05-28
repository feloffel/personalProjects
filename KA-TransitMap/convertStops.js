const fs = require('fs');
const csv = require('csv-parse/sync');

// Lies die stops.txt ein
const input = fs.readFileSync('stops.txt', 'utf8');

// Parsen
const records = csv.parse(input, {
  columns: true,
  skip_empty_lines: true,
  delimiter: ','
});

// Mapping ins gewünschte Format
const stops = records.map(row => ({
  id: row.stop_id,
  name: row.stop_name,
  lat: parseFloat(row.stop_lat),
  lon: parseFloat(row.stop_lon),
  type: "bus"
}));

// Als JS-Modul speichern
const output = `const stops = ${JSON.stringify(stops, null, 2)};\n\nexport default stops;\n`;
fs.writeFileSync('stops.js', output);

console.log('Fertig! Die Datei stops.js wurde erstellt.');
