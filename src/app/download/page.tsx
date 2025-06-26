"use client";

import Image from "next/image";
import loginlogo from "@/assets/suggesto-name-logo.png";
import phoneMockup from "@/assets/phone-mockup.png";
import playstore from "@/assets/playstore.png";
import appleicon from "@/assets/apple-icon.png";

declare const gtag: (...args: any[]) => void | undefined;

export default function Download() {

    // Function to handle Google Play Store redirect
    const handleGooglePlayDownload = () => {
        // Replace with your actual Google Play Store URL
        const playStoreUrl = "https://play.google.com/store/apps/details?id=com.techades.suggesto";

        // Open in new tab
        window.open(playStoreUrl, '_blank', 'noopener,noreferrer');

        // Optional: Track analytics event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                event_category: 'App Download',
                event_label: 'Google Play Store',
                value: 1
            });
        }
    };

    // Function to handle App Store redirect
    const handleAppStoreDownload = () => {
        // Replace with your actual App Store URL
        const appStoreUrl = "https://apps.apple.com/app/suggesto/id1234567890";

        // Open in new tab
        window.open(appStoreUrl, '_blank', 'noopener,noreferrer');

        // Optional: Track analytics event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                event_category: 'App Download',
                event_label: 'Apple App Store',
                value: 1
            });
        }
    };


    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Main content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap- items-center max-w-7xl mx-auto">
                    {/* Left content */}
                    <div className="space-y-8">
                        {/* Add logo here */}
                        <div>
                            <Image
                                src={loginlogo}
                                alt="Suggesto Logo"
                                width={160}
                                height={44}
                                className="object-contain"
                                priority
                                draggable={false}
                            />
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                                Discover Movies Smarter with Suggesto AI
                            </h1>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                                Personalize your watchlist, get AI recommendations, and never miss your next favorite film again.
                            </p>
                        </div>

                        <div className="flex flex-col items-start mt-8 gap-6">
                            {/* App store buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Google Play Button */}
                                <button
                                    onClick={handleGooglePlayDownload}
                                    className="bg-white/10 hover:bg-white/20 transition-colors border border-white/20 h-14 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                                    aria-label="Download Suggesto from Google Play Store"
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
                                            <div className="text-sm font-semibold text-white">Google Play</div>
                                        </div>
                                    </div>
                                </button>

                                {/* App Store Button */}
                                <button
                                    onClick={handleAppStoreDownload}
                                    className="bg-white/10 hover:bg-white/20 transition-colors border border-white/20 h-14 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                                    aria-label="Download Suggesto from Apple App Store"
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
                                            <div className="text-sm font-semibold text-white">App Store</div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right content - Phone mockup */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Phone image instead of mockup */}
                        <div className="relative w-full h-[520px] bounce-slow">
                            <Image
                                src={phoneMockup}
                                alt="Phone Mockup"
                                fill
                                className="object-contain shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}