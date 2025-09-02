"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsCompanyDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md text-gray-900"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-extrabold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125l7.219-4.813m4.781 4.813L21 9.375m-11.219 4.813l4.781-4.813m-4.781 4.813V19.5m0-10.125V4.5"
              />
            </svg>
            Adletica<sup className="text-sm font-normal ml-0.5">&reg;</sup>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <Link href="/about" className="hover:text-blue-600 text-lg">
              Company
            </Link>
            <Link href="/work" className="hover:text-blue-600 text-lg">
              Work
            </Link>
            <Link href="/results" className="hover:text-blue-600 text-lg">
              Results
            </Link>
            <Link href="/services" className="hover:text-blue-600 text-lg">
              Services
            </Link>
            <Link href="/blog" className="hover:text-blue-600 text-lg">
              Blog
            </Link>
          </div>

          {/* Desktop "Hire Us" Button */}
          <div className="hidden md:block">
            <Link
              href="/hire"
              className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
            >
              Hire us →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-3xl p-2 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-start pt-20 text-gray-800 text-xl font-semibold space-y-4 z-40 animate-slideInFromTop rounded-b-lg shadow-lg">
            <Link href="/about" onClick={toggleMobileMenu}>
              Company
            </Link>
            <Link href="/work" onClick={toggleMobileMenu}>
              Work
            </Link>
            <Link href="/results" onClick={toggleMobileMenu}>
              Results
            </Link>
            <Link href="/services" onClick={toggleMobileMenu}>
              Services
            </Link>
            <Link href="/blog" onClick={toggleMobileMenu}>
              Blog
            </Link>
            <Link
              href="/hire"
              onClick={toggleMobileMenu}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6 w-10/12 text-center hover:bg-blue-700"
            >
              Work With Us →
            </Link>
          </div>
        )}
      </nav>

      {/* Animation Styles */}
      <style>{`
        @keyframes slideInFromTop {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideInFromTop {
          animation: slideInFromTop 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default App;
