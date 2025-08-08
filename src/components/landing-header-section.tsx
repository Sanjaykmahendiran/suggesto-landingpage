"use client";

import { Play, Pause } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import playstore from "@/assets/playstore.png";
import appleicon from "@/assets/apple-icon.png";
import bgbanner from "@/assets/bgbanner.jpg"
import Header from "./header";
import Link from "next/link";
import loginlogo from "@/assets/suggesto-name-logo.png";
import { Upload } from "lucide-react";
import { Button } from "./ui/button";

const words = [
  "AI Suggestions",
  "Watch Together",
  "Smart Lists",
  "Quick Picks",
];

export default function LandingPageHeader() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;
    if (charIndex < currentWord.length) {
      setIsTyping(true);
      timeout = setTimeout(() => {
        setText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 50);
    } else {
      setIsTyping(false);
      timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Enhanced play/pause functionality
  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (videoRef.current.paused) {
          await videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      } catch (error) {
        console.error('Error toggling video playback:', error);
      }
    }
  };

  // Handle video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [isInView]);

  // Handle mouse enter/leave for control visibility
  const handleMouseEnter = () => setShowControls(true);
  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen items-center overflow-x-hidden">
      {/* Hero */}
      <div className="relative w-full flex flex-col items-center overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${bgbanner.src})`,
          }}
          className="absolute top-0 left-0 w-full h-[90%] md:h-[80%] z-0 pointer-events-none bg-cover bg-center bg-no-repeat " />
        <div className="absolute inset-0 z-0" />
        <header className="w-full sticky top-0 z-30 px-4 py-3 overflow-hidden">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 min-w-0">
              <Image
                src={loginlogo}
                alt="Suggesto Logo"
                className="object-contain h-12 w-auto max-w-full"
                priority
                draggable={false}
              />
            </Link>

            {/* Download Button - always visible */}
            <Button
              onClick={() => router.push("/download")}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0"
            >
              <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline sm:inline">Download</span>
              <span className="xs:hidden sm:hidden">Get</span>
            </Button>
          </div>
        </header>
        <div className="relative z-10 w-full container mx-auto px-4 pt-16 sm:pt-20 pb-10 sm:pb-16 flex flex-col items-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-[#7a71c4]/10 text-[#b56bbc] font-medium text-xs sm:text-base">
            🎬 Your Smart Movie Companion
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-center leading-tight max-w-full">
            <div className="break-words">Discover Movies You'll Love With</div>
            <div className="mt-2 break-words">
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent font-semibold inline-block">
                {text}
                <span className={`${isTyping ? "animate-pulse" : "opacity-0"}`}>|</span>
              </span>
            </div>
          </h1>

          <p className="text-base sm:text-xl text-gray-300 text-center mx-auto max-w-3xl mt-6 px-2">
            Suggesto helps you skip the scrolling, get instant personalized suggestions,
            and enjoy movies with friends in virtual watch rooms.
          </p>

          <div className="flex flex-col items-center mt-8 gap-6">
            {/* Mobile App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 ">
              {/* Google Play Button */}
              <button
                onClick={() => router.push("/download")}
                className="bg-black hover:bg-black/90 transition-colors border border-white/20 h-14 px-6 rounded-lg flex items-center gap-3"
                aria-label="Download Suggesto from Google Play Store"
              >
                <div className="w-8 h-8 relative">
                  <Image
                    src={playstore}
                    alt="Play Store"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs text-white/80">GET IT ON</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </button>

              {/* App Store Button */}
              <button
                onClick={() => router.push("/download")}
                className="bg-black hover:bg-black/90 transition-colors border border-white/20 h-14 px-6 rounded-lg flex items-center gap-3"
                aria-label="Download Suggesto from Apple App Store"
              >
                <div className="w-8 h-8 relative">
                  <Image
                    src={appleicon}
                    alt="App Store"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs text-white/80">Download on the</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Video with Better Controls */}
          <div className="w-full max-w-6xl mx-auto mt-12 sm:mt-16">
            <div className="flex items-center justify-center w-full rounded-3xl overflow-hidden select-none">
              <div
                ref={videoContainerRef}
                className="relative w-full group cursor-pointer flex items-center justify-center overflow-hidden aspect-video rounded-3xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={togglePlay}
              >
                {isInView ? (
                  <>
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover rounded-3xl"
                      poster="https://suggesto.top/uploads/thumbnail.webp"
                      playsInline
                      preload="metadata"
                      src="https://suggesto.top/uploads/video.mp4"
                    // Remove the controls attribute to have custom controls
                    />

                    {/* Custom Play/Pause Button Overlay */}
                    <div className={`absolute inset-0 flex bg-black/50 items-center justify-center transition-all duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                      }`}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay();
                        }}
                        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-4 transition-all duration-200 transform hover:scale-110"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="w-full aspect-video bg-black/10 animate-pulse rounded-3xl" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(100%) skewX(12deg); }
        }
        .animate-slide {
          animation: slide 6s linear infinite;
        }
      `}</style>
    </main>
  );
}