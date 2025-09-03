"use client";

import { ChevronDown } from "lucide-react";
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
            : "bg-black/50 text-white"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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

            {/* Services with dropdown */}
            <div className="relative group">
              <Link
                href={"/services"}
                className="flex items-center space-x-1 text-lg hover:text-blue-600"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </Link>

              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2 text-gray-700">
                  <li>
                    <Link
                      href="/services/social-media"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Social Media Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/facebook-instagram-ads"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Facebook & Instagram Ads
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/seo"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Search Engine Optimization (SEO)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/google-ads"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Google Advertising
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/ppc"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Pay Per Click Advertising
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/graphic-design"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      graphic-design
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/ecommerce"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Ecommerce Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/video-marketing"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Video Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/content-writing"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Content Writing
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/web-design"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Website Design & Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

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
