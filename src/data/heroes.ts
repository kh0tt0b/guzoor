import type { Hero } from '../types'

export const heroes: Hero[] = [
  {
    id: 'muhammad-ahmad-al-mahdi',
    name: 'Muhammad Ahmad al-Mahdi',
    title: 'The Mahdi, Renewer of the Faith',
    region: 'Omdurman',
    year: 1885,
    era: 'Mahdist Era',
    shortBio:
      'From the banks of the Nile he called the nation to faith and to arms, building a state that stood against foreign rule for thirteen years.',
    biography: [
      'Muhammad Ahmad was born in Dongola in 1844 and grew up on the banks of the Nile, steeped in the Sufi path of Sammaniyya. From his khalwa on Aba Island he began to call for a return to the purest roots of the religion.',
      'In 1881 he declared himself the Mahdi — the promised renewer — and the Ansar rose with him. Within four years his movement had toppled the Turko-Egyptian state in Sudan and shattered the British columns sent against it, culminating in the liberation of Khartoum in 1885.',
      'He died in Omdurman later that year, leaving a state that would survive him and a memory that never faded. For Sudan, he remains a symbol of faith turned into resistance, and resistance turned into hope.',
    ],
    avatar: '/heroes/al-mahdi.svg',
    virtues: ['Faith', 'Leadership', 'Renewal'],
    quote: 'He who dies for his faith and his homeland does not die; he lives in the memory of the free.',
    caption:
      'The Mahdi called Sudan back to its religious roots and then to its freedom. Faith first, then homeland. جذور السودان. #Guzoor #Sudan #Mahdiyya #TheRootOfKnowledge',
    featured: true,
  },
  {
    id: 'abd-al-rahman-al-mahdi',
    name: 'Abd al-Rahman al-Mahdi',
    title: 'Al-Sayyid, Leader of the Ansar',
    region: 'Omdurman',
    year: 1959,
    era: 'Independence Era',
    shortBio:
      'The son of the Mahdi who turned a religious movement into a pillar of the nation, and stood beside Sudan as it entered its independence.',
    biography: [
      'Born in Omdurman in 1885, Abd al-Rahman al-Mahdi grew up in the shadow of a father he never knew. As leader of the Ansar he rebuilt the movement, turning his father\'s legacy into a permanent spiritual and political home for millions of Sudanese.',
      'He was a voice for unity at the conference tables of the twentieth century, urging the north and the south of Sudan toward a shared homeland and pressing the cause of self-rule before the colonial powers.',
      'When Sudan raised its own flag in 1956, al-Sayyid Abd al-Rahman was the elder statesman of the new nation. He died in 1959, having planted his father\'s roots deep in the soil of an independent Sudan.',
    ],
    avatar: '/heroes/abd-al-rahman.svg',
    virtues: ['Unity', 'Steadfastness', 'Service'],
    quote: 'A homeland is not a map; it is a memory shared until it becomes a promise.',
    caption:
      'From the son of the Mahdi to the father of the nation. Roots planted in faith, branches raised in freedom. #Guzoor #Sudan #Ansar',
  },
  {
    id: 'mohammed-osman-al-mirghani',
    name: 'Mohammed Osman al-Mirghani',
    title: 'Founder of the Khatmiyya Path',
    region: 'Berber',
    year: 1853,
    era: 'Sufi Roots',
    shortBio:
      'The scholar who wove the Sufi path of the Khatmiyya into the daily life of the Nile Valley, making knowledge a lantern for every village.',
    biography: [
      'Mohammed Osman al-Mirghani was born in 1793 near Taif, but it was on the banks of the Nile that his legacy took root. He studied with the great scholars of his age and returned to Sudan to establish the Khatmiyya order, the great Sufi way of the eastern Sudan.',
      'His genius lay in accessibility: prayers and litanies in the language of the people, schools opened along the river route, and a tariqa that welcomed the villager as warmly as the merchant.',
      'The Khatmiyya became a pillar of Sudanese religious life, and its network of scholars a channel through which knowledge flowed to every town from Berber to Kassala.',
    ],
    avatar: '/heroes/al-mirghani.svg',
    virtues: ['Scholarship', 'Compassion', 'Roots'],
    quote: 'Knowledge is the root; the tree is whatever the generations make of it.',
    caption:
      'The scholar who lit the Nile with khalwas and prayer. The root of knowledge that watered all of Sudan. #Guzoor #Khatmiyya #SufiRoots',
    featured: true,
  },
  {
    id: 'yusuf-al-hindi',
    name: 'Yusuf al-Hindi',
    title: 'Shaykh of the Hindiyya',
    region: 'Berber',
    year: 1942,
    era: 'Sufi Roots',
    shortBio:
      'A quiet scholar of the Berber region whose Hindiyya order carried the teaching of the heart across the northern Sudan for a century.',
    biography: [
      'Yusuf al-Hindi was born around 1850 into a family of scholars in the north of Sudan. He studied jurisprudence and the sciences of the heart before dedicating his life to teaching and the Sufi path.',
      'His Hindiyya order grew in the towns of the Nile bend, known less for spectacle than for service: feeding the traveler, teaching the orphan, and opening its doors to the seeker at any hour.',
      'He lived through the upheaval of the Mahdiyya and the colonial era, and he kept the lamp of learning burning through both. He is remembered as a root of that patience which is the scholar\'s first virtue.',
    ],
    avatar: '/heroes/yusuf-al-hindi.svg',
    virtues: ['Patience', 'Teaching', 'Hospitality'],
    quote: 'The heart is a school; teach it in silence and it will speak in deeds.',
    caption:
      'A century of service on the river bend. The Hindiyya taught Sudan that knowledge lives in the heart before it ever reaches the page. #Guzoor #Sudan #Hindiyya',
  },
  {
    id: 'ali-dinar',
    name: 'Ali Dinar',
    title: 'Sultan of Darfur, Guardian of the Homeland',
    region: 'Darfur',
    year: 1916,
    era: 'Colonial Resistance',
    shortBio:
      'The last Sultan of Darfur, who ruled for seventeen years and fell in battle rather than surrender his homeland to the empire.',
    biography: [
      'Ali Dinar restored the Keira sultanate of Darfur in 1898, rebuilding a court and a country in the western plains after a generation of chaos.',
      'For seventeen years he ruled with justice and kept Darfur free, negotiating with the colonial powers that pressed upon his borders while never ceding his sovereignty.',
      'In 1916 the empire marched against him. He refused every offer of exile and led his men into battle, where he died. His body was never found, and for the people of Darfur he became the eternal image of the defender who would not bend.',
    ],
    avatar: '/heroes/ali-dinar.svg',
    virtues: ['Courage', 'Sovereignty', 'Dignity'],
    quote: 'A land is free only as long as someone is willing to lose everything for it.',
    caption:
      'He ruled Darfur with justice and defended it with his life. The last Sultan who chose death before surrender. #Guzoor #Darfur #AliDinar',
    featured: true,
  },
  {
    id: 'uthman-digna',
    name: 'Uthman Digna',
    title: 'Lion of the Eastern Front',
    region: 'Sawakin',
    year: 1926,
    era: 'Mahdist Era',
    shortBio:
      'A trader of the Red Sea coast who became the Mahdiyya\'s greatest general, waging a brilliant guerrilla war on the eastern front.',
    biography: [
      'Uthman Digna was a merchant of the Red Sea coast, known for his honesty in the markets of Sawakin, when the call of the Mahdi reached him. He answered it with a warrior\'s gifts no one had suspected.',
      'Commanding the eastern front, he destroyed two British expeditionary forces, harried the garrisons along the coast, and kept the roads of the Beja country under his command for years.',
      'Captured at the end of the Mahdist state, he refused every overture of the colonial administration and was kept in exile until his death in 1926. The coast still remembers the general who came from the souq.',
    ],
    avatar: '/heroes/uthman-digna.svg',
    virtues: ['Valor', 'Tactics', 'Fidelity'],
    quote: 'The market taught me honesty; the battlefield taught me that the homeland has no price.',
    caption:
      'From the souq of Sawakin to the command of the eastern front. The merchant who became a lion. #Guzoor #Sudan #OsmanDigna',
  },
  {
    id: 'al-zubayr-rahma',
    name: 'Al-Zubayr Rahma',
    title: 'The Governor Who Resisted',
    region: 'Kordofan',
    year: 1913,
    era: 'Pre-Colonial',
    shortBio:
      'A military leader of the nineteenth century who built a state in the lands of the south and defied the rulers who tried to break him.',
    biography: [
      'Al-Zubayr Rahma rose from a merchant of Kordofan to rule the largest territory in the Sudan of his day, commanding armies that crossed the plains and the great forests to the south.',
      'He challenged the Turko-Egyptian regime that claimed Sudan, resisted its attempts to subdue him, and spent years in captivity in Cairo and Gibraltar rather than renounce his cause.',
      'Returned to Sudan in old age, he witnessed the coming of the Mahdiyya and the fall of the old order. He died in 1913, a symbol of the Sudan that would not be governed by strangers.',
    ],
    avatar: '/heroes/al-zubayr.svg',
    virtues: ['Resistance', 'Ambition', 'Independence'],
    quote: 'A homeland is not a province; it is a people who refuse to be ruled by other people\'s maps.',
    caption:
      'He built a state where none had been and refused to bow to empire. The governor who would not be broken. #Guzoor #Sudan #AlZubayr',
  },
  {
    id: 'martyrs-of-the-december-revolution',
    name: 'The Martyrs of the December Revolution',
    title: 'Defenders of the Homeland',
    region: 'Khartoum',
    year: 2019,
    era: 'Contemporary',
    shortBio:
      'The young women and men of the 2018–2019 uprising — poets, students, doctors, and dreamers — who gave their lives for a free and just Sudan.',
    biography: [
      'In December 2018, the streets of Sudan rose. Students, women, and workers came together in a revolution that demanded freedom, peace, and justice — and the young paid the heaviest price.',
      'The sit-in at the army headquarters in Khartoum in April and June of 2019 became sacred ground. As dawn broke over the gardens of the sit-in, the lives of peaceful protesters were taken in the city\'s greatest massacre of the era.',
      'They are remembered by name and by the millions who mourned them: the martyrs of the December Revolution, whose sacrifice became the foundation upon which a new Sudan is still being built. They defended the homeland with nothing but their courage.',
    ],
    avatar: '/heroes/december-martyrs.svg',
    virtues: ['Sacrifice', 'Courage', 'Hope'],
    quote: 'They did not raise a flag for themselves; they raised a homeland for everyone.',
    caption:
      'For the martyrs of the December Revolution: you are the root of everything we build now. Sudan remembers you. #Guzoor #Sudan #DecemberRevolution #Martyrs',
    featured: true,
  },
]

export const regions = [...new Set(heroes.map((h) => h.region))].sort()
export const eras = [...new Set(heroes.map((h) => h.era))].sort()
export const years = [...new Set(heroes.map((h) => h.year))].sort((a, b) => a - b)

export function getHeroById(id: string): Hero | undefined {
  return heroes.find((h) => h.id === id)
}
