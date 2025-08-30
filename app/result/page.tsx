"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = [
  "All",
  "Fintech",
  "Ecommerce",
  "Gaming",
  "SaaS",
  "Mobile",
  "B2B",
];

const resultsData = [
  // Full dataset to simulate infinite scroll
  {
    id: "1",
    category: "Film",
    title: "Instant Vitals, Human First",
    subTitel: "What you wanted to know?",
    imageUrl:
      "https://www.wheelchairbasketball.ca/wp-content/uploads/2024/10/20240831_WHEELCHAIR_BASKETBALL_CPC7808AB-1400x600-1.png",
  },
  {
    id: "2",
    category: "Motion",
    title: "Finom: Open A Corporate Account",
    subTitel: "What you wanted to know?",
    imageUrl:
      "https://www.wheelchairbasketball.ca/wp-content/uploads/2024/10/20240831_WHEELCHAIR_BASKETBALL_CPC7808AB-1400x600-1.png",
  },
  {
    id: "3",
    category: "Paid Ads",
    title: "Digital Campaign for Brand X",
    subTitel: "What you wanted to know?",
    imageUrl:
      "https://www.wheelchairbasketball.ca/wp-content/uploads/2024/10/20240831_WHEELCHAIR_BASKETBALL_CPC7808AB-1400x600-1.png",
  },
  {
    id: "4",
    category: "Branding",
    title: "Rebranding Project for Company Y",
    subTitel: "What you wanted to know?",
    imageUrl:
      "https://www.wheelchairbasketball.ca/wp-content/uploads/2024/10/20240831_WHEELCHAIR_BASKETBALL_CPC7808AB-1400x600-1.png",
  },
  {
    id: "5",
    category: "Growth Marketing",
    title: "SEO Strategy for Startup Z",
    subTitel: "What you wanted to know?",
    imageUrl:
      "https://www.wheelchairbasketball.ca/wp-content/uploads/2024/10/20240831_WHEELCHAIR_BASKETBALL_CPC7808AB-1400x600-1.png",
  },
  {
    id: "6",
    category: "Influencer",
    title: "Influencer Collaboration with Creator A",
    subTitel: "What you wanted to know?",
    imageUrl:
      "https://www.wheelchairbasketball.ca/wp-content/uploads/2024/10/20240831_WHEELCHAIR_BASKETBALL_CPC7808AB-1400x600-1.png",
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMoreRef = useRef(null);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null); // State to track hovered item

  const filteredResults =
    selectedCategory === "All"
      ? resultsData
      : resultsData.filter((item) => item.category === selectedCategory);

  const visibleItems = filteredResults.slice(0, visibleCount);

  // Effect for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 6, filteredResults.length));
        }
      },
      { threshold: 1.0 }
    );

    const currentRef = loadMoreRef.current; // Copy ref value for cleanup
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [filteredResults]);

  const shadowOpacity = 0.2;

  return (
    <div className="bg-black min-h-screen px-4 md:px-10 py-25 text-white font-inter">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Results</h1>
        <p className="text-gray-400 mb-6">
          Case studies which go a little deeper on the results we&apos;ve
          achieved for a few of our clients
        </p>{" "}
        {/* Escape apostrophe */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`capitalize px-4 py-2 rounded-full border border-gray-700 text-sm font-medium transition-colors duration-200
                ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          <AnimatePresence>
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl overflow-hidden w-full text-shadow-gray-600 text-shadow-2xs text-white shadow-lg relative"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  boxShadow: `inset 0 0 0 1000px rgba(0, 0, 0, ${shadowOpacity})`,
                  minHeight: "240px",
                }}
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
              >
                {/* Overlay for hover effect and button */}
                <AnimatePresence>
                  {hoveredItemId === item.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center bg-transparent z-30"
                    >
                      <Link
                        href="/details"
                        className="w-24 h-24 rounded-full flex items-center justify-center text-lg font-semibold 
                                   transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-75"
                        style={{
                          backgroundColor: "#0dcaf0",
                          color: "black",
                          borderColor: "#0dcaf0",
                        }}
                      >
                        View
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <h5 className="text-gray-100 text-xl">{item.subTitel}</h5>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div ref={loadMoreRef} className="h-10 mt-10 text-center text-gray-400">
          {visibleItems.length < filteredResults.length
            ? "Loading more results..."
            : "No more results to show."}
        </div>
      </div>
    </div>
  );
}
