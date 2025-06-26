import type { Metadata } from "next";
import { Overpass } from "next/font/google"
import "./globals.css";
import { Toaster } from "react-hot-toast";

const overpass = Overpass({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Suggesto",
  description: "AI-Powered Movie Recommendation System",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${overpass.className}`}>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            style: {
              fontSize: "0.875rem",
              borderRadius: "0.5rem",
              marginBottom: "3rem",
            },
            success: {
              style: {
                background: "rgba(3, 72, 28, 0.35)",
                border: "1px solid #22c55e",
                color: "#bbf7d0",
              },
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff",
              },
            },
            error: {
              style: {
                background: "rgba(91, 3, 3, 0.35)",
                border: "1px solid #ef4444",
                color: "#fecaca",
              },
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
        <main className="bg-[#121214]">{children}</main>
      </body>
    </html>
  );
}
