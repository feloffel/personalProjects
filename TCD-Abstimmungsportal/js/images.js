// Bilder im Browser verkleinern, damit sie als Text (Data-URL) in Firestore passen.
// Ein Firestore-Dokument darf höchstens 1 MiB groß sein.

const MAX_DOC_CHARS = 900_000;

async function loadBitmap(source) {
  try {
    return await createImageBitmap(source, { imageOrientation: 'from-image' });
  } catch {
    // Fallback für ältere Browser
    const url = URL.createObjectURL(source);
    try {
      const img = new Image();
      img.src = url;
      await img.decode();
      return img;
    } finally {
      URL.revokeObjectURL(url);
    }
  }
}

function draw(bitmap, maxSide) {
  const w = bitmap.width;
  const h = bitmap.height;
  const scale = Math.min(1, maxSide / Math.max(w, h));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(w * scale);
  canvas.height = Math.round(h * scale);
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return canvas;
}

function encode(canvas, maxChars, startQuality) {
  let quality = startQuality;
  let url = canvas.toDataURL('image/jpeg', quality);
  while (url.length > maxChars && quality > 0.4) {
    quality -= 0.08;
    url = canvas.toDataURL('image/jpeg', quality);
  }
  return url;
}

/** Liefert { thumb, full } als JPEG-Data-URLs. */
export async function prepareImage(fileOrBlob) {
  const bitmap = await loadBitmap(fileOrBlob);
  const thumb = encode(draw(bitmap, 640), 120_000, 0.78);
  let full = encode(draw(bitmap, 1600), MAX_DOC_CHARS, 0.85);
  if (full.length > MAX_DOC_CHARS) full = encode(draw(bitmap, 1200), MAX_DOC_CHARS, 0.8);
  bitmap.close?.();
  return { thumb, full };
}
