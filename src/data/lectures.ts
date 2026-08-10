import type { Lecture } from '../types'

export const lectures: Lecture[] = [
  {
    id: 'lecture-bayt-almaqdis-1',
    title: 'The Centrality of Palestine in the Message of the Muslim',
    arabicTitle: 'مركزية فلسطين في رسالة الإنسان المسلم',
    speaker: 'Bayt al-Maqdis Forum',
    series: 'Bayt al-Maqdis Series',
    date: '2024-01-31',
    description:
      "A lecture joining intellectual grounding with the spiritual and unseen weight of Jerusalem's cause, and its centrality in the message of the Muslim — affirming the standing of Jerusalem in the mission of the prophets and its place in the project of the ummah's revival.",
  },
  {
    id: 'lecture-bayt-almaqdis-2',
    title: 'Zionist Corruption: Between Solutions and Supplanting',
    arabicTitle: 'الفساد الصهيوني بين الحلول والإحلال وثغور المرابطة المقدسية',
    speaker: 'Bayt al-Maqdis Forum',
    series: 'Bayt al-Maqdis Series',
    date: '2024-01-31',
    description:
      "An intellectual approach to understanding the nature of the conflict with the Zionist entity, reading the corruption the Qur'an describes as supplanting, and the standing watch required at its frontiers today.",
  },
  {
    id: 'lecture-bayt-almaqdis-3',
    title: 'The Liberation of Jerusalem and the Rightly-Guided Caliphate',
    arabicTitle: 'تحرير بيت المقدس وقيام الخلافة الراشدة المنشودة',
    speaker: 'Bayt al-Maqdis Forum',
    series: 'Bayt al-Maqdis Series',
    date: '2024-01-31',
    description:
      "Grounding the project of liberation — in principle, in method, and in practice — by clearing away doubts and resting on Qur'anic certainty and prophetic glad tidings, to shape a sound intellectual approach to the future of the conflict.",
  },
  {
    id: 'lecture-tazkiyah',
    title: 'He Has Succeeded Who Purifies It',
    arabicTitle: 'قد أفلح من زكّاها',
    speaker: 'Shaykh Mudathir al-Awad',
    series: 'Circles of Thought and Remembrance',
    date: '2025-02-13',
    description:
      'A lecture on the purification of the soul (tazkiyah) — an evening meant to water the spirit and lift the heart, held within the Circles of Thought and Remembrance.',
  },
  {
    id: 'lecture-manazil-alruh',
    title: 'Stations of the Soul on Its Way to Ramadan',
    arabicTitle: 'منازل الروح في طريقها إلى رمضان',
    speaker: 'Uways Ghanem',
    date: '2025-03-13',
    description:
      "A lecture preparing the heart for Ramadan — the stages a soul passes through as it turns toward the month of fasting.",
  },
  {
    id: 'lecture-quran-manhaj',
    title: 'The Qur’an and the Method of Life',
    arabicTitle: 'القرآن ومنهاج الحياة',
    speaker: 'Shaykh Uthman Warraq',
    date: '2025-03-20',
    description:
      "On the Qur'an not as a book to be recited alone, but as a method for living — how revelation shapes the pattern of a life.",
  },
  {
    id: 'lecture-tawhidic-methods',
    title: 'Approaches of the Exegetes and the Tauhidic Method',
    arabicTitle: 'إتجاهات ومناهج المفسرين ومنهج الشيخ حسن الترابي في التفسير التوحيدي',
    speaker: 'Dr. Alaa al-Din Othman',
    series: 'Tawhidic Tafsir Series',
    date: '2025-06-22',
    description:
      "Surveying the schools of Qur'anic exegesis before turning to Dr. Hassan al-Turabi's own method — the tauhidic reading that treats the Qur'an as one united vision rather than scattered verses.",
  },
]

export function getLectureById(id: string): Lecture | undefined {
  return lectures.find((l) => l.id === id)
}
