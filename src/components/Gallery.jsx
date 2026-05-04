import { motion } from 'framer-motion'
import { Image } from 'lucide-react'

function Gallery({ photos }) {
  return (
    <section id="gallery" className="section-shell">
      <p className="section-kicker">Sweet Moments</p>
      <h2 className="section-title">Moments With You</h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.02 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="glass-card group overflow-hidden rounded-[1.5rem] p-3"
          >
            <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.15rem] border border-purple-200/70 bg-gradient-to-br from-violet-100 via-purple-100 to-pink-50">
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-violet-500">
                  <Image className="h-9 w-9" />
                  <span className="text-sm font-semibold">{photo.title}</span>
                </div>
              )}
            </div>
            <figcaption className="px-2 pb-2 pt-4 text-center text-sm font-medium text-purple-700">
              {photo.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
