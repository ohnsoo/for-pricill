import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import CustomCursor from './components/CustomCursor'
import Ending from './components/Ending'
import FloatingHearts from './components/FloatingHearts'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import LoveLetter from './components/LoveLetter'
import MemoryBackground from './components/MemoryBackground'
import OpeningLetter from './components/OpeningLetter'
import OpeningRevealEffect from './components/OpeningRevealEffect'
import Surprise from './components/Surprise'
import Timeline from './components/Timeline'
import VideoMessage from './components/VideoMessage'

const imageModules = import.meta.glob('./assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const galleryModules = import.meta.glob(
  './assets/images/gallery/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
)

const playerPhotoModules = import.meta.glob(
  './assets/images/player/*.{jpg,jpeg,png,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
)

// ganti video di sini: taruh file video lokal di src/assets/videos/birthday-video.mp4
const videoModules = import.meta.glob('./assets/videos/birthday-video.*', {
  eager: true,
  query: '?url',
  import: 'default',
})

// ganti musik di sini: taruh file musik lokal di src/assets/music/love-wave-to-earth.mp3
const musicModules = import.meta.glob('./assets/music/*.{mp3,wav,ogg,m4a}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const sortedAssetUrls = (modules) =>
  Object.entries(modules)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([, url]) => url)

const memoryPhotoUrls = sortedAssetUrls(imageModules)
const galleryPhotoUrls = sortedAssetUrls(galleryModules)
const playerPhotoUrls = sortedAssetUrls(playerPhotoModules)
const [videoSrc = ''] = sortedAssetUrls(videoModules)
const musicSrc =
  musicModules['./assets/music/love-wave-to-earth.mp3'] ??
  musicModules['./assets/music/birthday-song.mp3'] ??
  sortedAssetUrls(musicModules)[0] ??
  ''

// ganti nama di sini
const birthdayGift = {
  partnerName: 'Pricill',
  partnerFullName: 'Pricilla Selma Melinda Sumantra',
  hero: {
    title: 'Happy Birthday, Pricill',
    subtitle: 'I made this little website only for you.',
    note: 'Today is your special day, and I hope this makes you smile.',
  },
  timeline: [
    {
      title: 'The Day We Met',
      text: 'A simple day that became special because you came into my life.',
    },
    {
      title: 'Our First Memory',
      text: 'Some moments stay in my heart longer than I expected.',
    },
    {
      title: 'The Little Things',
      text: 'Your smile, your voice, and your presence mean so much to me.',
    },
    {
      title: 'Today',
      text: 'This day is about you, and I want you to feel loved.',
    },
  ],
  // ganti foto di sini
  galleryPhotos: [
    { title: 'Photo 1', caption: 'Photo 1', src: galleryPhotoUrls[0] ?? '' },
    { title: 'Photo 2', caption: 'Photo 2', src: galleryPhotoUrls[1] ?? '' },
    { title: 'Photo 3', caption: 'Photo 3', src: galleryPhotoUrls[2] ?? '' },
    { title: 'Photo 4', caption: 'Photo 4', src: galleryPhotoUrls[3] ?? '' },
    { title: 'Photo 5', caption: 'Photo 5', src: galleryPhotoUrls[4] ?? '' },
    { title: 'Photo 6', caption: 'Photo 6', src: galleryPhotoUrls[5] ?? '' },
  ],
  // ganti isi surat di sini
  loveLetter: `Dear Pricill,

Happy birthday. I hope this simple gift reminds you how special you are to me. Thank you for being present in my life, for every smile, every little moment, and every memory we have shared.

You deserve to be loved, appreciated, and celebrated today.

With love,
Bocil`,
  videoSrc,
  musicSrc,
  songTitle: 'love. - wave to earth',
  playerPhotos: playerPhotoUrls,
  surpriseMessage:
    'I love you more than words can say. Happy birthday, my favorite person.',
}

function App() {
  const [heroAudio, setHeroAudio] = useState(null)
  const [isGiftOpen, setIsGiftOpen] = useState(false)
  const [openingEffectKey, setOpeningEffectKey] = useState(0)
  const [showEnding, setShowEnding] = useState(false)

  const openGift = () => {
    let audio = heroAudio

    if (!audio && birthdayGift.musicSrc) {
      audio = new Audio(birthdayGift.musicSrc)
      audio.loop = true
      audio.volume = 0.45
      setHeroAudio(audio)
    }

    audio?.play().catch(() => {
      // Browser can still block autoplay; the visible player remains usable.
    })

    confetti({
      particleCount: 72,
      spread: 78,
      startVelocity: 30,
      origin: { x: 0.5, y: 0.56 },
      colors: ['#A78BFA', '#C4B5FD', '#DDD6FE', '#F5D0FE', '#FFFFFF'],
      ticks: 180,
      scalar: 0.9,
    })
    confetti({
      particleCount: 34,
      spread: 112,
      startVelocity: 22,
      origin: { x: 0.5, y: 0.46 },
      colors: ['#C084FC', '#E9D5FF', '#FFFFFF'],
      ticks: 150,
      scalar: 0.65,
    })

    setOpeningEffectKey(Date.now())
    setIsGiftOpen(true)
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    })
  }

  return (
    <div className="custom-cursor-enabled min-h-screen bg-gradient-to-br from-purple-100 via-violet-100 to-pink-50 font-sans text-purple-950">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {!isGiftOpen ? (
          <OpeningLetter
            key="opening"
            onOpen={openGift}
          />
        ) : (
          <motion.div
            key="birthday-page"
            className="relative min-h-screen overflow-hidden"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <MemoryBackground photos={memoryPhotoUrls} />
            <FloatingHearts />
            <main className="relative z-10">
              <Hero
                fullName={birthdayGift.partnerFullName}
                hero={birthdayGift.hero}
                music={{
                  audioSrc: birthdayGift.musicSrc,
                  songTitle: birthdayGift.songTitle,
                  photos: birthdayGift.playerPhotos,
                  audioElement: heroAudio,
                }}
              />
              <Timeline items={birthdayGift.timeline} />
              <Gallery photos={birthdayGift.galleryPhotos} />
              <LoveLetter letter={birthdayGift.loveLetter} />
              <VideoMessage videoSrc={birthdayGift.videoSrc} />
              <Surprise
                message={birthdayGift.surpriseMessage}
                onRevealEnding={() => setShowEnding(true)}
              />
              <AnimatePresence>
                {showEnding && <Ending />}
              </AnimatePresence>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {openingEffectKey > 0 && (
          <OpeningRevealEffect
            key={openingEffectKey}
            onComplete={() => setOpeningEffectKey(0)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
