"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import playstore from "@/assets/playstore.png";
import appleicon from "@/assets/apple-icon.png";
import { useRouter } from "next/navigation";

const LandingPageFooter = () => {
    const router = useRouter();

    return (
        <footer className="bg-black text-white py-10 px-6 border-t border-[#2b2b2b] md:px-12">
            <div className=" mx-10 flex flex-col md:flex-row justify-between gap-12">
                {/* Left Section: Social + Links */}
                <div className="flex flex-col items-center md:items-start gap-6 w-full">
                    {/* Social Media Icons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <Link href="https://www.facebook.com/suggestoai" aria-label="Facebook">
                            <Facebook className="w-6 h-6 hover:text-gray-400 transition" />
                        </Link>
                        <Link href="https://x.com/suggestoai" aria-label="Twitter">
                            <Twitter className="w-6 h-6 hover:text-gray-400 transition" />
                        </Link>
                        <Link href="https://www.youtube.com/@suggestoai" aria-label="YouTube">
                            <Youtube className="w-6 h-6 hover:text-gray-400 transition" />
                        </Link>
                        <Link href="https://www.instagram.com/suggestoai" aria-label="Instagram">
                            <Instagram className="w-6 h-6 hover:text-gray-400 transition" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/suggestoai" aria-label="LinkedIn">
                            <Linkedin className="w-6 h-6 hover:text-gray-400 transition" />
                        </Link>
                    </div>

                    {/* Bottom Links */}
                    <div className="flex flex-wrap justify-center md:justify-start items-center text-xs gap-4 md:gap-8 text-center md:text-left">
                        <div>© {new Date().getFullYear()} Suggesto AI. All rights reserved.</div>
                        <Link href="/privacypolicy" className="hover:underline">
                            Privacy Policy
                        </Link>
                        <Link href="/returnpolicy" className="hover:underline">
                            Return Policy
                        </Link>
                        <Link href="/termsandconditions" className="hover:underline">
                            Terms of Use
                        </Link>
                    </div>

                </div>

                {/* Right Section: Contact & Buttons */}
                <div className="text-center md:text-right w-full">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent mb-2">
                        Contact
                    </h3>
                    <a
                        href="mailto:support@suggesto.ai"
                        className="text-sm hover:text-primary block mb-6"
                    >
                        support@suggesto.ai
                    </a>

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
                </div>
            </div>
        </footer>
    );
};

export default LandingPageFooter;
