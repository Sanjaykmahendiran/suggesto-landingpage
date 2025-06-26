import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import syed from "@/assets/login-below/syed.webp";
import santhosh from "@/assets/login-below/santhosh-wiq.webp";
import alex from "@/assets/login-below/alex.webp";

const mediaTeam = [
    {
        name: "Syed Nasrullah",
        role: "CEO - Workfreaks Corporate Services",
        testimonial: {
            title: "[Smarter discovery] Suggesto redefines how we pick movies",
            content:
                "What stood out to me is how Suggesto saves time and delivers spot-on suggestions tailored to my taste. The AI engine really understands user preferences.",
            source: "LinkedIn",
        },
        imagesrc: syed,
    },
    {
        name: "Santhosh Vijayabaskar",
        role: "Director - Fidelity Investments",
        testimonial: {
            title: "[Next-gen recommendation] Watching made effortless",
            content:
                "I've used several apps, but Suggesto gets it right — curated watchlists, no fluff, and even smart group movie planning. It’s an entertainment game-changer.",
            source: "MovieTech Weekly",
        },
        imagesrc: santhosh,
    },
    {
        name: "Alex Melwyn",
        role: "Head HR - Avidus Group",
        testimonial: {
            title: "[AI-powered fun] Watching with friends just got smarter",
            content:
                "Suggesto doesn’t just suggest; it brings people together. The AI-powered buddy watch feature and instant mood-based picks are truly next-level.",
            source: "StreamNow Journal",
        },
        imagesrc: alex,
    },
];

export default function WordsOnSuggesto() {
    const [activeTeamMember, setActiveTeamMember] = useState(0);

    return (
        <div className="container mx-auto px-4 py-24 max-w-7xl">
            <div className="mb-2 bg-[#121214]">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b56bbc] to-[#7a71c4]">
                    Words on Suggesto
                </h2>
            </div>

            <div className="flex items-center gap-2 mb-12">
                <h1 className="text-3xl md:text-4xl font-bold">From Entertainment Experts</h1>
            </div>

            {/* Mobile horizontal cards */}
            <div
                className="md:hidden flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
                {mediaTeam.map((member, index) => (
                    <div
                        key={index}
                        className="snap-center w-full flex-shrink-0 relative bg-purple-50 rounded-lg p-6 border border-gray-200 shadow-sm"
                    >
                        <div className="mb-4 flex items-center justify-start ">
                            <div className="w-12 h-12 rounded-full mr-4">
                                <Image
                                    src={member.imagesrc}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.role}</p>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 text-primary text-6xl opacity-80 leading-none">”</div>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">{member.testimonial.title}</h3>

                        <p className="text-gray-700 mb-3">{member.testimonial.content}</p>

                        <div className="text-sm text-gray-600">- {member.testimonial.source}</div>
                    </div>
                ))}
            </div>

            {/* Desktop interaction */}
            <div className="hidden md:grid md:grid-cols-12 gap-8">
                <div className="md:col-span-5">
                    <div className="space-y-6 rounded-lg">
                        {mediaTeam.map((member, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-4 mb-4 border rounded-lg p-4 cursor-pointer transition-all ${activeTeamMember === index
                                    ? "border-primary shadow-md bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] text-white"
                                    : "border-gray-300 hover:border-primary hover:bg-purple-50/30"
                                    }`}
                                onClick={() => setActiveTeamMember(index)}
                            >
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={member.imagesrc}
                                        alt={member.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>

                                <div>
                                    <h3
                                        className={`font-semibold ${activeTeamMember === index ? "text-white" : "text-white"
                                            }`}
                                    >
                                        {member.name}
                                    </h3>
                                    <p
                                        className={`text-sm ${activeTeamMember === index ? "text-white/90" : "text-gray-400"
                                            }`}
                                    >
                                        {member.role}
                                    </p>
                                </div>

                                {activeTeamMember === index && (
                                    <ChevronRight className="ml-auto text-white transition-transform transform" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-7 relative rounded-lg h-full">
                    <div className="absolute top-0 right-0 text-primary text-8xl opacity-80">&quot;</div>
                    <div className="bg-[#2b2b2b] rounded-lg p-8 relative border border-primary shadow-sm">
                        <h3 className="text-xl font-bold text-white mb-4">
                            {mediaTeam[activeTeamMember].testimonial.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                            {mediaTeam[activeTeamMember].testimonial.content}
                        </p>
                        <div className="mt-4 text-gray-300">
                            - {mediaTeam[activeTeamMember].testimonial.source}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
