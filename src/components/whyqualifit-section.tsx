"use client"

import Image from "next/image"
import { useState, useCallback, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import slide1 from "@/assets/whyqualifit/1.webp"
import slide2 from "@/assets/whyqualifit/2.webp"
import slide3 from "@/assets/whyqualifit/3.webp"
import slide4 from "@/assets/whyqualifit/4.webp"
import slide5 from "@/assets/whyqualifit/5.webp"
import slide6 from "@/assets/whyqualifit/6.webp"
import slide7 from "@/assets/whyqualifit/7.webp"
import slide8 from "@/assets/whyqualifit/8.webp"

const slides = [
  {
    src: slide1,
    gradient: "from-green-500/20 to-green-500/10",
    title: "AI-Powered Interviews",
  },
  {
    src: slide2,
    gradient: "from-purple-500/20 to-purple-500/10",
    title: "Automated Scoring",
  },
  {
    src: slide3,
    gradient: "from-amber-500/20 to-amber-500/10",
    title: "ATS-Compliant Resume Builder",
  },
  {
    src: slide4,
    gradient: "from-blue-500/20 to-blue-500/10",
    title: "Job Role Exploration",
  },
  {
    src: slide5,
    gradient: "from-purple-500/20 to-purple-500/10",
    title: "99% Accuracy",
  },
  {
    src: slide6,
    gradient: "from-pink-500/20 to-pink-500/10",
    title: "Time Optimization",
  },
  {
    src: slide7,
    gradient: "from-indigo-500/20 to-indigo-500/10",
    title: "Cost-Effective Solution",
  },
  {
    src: slide8,
    gradient: "from-teal-500/20 to-teal-500/10",
    title: "Data Security Assurance",
  },
]

function WhyQualifitSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % (isMobile ? slides.length : slides.length - 4))
  }, [isMobile])

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + (isMobile ? slides.length : slides.length - 4)) % (isMobile ? slides.length : slides.length - 4),
    )
  }, [isMobile])

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 2000)
    }
  }, [isPaused, nextSlide])

  useEffect(() => {
    resetInterval()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [resetInterval])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-16">
        <span className="text-primary text-lg font-semibold uppercase tracking-wide">WHY QUALIFIT?</span>
        <div className="relative">
          <h3 className="text-2xl sm:text-4xl font-bold mt-2">Tailored Career Solutions for You</h3>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[380px] h-2 sm:h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-300 blur-md" />
        </div>
      </div>
      <div className="relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * (isMobile ? 100 : 20)}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full sm:w-1/5 flex-shrink-0 px-2">
              <div className="relative rounded-xl overflow-hidden group">
                {/* Image (Zoom Effect on Hover) */}
                <div className="overflow-hidden">
                  <Image
                    src={slide.src || "/placeholder.svg"}
                    alt={`${slide.title} - Qualifit AI Feature`}
                    width={400}
                    height={300}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                    priority={index < 5}
                  />

                </div>

                {/* Title (Always Visible, Emphasized on Hover) */}
                <div className="absolute pb-8 inset-0 flex items-end">
                  <h4 className="text-2xl font-bold text-white p-4">{slide.title}</h4>
                </div>
              </div>

            </div>
          ))}
        </div>

        <button
          onClick={() => {
            prevSlide()
            resetInterval()
          }}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 shadow-md hover:bg-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
        </button>
        <button
          onClick={() => {
            nextSlide()
            resetInterval()
          }}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 shadow-md hover:bg-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
        </button>
      </div>
      <div className="mt-4 sm:mt-8 flex justify-center gap-2">
        {[...Array(isMobile ? slides.length : slides.length - 4)].map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              resetInterval()
            }}
            className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-primary w-6 sm:w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default WhyQualifitSection

