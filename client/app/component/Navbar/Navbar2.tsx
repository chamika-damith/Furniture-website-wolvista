"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../Navbar/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Navbar2() {
  return (
    <>
      <Navbar className="top-2" />
      <div className="h-20"></div>
    </>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className={cn("fixed top-10 inset-x-0 max-w-5xl mx-auto z-50 px-4", className)}
      >
        {/* Desktop Navbar */}
        <div className="bg-white rounded-full hidden lg:flex items-center justify-between gap-8 px-8 shadow-lg">
        <Link href="/" className="shrink-0">
          <Image
            src="/image/Logo/Logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </Link>
      <Menu setActive={setActive}>
        <Link href="/" className="cursor-pointer text-black hover:opacity-90 transition-opacity">
          Home
        </Link>
        <Link href="/about" className="cursor-pointer text-black hover:opacity-90 transition-opacity">
          About
        </Link>
        <MenuItem setActive={setActive} active={active} item="Catalog" href="/Collection">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Collection/living">Living</HoveredLink>
            <HoveredLink href="/Collection/dining">Dining</HoveredLink>
            <HoveredLink href="/Collection/bedroom">Bedroom</HoveredLink>
            <HoveredLink href="/Collection/wardrobe">Wardrobe</HoveredLink>
            <HoveredLink href="/Collection/kitchen">Kitchen</HoveredLink>
            <HoveredLink href="/Collection/doors-flooring">Doors & Flooring</HoveredLink>
            <HoveredLink href="/Collection/projects">Projects</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/designyourown" className="cursor-pointer text-black hover:opacity-90 transition-opacity">
          Design Your Own
        </Link>
        <Link href="/appointment" className="cursor-pointer text-black hover:opacity-90 transition-opacity">
          Appointment
        </Link>
        <Link href="/contact" className="cursor-pointer text-black hover:opacity-90 transition-opacity">
          Contact
        </Link>
        <Link href="/Blog" className="cursor-pointer text-black hover:opacity-90 transition-opacity">
          Blog
        </Link>
      </Menu>
      </div>

        {/* Mobile Navbar */}
        <div className="bg-white rounded-full lg:hidden flex items-center justify-between px-6 py-4 shadow-lg">
          <Link href="/" className="shrink-0">
            <Image
              src="/image/Logo/Logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-8 h-8"
            />
          </Link>
          
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          >
            <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mounted && mobileMenuOpen && (
        <div className="fixed top-28 left-4 right-4 bg-white rounded-2xl shadow-xl z-40 lg:hidden overflow-hidden">
          <div className="flex flex-col p-6 gap-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-gray-600 font-medium py-2">
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-gray-600 font-medium py-2">
              About
            </Link>
            <div className="border-t pt-2">
              <div className="text-black font-semibold mb-2">Catalog</div>
              <div className="flex flex-col gap-2 pl-4">
                <Link href="/Collection/living" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-black text-sm py-1">
                  Living
                </Link>
                <Link href="/Collection/dining" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-black text-sm py-1">
                  Dining
                </Link>
                <Link href="/Collection/bedroom" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-black text-sm py-1">
                  Bedroom
                </Link>
                <Link href="/Collection/wardrobe" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-black text-sm py-1">
                  Wardrobe
                </Link>
                <Link href="/Collection/kitchen" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-black text-sm py-1">
                  Kitchen
                </Link>
                <Link href="/Collection/doors-flooring" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-black text-sm py-1">
                  Doors & Flooring
                </Link>
                <Link href="/Collection/projects" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-black text-sm py-1">
                  Projects
                </Link>
              </div>
            </div>
            <Link href="/designyourown" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-gray-600 font-medium py-2">
              Design Your Own
            </Link>
            <Link href="/appointment" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-gray-600 font-medium py-2">
              Appointment
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-gray-600 font-medium py-2">
              Contact
            </Link>
            <Link href="/Blog" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-gray-600 font-medium py-2">
              Blog
            </Link>
          </div>
        </div>
      )}
    </>
  );
}


