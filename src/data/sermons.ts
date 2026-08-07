import type { Sermon } from '../types'

export const sermons: Sermon[] = [
  {
    id: 'sermon-tauhidic',
    title: 'Surah Yasin — A Tauhidic Reading',
    speaker: 'Sheikh Mustafa Mirghani',
    duration: '22:40',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description:
      'From the Shaykh al-Turabi Forum for Quranic Studies: the circle on Surah Yasin within the tauhidic exegesis series, read as one united vision.',
  },
  {
    id: 'sermon-remembrance',
    title: 'The Intellect in the Qur\u2019an',
    speaker: 'Sheikh Issa Musa',
    duration: '18:15',
    type: 'audio',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    description:
      'A circle of thought and remembrance — a course in understanding the religion and pondering the verses, on the place of reason in revelation.',
  },
  {
    id: 'sermon-eulogy',
    title: 'A Eulogy for the Martyrs',
    speaker: 'Ridwan Yahya',
    duration: '12:02',
    type: 'audio',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    description:
      'Poetry in the memory of the martyrs of the lines — among them the legend of the tanks, Amin Dawlab, in verses carried on the tunes of the first.',
  },
  {
    id: 'sermon-patience',
    title: 'Patience: The Seal of the Companions',
    speaker: 'The Guzoor Circle',
    duration: '9:47',
    type: 'audio',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    description:
      'On patience as certainty that the martyr has not departed but moved on to be alive with his Lord — the consolation that turns the grief of parting into coolness and peace.',
  },
]

export function getSermonById(id: string): Sermon | undefined {
  return sermons.find((s) => s.id === id)
}
