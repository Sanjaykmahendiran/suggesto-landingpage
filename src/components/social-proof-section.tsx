'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Apollo from "@/assets/companies/Apollo Hospital.webp"
import AsianPaints from "@/assets/companies/AsianPanits.webp"
import Aspire from "@/assets/companies/Aspire Systems.webp"
import Capgemini from "@/assets/companies/Capgemini.webp"
import Crown from "@/assets/companies/Cavinkare.webp"
import Celcom from "@/assets/companies/Celcom.webp"
import CRED from "@/assets/companies/CRED.webp"
import Flipkart from "@/assets/companies/Flipkart.webp"
import HCL from "@/assets/companies/HCL.webp"
import Intellect from "@/assets/companies/Intellect.webp"
import Logica from "@/assets/companies/Logica.webp"
import Mindtree from "@/assets/companies/Mindtree.webp"
import TAFE from "@/assets/companies/Tafe.webp"
import TCS from "@/assets/companies/TCS.webp"
import TechMahindra from "@/assets/companies/Tech Mahindra.webp"
import { AwardIcon } from "lucide-react";
import { LazyLoadSection } from '@/components/lazy-load-section';

const companies = [
  { src: Apollo, name: 'Apollo Hospital' },
  { src: AsianPaints, name: 'Asian Paints' },
  { src: Aspire, name: 'Aspire' },
  { src: Capgemini, name: 'Capgemini' },
  { src: Crown, name: 'Crown' },
  { src: Celcom, name: 'Celcom' },
  { src: CRED, name: 'CRED' },
  { src: Flipkart, name: 'Flipkart' },
  { src: HCL, name: 'HCL' },
  { src: Intellect, name: 'Intellect' },
  { src: Logica, name: 'Logica' },
  { src: Mindtree, name: 'Mindtree' },
  { src: TAFE, name: 'TAFE' },
  { src: TCS, name: 'TCS' },
  { src: TechMahindra, name: 'Tech Mahindra' }
]

export default function SocialProofSection() {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const firstRow = companies.slice(0, 8)
  const secondRow = companies.slice(8, 15)
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCount()
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
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px' // Load slightly before it comes into view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const animateCount = () => {
    const end = 4200
    const duration = 2000
    const start = performance.now()

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  return (
    <section className="py-12 md:py-14 ">
      <div className="container px-4 md:px-6 mx-auto text-center max-w-7xl">
        {/* Badge */}
        <div className="inline-flex items-center border border-yellow-400 rounded-xl px-3 py-2 text-yellow-300 bg-[#2b2b2b] mb-12">
          <AwardIcon
            className="w-6 h-6 mr-2 text-yellow-100 fill-yellow-400"
            stroke="currentColor"
          />
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="text-[10px] text-gray-300 font-light uppercase leading-tight">
              AI Product Hunt
            </div>
            <div className="text-sm text-white font-bold leading-tight">
              #1 Product of the Week
            </div>
          </div>
        </div>

        {/* Counter */}
        <h3 className="mb-2">
          <span
            ref={countRef}
            className="text-8xl sm:text-8xl lg:text-8xl font-bold bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent"
          >
            {count}
          </span>
          <span className="text-8xl sm:text-8xl lg:text-8xl font-bold bg-gradient-to-r from-[#FF6B6B] via-[#9B6B9D] to-[#4B96D4] bg-clip-text text-transparent">
            +
          </span>
        </h3>
        <p className="text-xl sm:text-2xl md:text-4xl font-semibold mb-12 sm:mb-16 text-white">
          Loved by smart movie explorers
        </p>

        {/* Scrolling Rows */}
        <div className="space-y-8">
          {/* Row 1: scroll left */}
          <LazyLoadSection className="overflow-hidden h-[40px] sm:h-[48px] lg:h-[64px]">
            <div className="overflow-hidden">
              <div className="flex animate-scroll-left space-x-12 w-max">
                {[...firstRow, ...firstRow].map((company, i) => (
                  <div key={i} className="flex items-center justify-center px-4">
                    <Image
                      src={company.src}
                      alt={company.name}
                      width={160} // or smaller default size
                      height={32}
                      sizes="(max-width: 768px) 120px, (max-width: 1024px) 160px, 200px"
                      quality={70}
                      loading="lazy"
                      className="h-[40px] sm:h-[48px] lg:h-[64px] w-auto object-contain opacity-60"
                    />

                  </div>
                ))}
              </div>
            </div>
          </LazyLoadSection>

          {/* Row 2: scroll right */}
          <LazyLoadSection className="overflow-hidden h-[40px] sm:h-[48px] lg:h-[64px]">
            <div className="overflow-hidden">
              <div className="flex animate-scroll-right space-x-12 w-max">
                {[...secondRow, ...secondRow].map((company, i) => (
                  <div key={i} className="flex items-center justify-center px-4">
                    <Image
                      src={company.src}
                      alt={company.name}
                      width={160}
                      height={32}
                      sizes="(max-width: 768px) 120px, (max-width: 1024px) 160px, 200px"
                      quality={70}
                      loading="lazy"
                      className="h-[40px] sm:h-[48px] lg:h-[64px] w-auto object-contain opacity-60"
                    />

                  </div>
                ))}
              </div>
            </div>
          </LazyLoadSection>
        </div>

      </div>

      {/* Scroll Animations */}
      <style jsx>{`
  @keyframes scrollLeft {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }

  @keyframes scrollRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }

  .animate-scroll-left {
    animation: scrollLeft 40s linear infinite;
  }

  .animate-scroll-right {
    animation: scrollRight 40s linear infinite;
  }

  @media (max-width: 640px) {
    .animate-scroll-left {
      animation-duration: 60s;
    }
    .animate-scroll-right {
      animation-duration: 60s;
    }
  }
`}</style>

    </section>
  )
}
