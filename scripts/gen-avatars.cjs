const fs = require('fs')
const path = require('path')

const outDir = path.join(__dirname, '..', 'public', 'heroes')
fs.mkdirSync(outDir, { recursive: true })

const profiles = [
  { id: 'amina', skin: '#C68958', garment: '#683A1D', scarf: '#4A301D', gender: 'f' },
  { id: 'yusuf', skin: '#8C5A3B', garment: '#5F3F26', scarf: '#2C1C11', gender: 'm' },
  { id: 'fatima', skin: '#D6A87E', garment: '#855331', scarf: '#3B2617', gender: 'f' },
  { id: 'isaac', skin: '#A06C45', garment: '#4A301D', scarf: '#683A1D', gender: 'm' },
  { id: 'sarah', skin: '#C68958', garment: '#6F6856', scarf: '#26231C', gender: 'f' },
  { id: 'musa', skin: '#7A5636', garment: '#2C1C11', scarf: '#4A301D', gender: 'm' },
  { id: 'esther', skin: '#D6A87E', garment: '#5F3F26', scarf: '#855331', gender: 'f' },
  { id: 'daniel', skin: '#8C5A3B', garment: '#3B2617', scarf: '#683A1D', gender: 'm' },
  { id: 'mariam', skin: '#C68958', garment: '#26231C', scarf: '#5F3F26', gender: 'f' },
  { id: 'khalil', skin: '#A06C45', garment: '#855331', scarf: '#2C1C11', gender: 'm' },
]

function avatar(p) {
  const head =
    p.gender === 'f'
      ? `<path d="M100 74c14.36 0 26-11.64 26-26s-11.64-26-26-26-26 11.64-26 26 11.64 26 26 26Z" fill="${p.skin}"/>
         <path d="M100 74c14.36 0 26-11.64 26-26V48c0-14.36-11.64-26-26-26S74 33.64 74 48v0c0 14.36 11.64 26 26 26Z" fill="${p.scarf}" opacity="0.35"/>
         <path d="M60 116c-2.5 34 16 50 40 50s42.5-16 40-50c0-24-18-40-40-40s-40 16-40 40Z" fill="${p.scarf}"/>
         <path d="M100 76c-14 0-26 12-26 26s12 26 26 26 26-12 26-26-12-26-26-26Z" fill="${p.skin}"/>`
      : `<path d="M100 76c14.36 0 26-11.64 26-26S114.36 24 100 24 74 35.64 74 50s11.64 26 26 26Z" fill="${p.skin}"/>
         <path d="M100 76c14.36 0 26-11.64 26-26V40c0-8.8-7.2-16-16-16l-4 8-4-8c-8.8 0-16 7.2-16 16v10c0 14.36 11.64 26 26 26Z" fill="${p.scarf}" opacity="0.35"/>
         <path d="M62 118c-4 38 16 52 38 52s42-14 38-52c0-26-17-42-38-42s-38 16-38 42Z" fill="${p.garment}"/>
         <path d="M100 78c-13 0-24 11-24 24s11 24 24 24 24-11 24-24-11-24-24-24Z" fill="${p.skin}"/>`
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 200 200" role="img" aria-label="Portrait of a Guzoor hero">
  <defs>
    <radialGradient id="bg" cx="50%" cy="38%" r="75%">
      <stop offset="0%" stop-color="#F5F3EC"/>
      <stop offset="100%" stop-color="#E3DFD1"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bg)"/>
  <circle cx="100" cy="100" r="92" fill="none" stroke="#683A1D" stroke-opacity="0.25" stroke-width="3"/>
  <circle cx="100" cy="100" r="82" fill="none" stroke="#683A1D" stroke-opacity="0.12" stroke-width="2"/>
  <path d="M100 30 104 96 170 100 104 104 100 170 96 104 30 100 96 96Z" fill="#683A1D" fill-opacity="0.08"/>
  ${head}
  <path d="M40 176c22 14 98 14 120 0" fill="none" stroke="#683A1D" stroke-opacity="0.25" stroke-width="2"/>
</svg>`
}

for (const p of profiles) {
  fs.writeFileSync(path.join(outDir, `${p.id}.svg`), avatar(p))
  console.log('wrote', p.id)
}
