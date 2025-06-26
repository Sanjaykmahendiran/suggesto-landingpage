"use client"

import Link from "next/link"
import { Download, UserPlus, Play, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function SuggestoStepsSection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get movie recommendations in 3 easy steps
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Simply tell us your mood and get instant movie suggestions. Our app uses advanced AI technology to quickly and accurately recommend the perfect movie for any occasion
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          {
            number: "01",
            title: "Download app",
            description: "Download the Suggesto app Mac, or Android devices.",
            icons: ["📱", "💻", "🍎"],
            image: "/api/placeholder/300/400"
          },
          {
            number: "02", 
            title: "Create account",
            description: "Sign up for a free Suggesto account. One account for all devices.",
            badge: "Create a account",
            image: "/api/placeholder/300/400"
          },
          {
            number: "03",
            title: "You're ready to go",
            description: "Enjoy the amazing Suggesto experience and start exploring movies today.",
            link: "Check our FAQs for help",
            image: "/api/placeholder/300/400"
          }
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#2b2b2b] border rounded-xl p-8 text-center relative overflow-hidden shadow-sm"
          >
            {/* Step Number */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-black rounded-full font-bold text-lg mb-6">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              {step.description}
            </p>

            {/* Icons for step 1 */}
            {step.icons && (
              <div className="flex justify-center gap-4 mb-6">
                {step.icons.map((icon, i) => (
                  <div key={i} className="text-2xl">
                    {icon}
                  </div>
                ))}
              </div>
            )}

            {/* Badge for step 2 */}
            {step.badge && (
              <div className="inline-block bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                {step.badge}
              </div>
            )}

            {/* Link for step 3 */}
            {step.link && (
              <div className="mb-6">
                <Link 
                  href="/faq" 
                  className="bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent font-medium hover:underline"
                >
                  {step.link}
                </Link>
              </div>
            )}

            {/* Phone Mockup */}
            <div className="relative mx-auto w-48 h-80 bg-black rounded-3xl p-2 shadow-xl">
              <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
                
                {/* Screen Content */}
                <div className="pt-8 px-4 h-full">
                  {index === 0 && (
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] rounded-lg p-4 text-white text-center">
                        <div className="text-2xl mb-2">🎬</div>
                        <div className="font-bold">Suggesto</div>
                        <div className="text-sm opacity-90">Movie Recommendations</div>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-3 text-center">
                        <div className="font-semibold text-sm text-white">Install</div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="space-y-4 bg-gradient-to-b from-[#b56bbc] to-[#7a71c4] rounded-lg p-4 text-white h-64">
                      <div className="text-center">
                        <div className="text-sm opacity-90 mb-4">Find Your Next Favorite Movie</div>
                        <div className="space-y-3">
                          <input 
                            type="email" 
                            placeholder="Enter email address" 
                            className="w-full p-2 rounded text-gray-900 text-sm"
                            defaultValue="user@email.com"
                          />
                          <input 
                            type="password" 
                            placeholder="Enter your Password" 
                            className="w-full p-2 rounded text-gray-900 text-sm"
                            defaultValue="••••••••••"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="font-bold text-lg mb-4 text-white">Discover Your Movies</div>
                        <div className="text-sm bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent mb-4">🎬 Your movie journey starts here</div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-[#7a71c4]/20 rounded-lg p-2 text-center">
                          <div className="bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent font-medium text-xs">Movie Categories</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-700 rounded p-2 text-center">
                            <div className="text-xl">🎭</div>
                            <div className="text-xs text-gray-300">Drama</div>
                          </div>
                          <div className="bg-gray-700 rounded p-2 text-center">
                            <div className="text-xl">🎬</div>
                            <div className="text-xs text-gray-300">Action</div>
                          </div>
                          <div className="bg-gray-700 rounded p-2 text-center">
                            <div className="text-xl">😂</div>
                            <div className="text-xs text-gray-300">Comedy</div>
                          </div>
                          <div className="bg-gray-700 rounded p-2 text-center">
                            <div className="text-xl">💕</div>
                            <div className="text-xs text-gray-300">Romance</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}