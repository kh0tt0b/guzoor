const fs = require('fs')
const path = require('path')

const outDir = path.join(__dirname, '..', 'public', 'heroes')
fs.mkdirSync(outDir, { recursive: true })

const profiles = [
  { id: 'al-mahdi', skin: '#A06C45', garment: '#3B2617', scarf: '#683A1D', gender: 'm' },
  { id: 'abd-al-rahman', skin: '#8C5A3B', garment: '#5F3F26', scarf: '#2C1C11', gender: 'm' },
  { id: 'al-mirghani', skin: '#C68958', garment: '#26231C', scarf: '#4A301D', gender: 'm' },
  { id: 'yusuf-al-hindi', skin: '#7A5636', garment: '#683A1D', scarf: '#3B2617', gender: 'm' },
  { id: 'ali-dinar', skin: '#8C5A3B', garment: '#2C1C11', scarf: '#855331', gender: 'm' },
  { id: 'uthman-digna', skin: '#A06C45', garment: '#855331', scarf: '#26231C', gender: 'm' },
  { id: 'al-zubayr', skin: '#C68958', garment: '#4A301D', scarf: '#5F3F26', gender: 'm' },
]

function portrait(p) {
  return `<path d="M100 76c14.36 0 26-11.64 26-26S114.36 24 100 24 74 35.64 74 50s11.64 26 26 26Z" fill="${p.skin}"/>
         <path d="M100 76c14.36 0 26-11.64 26-26V40c0-8.8-7.2-16-16-16l-4 8-4-8c-8.8 0-16 7.2-16 16v10c0 14.36 11.64 26 26 26Z" fill="${p.scarf}" opacity="0.35"/>
         <path d="M62 118c-4 38 16 52 38 52s42-14 38-52c0-26-17-42-38-42s-38 16-38 42Z" fill="${p.garment}"/>
         <path d="M100 78c-13 0-24 11-24 24s11 24 24 24 24-11 24-24-11-24-24-24Z" fill="${p.skin}"/>`
}

function emblem() {
  // A medallion for the collective of martyrs: the Guzoor star over the colors of the flag, held by a wreath.
  return `<g>
    <path d="M100 66 105 88 127 93 105 98 100 120 95 98 73 93 95 88Z" fill="#683A1D"/>
    <circle cx="100" cy="93" r="40" fill="none" stroke="#683A1D" stroke-opacity="0.35" stroke-width="3"/>
    <circle cx="100" cy="93" r="30" fill="none" stroke="#683A1D" stroke-opacity="0.2" stroke-width="2"/>
    <path d="M66 122c8 6 18 8 34 8s26-2 34-8" fill="none" stroke="#683A1D" stroke-width="3" stroke-linecap="round"/>
    <path d="M58 70c-2-6 6-12 12-10M142 70c2-6-6-12-12-10" fill="none" stroke="#683A1D" stroke-width="3" stroke-linecap="round"/>
    <circle cx="100" cy="160" r="4" fill="#855331"/>
    <circle cx="70" cy="150" r="3" fill="#855331"/>
    <circle cx="130" cy="150" r="3" fill="#855331"/>
  </g>`
}

function avatar(p) {
  const body = p.portrait ? portrait(p) : emblem()
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
  'al-mahdi': 'Portrait of Muhammad Ahmad al-Mahdi',
  'abd-al-rahman': 'Portrait of Abd al-Rahman al-Mahdi',
  'al-mirghani': 'Portrait of Mohammed Osman al-Mirghani',
  'yusuf-al-hindi': 'Portrait of Yusuf al-Hindi',
  'ali-dinar': 'Portrait of Sultan Ali Dinar',
  'uthman-digna': 'Portrait of Uthman Digna',
  'al-zubayr': 'Portrait of Al-Zubayr Rahma',
  'december-martyrs': 'Emblem of the Martyrs of the December Revolution',
}

for (const p of profiles) {
  fs.writeFileSync(
    path.join(outDir, `${p.id}.svg`),
    avatar({ ...p, portrait: true, label: labels[p.id] }),
  )
  console.log('wrote', p.id)
}
fs.writeFileSync(
  path.join(outDir, 'december-martyrs.svg'),
  avatar({ id: 'december-martyrs', label: labels['december-martyrs'] }),
)
console.log('wrote december-martyrs')
