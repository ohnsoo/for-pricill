import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import videoSidePhoto from '../assets/images/video-side-photo.jpeg'

function VideoMessage({ videoSrc }) {
  return (
    <section id="video" className="section-shell">
      <p className="section-kicker">A Small Message</p>
      <h2 className="section-title">A Little Video For You</h2>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass-card mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[2rem] p-3 lg:grid-cols-[1fr_18rem]"
      >
        <div className="aspect-video overflow-hidden rounded-[1.5rem]">
          {videoSrc ? (
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
            >
              <source src={videoSrc} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center border border-purple-200/70 bg-gradient-to-br from-white/65 via-violet-100/75 to-pink-50/80 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/75 text-violet-500 shadow-lg shadow-purple-200/50">
                <Play className="ml-1 h-9 w-9 fill-violet-300" />
              </div>
              <p className="mt-5 text-base font-semibold text-purple-700 sm:text-lg">
                Your video will be here.
              </p>
            </div>
          )}
        </div>

        <div className="hidden border-l border-purple-200/60 bg-gradient-to-b from-violet-50/80 to-pink-50/70 p-5 lg:flex lg:items-center lg:justify-center">
          <motion.figure
            initial={{ opacity: 0, rotate: 2, y: 14 }}
            whileInView={{ opacity: 1, rotate: -2, y: 0 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="w-full rounded-[1.35rem] bg-[#fff8ef]/95 p-3 pb-8 shadow-[0_22px_42px_rgba(126,87,194,0.22),inset_0_0_0_1px_rgba(255,255,255,0.82)] ring-1 ring-purple-200/70"
          >
            <div className="overflow-hidden rounded-[1rem] bg-violet-50">
              <img
                src={videoSidePhoto}
                alt="Tiny polaroid memories"
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

export default VideoMessage
