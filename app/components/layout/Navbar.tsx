"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import SearchBar from "./SearchBar";
import SiteContainer from "../ui/SiteContainer";
import { theme } from "../ui/theme";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/garage", label: "Garage" },
    { href: "/drivers", label: "Drivers" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/ai", label: "🤖 AI" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-red-600/20 bg-black/85 backdrop-blur-xl">

      <SiteContainer
        className={`flex items-center justify-between ${theme.navbar.height}`}
      >

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/logo.png"
            alt="Project Manji"
            width={72}
            height={72}
            priority
            className="h-14 w-14 object-contain transition duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 xl:gap-8 lg:flex">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-semibold transition duration-300 hover:text-red-500"
            >
              {link.label}
            </Link>
          ))}

          <SearchBar />

          <a
            href="https://discord.gg/VMFycskcWp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-red-600 px-6 py-3 font-bold transition duration-300 hover:scale-105 hover:bg-red-500"
          >
            Join Discord
          </a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl transition hover:text-red-500 lg:hidden"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>

      </SiteContainer>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-black transition-all duration-300 lg:hidden ${
          open
            ? "max-h-screen border-t border-red-600/20"
            : "max-h-0"
        }`}
      >

        <SiteContainer className="space-y-3 py-6">

          <SearchBar />

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl py-3 text-lg transition hover:bg-red-600/20 hover:text-red-500"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://discord.gg/VMFycskcWp"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-red-600 py-3 text-center font-bold transition hover:bg-red-500"
          >
            Join Discord
          </a>

        </SiteContainer>

      </div>

    </nav>
  );
}
