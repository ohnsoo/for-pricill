import { useState } from 'react'
import confetti from 'canvas-confetti'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import BalloonBurst from './BalloonBurst'
import BirthdayCake from './BirthdayCake'
import SurpriseBalloons from './SurpriseBalloons'

function Surprise({ message, onRevealEnding }) {
  const [isOpen, setIsOpen] = useState(false)
  const [balloonBurstId, setBalloonBurstId] = useState(0)

  const launchSurprise = () => {
    setIsOpen(true)
    onRevealEnding?.()
    const nextBalloonBurstId = Date.now()
    setBalloonBurstId(nextBalloonBurstId)

    const colors = ['#C4B5FD', '#DDD6FE', '#F5D0FE', '#FFFFFF', '#E9D5FF']

    confetti({
      particleCount: 90,
      spread: 72,
      startVelocity: 32,
      scalar: 0.88,
      origin: { y: 0.68 },
      colors,
    })

    window.setTimeout(() => {
      confetti({
        particleCount: 55,
        angle: 60,
        spread: 55,
        origin: { x: 0.15, y: 0.76 },
        colors,
      })
      confetti({
        particleCount: 55,
        angle: 120,
        spread: 55,
        origin: { x: 0.85, y: 0.76 },
        colors,
      })
    }, 180)

    window.setTimeout(() => {
      setBalloonBurstId((currentId) =>
        currentId === nextBalloonBurstId ? 0 : currentId,
      )
    }, 6800)
  }

  return (
    <section id="surprise" className="section-shell scroll-mt-8">
      <AnimatePresence>
        {balloonBurstId > 0 && <BalloonBurst key={balloonBurstId} />}
      </AnimatePresence>

      <p className="section-kicker">One More Thing</p>
      <h2 className="section-title">One More Surprise</h2>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass-card mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] p-7 text-center sm:p-10"
      >
        <motion.button
          type="button"
          onClick={launchSurprise}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-400 to-purple-500 px-8 py-3 text-base font-semibold text-white shadow-glow transition hover:from-violet-500 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-violet-200"
        >
          Click Me
          <Sparkles className="h-5 w-5" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative mt-10 overflow-hidden rounded-[1.5rem] border border-purple-200/70 bg-white/60 p-7 shadow-lg shadow-purple-200/40 sm:p-9"
            >
              <SurpriseBalloons />
              <BirthdayCake />
              <motion.div
                aria-hidden="true"
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-500"
              >
                <Heart className="h-7 w-7 fill-violet-300" />
              </motion.div>
              <p className="mx-auto max-w-2xl text-balance text-xl font-semibold leading-9 text-purple-800 sm:text-2xl">
                {message}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Surprise
