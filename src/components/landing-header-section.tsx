  "use client";

  import {
    ArrowRight,
    Upload,
    Play,
    X,
    CircleArrowRight,
    TicketPercent,
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import Link from "next/link";
  import Image from "next/image";
  import loginlogo from "@/assets/suggesto-name-logo.png";
  import { useEffect, useRef, useState } from "react";
  import { useRouter } from "next/navigation";
  import { FaGooglePlay } from "react-icons/fa";

  // Updated phrases for Suggesto
  const words = [
    "AI Movie Recommendations",
    "Watch With Friends",
    "Smart Watch Lists",
    "Instant Suggestions",
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

    // Typing animation logic
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

    // Close mobile menu on resize
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Lazy-load video on in-view
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

    const togglePlay = () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    return (
      <main className="flex flex-col min-h-screen items-center justify-between">
        {/* Banner */}
        {showBanner && (
          <div className="relative overflow-hidden hidden sm:block w-full bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] text-white py-3 px-4">
            <div className="absolute inset-0 z-0">
              <div
                className="absolute inset-0 bg-white/10 blur-md animate-slide skew-x-12"
                style={{ animation: "slide 6s linear infinite" }}
              ></div>
            </div>
            <div className="container relative z-10 mx-auto flex flex-col md:flex-row gap-2 md:gap-3 text-xs sm:text-sm md:text-base justify-center items-center w-full">
              <p className="font-medium text-white text-center flex items-center">
                <TicketPercent className="mr-2" />
                <strong>50% OFF:</strong> Get lifetime access to Suggesto Premium. Limited-time offer!
              </p>
              <a href="/app/register" className="text-white font-medium hover:underline">
                <CircleArrowRight className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
              </a>
              <button
                onClick={() => setShowBanner(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
                aria-label="Close banner"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <header className="w-full py-3 md:py-4 px-3 md:px-4 sticky top-0 bg-[#121214] border-b border-[#2b2b2b] z-30">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
              <Image
                src={loginlogo}
                alt="Suggesto Logo"
                width={144}
                height={40}
                className="object-contain"
                priority
                draggable={false}
              />
            </Link>
            <div className="flex gap-2">
              <Button
                onClick={() => router.push("/download")}
                className="text-white font-medium rounded-xl px-4 py-2 text-sm shadow-md flex items-center gap-2"
              >
                <FaGooglePlay className="text-lg" />
                Download
              </Button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <div className="relative w-full flex flex-col items-center bg-[#121214]">
          <div className="absolute top-0 left-0 w-full h-[90%] md:h-[80%] bg-gradient-to-t from-[#b56bbc]/20 via-[#7a71c4]/40 to-[#121214] z-0 pointer-events-none" />

          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 pt-20 flex flex-col items-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-[#7a71c4]/10 text-[#b56bbc] font-medium text-xs sm:text-base">
              🎬 Your Smart Movie Companion
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-center leading-tight">
              <div>Discover Movies You'll Love With</div>
              <div className="mt-2">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent font-semibold">
                  {text}
                  <span className={`${isTyping ? "animate-blink" : "opacity-0"}`}>|</span>
                </span>
              </div>
            </h1>

            <p className="sm:text-xl text-gray-300 text-center mx-auto max-w-3xl mt-6">
              Suggesto helps you skip the scrolling, get instant personalized suggestions,
              and enjoy movies with friends in virtual watch rooms.
            </p>

            <div className="flex flex-col items-center mt-8">
              <Button
                onClick={() => router.push("/app/register")}
                className="flex items-center gap-2 px-8 py-8 md:px-8 md:py-8 text-white text-base md:text-lg font-semibold rounded-xl shadow-lg"
              >
                🎯 Get Your First Suggestion Free
                <ArrowRight className="w-5 h-5" />
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400 text-center sm:text-xs sm:whitespace-nowrap">
                <span>*No sign-up friction</span> | <span> Watch in under 1 minute</span>
              </div>
            </div>

            {/* Lazy-Loaded Video */}
            <div className="w-full max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-24">
              <div className="flex items-center justify-center w-full rounded-3xl overflow-hidden select-none">
                <div
                  ref={videoContainerRef}
                  className="relative w-full cursor-pointer flex items-center justify-center overflow-hidden"
                >
                  {isInView ? (
                    <>
                      <video
                        ref={videoRef}
                        className="w-full max-h-full object-contain"
                        poster="https://www.qualifitai.com/assets/video_intro.webp"
                        playsInline
                        preload="none"
                        controls={isPlaying}
                        src="https://www.qualifitai.com/assets/qualifit_intro.mp4"
                      />
                      <button
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 hover:bg-opacity-40 transition duration-200"
                      >
                        {!isPlaying && <Play className="w-12 h-12 text-white" />}
                      </button>
                    </>
                  ) : (
                    <div className="w-full aspect-video bg-gray-300 animate-pulse rounded-3xl" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
