"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    label: "Digital Growth",
    heading: "Unlock Your Business Potential",
    button: "Start Now",
    link: "/services",
  },
  {
    id: 2,
    label: "Marketing Insights",
    heading: "Smarter Campaigns, Bigger Impact",
    button: "Learn More",
    link: "/blog",
  },
  {
    id: 3,
    label: "Creative Solutions",
    heading: "Design That Inspires Action",
    button: "Explore Design",
    link: "/services/design",
  },
  {
    id: 4,
    label: "Conversion Optimization",
    heading: "Turn Visitors Into Loyal Customers",
    button: "See How",
    link: "/results",
  },
  {
    id: 5,
    label: "Future Trends",
    heading: "Stay Ahead With Expert Insights",
    button: "Read Articles",
    link: "/blog",
  },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://media.istockphoto.com/id/979944750/video/startup-company-meeting.mp4?s=mp4-640x640-is&k=20&c=S6LoYX_yCQimFJUm_zBJxzd-5BvG1rHvKWN9av1lAc8="
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Slider Content */}
      <div className="relative z-20 container mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
              {slides[current].label}
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
              {slides[current].heading}
            </h1>
            <Link
              href={slides[current].link}
              className="inline-block px-8 py-3 bg-[#0dcaf0] text-white font-semibold rounded-full shadow hover:bg-cyan-500 transition duration-300"
            >
              {slides[current].button}
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-3 shadow-lg transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-3 shadow-lg transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === idx ? "bg-[#0dcaf0]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
