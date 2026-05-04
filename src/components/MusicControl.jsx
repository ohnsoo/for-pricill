import { useEffect, useRef, useState } from 'react'
import {
  Pause,
  Play,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react'

function CrayonLoveLabel() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="h-full w-full">
      <circle cx="50" cy="50" r="47" fill="#F8F4FF" />
      <g
        fill="none"
        stroke="#A78BFA"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 66 C18 51 20 38 22 25" strokeWidth="7" opacity="0.3" />
        <path
          d="M34 61 C29 57 29 47 35 43 C43 37 52 43 51 52 C51 62 41 68 34 61Z"
          strokeWidth="7"
          opacity="0.3"
        />
        <path
          d="M55 43 C58 52 62 59 66 65 C70 57 74 49 78 41"
          strokeWidth="7"
          opacity="0.3"
        />
        <path
          d="M83 55 C94 54 94 41 85 40 C76 40 75 57 87 62"
          strokeWidth="7"
          opacity="0.3"
        />
      </g>
      <g
        fill="none"
        stroke="#7C3AED"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 66 C18 51 20 38 22 25" strokeWidth="4" />
        <path
          d="M34 61 C29 57 29 47 35 43 C43 37 52 43 51 52 C51 62 41 68 34 61Z"
          strokeWidth="4"
        />
        <path
          d="M55 43 C58 52 62 59 66 65 C70 57 74 49 78 41"
          strokeWidth="4"
        />
        <path
          d="M83 55 C94 54 94 41 85 40 C76 40 75 57 87 62"
          strokeWidth="4"
        />
      </g>
      <circle cx="50" cy="50" r="5" fill="#C4B5FD" />
      <circle cx="50" cy="50" r="2.5" fill="#6D28D9" />
    </svg>
  )
}

function VinylRecord({ isPlaying }) {
  return (
    <div
      className={`relative h-24 w-24 rounded-full shadow-[0_16px_38px_rgba(70,35,110,0.26)] ${
        isPlaying ? 'animate-[spin_5.5s_linear_infinite]' : ''
      }`}
      style={{
        background:
          'radial-gradient(circle at center, transparent 0 22%, rgba(255,255,255,0.08) 23% 24%, transparent 25% 34%, rgba(255,255,255,0.08) 35% 36%, transparent 37% 50%, rgba(255,255,255,0.07) 51% 52%, transparent 53%), conic-gradient(from 90deg, #111018, #312342, #111018, #1d1529, #111018)',
      }}
    >
      <div className="absolute inset-[1.35rem] rounded-full shadow-inner shadow-purple-900/30">
        <CrayonLoveLabel />
      </div>
      <div className="absolute inset-0 rounded-full ring-1 ring-black/10" />
    </div>
  )
}

function PaperPhotoFrame({ src, alt, className }) {
  if (!src) {
    return null
  }

  return (
    <figure
      className={`rounded-[1.15rem] bg-[#fff8ef] p-2 pb-6 shadow-[0_18px_38px_rgba(126,87,194,0.22),inset_0_0_0_1px_rgba(255,255,255,0.88)] ring-1 ring-purple-200/70 ${className}`}
    >
      <div className="overflow-hidden rounded-xl bg-violet-50">
        <img
          src={src}
          alt={alt}
          className="aspect-[4/5] h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </figure>
  )
}

function SketchHeart({ className }) {
  return (
    <svg viewBox="0 0 88 88" aria-hidden="true" className={className}>
      <path
        d="M45 72 C27 59 13 46 12 29 C11 16 24 9 36 18 C40 21 43 26 45 31 C47 26 51 20 56 17 C69 9 82 18 79 32 C76 49 61 61 45 72Z"
        fill="#111111"
      />
      <path
        d="M25 22 C19 27 18 36 21 43"
        fill="none"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeWidth="2"
        opacity="0.16"
      />
    </svg>
  )
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) {
    return '0:00'
  }

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0')

  return `${minutes}:${remainingSeconds}`
}

