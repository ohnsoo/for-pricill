import { motion } from 'framer-motion'
import { Gift, Heart, Smile, Sparkles } from 'lucide-react'

const icons = [Heart, Sparkles, Smile, Gift]

function Timeline({ items }) {
  return (
    <section id="story" className="section-shell">
      <p className="section-kicker">Our Story</p>
      <h2 className="section-title">Our Little Story</h2>

      <div className="relative mx-auto mt-12 max-w-3xl">
        <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-transparent via-purple-200 to-transparent sm:block" />

        <div className="space-y-6">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length]

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative grid gap-4 sm:grid-cols-[2.75rem_1fr]"
              >
                <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-white/70 text-violet-500 shadow-lg shadow-purple-200/40 backdrop-blur-md sm:flex">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="glass-card rounded-[1.75rem] p-6 sm:p-7">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-violet-500 sm:hidden">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-800">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-purple-700/80">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Timeline
