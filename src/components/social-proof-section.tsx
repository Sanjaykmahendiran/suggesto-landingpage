'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import pic from "@/assets/phone-mockup.png"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function SocialProofSection() {
  const countRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const [movieCount, setMovieCount] = useState(0)
  const [userCount, setUserCount] = useState(0)
  const [suggestionCount, setSuggestionCount] = useState(0)
  const [countryCount, setCountryCount] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCount(setMovieCount, 10000, 2000)
          animateCount(setUserCount, 5000, 2000)
          animateCount(setSuggestionCount, 4200, 2000)
          animateCount(setCountryCount, 12, 2000)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [hasAnimated])

  const animateCount = (setFn: (val: number) => void, end: number, duration: number) => {
    const start = performance.now()

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      setFn(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  return (
    <div className="relative overflow-hidden text-white py-20 px-6 lg:px-24">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Image */}
        <div className="w-full lg:w-1/2 flex justify-center bounce-slow">
          <Image src={pic} alt="Suggesto App Preview" className="rounded-lg" />
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-1/2 space-y-8" ref={countRef}>
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Suggesto: Discover Movies You’ll Love
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Suggesto uses AI to match your mood, taste, and viewing history with the perfect movie recommendations. Skip the endless scrolling—let us find your next favorite film instantly.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
            <div>
              <div className="text-2xl font-bold text-white">{movieCount.toLocaleString()}+</div>
              <div className="text-sm text-gray-400">Movies Analyzed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{userCount.toLocaleString()}+</div>
              <div className="text-sm text-gray-400">Users Helped</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{suggestionCount.toLocaleString()}+</div>
              <div className="text-sm text-gray-400">AI Suggestions Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{countryCount}+</div>
              <div className="text-sm text-gray-400">Countries Reached</div>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <Link href={"/download"} >
              <Button
                size="lg"
                className="px-8 py-8  text-lg font-semibold rounded-lg"
              >
                Try Suggesto <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
