"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import loginlogo from "@/assets/suggesto-name-logo.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import LandingPageFooter from "@/components/landing-page-footer";
import { FaGooglePlay } from "react-icons/fa";

// Simple HTML sanitizer function (you might want to use a library like DOMPurify)
const sanitizeHTML = (html: string): string => {
  // Basic sanitization - allow only safe tags
  const allowedTags = ['p', 'b', 'strong', 'i', 'em', 'u', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li'];
  const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^<>]*>/gi;

  return html.replace(tagRegex, (match, tagName) => {
    if (allowedTags.includes(tagName.toLowerCase())) {
      return match;
    }
    return '';
  });
};


export default function RetrunPolicy() {
  const [Retrun, setRetrun] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchRetrunPolicy = async () => {
      try {
        const response = await fetch("https://suggesto.xyz/App/api.php?gofor=returnpolicy");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Since the API returns HTML directly, use text() instead of json()
        const htmlContent = await response.text();

        // Check if we actually got HTML content
        if (!htmlContent || htmlContent.trim() === '') {
          throw new Error('No content received from API');
        }

        // Sanitize the HTML content
        const sanitizedContent = sanitizeHTML(htmlContent);
        setRetrun(sanitizedContent);

      } catch (error) {
        console.error("Error fetching Retrun policy:", error);
        setError(error instanceof Error ? error.message : 'Failed to load Retrun policy');
      } finally {
        setLoading(false);
      }
    };

    fetchRetrunPolicy();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen">
        <header className="w-full py-3 md:py-4 px-3 md:px-4 sticky top-0 bg-[#121214] border-b border-[#2b2b2b] z-30">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
              <Image
                src={loginlogo}
                alt="Suggesto Logo"
                width={144}
                height={40}
                className="object-contain"
                priority
                draggable={false}
              />
            </Link>
            <div className="flex gap-2">
              <Button
                onClick={() => router.push("/download")}
                className="text-white font-medium rounded-xl px-4 py-2 text-sm shadow-md flex items-center gap-2"
              >
                <FaGooglePlay className="text-lg" />
                Download
              </Button>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading Retrun policy...</p>
            </div>
          </div>
        </div>
        <LandingPageFooter />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen">
        <header className="w-full py-3 md:py-4 px-3 md:px-4 sticky top-0 bg-[#121214] border-b border-[#2b2b2b] z-30">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
              <Image
                src={loginlogo}
                alt="Suggesto Logo"
                width={144}
                height={40}
                className="object-contain"
                priority
                draggable={false}
              />
            </Link>
            <div className="flex gap-2">
              <Button
                onClick={() => router.push("/download")}
                className="text-white font-medium rounded-xl px-4 py-2 text-sm shadow-md flex items-center gap-2"
              >
                <FaGooglePlay className="text-lg" />
                Download
              </Button>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-red-800 mb-2">Unable to Load Retrun Policy</h2>
              <p className="text-red-600 mb-4">{error}</p>
              <Button
                onClick={() => window.location.reload()}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
        <LandingPageFooter />
      </div>
    );
  }

  // No content state
  if (!Retrun) {
    return (
      <div className="min-h-screen">
        <header className="w-full py-3 md:py-4 px-3 md:px-4 sticky top-0 bg-[#121214] border-b border-[#2b2b2b] z-30">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
              <Image
                src={loginlogo}
                alt="Suggesto Logo"
                width={144}
                height={40}
                className="object-contain"
                priority
                draggable={false}
              />
            </Link>
            <div className="flex gap-2">
              <Button
                onClick={() => router.push("/download")}
                className="text-white font-medium rounded-xl px-4 py-2 text-sm shadow-md flex items-center gap-2"
              >
                <FaGooglePlay className="text-lg" />
                Download
              </Button>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Retrun Policy Not Available</h2>
            <p className="text-gray-600">The Retrun policy content could not be found.</p>
          </div>
        </div>
        <LandingPageFooter />
      </div>
    );
  } 

  // Success state
  return (
    <div className="min-h-screen">
      <header className="w-full py-3 md:py-4 px-3 md:px-4 sticky top-0 bg-[#121214] border-b border-[#2b2b2b] z-30">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src={loginlogo}
              alt="Suggesto Logo"
              width={144}
              height={40}
              className="object-contain"
              priority
              draggable={false}
            />
          </Link>
          <div className="flex gap-2">
            <Button
              onClick={() => router.push("/download")}
              className="text-white font-medium rounded-xl px-4 py-2 text-sm shadow-md flex items-center gap-2"
            >
              <FaGooglePlay className="text-lg" />
              Download
            </Button>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
        <main className="prose prose-gray max-w-none dark:prose-invert">
          <h1 className="text-4xl font-bold text-center tracking-tight">Retrun Policy</h1>

          <div className="mt-6 flex justify-center">
            <div
              className="max-w-[800px] w-full font-thin Retrun-content"
              dangerouslySetInnerHTML={{ __html: Retrun }}
            />
          </div>
        </main>
      </div>
      <LandingPageFooter />
    </div>
  );
}