const fs = require('fs');
const path = require('path');

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

// Create the array string
let arrayStr = `const photos = [\n`;
galleryFiles.forEach((f, i) => {
  // Try to generate a nicer title based on the filename if we can, otherwise generic
  let title = "Little Shines Memory";
  if (f.includes('WhatsApp')) title = "School Event Captured";
  else if (f.includes('download')) title = "Campus Highlight";
  else if (f.startsWith('IMG')) title = "Student Activity";
  
  arrayStr += `  { id: ${i+1}, title: "${title} ${i+1}", image: "/${f}" },\n`;
});
arrayStr += `];`;

// Read page.tsx
const pagePath = path.join(__dirname, 'src/app/gallery/page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Replace the photos array
pageContent = pageContent.replace(/const photos = \[[\s\S]*?\];/, arrayStr);

fs.writeFileSync(pagePath, pageContent);
console.log(`Successfully added ${galleryFiles.length} real photos to the gallery!`);
