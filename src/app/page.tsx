"use client"

import React, { useCallback, useEffect, useState, useRef } from "react"
import dynamic from "next/dynamic"
import { ChevronUp } from "lucide-react"


const LandingPageHeader = dynamic(() => import("@/components/landing-header-section"), { ssr: false })
const SocialProofSection = dynamic(() => import("@/components/social-proof-section"), { ssr: false })
const WordsOnQualifit = dynamic(() => import("@/components/words-on-suggesto"), { ssr: false })
const OldWayNewWay = dynamic(() => import("@/components/oldway-newway"), { ssr: false })
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), { ssr: false })
const FAQSection = dynamic(() => import("@/components/faq-section"), { ssr: false })
const WorkflowSection = dynamic(() => import("@/components/workflow"), { ssr: false })
const FeaturesSection = dynamic(() => import("@/components/features-section"), { ssr: false })
const LandingPageFooter = dynamic(() => import("@/components/landing-page-footer"), { ssr: false })
const SuggestoPromoSection = dynamic(() => import("@/components/SuggestoPromoSection"), { ssr: false })
const CreateBetterSetion = dynamic(() => import("@/components/create-better"), { ssr: false })
const FloatingChat = dynamic(() => import("@/components/floating-chat"), { ssr: false })

const LandingPage = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [hasShownNewsletter, setHasShownNewsletter] = useState(false);
  const lastScrollTime = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleScroll = useCallback(() => {
    const now = Date.now()
    if (now - lastScrollTime.current < 100) return
    lastScrollTime.current = now

    setShowScrollToTop(window.scrollY > window.innerHeight)

    const section = document.getElementById("ebook-section")
    if (section) {
      const sectionTop = section.getBoundingClientRect().top
      if (sectionTop <= window.innerHeight / 2 && !hasShownNewsletter) {
        setShowNewsletter(true)
        setHasShownNewsletter(true)
      }
    }
  }, [hasShownNewsletter])

  useEffect(() => {
    if (typeof window === "undefined") return
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(isMobile);
  }, []);

  return (
<div className="relative min-h-screen">
      <LandingPageHeader />
      <SocialProofSection />
      <OldWayNewWay />
      {/* <WhatsInQualifit /> */}

      {/* {!isMobile ? <WhyQualifitSection /> : '' } */}
      {/* <WordsOnQualifit /> */}
      <FeaturesSection />
      {/* <CreateBetterSetion /> */}
      {/* <BlogSection /> */}
      <SuggestoPromoSection />
      {/* <ROISection /> */}
      <WorkflowSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <JoinUsSection /> */}
      <LandingPageFooter />
      <FloatingChat />

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-14 right-4 bg-white text-black p-2 rounded-full shadow-lg transition-opacity duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export default LandingPage;
