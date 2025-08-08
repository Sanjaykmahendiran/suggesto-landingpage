import React from 'react';
import Image from 'next/image';
import workflow1 from "@/assets/step1.png";
import workflow2 from "@/assets/step2.png";
import workflow3 from "@/assets/step3.png";

const WorkflowSection = () => {
const steps = [
    {
        stepNumber: "01",
        title: "Install Suggesto App",
        description:
            "Download the Suggesto app on iOS, Android, or use it directly on the web. Whether you're on your phone, tablet, or desktop, Suggesto makes it effortless to start discovering movies tailored to your taste — anytime, anywhere.",
        image: workflow1,
        alt: "Suggesto app download"
    },
    {
        stepNumber: "02",
        title: "Set Your Preferences",
        description:
            "Quickly personalize your experience by selecting your favorite movie genres, preferred languages, and streaming platforms you already subscribe to. Suggesto uses this information to deliver recommendations that truly match your mood and interests.",
        image: workflow2,
        alt: "Preference setup"
    },
    {
        stepNumber: "03",
        title: "Discover & Watch Together",
        description:
            "Unlock AI-powered suggestions curated just for you. Easily build a dynamic watchlist, explore trending titles, and invite friends to join interactive watch parties. Whether it's a solo night or a group binge session, Suggesto brings everyone together.",
        image: workflow3,
        alt: "Movie suggestions and watch together"
    }
];



    return (
        <section className="relative py-20 mt-6 mb-6">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center py-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                        How Suggesto Works – <span className='bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text  text-transparent'> Simple, Smart & Social</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        From downloading the app to discovering movies with friends — experience effortless movie nights with Suggesto.
                    </p>
                </div>


                {/* Steps Container */}
                <div className="relative  mt-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="sticky top-30 gap-10 flex items-center justify-center"
                            style={{ zIndex: index + 1 }}
                        >
                            <div
                                className={`relative rounded-2xl overflow-visible mt-10 bg-[#2b2b2b] border border-gray-700/50 p-8 md:p-12 w-full max-w-5xl mx-auto ${index === 1 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    {/* Text Content */}
                                    <div className={`flex-1 text-white ${index === 1 ? 'md:pl-8' : 'md:pr-8'}`}>
                                        <h3 className="text-xl font-medium opacity-80 mb-8">
                                            Step: {step.stepNumber}
                                        </h3>
                                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text  text-transparent">
                                            {step.title}
                                        </h2>
                                        <p className="text-lg opacity-90 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div className="flex-shrink-0 relative z-50 hidden md:block">
                                        <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-visible">
                                            <div className="absolute -top-[30%] -bottom-[40%] left-0 right-0">
                                                <Image
                                                    src={step.image}
                                                    alt={step.alt}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 768px) 256px, 288px"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WorkflowSection;
