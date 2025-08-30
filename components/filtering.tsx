'use client'

import React, { useState, useMemo } from 'react';

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
    id: '1',
    category: 'Film',
    title: 'Instant Vitals, Human First',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Work+Image+1', // Placeholder image
  },
  {
    id: '2',
    category: 'Motion',
    title: 'Finom: Open A Corporate Account',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Work+Image+2', // Placeholder image
  },
  {
    id: '3',
    category: 'Paid Ads',
    title: 'Digital Campaign for Brand X',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Work+Image+3', // Placeholder image
  },
  {
    id: '4',
    category: 'Branding',
    title: 'Rebranding Project for Company Y',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Work+Image+4', // Placeholder image
  },
  {
    id: '5',
    category: 'Growth Marketing',
    title: 'SEO Strategy for Startup Z',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Work+Image+5', // Placeholder image
  },
  {
    id: '6',
    category: 'Influencer',
    title: 'Influencer Collaboration with Creator A',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Work+Image+6', // Placeholder image
  },
  {
    id: '7',
    category: 'Film',
    title: 'Short Film Production',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Work+Image+7', // Placeholder image
  },
  {
    id: '8',
    category: 'Motion',
    title: 'Animated Explainer Video',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Work+Image+8', // Placeholder image
  },
];

const categories = ['All', 'Film', 'Motion', 'Paid Ads', 'Branding', 'Growth Marketing', 'Influencer'];

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  // State to hold the work items. In a real app, this would be populated from a backend.
  const [workItems, setWorkItems] = useState<WorkItem[]>(allWorkItems);

  // useEffect(() => {
  //   // This is where you would typically fetch data from your backend.
  //   // Example:
  //   // const fetchWork = async () => {
  //   //   try {
  //   //     const response = await fetch('/api/work'); // Replace with your actual API endpoint
  //   //     const data = await response.json();
  //   //     setWorkItems(data);
  //   //   } catch (error) {
  //   //     console.error('Error fetching work items:', error);
  //   //   }
  //   // };
  //   // fetchWork();
  // }, []);

  const filteredAndSearchedWork = useMemo(() => {
    let filtered = workItems;

    // Apply category filtering
    if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    // Apply search filtering
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        item =>
          item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.category.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    return filtered;
  }, [workItems, activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Recent work</h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto sm:mx-0">
            The latest creative, campaign, motion graphics, design and growth marketing work from our in-house agency studio
          </p>
        </div>

        {/* Filter and Search Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                  ${activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search work..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            {/* For backend search, you might debounce this input or trigger search on a button click */}
            {/* Example for backend search: */}
            {/* <button onClick={handleBackendSearch}>Search</button> */}
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredAndSearchedWork.map(item => (
            <div key={item.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover rounded-t-xl"
                onError={(e) => {
                  e.currentTarget.onerror = null; // Prevent infinite loop
                  e.currentTarget.src = `https://placehold.co/600x400/333333/FFFFFF?text=Image+Error`; // Fallback image
                }}
              />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{item.category}</p>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {/* Additional details could go here */}
                {/* <a href="#" className="text-blue-400 hover:underline">View Project</a> */}
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
