const fs = require('fs')
const path = require('path')

const outDir = path.join(__dirname, '..', 'public', 'heroes')
fs.mkdirSync(outDir, { recursive: true })

const profiles = [
  { id: 'muhannad', skin: '#8C5A3B', garment: '#3B2617', scarf: '#683A1D', gender: 'm' },
  { id: 'hammad', skin: '#A06C45', garment: '#2C1C11', scarf: '#4A301D', gender: 'm' },
  { id: 'amin', skin: '#C68958', garment: '#5F3F26', scarf: '#26231C', gender: 'm' },
  { id: 'abdullah', skin: '#7A5636', garment: '#683A1D', scarf: '#855331', gender: 'm' },
  { id: 'wadalmala', skin: '#A06C45', garment: '#26231C', scarf: '#5F3F26', gender: 'm' },
  { id: 'aref', skin: '#8C5A3B', garment: '#855331', scarf: '#3B2617', gender: 'm' },
]

function portrait(p) {
  return `<path d="M100 76c14.36 0 26-11.64 26-26S114.36 24 100 24 74 35.64 74 50s11.64 26 26 26Z" fill="${p.skin}"/>
         <path d="M100 76c14.36 0 26-11.64 26-26V40c0-8.8-7.2-16-16-16l-4 8-4-8c-8.8 0-16 7.2-16 16v10c0 14.36 11.64 26 26 26Z" fill="${p.scarf}" opacity="0.35"/>
         <path d="M62 118c-4 38 16 52 38 52s42-14 38-52c0-26-17-42-38-42s-38 16-38 42Z" fill="${p.garment}"/>
         <path d="M100 78c-13 0-24 11-24 24s11 24 24 24 24-11 24-24-11-24-24-24Z" fill="${p.skin}"/>`
}

function bosnianEmblem() {
  return `<g>
    <path d="M100 78 121 84 127 105 121 126 100 132 79 126 73 105 79 84Z" fill="#683A1D"/>
    <path d="M100 92 109 95 112 104 109 113 100 116 91 113 88 104 91 95Z" fill="#C68958"/>
    <circle cx="100" cy="105" r="44" fill="none" stroke="#683A1D" stroke-opacity="0.35" stroke-width="3"/>
    <path d="M58 92c-8-2-10-14-2-18 8 6 18 6 26 0-8 4-6 16 2 18l-26 0ZM142 92c-8-2-10-14-2-18 8 6 18 6 26 0-8 4-6 16 2 18l-26 0Z" fill="none" stroke="#683A1D" stroke-width="2.5" stroke-linecap="round"/>
  </g>`
}

function avatar(p) {
  const body = p.portrait ? portrait(p) : bosnianEmblem()
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 200 200" role="img" aria-label="${p.label}">
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
  ${body}
</svg>`
}

const labels = {
  muhannad: 'Portrait of Muhannad al-Fadl',
  hammad: 'Portrait of Hammad al-Sayyid Othman',
  amin: 'Portrait of Amin Dawlab',
  abdullah: 'Portrait of Abdullah Adam',
  wadalmala: 'Portrait of Wad al-Mala',
  aref: 'Portrait of Aref Abdullah al-Adil',
  bosnia: 'Emblem of the First Turkish Martyr of Bosnia',
}

for (const p of profiles) {
  fs.writeFileSync(
    path.join(outDir, `${p.id}.svg`),
    avatar({ ...p, portrait: true, label: labels[p.id] }),
  )
  console.log('wrote', p.id)
}
fs.writeFileSync(
  path.join(outDir, 'bosnia.svg'),
  avatar({ id: 'bosnia', label: labels.bosnia }),
)
console.log('wrote bosnia')
