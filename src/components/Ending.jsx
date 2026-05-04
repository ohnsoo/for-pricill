import { motion } from 'framer-motion'
import { ArrowUp, Heart } from 'lucide-react'

function Ending() {
  const backToTop = () => {
    document
      .getElementById('hero')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.section
      id="ending"
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="section-shell pb-28 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className="glass-card mx-auto max-w-5xl overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-14"
      >
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-purple-200 bg-white/60 text-violet-500 shadow-lg shadow-purple-200/50 backdrop-blur-md">
          <Heart className="h-8 w-8 fill-violet-200" />
        </div>
        <h2 className="text-balance text-4xl font-bold text-purple-800 sm:text-5xl">
          Happy Birthday, Sayang
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-purple-700 sm:text-lg">
          Thank you for being you. I hope this day feels as special as you are
          to me.
        </p>
        <button
          type="button"
          onClick={backToTop}
          className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-purple-200 bg-white/65 px-7 py-3 text-base font-semibold text-violet-600 shadow-lg shadow-purple-200/40 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/80 focus:outline-none focus:ring-4 focus:ring-violet-200"
        >
          Back to Top
          <ArrowUp className="h-5 w-5" />
        </button>
      </motion.div>
    </motion.section>
  )
}

export default Ending
