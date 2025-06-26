"use client";

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import slide1 from "@/assets/login-below/footer-slider-1.jpg";
import slide2 from "@/assets/login-below/footer-slider-2.jpg";
import slide3 from "@/assets/login-below/footer-slider-3.jpg";
import slide4 from "@/assets/login-below/footer-slider-4.jpg";
import slide5 from "@/assets/login-below/footer-slider-5.jpg";
import slide6 from "@/assets/login-below/footer-slider-6.jpg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const imageSlides1 = [slide1, slide2, slide3, slide1, slide2, slide3];
const imageSlides2 = [slide4, slide5, slide6, slide4, slide4, slide5, slide6];

export default function JoinUsSection() {
  const router = useRouter();

  return (
    <section className="relative w-full  overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Text Section */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left px-2 sm:px-4 md:px-6 lg:px-8 mx-auto">
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Ready to <span className="bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent">Discover</span> Your Next Favorite Movie?
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
                Get personalized AI movie recommendations, mood-based playlists, and watch with friends—all in one place.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <Button
                onClick={() => {
                  router.push("/download");
                }}
                variant="gradient"
                className="mx-auto md:mx-0 flex items-center gap-2 px-8 py-8 text-white text-lg font-semibold rounded-lg transition-colors"
              >
                Start Watching Smarter
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
                {[
                  "No subscription needed",
                  "Curated mood-based picks",
                  "AI gets better every watch",
                ].map((text, index) => (
                  <div key={index} className="flex items-center justify-center md:justify-start">
                    <Check className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-6 md:mt-0">
            <div className="hidden md:grid grid-cols-2 gap-2 lg:gap-4">
              {/* Column 1 */}
              <div className="flex flex-col space-y-4 overflow-hidden h-[450px] lg:h-[540px]">
                <motion.div
                  className="flex flex-col gap-4"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {imageSlides1.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl overflow-hidden shadow-xl h-[300px] md:h-[350px] lg:h-[400px] w-[220px] md:w-[250px] lg:w-[300px] mx-auto"
                    >
                      <Image
                        src={img}
                        alt={`Slide 1 - ${idx}`}
                        width={300}
                        height={400}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col space-y-4 overflow-hidden h-[450px] lg:h-[540px] mt-4">
                <motion.div
                  className="flex flex-col gap-4"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {imageSlides2.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl overflow-hidden shadow-xl h-[300px] md:h-[350px] lg:h-[400px] w-[220px] md:w-[250px] lg:w-[300px] mx-auto"
                    >
                      <Image
                        src={img}
                        alt={`Slide 2 - ${idx}`}
                        width={300}
                        height={440}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
