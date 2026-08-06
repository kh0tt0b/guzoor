import type { Sermon } from '../types'

export const sermons: Sermon[] = [
  {
    id: 'sermon-foundations',
    title: 'Foundations: What We Build On',
    speaker: 'The Guzoor Circle',
    duration: '10:34',
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description:
      'An introduction to the Guzoor archive and the discipline of remembering well. A short sermon on the foundations of a shared life.',
  },
  {
    id: 'sermon-garden',
    title: 'The Garden of Justice',
    speaker: 'Mariam of the Syriac Lands',
    duration: '9:47',
    type: 'audio',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    description:
      'A reflection on the open court of Khalil the Just and what it means to tend justice as a garden rather than a verdict.',
  },
  {
    id: 'sermon-keep-feast',
    title: 'Keeping the Feast',
    speaker: 'Sarah of the Feast Days',
    duration: '12:02',
    type: 'audio',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    description:
      'Why communal celebration is spiritual infrastructure, and how one practice can rebuild a people.',
  },
  {
    id: 'sermon-walking',
    title: 'The Wisdom of Walking',
    speaker: 'The Guzoor Circle',
    duration: '8:15',
    type: 'audio',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    description:
      'On pilgrimage as a path of transformation, and the small daily walks that become prayer.',
  },
]

export function getSermonById(id: string): Sermon | undefined {
  return sermons.find((s) => s.id === id)
}
