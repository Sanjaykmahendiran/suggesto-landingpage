import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PromoImg from "@/assets/login-below/ebook-cover.webp"
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
    <div className="w-full bg-gradient-to-r from-[#b56bbc]/20 to-[#7a71c4] text-white overflow-hidden" id="promo-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left gap-10 md:gap-12">

        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 font-medium text-xs sm:text-sm"
            role="note"
            aria-label="Exclusive Features"
          >
            For Movie Lovers 🚀
          </div>

          <div className="flex flex-col sm:px-0 px-6 text-center sm:items-center md:items-start md:text-left space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug sm:leading-tight">
              Unlock Smart Movie Discovery – <span className="text-white">Just by Joining Suggesto</span>
            </h1>

            <div className="space-y-2 w-full max-w-md">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 justify-start">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-left">{benefit}</p>
                </div>
              ))}
            </div>

            <Link href="/download" passHref>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                {/* Google Play */}
                <button
                  onClick={() => router.push("/download")}
                  className="bg-white/10 hover:bg-white/20 transition-colors border border-white/20 h-14 px-6 rounded-lg"
                  aria-label="Download from Google Play"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 relative">
                      <Image src={playstore} alt="Play Store" fill className="object-contain" />
                    </div>
                    <div className="text-left leading-tight">
                      <div className="text-xs text-white/80">GET IT ON</div>
                      <div className="text-sm font-semibold text-white">Google Play</div>
                    </div>
                  </div>
                </button>

                {/* App Store */}
                <button
                  onClick={() => router.push("/download")}
                  className="bg-white/10 hover:bg-white/20 transition-colors border border-white/20 h-14 px-6 rounded-lg"
                  aria-label="Download from App Store"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 relative">
                      <Image src={appleicon} alt="App Store" fill className="object-contain" />
                    </div>
                    <div className="text-left leading-tight">
                      <div className="text-xs text-white/80">Download on the</div>
                      <div className="text-sm font-semibold text-white">App Store</div>
                    </div>
                  </div>
                </button>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Right: Illustration */}
        <div className="w-full md:w-1/2">
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-2xl sm:max-w-lg md:max-w-xl h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src={PromoImg}
                alt="Suggesto AI Movie Recommender"
                className="rounded-lg object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
