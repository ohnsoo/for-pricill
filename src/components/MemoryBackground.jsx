import { motion } from 'framer-motion'

const placements = [
  { top: '8rem', right: '4vw', width: '150px', rotate: '7deg', delay: 0.8 },
  { top: '22rem', left: '4vw', width: '178px', rotate: '-8deg', delay: 0 },
  { top: '48rem', right: '2vw', width: '188px', rotate: '-6deg', delay: 0.4 },
  { top: '78rem', left: '7vw', width: '150px', rotate: '5deg', delay: 1.1 },
  { top: '112rem', right: '7vw', width: '155px', rotate: '-4deg', delay: 0.2 },
  { top: '148rem', left: '3vw', width: '180px', rotate: '6deg', delay: 1.3 },
  { top: '188rem', right: '8vw', width: '150px', rotate: '-8deg', delay: 0.6 },
  { top: '228rem', left: '6vw', width: '165px', rotate: '7deg', delay: 1.7 },
  { top: '270rem', right: '4vw', width: '175px', rotate: '-5deg', delay: 0.5 },
  { top: '316rem', left: '9vw', width: '155px', rotate: '-6deg', delay: 1.2 },
  { top: '360rem', right: '10vw', width: '160px', rotate: '8deg', delay: 0.7 },
]

function MemoryBackground({ photos }) {
  if (!photos.length) {
    return null
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.62),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(221,214,254,0.5),transparent_30%)]" />

      {placements.map((placement, index) => {
        const src = photos[index % photos.length]

        return (
          <motion.figure
            key={`${src}-${index}`}
            className="absolute opacity-[0.70] blur-[0.1px] sm:opacity-[0.79] lg:opacity-[1]"
            style={{
              top: placement.top,
              left: placement.left,
              right: placement.right,
              width: `clamp(118px, 12vw, ${placement.width})`,
              rotate: placement.rotate,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 10 + index * 0.35,
              delay: placement.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="rounded-[1.1rem] bg-[#fffaf4] p-2 pb-7 shadow-[0_18px_45px_rgba(126,87,194,0.28),inset_0_0_0_1px_rgba(255,255,255,0.9)] ring-1 ring-purple-100/80">
              <div className="overflow-hidden rounded-lg bg-violet-50 shadow-inner">
                <img
                  src={src}
                  alt=""
                  className="aspect-[3/4] w-full object-cover saturate-[0.86] sepia-[0.04]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.figure>
        )
      })}

      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-white/18 to-pink-50/34" />
    </div>
  )
}

export default MemoryBackground
