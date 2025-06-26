"use client"

import Link from "next/link"
import { Film, Users, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function SuggestoImpactSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#7a71c4]/20 text-primary font-medium text-sm tracking-wide">
          WHAT USERS LOVE ABOUT SUGGESTO
        </div>
        <h3 className="text-4xl md:text-5xl font-bold  leading-tight max-w-4xl mx-auto">
          Your Movie Time, <span className="bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent">Maximized with AI</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <Sparkles className="text-primary mr-2" size={40} />,
            value: "80%",
            label: "SMARTER PICKS",
            title: "AI-Powered Discovery",
            content: (
              <>
                4 out of 5 users found <strong>better movie matches</strong> within 5 minutes using Suggesto’s recommendation engine.
              </>
            ),
            caseStudySlug: "ai-discovery",
          },
          {
            icon: <Users className="text-primary mr-2" size={40} />,
            value: "90%",
            label: "BETTER TOGETHER",
            title: "Group Suggestions",
            content: (
              <>
                90% of groups said Suggesto <strong>made movie nights easier</strong> by helping them agree on what to watch.
              </>
            ),
            caseStudySlug: "group-watch-success",
          },
          {
            icon: <Film className="text-primary mr-2" size={40} />,
            value: "3x",
            label: "MORE WATCHED",
            title: "Watchlist Sync",
            content: (
              <>
                Users reported watching <strong>3x more movies</strong> from their list after syncing Suggesto across devices.
              </>
            ),
            caseStudySlug: "watchlist-boost",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
            className="bg-[#2b2b2b] border rounded-xl p-10 flex flex-col shadow-sm"
          >
            <div className="mb-6 text-center">
              <div className="text-3xl font-semibold  uppercase tracking-wide">{card.title}</div>
            </div>
            <div className="flex items-center justify-center mb-2">
              {card.icon}
              <span className="bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent text-7xl font-bold">{card.value}</span>
            </div>
            <div className="text-center text-sm text-gray-300 uppercase font-semibold mb-6 tracking-wider">
              {card.label}
            </div>
            <p className="text-center text-gray-400 text-base leading-relaxed mb-8">{card.content}</p>
            <div className="mt-auto text-center">
              <Link
                href={`/stories/${card.caseStudySlug}`}
                className="inline-flex items-center bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent font-semibold hover:underline hover:text-black"
              >
                See how <ArrowRight className="ml-2 text-[#7a71c4]" size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
