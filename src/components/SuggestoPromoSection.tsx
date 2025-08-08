"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import PromoImg from "@/assets/login-below/ebook-cover.webp";
import Link from "next/link";
import playstore from "@/assets/playstore.png";
import appleicon from "@/assets/apple-icon.png";
import { useRouter } from "next/navigation";

const benefits = [
  "AI picks based on your mood and taste",
  "Smart Watchlist sync across devices",
  "Group movie suggestions with friends",
  "Early access to trending releases"
];

export default function SuggestoPromoSection() {
  const router = useRouter();

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-r from-[#b56bbc]/50 to-[#7a71c4]/60 text-white mt-8" id="promo-section">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#dcb5e8]/20 to-[#a89cf0]/20 blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-12">

        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#7a71c4]/80 text-white font-medium text-xs sm:text-sm"
            role="note"
            aria-label="Exclusive Features"
          >
            For Movie Lovers 🚀
          </div>

          <div className="flex flex-col text-center sm:items-center md:items-start md:text-left space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug sm:leading-tight">
              Unlock Smart Movie Discovery –{" "}
              Just by Joining Suggesto

            </h1>

            <div className="space-y-2 w-full max-w-md">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 justify-start"
                >
                  <CheckCircle className="h-5 w-5 text-white/90 mt-0.5" />
                  <p className="text-sm sm:text-base text-left text-white/90">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Google Play */}
              <button
                onClick={() => router.push("/download")}
                className="bg-black hover:bg-black/90 transition-colors h-14 px-6 rounded-lg"
                aria-label="Download from Google Play"
              >
                <div className="flex items-center gap-3">
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
                    <div className="text-sm font-semibold text-white">
                      Google Play
                    </div>
                  </div>
                </div>
              </button>

              {/* App Store */}
              <button
                onClick={() => router.push("/download")}
                className="bg-black hover:bg-black/90 transition-colors h-14 px-6 rounded-lg"
                aria-label="Download from App Store"
              >
                <div className="flex items-center gap-3">
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
                    <div className="text-sm font-semibold text-white">
                      App Store
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Content – Image */}
        {/* Right Content – Image */}
        <div className="w-full md:w-1/2 overflow-visible">
          <motion.div
            className="relative flex justify-center md:justify-end md:pr-[-60px] lg:pr-[-80px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative w-[90%] max-w-2xl sm:max-w-lg md:max-w-xl translate-x-4 md:translate-x-12 lg:translate-x-16"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={PromoImg}
                alt="Suggesto AI Movie Recommender"
                className="rounded-lg object-contain w-full h-auto "
                width={800}
                height={500}
                sizes="(max-width: 768px) 90vw, 45vw"
                priority
              />
            </motion.div>
          </motion.div>
        </div>


      </div>
    </div>
  );
}
