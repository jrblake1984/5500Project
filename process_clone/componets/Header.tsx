"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-blue-400 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyApp
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            Student Tools
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            Teacher Tools
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Institutions
          </Link>
                    <Link href="/contact" className="hover:text-blue-600">
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}

      </div>

      {/* Mobile Menu */}
 
    </header>
  );
}