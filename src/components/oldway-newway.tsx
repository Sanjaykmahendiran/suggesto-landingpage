"use client";

import { ArrowRight, CuboidIcon, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import oldWay from "@/assets/login-below/old-way.jpg";
import newWay from "@/assets/login-below/New-way.jpg";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function OldWayNewWay() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-10 px-4"
      >
        <div className="inline-block bg-[#7a71c4]/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-6">
          Why Suggesto?
        </div>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Stop Scrolling & Start Watching
          <br className="hidden sm:block" />
          <span className="mt-2 bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent">
            with AI-Powered Movie Suggestions
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-base md:text-lg">
          No more wasting time choosing what to watch. Suggesto helps you discover, decide, and watch—faster and better with friends.
        </p>
      </motion.div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10">
        {/* Old Way */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={0}
          variants={fadeInUp}
          className="p-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-4">
            <CuboidIcon className="" size={24} />
            <h3 className="text-lg md:text-xl font-bold ">Before</h3>
          </div>
          <div className="relative flex-1">
            <Image
              src={oldWay}
              alt="Endless Scrolling"
              width={600}
              height={450}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl shadow-md w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
            {[
              { label: "Decision Time", value: "30+ mins" },
              { label: "Recommendations", value: "Generic & Random" },
              { label: "Watch Together", value: "Hard to Sync" },
              { label: "Experience", value: "Frustrating" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemFadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="text-center md:text-left"
              >
                <p className="text-sm text-gray-400 leading-tight">{item.label}</p>
                <p className="font-bold text-lg leading-tight">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* New Way */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={1}
          variants={fadeInUp}
          className="p-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-4">
            <Box className="text-primary" size={24} />
            <h3 className="text-lg md:text-xl font-bold text-primary">Now</h3>
          </div>
          {/* <div className="relative flex-1">
            <video
              ref={videoRef}
              src="https://www.qualifitai.com/assets/new_way.mp4" 
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div> */}
          <div className="relative flex-1">
            <Image
              src={newWay}
              alt="Endless Scrolling"
              width={600}
              height={450}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl shadow-md w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
            {[
              { label: "Decision Time", value: "Under 1 Min" },
              { label: "Recommendations", value: "AI-Personalized" },
              { label: "Watch Together", value: "Virtual Rooms" },
              { label: "Experience", value: "Seamless & Fun" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemFadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-purple-50 p-2 rounded-2xl shadow-sm text-center md:text-left"
              >
                <p className="text-sm text-gray-600 leading-tight">{item.label}</p>
                <p className="font-bold text-lg bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent leading-tight">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mt-8 px-4"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 mt-4">
            <Button
              onClick={() => router.push("/app/register")}
              variant="gradient"
              className="flex items-center gap-2 px-8 py-8 text-white text-lg font-semibold rounded-lg transition-colors"
            >
              Try Suggesto Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-gray-500 text-xs md:text-sm">*No signup hassles. Watch smarter today.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
