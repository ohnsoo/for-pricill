import { motion } from 'framer-motion'
import { ArrowDown, Heart } from 'lucide-react'
import LilacBouquet from './LilacBouquet'
import MusicControl from './MusicControl'

const fadeIn = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

function Hero({ fullName, hero, music }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/55 px-4 py-2 text-sm font-medium text-violet-600 shadow-lg shadow-purple-200/30 backdrop-blur-md"
        >
          <Heart className="h-4 w-4 fill-violet-300 text-violet-400" />
          For {fullName}
        </motion.div>

        <LilacBouquet />

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.14, delayChildren: 0.25 }}
          className="mx-auto max-w-4xl"
        >
          <motion.h1
            variants={fadeIn}
            className="text-balance text-5xl font-bold leading-tight text-purple-800 sm:text-6xl lg:text-7xl"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-700 sm:text-xl"
          >
            {hero.subtitle}
          </motion.p>
          <motion.p
            variants={fadeIn}
            className="mx-auto mt-3 max-w-xl text-sm leading-7 text-purple-600 sm:text-base"
          >
            {hero.note}
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="mt-10 flex justify-center"
          >
            <MusicControl
              audioSrc={music.audioSrc}
              audioElement={music.audioElement}
              songTitle={music.songTitle}
              photos={music.photos}
            />
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-14 flex justify-center text-violet-400"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
