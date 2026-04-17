const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir);

const exclude = [
  'activity_', 'class_structure_', 'classroom_', 'digital_classroom', 
  'playground_', 'school_bus', 'school_cafeteria', 'hero-kids', 
  'logo', 'principal', '.svg'
];

const galleryFiles = files.filter(f => {
  if (!f.endsWith('.jpg') && !f.endsWith('.jpeg') && !f.endsWith('.png')) return false;
  for (const ex of exclude) {
    if (f.startsWith(ex) || f.includes(ex) || f.endsWith('.svg')) return false;
  }
  return true;
});

const seenHashes = new Set();
let dupesRemoved = 0;

for (const file of galleryFiles) {
  const filePath = path.join(publicDir, file);
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('md5');
  hashSum.update(fileBuffer);
  const hash = hashSum.digest('hex');

  if (seenHashes.has(hash)) {
    fs.unlinkSync(filePath);
    dupesRemoved++;
    console.log('Removed duplicate: ' + file);
  } else {
    seenHashes.add(hash);
  }
}

console.log(`Total duplicated images removed: ${dupesRemoved}`);
