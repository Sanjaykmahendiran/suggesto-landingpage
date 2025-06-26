"use client";

import React, { useRef, useState } from "react";
import {
  ChevronRight,
  Sparkles,
  Clapperboard,
  PlayCircle,
  Users,
} from "lucide-react";
import Image from "next/image";
import {
  FeatureAssessment,
  Mockin,
  Resumebuilder,
  Selfintro,
} from "@/assets";

const WhatsInQualifit = () => {
  const [activeFeature, setActiveFeature] = useState("smartSuggest");

  // Refs for scrollIntoView
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const features = [
    {
      id: "smartSuggest",
      title: "AI Movie Suggestion Engine",
      icon: <Sparkles className="h-5 w-5 text-purple-700" />,
      description:
        "Suggesto's AI engine recommends movies tailored to your taste, mood, and watch history, making movie nights effortless and exciting.",
      points: [
        "Personalized Suggestions",
        "Mood-Based Filtering",
        "Real-Time Trending Titles",
      ],
      imageSrc: FeatureAssessment,
      imageAlt: "AI Movie Suggestion",
    },
    {
      id: "watchList",
      title: "Smart Watch List",
      icon: <PlayCircle className="h-5 w-5 text-blue-700" />,
      description:
        "Build and manage your watch list effortlessly. Let Suggesto remind you when it's time to watch that movie you've been saving.",
      points: [
        "Easy Add & Remove",
        "Release Alerts",
        "Sync Across Devices",
      ],
      imageSrc: Resumebuilder,
      imageAlt: "Smart Watch List",
    },
    {
      id: "watchRoom",
      title: "Watch Room with Friends",
      icon: <Clapperboard className="h-5 w-5 text-green-700" />,
      description:
        "Create or join virtual watch rooms and enjoy synchronized movie nights with your friends no matter where they are.",
      points: [
        "Synchronized Playback",
        "Real-Time Reactions & Chat",
        "Private and Public Rooms",
      ],
      imageSrc: Mockin,
      imageAlt: "Watch Room with Friends",
    },
    {
      id: "movieBuddies",
      title: "Connect with Movie Buddies",
      icon: <Users className="h-5 w-5 text-purple-700" />,
      description:
        "Discover movie lovers like you. Suggesto helps you connect, discuss, and share recommendations within your network.",
      points: [
        "Friend Suggestions",
        "Share & Discuss Movies",
        "Community Watch Events",
      ],
      imageSrc: Selfintro,
      imageAlt: "Connect with Movie Buddies",
    },
  ];


  const handleFeatureClick = (id: string) => {
    setActiveFeature(id);
    if (window.innerWidth < 768 && itemRefs.current[id]) {
      itemRefs.current[id]?.scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const activeFeatureData = features.find(
    (feature) => feature.id === activeFeature
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text mb-10">
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b56bbc] to-[#7a71c4]">
          Whats in Suggesto?
        </p>
        <h2 className="text-3xl font-bold flex items-center gap-2">
          Features that Elevate Your Movie Experience
        </h2>
      </div>

      <div className="relative flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <div
          className="w-full md:w-2/5 overflow-x-auto md:overflow-visible pb-2 sm:overflow-x-hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex md:flex-col gap-4 h-full">
            {features.map((feature) => (
              <div
                key={feature.id}
                ref={(el) => { itemRefs.current[feature.id] = el; }}
                onClick={() => handleFeatureClick(feature.id)}
                className={`relative p-6 rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-4
                            bg-[#1f1f21] w-[80%] md:w-full flex-shrink-0
                            ${activeFeature === feature.id ? "shadow-md" : ""}
                           `}
              >
                {activeFeature === feature.id && (
                  <div className="absolute left-0 top-0 h-full w-1.5 rounded-l bg-gradient-to-b from-[#b56bbc] to-[#7a71c4]" />
                )}

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${activeFeature === feature.id
                      ? "bg-[#b56bbc]/20"
                      : "bg-[#2b2b2b]"
                    }`}
                >
                  {feature.icon}
                </div>
                <span className="font-medium">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="w-full md:w-[70%] h-full mt-8 md:mt-0 bg-[#2b2b2b] backdrop-blur-md rounded-lg p-8 shadow-[0_2px_10px_rgba(0,0,0,0.1),0_-4px_12px_rgba(0,0,0,0.05)] md:absolute md:top-0 md:right-0 z-20">
          <div className="h-full flex items-center">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/5">
                <h2 className="text-3xl font-bold mb-2">
                  {activeFeatureData?.title}
                </h2>
                <p className="py-4 text-sm text-gray-400">
                  {activeFeatureData?.description}
                </p>
                <div className="space-y-4">
                  {activeFeatureData?.points.map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-2/5">
                <div className="rounded-full p-4 h-full flex items-center justify-center">
                  <Image
                    src={activeFeatureData?.imageSrc || "/placeholder.svg"}
                    alt={
                      activeFeatureData?.imageAlt || "Feature illustration"
                    }
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default WhatsInQualifit;
