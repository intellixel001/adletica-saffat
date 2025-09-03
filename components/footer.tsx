"use client";

import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {/* Logo and Intro */}
        <div>
          <div className="flex items-center mb-4 space-x-2">
            <div className="text-3xl font-bold text-blue-500">⌂</div>
            <span className="font-semibold text-2xl text-white">adletica</span>
          </div>
          <p className="mb-6 text-sm text-gray-400 leading-relaxed">
            Next generation growth marketing for startups and enterprise.
          </p>
          <p className="text-sm">hello@adletica.co</p>
          <p className="text-sm">+44 0203 870 3186</p>
          <div className="flex space-x-3 mt-4">
            <a
              href="#"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Agency */}
        <div>
          <h4 className="font-semibold mb-4 text-white text-lg">Agency</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-white text-lg">Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              "User Acquisition",
              "Facebook Ads",
              "Pay Per Click",
              "Retargeting",
              "Landing Pages",
              "Growth Hacking",
              "Growth Marketing",
              "Conversion Rate Optimisation",
              "Creative Production",
              "App Store Optimisation",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-white transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <h4 className="font-semibold mb-4 text-white text-lg">Expertise</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Start Growing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Digital Marketing Agency
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                B2B Marketing Agency
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Growth Marketing Agency
              </a>
            </li>
          </ul>
        </div>

        {/* Business Enquiries */}
        <div>
          <h4 className="font-semibold mb-4 text-white text-lg">
            New Business Enquiries
          </h4>
          <div className="mb-6 text-sm space-y-1">
            <p className="font-semibold text-white">United Kingdom:</p>
            <p>50 Liverpool St,</p>
            <p>EC2M 7PY</p>
            <p>+44 0203 870 3186</p>
          </div>
          <div className="text-sm space-y-1">
            <p className="font-semibold text-white">United States:</p>
            <p>+1 (347) 657 3386</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 text-center text-xs text-gray-500 py-5">
        © 2025 Built with ❤️ by{" "}
        <a href="#" className="text-blue-500 hover:underline">
          adletica
        </a>{" "}
        in East London
      </div>
    </footer>
  );
}
