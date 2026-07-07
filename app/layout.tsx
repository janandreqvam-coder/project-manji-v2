import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Background from "./components/effects/Background";
import LoadingScreen from "./components/effects/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Manji",
  description: "Project Manji Community Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-black text-white"
      >
        {/* Global Background */}
        <Background />

        {/* Loading Screen */}
        <LoadingScreen />

        {/* Fixed Navigation */}
        <Navbar />

        {/* Site Content */}
        <main className="relative z-10 min-h-screen pt-24">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}