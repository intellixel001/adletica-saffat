"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSectionTop: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0dcaf0] via-white to-white overflow-hidden">
      <div className="container px-3 lg:px-[100px] mx-auto lg:py-[40px] py-[20px] flex flex-col lg:flex-row items-center justify-between">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left lg:max-w-xl"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
            Insights That <span className="text-[#0dcaf0]">Fuel Growth</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Explore actionable strategies, expert stories, and trends shaping
            the future of digital growth. Updated weekly with real-world
            insights.
          </p>
          <Link
            href="#latest-articles"
            className="mt-8 inline-block px-8 py-3 bg-black text-white font-semibold rounded-full shadow hover:bg-gray-800 transition duration-300"
          >
            Browse Articles
          </Link>
        </motion.div>

        {/* Right Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 lg:mt-0"
        >
          <img
            src="https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/blog/_blogThumbRectangle/62756/pay-for-intent-not-clicks-hero-image_2025-07-02-140639_svsl.webp"
            alt="Hero Visual"
            className="rounded-3xl shadow-lg max-w-full w-[500px] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionTop;
