import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
  type SyntheticEvent,
} from 'react'
import type { Sermon } from '../types'
import { PauseIcon, PlayIcon } from './icons'
import { cn } from '../lib/cn'
import { useLanguage } from '../context/LanguageContext'

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

interface MediaPlayerProps {
  sermon: Sermon
  autoPlay?: boolean
}

export function MediaPlayer({ sermon, autoPlay = false }: MediaPlayerProps) {
  const { t } = useLanguage()
  const mediaRef = useRef<HTMLMediaElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [loading, setLoading] = useState(true)

  const togglePlay = useCallback(() => {
    const media = mediaRef.current
    if (!media) return
    if (media.paused) {
      void media.play()
    } else {
      media.pause()
    }
  }, [])

  const seek = (value: number) => {
    const media = mediaRef.current
    if (!media || !Number.isFinite(duration)) return
    media.currentTime = value
    setCurrent(value)
  }

  useEffect(() => {
    setCurrent(0)
    setDuration(0)
    setPlaying(false)
    setLoading(true)
  }, [sermon.id])

  const handlePlay = () => setPlaying(true)
  const handlePause = () => setPlaying(false)
  const handleTimeUpdate = (e: SyntheticEvent<HTMLMediaElement>) =>
    setCurrent(e.currentTarget.currentTime)
  const handleLoadedMetadata = (e: SyntheticEvent<HTMLMediaElement>) => {
    setDuration(e.currentTarget.duration)
    setLoading(false)
  }

  const mediaEvents = {
    onPlay: handlePlay,
    onPause: handlePause,
    onTimeUpdate: handleTimeUpdate,
    onLoadedMetadata: handleLoadedMetadata,
    onEnded: handlePause,
  }

  useEffect(() => {
    if (!autoPlay) return
    const media = mediaRef.current
    if (media) void media.play()
  }, [autoPlay])

  const videoRef = mediaRef as unknown as RefObject<HTMLVideoElement>
  const audioRef = mediaRef as unknown as RefObject<HTMLAudioElement>

  const progress = duration > 0 ? (current / duration) * 100 : 0

  return (
    <div className="overflow-hidden rounded-2xl bg-primary-900 shadow-card ring-1 ring-accent/30">
      {sermon.type === 'video' ? (
        <div className="relative">
          <video
            ref={videoRef}
            src={sermon.src}
            poster={sermon.poster}
            controls
            playsInline
            preload="metadata"
            aria-label={sermon.title}
            className="aspect-video w-full bg-black object-cover"
            {...mediaEvents}
          />
          {!playing && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label={`Play ${sermon.title}`}
              className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/20"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-glow-accent transition-transform duration-300 hover:scale-110">
                <PlayIcon className="ml-1 h-7 w-7" />
              </span>
            </button>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-4 p-5">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? `Pause ${sermon.title}` : `Play ${sermon.title}`}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-glow-accent transition-transform duration-200 hover:scale-105"
          >
            {playing ? (
              <PauseIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="ml-0.5 h-5 w-5" />
            )}
          </button>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3 text-xs text-cream-200/70">
              <span>{formatTime(current)}</span>
              <span className="truncate px-2 font-medium text-cream-100">
                {loading ? t('religion', 'loading') : `${sermon.duration}`}
              </span>
              <span>{formatTime(duration)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={current}
              onChange={(e) => seek(Number(e.target.value))}
              aria-label={`Seek within ${sermon.title}`}
              className={cn(
                'mt-1.5 w-full cursor-pointer accent-accent-300',
              )}
              style={{
                background: `linear-gradient(to right, #B57E54 0%, #B57E54 ${progress}%, rgba(239,236,227,0.15) ${progress}%, rgba(239,236,227,0.15) 100%)`,
              }}
            />
          </div>

          <audio
            ref={audioRef}
            src={sermon.src}
            preload="metadata"
            className="sr-only"
            {...mediaEvents}
          />
        </div>
      )}
    </div>
  )
}
