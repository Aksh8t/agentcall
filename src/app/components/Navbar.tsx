"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-foreground">
              YourSaaS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#waitlist"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Join Waitlist
            </a>
            <a
              href="#about"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#waitlist"
              className="bg-foreground text-background px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#waitlist"
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </a>
              <a
                href="#about"
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#waitlist"
                className="bg-foreground text-background px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
