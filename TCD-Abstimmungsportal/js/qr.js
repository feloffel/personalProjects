// QR-Code als SVG (Bibliothek: qrcode-generator, MIT).
import qrcode from 'https://cdn.jsdelivr.net/npm/qrcode-generator@2.0.4/dist/qrcode.mjs';

export function qrSvg(text, label = 'QR-Code zur Abstimmung') {
  const qr = qrcode(0, 'M');
  qr.addData(text);
  qr.make();
  return qr.createSvgTag({
    cellSize: 4, margin: 8, scalable: true, alt: { text: label, id: `qr-${Math.random().toString(36).slice(2)}` },
  });
}
