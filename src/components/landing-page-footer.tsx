"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const LandingPageFooter = () => {
    return (
        <footer className="bg-black text-white py-8 px-6 border-t border-[#2b2b2b] md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
                    {/* Social Media Icons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <Link href="https://www.facebook.com/suggestoai" aria-label="Facebook">
                            <Facebook className="w-8 h-8 hover:text-gray-400 transition" />
                        </Link>
                        <Link href="https://x.com/suggestoai" aria-label="X (Twitter)">
                            <Twitter className="w-8 h-8 hover:text-gray-400 transition" />
                        </Link>
                        <Link href="https://www.youtube.com/@suggestoai" aria-label="YouTube">
                            <Youtube className="w-8 h-8 hover:text-gray-400 transition" />
                        </Link>
                        <Link href="https://www.instagram.com/suggestoai" aria-label="Instagram">
                            <Instagram className="w-8 h-8 hover:text-gray-400 transition" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/suggestoai" aria-label="LinkedIn">
                            <Linkedin className="w-8 h-8 hover:text-gray-400 transition" />
                        </Link>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-[#b56bbc] to-[#7a71c4] bg-clip-text text-transparent">Contact</h3>
                        <a href="mailto:support@suggesto.ai" className="text-sm hover:text-primary">
                            support@suggesto.ai
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-start items-center pt-2 text-xs text-center md:text-left gap-2 md:gap-8">
                    <div>© {new Date().getFullYear()} Suggesto AI. All rights reserved.</div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-10">
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
            </div>
        </footer>
    );
};

export default LandingPageFooter;
