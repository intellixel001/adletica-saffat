'use client';

import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white px-10 mt-0 text-sm">
      <div className="max-w-7xl mx-auto h-[100vh] px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-gray-800">
        {/* Logo and Intro */}
        <div className='m-4 pt-6'>
          <div className="flex items-center mb-3 space-x-2">
            <div className="text-2xl font-bold text-blue-600">⌂</div>
            <span className="font-semibold  text-3xl ">Adverly</span>
          </div>
          <p className="mb-6 text-lg">
            Next generation growth marketing for startups and enterprise.
          </p>
          <p className='text-lg'>hello@growthcurve.co</p>
          <p className='text-lg'>+44 0203 870 3186</p>
          <div className="flex text-lg space-x-2 mt-3">
            <a
              href="#"
              className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Agency */}
        <div className='m-6 p-6'>
          <h4 className="font-semibold mb-3 text-2xl">Agency</h4>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className='m-6 p-6'>
          <h4 className="font-semibold mb-3 text-2xl">Services</h4>
          <ul className="space-y-2">
            <li><a href="#">User Acquisition</a></li>
            <li><a href="#">Facebook Ads</a></li>
            <li><a href="#">Pay Per Click</a></li>
            <li><a href="#">Retargeting</a></li>
            <li><a href="#">Landing Pages</a></li>
            <li><a href="#">Growth Hacking</a></li>
            <li><a href="#">Growth Marketing</a></li>
            <li><a href="#">Conversion Rate Optimisation</a></li>
            <li><a href="#">Creative Production</a></li>
            <li><a href="#">App Store Optimisation</a></li>
          </ul>
        </div>

        {/* Expertise */}
        <div className='m-6 p-6'>
          <h4 className="font-semibold mb-3 text-2xl">Expertise</h4>
          <ul className="space-y-2">
            <li><a href="#">Start Growing</a></li>
            <li><a href="#">Digital Marketing Agency</a></li>
            <li><a href="#">B2B Marketing Agency</a></li>
            <li><a href="#">Growth Marketing Agency</a></li>
          </ul>
        </div>

        {/* New Business Enquiries */}
        <div className='m-6 p-6'>
          <h4 className="font-semibold mb-3 text-2xl">New Business Enquiries</h4>
          <div className="mb-4">
            <p className="font-semibold">United Kingdom:</p>
            <p>50 Liverpool St,</p>
            <p>EC2M 7PY</p>
            <p>+44 0203 870 3186</p>
          </div>
          <div>
            <p className="font-semibold">United States:</p>
            <p>+1 (347) 657 3386</p>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 py-4 ">
        © 2025 Built with love by <a href="#" className="text-blue-600 hover:underline">Adverly</a> in East London
      </div>
    </footer>
  );
}
