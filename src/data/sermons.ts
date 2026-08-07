import type { Sermon } from '../types'

export const sermons: Sermon[] = [
  {
    id: 'sermon-call',
    title: 'The Call from the Riverbank',
    speaker: 'The Guzoor Circle',
    duration: '10:34',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description:
      'An introduction to the Guzoor archive and the vow of remembrance — how Sudan keeps the memory of its scholars and its defenders.',
  },
  {
    id: 'sermon-sufi-paths',
    title: 'The Paths of the Heart',
    speaker: 'Mohammed Osman al-Mirghani',
    duration: '9:47',
    type: 'audio',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    description:
      'A dhikr-guided meditation on the Sufi orders of Sudan and the discipline of remembrance that holds a nation together.',
  },
  {
    id: 'sermon-martyrs',
    title: 'A Homily for the Martyrs',
    speaker: 'Yusuf al-Hindi',
    duration: '12:02',
    type: 'audio',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    description:
      'A reflection on those who gave their lives for religion and homeland, and on the debt that the living owe to the dead.',
  },
  {
    id: 'sermon-root',
    title: 'The Root of Knowledge',
    speaker: 'The Guzoor Circle',
    duration: '8:15',
    type: 'audio',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    description:
      'On the khalwa and the teaching tradition of the Nile — why education in Sudan has always been a quiet form of resistance.',
  },
]

export function getSermonById(id: string): Sermon | undefined {
  return sermons.find((s) => s.id === id)
}
