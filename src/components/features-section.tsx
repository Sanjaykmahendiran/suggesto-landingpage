"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import SmartSuggest from "@/assets/smart-suggest.png";
import WatchRoom from "@/assets/watch-room.png";
import WatchList from "@/assets/smart-watch-list.png";
import MovieBuddies from "@/assets/movie-buddies.png";

export default function FeaturesPage() {
  const features = [
    {
      title: "AI Movie Suggestion Engine",
      subtitle: "Smart Suggestions",
      description:
        "Suggesto’s AI engine recommends movies tailored to your taste, mood, and watch history, making movie nights effortless and exciting.",
      points: ["Personalized Suggestions", "Mood-Based Filtering", "Real-Time Trending Titles"],
      imageSrc: SmartSuggest,
      imageAlt: "AI Movie Suggestion",
      gradient: "from-[#ff7db8] to-[#ee2a7b]",
      // Now include the entire Tailwind class:
      textcolor: "text-[#ff7db8]"
    },
    {
      title: "Smart Watch List",
      subtitle: "Personal Library",
      description:
        "Build and manage your watch list effortlessly. Let Suggesto remind you when it’s time to watch that movie you’ve been saving.",
      points: ["Easy Add & Remove", "Release Alerts", "Sync Across Devices"],
      imageSrc: WatchList,
      imageAlt: "Smart Watch List",
      gradient: "from-[#ff968b] to-[#ff2251]",
      textcolor: "text-[#ff968b]"
    },
    {
      title: "Watch Room with Friends",
      subtitle: "Watch Together",
      description:
        "Create or join virtual watch rooms and enjoy synchronized movie nights with your friends no matter where they are.",
      points: ["Synchronized Playback", "Real-Time Reactions & Chat", "Private and Public Rooms"],
      imageSrc: WatchRoom,
      imageAlt: "Watch Room",
      gradient: "from-[#15F5FD] to-[#036CDA]",
      textcolor: "text-[#15F5FD]"
    },
    {
      title: "Connect with Movie Buddies",
      subtitle: "Social Discovery",
      description:
        "Discover movie lovers like you. Suggesto helps you connect, discuss, and share recommendations within your network.",
      points: ["Friend Suggestions", "Share & Discuss Movies", "Community Watch Events"],
      imageSrc: MovieBuddies,
      imageAlt: "Movie Buddies",
      gradient: "from-[#B3EB50] to-[#1ea896]",
      textcolor: "text-[#B3EB50]"
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent mb-2">
          Whats in Suggesto?
        </h1>
        <p className="text-gray-300 text-lg">Features that Elevate Your Movie Experience</p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 ">
        {features.map((feature, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="w-full h-full mx-auto flex items-center justify-center overflow-hidden bounce-slow">
                <Image src={feature.imageSrc} alt={feature.imageAlt} className="rounded-lg" />
              </div>
            </div>

            {/* Text Side */}
            <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
              <p className="text-white text-lg font-medium mb-2">
                {feature.subtitle}
              </p>
              <h2
                className={`text-5xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-4`}
              >
                {feature.title}
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-4">{feature.description}</p>

              <ul className="space-y-2 text-lg text-gray-300">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    {/* Updated: now directly using the textcolor class from the feature */}
                    <CheckCircle className={`w-4 h-4 ${feature.textcolor} mt-[2px]`} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