function MusicControl({ audioSrc, audioElement, songTitle, photos = [] }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (!audioSrc && !audioElement) {
      audioRef.current = null
      return undefined
    }

    let audio
    let shouldPauseOnCleanup = false

    if (audioElement) {
      audio = audioElement
    } else {
      audio = new Audio(audioSrc)
      audio.loop = true
      audio.volume = 0.45
      shouldPauseOnCleanup = true
    }

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration || 0)
    const updatePlaying = () => setIsPlaying(!audio.paused)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('durationchange', updateDuration)
    audio.addEventListener('play', updatePlaying)
    audio.addEventListener('pause', updatePlaying)
    audioRef.current = audio
    updateTime()
    updateDuration()
    updatePlaying()

    return () => {
      if (shouldPauseOnCleanup) {
        audio.pause()
      }
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('durationchange', updateDuration)
      audio.removeEventListener('play', updatePlaying)
      audio.removeEventListener('pause', updatePlaying)
      audioRef.current = null
    }
  }, [audioSrc, audioElement])

  const toggleMusic = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setIsPlaying(false)
    }
  }

  const seekBy = (seconds) => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    const nextTime = Math.min(
      Math.max(audio.currentTime + seconds, 0),
      duration || audio.duration || 0,
    )

    audio.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  const seekTo = (event) => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    const nextTime = Number(event.target.value)
    audio.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  return (
    <div className="w-[min(100%,43rem)] rounded-[2rem] border border-purple-200/80 bg-white/60 px-4 py-5 shadow-lavender backdrop-blur-md sm:px-7">
      <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-2 sm:gap-6">
        <div className="flex justify-center pt-8 sm:pt-10">
          <PaperPhotoFrame
            src={photos[0]}
            alt="Memory photo 1"
            className="w-20 -rotate-3 sm:w-28 md:w-32"
          />
        </div>

        <div className="flex min-w-0 flex-col items-center">
          <button
            type="button"
            onClick={toggleMusic}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            title={audioSrc ? 'Play or pause music' : 'Add love-wave-to-earth.mp3 first'}
            className="rounded-full outline-none transition hover:scale-105 focus:ring-4 focus:ring-violet-200"
          >
            <VinylRecord isPlaying={isPlaying} />
          </button>

          <div className="mt-3 max-w-52 text-center sm:max-w-64">
            <p className="truncate text-sm font-bold text-purple-800 sm:text-base">
              {songTitle}
            </p>
            <p className="text-xs text-purple-600/75">
              {audioSrc
                ? isPlaying
                  ? 'music is playing'
                  : 'tap vinyl to play'
                : 'add the music file first'}
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-8 sm:pt-10">
          <PaperPhotoFrame
            src={photos[1]}
            alt="Memory photo 2"
            className="w-20 rotate-3 sm:w-28 md:w-32"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 sm:gap-5">
        <SketchHeart className="hidden h-14 w-14 shrink-0 -rotate-12 sm:block" />

        <div className="flex items-center justify-center gap-2 rounded-full bg-white/55 px-3 py-2 shadow-lg shadow-purple-200/30">
          <Shuffle className="h-5 w-5 text-black" strokeWidth={3} />
          <button
            type="button"
            onClick={() => seekBy(-10)}
            aria-label="Mundur 10 detik"
            className="flex h-10 w-10 items-center justify-center rounded-full text-black transition hover:bg-purple-100 focus:outline-none focus:ring-4 focus:ring-violet-200"
          >
            <SkipBack className="h-6 w-6 fill-black" strokeWidth={3} />
          </button>
          <button
            type="button"
            onClick={toggleMusic}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg shadow-purple-200/50 transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-violet-200"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 fill-white" strokeWidth={3} />
            ) : (
              <Play className="ml-1 h-6 w-6 fill-white" strokeWidth={3} />
            )}
          </button>
          <button
            type="button"
            onClick={() => seekBy(10)}
            aria-label="Maju 10 detik"
            className="flex h-10 w-10 items-center justify-center rounded-full text-black transition hover:bg-purple-100 focus:outline-none focus:ring-4 focus:ring-violet-200"
          >
            <SkipForward className="h-6 w-6 fill-black" strokeWidth={3} />
          </button>
          <Repeat2 className="h-5 w-5 text-black" strokeWidth={3} />
        </div>

        <SketchHeart className="hidden h-14 w-14 shrink-0 rotate-12 sm:block" />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Volume2 className="h-4 w-4 shrink-0 text-black" strokeWidth={3} />
        <span className="w-10 text-right text-xs font-semibold text-purple-700">
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="1"
          value={Math.min(currentTime, duration || currentTime)}
          onChange={seekTo}
          disabled={!audioSrc || !duration}
          aria-label="Atur posisi lagu"
          className="h-1 flex-1 cursor-pointer accent-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <span className="w-10 text-left text-xs font-semibold text-purple-700">
          {duration ? formatTime(duration) : '0:00'}
        </span>
      </div>
    </div>
  )
}

export default MusicControl
