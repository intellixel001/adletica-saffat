"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

// Define the type for a work item
interface WorkItem {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
}

// Dummy data for demonstration
// In a real application, this data would be fetched from a backend API.
const allWorkItems: WorkItem[] = [
  {
    id: "1",
    category: "Film",
    title: "Instant Vitals, Human First",
    imageUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "2",
    category: "Motion",
    title: "Finom: Open A Corporate Account",
    imageUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "3",
    category: "Paid Ads",
    title: "Digital Campaign for Brand X",
    imageUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "4",
    category: "Branding",
    title: "Rebranding Project for Company Y",
    imageUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "5",
    category: "Growth Marketing",
    title: "SEO Strategy for Startup Z",
    imageUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "6",
    category: "Influencer",
    title: "Influencer Collaboration with Creator A",
    imageUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "7",
    category: "Film",
    title: "Short Film Production",
    imageUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "8",
    category: "Motion",
    title: "Animated Explainer Video",
    imageUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const categories = [
  "All",
  "Film",
  "Motion",
  "Paid Ads",
  "Branding",
  "Growth Marketing",
  "Influencer",
];

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm] = useState("");
  // State to hold the work items. In a real app, this would be populated from a backend.
  const [workItems] = useState<WorkItem[]>(allWorkItems);
  // State to track which item is currently being hovered over
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  // Filter and search work items based on active category and search term
  const filteredAndSearchedWork = useMemo(() => {
    let filtered = workItems;

    // Apply category filtering
    if (activeCategory !== "All") {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    // Apply search filtering
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.category.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    return filtered;
  }, [workItems, activeCategory, searchTerm]);

  return (
    <div className="min-h-screen pt-20 bg-black text-white font-sans p-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Recent work</h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto sm:mx-0">
            The latest creative, campaign, motion graphics, design and growth
            marketing work from our in-house agency studio
          </p>
        </div>

        {/* Filter and Search Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center lg:border md:border h-auto rounded-full p-1 lg:border-blue-600 md:border-blue-600 sm:justify-start gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                  ${
                    activeCategory === category
                      ? "bg-white text-black"
                      : "bg-gray-900 text-gray-300 hover:text-gray-900 cursor-pointer hover:bg-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 h-auto sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredAndSearchedWork.map((item) => (
            <div
              key={item.id}
              className="bg-transparent rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <div className="relative">
                <video
                  src={item.imageUrl}
                  loop
                  autoPlay
                  className="w-full lg:h-[100vh] md:h-[80vh] object-cover rounded-xl"
                  muted
                  onError={(e) => {
                    e.currentTarget.onerror = null; // Prevent infinite loop
                    e.currentTarget.src = `https://placehold.co/600x400/333333/FFFFFF?text=Video+Error`;
                  }}
                />
                {/* View Button */}
                {hoveredItemId === item.id && (
                  <Link
                    href="/details"
                    className="absolute inset-0 m-[40%] cursor-pointer flex w-[8rem] h-[8rem] items-center justify-center bg-[#0dcaf0]  bg-opacity-50 text-black text-xl font-bold rounded-full opacity-100 transition-opacity duration-300"
                    // You can add an onClick handler here for the button's action
                    onClick={() => console.log(`View ${item.title}`)}
                  >
                    View
                  </Link>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              </div>
            </div>
          ))}
          {filteredAndSearchedWork.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">
              No work items found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
