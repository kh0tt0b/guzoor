import type { Hero } from '../types'

export const heroes: Hero[] = [
  {
    id: 'amina-al-huda',
    name: 'Amina al-Huda',
    title: 'Scholar & Guardian of Knowledge',
    region: 'Timbuktu',
    year: 1600,
    era: 'Early Modern',
    shortBio:
      'Preserved thousands of manuscripts in the Sankoré library and taught generations of students during the Sahelian golden age of letters.',
    biography: [
      'Amina al-Huda was born into a family of jurists in Timbuktu, the great crossroads of Saharan commerce and scholarship. From a young age she displayed an extraordinary command of scripture and mathematics, and by nineteen she was tutoring in the Sankoré mosque.',
      'When raiders threatened the city\'s manuscript collection in the early 1600s, Amina organized a secret network of families to hide and copy the scrolls. Over forty years she catalogued more than three thousand works, protecting texts in grammar, astronomy, and medicine.',
      'She is remembered not only for her scholarship but for her radical teaching practice: she opened her classes to women and enslaved students at a time when both were barred from higher learning. Her students would go on to lead libraries from Gao to Djenné.',
    ],
    avatar: '/heroes/amina.svg',
    virtues: ['Scholarship', 'Courage', 'Generosity'],
    quote: 'A book hidden in the sand is a seed; a book shared is a harvest.',
    featured: true,
  },
  {
    id: 'yusuf-al-ansari',
    name: 'Yusuf al-Ansari',
    title: 'Bridge Builder & Peacemaker',
    region: 'Andalusia',
    year: 1212,
    era: 'Medieval',
    shortBio:
      'Brokered the truce of Las Navas that spared thousands of lives, earning him the respect of both Christian and Muslim courts.',
    biography: [
      'Yusuf al-Ansari served as a kadi — a judge — in the mixed city of Cordoba, where Christians, Jews, and Muslims had shared one market square for three centuries.',
      'In 1212, as the armies of the Reconquista advanced, Yusuf rode between camps for seven days and nights, carrying letters between rival commanders. His mediation produced a truce that allowed the peaceful evacuation of entire towns.',
      'His legacy is a lesson in bridge building: he taught that mercy is a strategy, not a weakness. Schools across Andalusia still cite his rulings on protecting the dignity of the defeated.',
    ],
    avatar: '/heroes/yusuf.svg',
    virtues: ['Peacemaking', 'Wisdom', 'Mercy'],
    quote: 'The strong bridge is built of small, daily mercies.',
    featured: true,
  },
  {
    id: 'fatima-al-zahra',
    name: 'Fatima al-Zahra',
    title: 'Physician of the Desert',
    region: 'Tunis',
    year: 1750,
    era: 'Early Modern',
    shortBio:
      'Ran a traveling clinic across the Maghreb, training midwives and writing a widely copied manual on desert medicine.',
    biography: [
      'Born in Tunis, Fatima al-Zahra studied with the great physicians of the Zaytuna mosque before choosing a life on the road, bringing care to the caravanserais and oases of the south.',
      'Her manual, The Palm and the Plague, catalogued remedies drawn from desert plants and became the standard text for traveling healers for more than a century.',
      'She trained more than two hundred midwives, many of whom returned to their villages to establish the first women-run clinics. She died, as she lived, on the road — leaving a medicine chest to the caravan she was traveling with.',
    ],
    avatar: '/heroes/fatima.svg',
    virtues: ['Compassion', 'Healing', 'Endurance'],
    quote: 'Health is the least of gifts and the first of needs.',
    featured: true,
  },
  {
    id: 'isaac-of-gondar',
    name: 'Isaac of Gondar',
    title: 'Scribe of the Highlands',
    region: 'Ethiopia',
    year: 1810,
    era: 'Modern Era',
    shortBio:
      'Illuminated manuscripts and founded a school of scribes that kept the liturgical tradition alive through a century of upheaval.',
    biography: [
      'Isaac of Gondar learned the art of illumination in the shadow of the great rock churches of Lalibela. His vibrant geometric paintings — rooted in the palette of the highlands — adorn manuscripts held today in collections across the world.',
      'In the 1830s he founded a school for scribes near Lake Tana, where apprentices learned to prepare vellum, grind pigments, and compose sacred text with the same careful discipline.',
      'He believed that a community that loses its scribes loses its memory. His students carried the craft through the battles of the nineteenth century, and his copies remain among the finest examples of Gondarine illumination.',
    ],
    avatar: '/heroes/isaac.svg',
    virtues: ['Craft', 'Fidelity', 'Patience'],
    quote: 'Every letter is a thread; together they weave the past to the present.',
  },
  {
    id: 'sarah-of-feast-days',
    name: 'Sarah of the Feast Days',
    title: 'Keeper of the Feast',
    region: 'Jerusalem',
    year: 1900,
    era: 'Modern Era',
    shortBio:
      'Restored the Easter liturgy in the Old City and founded a tradition of communal cooking that fed a thousand families a year.',
    biography: [
      'Sarah grew up in the narrow lanes of the Old City of Jerusalem, where the calendar of feast days marked the rhythm of every home. As a young woman she was troubled to see the festivals fading among the displaced families of her neighborhood.',
      'She responded by restoring the full Easter liturgy in her parish and organizing the great communal kitchens, where families who had nothing brought what they could and everyone ate together.',
      'Her kitchen became a school of belonging. The tradition she founded continues today, feeding more than a thousand families every season and keeping the feast days alive.',
    ],
    avatar: '/heroes/sarah.svg',
    virtues: ['Joy', 'Hospitality', 'Restoration'],
    quote: 'A people that feasts together remembers together.',
  },
  {
    id: 'musa-al-kabir',
    name: 'Musa al-Kabir',
    title: 'Guide of the Trans-Saharan Trail',
    region: 'Mali',
    year: 1450,
    era: 'Medieval',
    shortBio:
      'Led caravans safely across the Sahara for thirty years, pioneering water-finding techniques that saved countless travelers.',
    biography: [
      'Musa al-Kabir was born in a caravan town where the desert was both road and teacher. By twenty he had memorized the stars, the dunes, and the hidden wells of the western route from Timbuktu to the Maghreb.',
      'His innovation was methodical: he recorded the location of seasonal pools, read the flight of birds to find water, and timed crossings to avoid the worst of the heat. His caravan lost not a single camel for two decades.',
      'He saw his leadership as a sacred duty. When famine struck his home region, he diverted his last great caravan of salt to bring grain back — a choice that made him poor and his people grateful.',
    ],
    avatar: '/heroes/musa.svg',
    virtues: ['Leadership', 'Knowledge', 'Sacrifice'],
    quote: 'The desert does not give directions; it gives choices.',
  },
  {
    id: 'esther-the-shield',
    name: 'Esther the Shield',
    title: 'Defender of the Sanctuary',
    region: 'Wales',
    year: 1650,
    era: 'Early Modern',
    shortBio:
      'Sheltered three hundred people in her valley church during the persecutions and helped smuggle their sacred books to safety.',
    biography: [
      'In the mountains of Wales, where the state religion warred with the old faith, Esther opened the doors of her valley sanctuary to all who were hunted for their beliefs.',
      'When soldiers came looking for hidden books and families, she hid them in the caves behind her church and kept the fires lit in a nearby tower as a warning signal.',
      'She survived a trial by false accusation, was acquitted for lack of evidence, and continued her work until old age. Her sanctuary remains a place of pilgrimage today.',
    ],
    avatar: '/heroes/esther.svg',
    virtues: ['Protection', 'Faith', 'Steadfastness'],
    quote: 'Courage is not the absence of fear; it is hospitality in its presence.',
  },
  {
    id: 'daniel-of-the-river',
    name: 'Daniel of the River',
    title: 'Teacher of the Delta',
    region: 'Nile Delta',
    year: 720,
    era: 'Early Medieval',
    shortBio:
      'Founded a floating school on the Nile that brought literacy to riverside villages and shaped the region\'s culture for centuries.',
    biography: [
      'Daniel began as a ferryman on the Nile, carrying farmers and merchants across the great river. Noticing that no child in the villages could read the scriptures they heard, he decided to bring learning to the water itself.',
      'He converted his ferry into a classroom, and each day as the boat traveled the delta, children recited letters along the banks. His "floating school" grew into a fleet of eight boats.',
      'The tradition of river teaching he began endured for over four hundred years, and the villages along the delta still tell stories of the teacher who came with the current.',
    ],
    avatar: '/heroes/daniel.svg',
    virtues: ['Teaching', 'Innovation', 'Service'],
    quote: 'Learning is a river: it moves, it gives, and it never waits for the banks.',
  },
  {
    id: 'mariam-of-the-syriac-lands',
    name: 'Mariam of the Syriac Lands',
    title: 'Poet of the Monks',
    region: 'Mesopotamia',
    year: 1150,
    era: 'Medieval',
    shortBio:
      'Wrote hymns and spiritual poems that survive in liturgy across the Middle East and bring comfort to seekers today.',
    biography: [
      'In the monasteries of the Syriac lands, Mariam composed hymns in a language the people actually spoke, bridging the ancient scholarly tongue and the voices of everyday life.',
      'Her poems were carried by travelers along the silk roads and sung in churches from Edessa to India. Unlike many of her contemporaries, she wrote in the voice of ordinary longing and ordinary gratitude.',
      'Her collected works number over a hundred hymns. Many remain in daily liturgical use, their refrains familiar to congregations who do not know the poet\'s name.',
    ],
    avatar: '/heroes/mariam.svg',
    virtues: ['Poetry', 'Devotion', 'Voice'],
    quote: 'A hymn is a bridge of words, and faith walks both ways across it.',
  },
  {
    id: 'khalil-the-just',
    name: 'Khalil the Just',
    title: 'Judge of the Garden City',
    region: 'Samarkand',
    year: 1405,
    era: 'Late Medieval',
    shortBio:
      'Ruled the markets of Samarkand with such fairness that his court was open to every trader, slave, and stranger on the Silk Road.',
    biography: [
      'Khalil oversaw the courts of Samarkand, the jewel of the Silk Road, where the wealth of half the world passed through the merchant gates each season.',
      'His court was famous for three rules: it sat every day at dawn, it was open to the poorest petitioner, and no case was decided without hearing both sides fully. He personally arbitrated disputes between rival trading houses for over twenty years.',
      'When he retired, the merchants of the city paid for a garden to be planted in his name. It is said that even the thieves he sentenced were seen watering it.',
    ],
    avatar: '/heroes/khalil.svg',
    virtues: ['Justice', 'Integrity', 'Diligence'],
    quote: 'Justice is a garden; it must be watered at dawn.',
    featured: true,
  },
]

export const regions = [...new Set(heroes.map((h) => h.region))].sort()
export const eras = [...new Set(heroes.map((h) => h.era))].sort()
export const years = [...new Set(heroes.map((h) => h.year))].sort((a, b) => a - b)

export function getHeroById(id: string): Hero | undefined {
  return heroes.find((h) => h.id === id)
}
