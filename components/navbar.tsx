"use client";

import Link from "next/link";
import React, { useState } from "react";

// Typing for NavLink props
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  hasDropdown?: boolean;
  isOpen?: boolean;
  toggleDropdown?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  isMobileMenuOpen: boolean;
}

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Function to toggle the mobile menu open/close state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open dropdowns when the main mobile menu is toggled
    setIsCompanyDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  // Function to toggle the Company dropdown in mobile view
  const toggleCompanyDropdown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior
    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
    setIsServicesDropdownOpen(false); // Close other dropdown
  };

  // Function to toggle the Services dropdown in mobile view
  const toggleServicesDropdown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsCompanyDropdownOpen(false); // Close other dropdown
  };

  // Helper function for navigation links (using <a> tags as per instructions for standalone React)
  const NavLink = ({
    href,
    children,
    onClick,
    hasDropdown = false,
    isOpen = false,
    toggleDropdown,
    isMobileMenuOpen,
  }: NavLinkProps) => (
    <div>
      <a
        href={href}
        onClick={hasDropdown ? toggleDropdown : onClick}
        className={`
          flex items-center justify-between py-2 px-4 rounded-lg
          text-gray-800 font-medium transition-colors duration-200
          ${hasDropdown ? "w-full" : ""}
          ${isMobileMenuOpen ? "text-xl font-semibold" : ""}
        `}
      >
        {children}
        {hasDropdown && (
          // This arrow is for mobile dropdowns only, controlled by state
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </a>
    </div>
  );

  return (
    <div className="font-sans antialiased">
      <nav className="bg-white shadow-md fixed w-full z-50 rounded-b-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center text-blue-600 text-2xl font-extrabold tracking-wide">
              {/* Inline SVG for ChartLine (logo) icon */}
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
              Adverly<sup className="text-sm font-normal ml-0.5">&reg;</sup>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
            {/* Company Dropdown for Desktop (Hover) */}
            <div className="relative group">
              <Link
                href="/about"
                className="hover:text-blue-600 font-bold text-xl transition-colors duration-200 flex items-center hover:border-b-2 hover:border-gray-500"
              >
                Company
                {/* Arrow for desktop dropdown */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Link>
              {/* Dropdown Content */}
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-gray-800 hover:text-blue-600"
                >
                  About Us
                </Link>
              </div>
            </div>

            <Link
              href="/work"
              className="hover:text-blue-600 font-bold text-xl transition-colors hover:border-b-2 hover:border-gray-500 duration-200"
            >
              Work
            </Link>
            <Link
              href="/result"
              className="hover:text-blue-600 font-bold text-xl transition-colors hover:border-b-2 hover:border-gray-500 duration-200"
            >
              Results
            </Link>

            {/* Services Dropdown for Desktop (Hover) */}
            <div className="relative group">
              <Link
                href="/services"
                className="hover:text-blue-600 hover:border-b-2 hover:border-gray-500 font-bold text-xl transition-colors duration-200 flex items-center"
              >
                Services
                {/* Arrow for desktop dropdown */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Link>
              {/* Dropdown Content */}
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link
                  href="/services/web-dev"
                  className="block px-4 py-2 text-gray-800 hover:text-blue-600 "
                >
                  Growth & Marketing
                </Link>
                <Link
                  href="/services"
                  className="block px-4 py-2 text-gray-800  hover:text-blue-600"
                >
                  Conversion Optimisation
                </Link>
                <Link
                  href="/services"
                  className="block px-4 py-2 text-gray-800  hover:text-blue-600"
                >
                  Creative and Design
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              className="hover:text-blue-600 hover:border-b-2 hover:border-gray-500 font-bold text-xl transition-colors duration-200"
            >
              Blog
            </Link>
          </div>

          {/* Desktop "Hire Us" Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md">
              <Link href="/hire" className="text-xl font-bold">
                {" "}
                Hire us <span className="text-2xl font-bold">→</span>
              </Link>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 text-3xl p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
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
            {/* Close Button for Mobile Drawer */}
            <button
              onClick={toggleMobileMenu}
              className="absolute top-5 right-5 text-3xl p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
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
            </button>

            {/* Mobile Navigation Links with Dropdowns */}
            <div className="w-full max-w-sm px-4 space-y-2">
              <div>
                {/* Wrapper for Company and its dropdown */}
                <NavLink
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCompanyDropdown(e);
                  }} // Keep click behavior for mobile
                  hasDropdown
                  isOpen={isCompanyDropdownOpen}
                  toggleDropdown={toggleCompanyDropdown}
                  isMobileMenuOpen={isMobileMenuOpen}
                >
                  Company
                </NavLink>
                {isCompanyDropdownOpen && (
                  <div className="pl-8 py-2 space-y-2 text-lg font-normal bg-gray-50 rounded-md animate-fadeIn">
                    <Link
                      href="/about"
                      onClick={toggleMobileMenu}
                      className="block py-1 hover:text-blue-600"
                    >
                      About Us
                    </Link>
                  </div>
                )}
              </div>

              <NavLink
                href="/work"
                onClick={toggleMobileMenu}
                isMobileMenuOpen={isMobileMenuOpen}
              >
                Work
              </NavLink>
              <NavLink
                href="/results"
                onClick={toggleMobileMenu}
                isMobileMenuOpen={isMobileMenuOpen}
              >
                Results
              </NavLink>

              <div>
                {/* Wrapper for Services and its dropdown */}
                <NavLink
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleServicesDropdown(e);
                  }} // Keep click behavior for mobile
                  hasDropdown
                  isOpen={isServicesDropdownOpen}
                  toggleDropdown={toggleServicesDropdown}
                  isMobileMenuOpen={isMobileMenuOpen}
                >
                  Services
                </NavLink>
                {isServicesDropdownOpen && (
                  <div className="pl-8 py-2 space-y-2 text-lg font-normal bg-gray-50 rounded-md animate-fadeIn">
                    <Link
                      href="/services"
                      onClick={toggleMobileMenu}
                      className="block py-1 hover:text-blue-600"
                    >
                      Growth & Marketing
                    </Link>
                    <Link
                      href="/services"
                      onClick={toggleMobileMenu}
                      className="block py-1 hover:text-blue-600"
                    >
                      Conversion Optimisation
                    </Link>
                    <Link
                      href="/services"
                      onClick={toggleMobileMenu}
                      className="block py-1 hover:text-blue-600"
                    >
                      Creative and Design
                    </Link>
                  </div>
                )}
              </div>

              <NavLink
                href="/blog"
                onClick={toggleMobileMenu}
                isMobileMenuOpen={isMobileMenuOpen}
              >
                Blog
              </NavLink>
            </div>

            {/* Mobile "Work With Us" Button */}
            <button className="bg-blue-600 text-white text-2xl px-8 py-4 rounded-xl mt-6 w-11/12 max-w-sm hover:bg-blue-700 transition-all shadow-md flex items-center justify-center gap-3">
              Work With Us <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </nav>

      {/* Tailwind CSS Customizations (for animations) */}
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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
