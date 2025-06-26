"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import loginlogo from "@/assets/qualifit-black-logo.png";
import { useState } from "react";
import { Upload } from "lucide-react";

export default function Header() {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (
        <header className="w-full py-3 md:py-4 px-3 md:px-4 border-b sticky top-0 bg-white z-30">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <div className="w-auto h-auto max-w-[144px]">
                        <Image
                            src={loginlogo || "/placeholder.svg"}
                            alt="Qualifit Logo"
                            width={144}
                            height={40}
                            className="object-contain"
                            draggable={false}
                            priority
                        />
                    </div>
                </Link>

                {/* Buttons */}
                <div className="flex items-center space-x-2">
                    <Button
                        onClick={() => router.push("/app/register")}
                        variant="outline"
                        className="block md:hidden flex items-center text-primary border-purple-400 hover:bg-purple-50 hover:text-primary font-medium rounded-xl px-4 py-2 text-sm md:text-base"
                    >
                        Upload <Upload className="w-6 h-6" />
                    </Button>

                    <button
                        className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-2">
                    <Button
                        onClick={() => router.push("/app")}
                        variant="outline"
                        className="text-primary border-purple-400  font-medium rounded-xl px-4 py-2 text-sm"
                    >
                        Login
                    </Button>
                    <Button
                        onClick={() => router.push("/app/register")}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl px-4 py-2 text-sm shadow-md"
                    >
                        Sign Up
                    </Button>
                </div>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-b p-4 md:hidden flex flex-col gap-3 mt-px z-20">
                        <Button onClick={() => router.push("/app")} variant="outline" className="w-full text-primary">
                            Login
                        </Button>
                        <Button onClick={() => router.push("/app/register")} className="w-full bg-purple-600 text-white">
                            Sign Up
                        </Button>
                    </div>
                )}
            </div>
        </header>
    )
}