import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import letterSidePhoto from '../assets/images/letter-side-photo.jpeg'

function LoveLetter({ letter }) {
  return (
    <section id="letter" className="section-shell">
      <p className="section-kicker">From Me</p>
      <h2 className="section-title">A Letter For You</h2>

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="glass-card mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[2rem] lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="p-7 sm:p-10">
          <div className="mb-6 flex items-center justify-between border-b border-purple-200/70 pb-5">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-500">
              Love Letter
            </span>
            <Heart className="h-5 w-5 fill-violet-200 text-violet-400" />
          </div>
          <p className="whitespace-pre-line text-base leading-8 text-purple-800 sm:text-lg">
            {letter}
          </p>
        </div>

        <div className="relative hidden min-h-full border-l border-purple-200/60 bg-gradient-to-br from-violet-100/70 via-white/50 to-pink-50/70 p-8 lg:block">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-200/45 blur-3xl" />
          <div className="absolute -bottom-10 left-8 h-28 w-28 rounded-full bg-pink-200/40 blur-3xl" />
          <motion.figure
            initial={{ opacity: 0, rotate: -2, y: 18 }}
            whileInView={{ opacity: 1, rotate: 2, y: 0 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative mx-auto flex h-full max-h-[34rem] w-full max-w-[20rem] flex-col justify-center rounded-[1.45rem] bg-[#fff8ef]/95 p-3 pb-8 shadow-[0_24px_48px_rgba(126,87,194,0.24),inset_0_0_0_1px_rgba(255,255,255,0.84)] ring-1 ring-purple-200/70"
          >
            <div className="overflow-hidden rounded-[1.05rem] bg-violet-50">
              <img
                src={letterSidePhoto}
                alt="Funny memory photo"
                className="aspect-[4/5] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.figure>
        </div>
      </motion.div>
    </section>
  )
}

export default LoveLetter
