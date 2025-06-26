"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import loginlogo from "@/assets/suggesto-name-logo.png";
import { Upload } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const router = useRouter();

  return (
    <header className="w-full sticky top-0 z-30 bg-[#121214] border-b border-[#2b2b2b] px-4 py-3 overflow-hidden">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 min-w-0">
          <Image
            src={loginlogo}
            alt="Suggesto Logo"
            className="object-contain h-8 w-auto max-w-full"
            priority
            draggable={false}
          />
        </Link>

        {/* Download Button - always visible */}
        <Button
          onClick={() => router.push("/download")}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0"
        >
          <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden xs:inline sm:inline">Download</span>
          <span className="xs:hidden sm:hidden">Get</span>
        </Button>
      </div>
    </header>
  );
}