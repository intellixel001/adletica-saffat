'use client'

import React, { useState, useEffect } from 'react';

// Demo data for blog posts
interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  avatarUrl: string;
}

const demoPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Pay for Intent, Not Clicks: How to Build Ads That Convert',
    description: 'Navigating the world of digital marketing today can feel like steering through a vast and unpredictable river. With so many...',
    category: 'Growth Marketing',
    author: 'George H.',
    date: 'Jul 02, 2025', // Changed date to match the image
    imageUrl: 'https://i.ibb.co/L840Jb1/Screenshot-2025-07-27-004818.jpg', // Using the first image from your provided screenshot
    avatarUrl: 'https://placehold.co/40x40/FFDDC1/E67E22?text=GH',
  },
  {
    id: 2,
    title: 'How AppLovin Hijacked Billions in App-Install Speed from Google',
    description: 'Actionable exactly when AppLovin first spiked onto my radar. Google’s own performance-marketing teams, usually unflappable...',
    category: 'Performance Marketing', // Changed category to match the image
    author: 'Mulenga Agley',
    date: 'Jun 03, 2025', // Changed date to match the image
    imageUrl: 'https://i.ibb.co/Jz5447x/image.png', // Using the second image from your provided screenshot
    avatarUrl: 'https://placehold.co/40x40/D5DBDB/7F8C8D?text=MA',
  },
  {
    id: 3,
    title: 'What Attio Teaches Us About Building Irresistible Products',
    description: 'I’ve been obsessing over Attio lately, and for good reason: it compresses everything I love about product-led growth into a...',
    category: 'Growth',
    author: 'Mulenga Agley',
    date: 'Jun 02, 2025', // Changed date to match the image
    imageUrl: 'https://i.ibb.co/yP30g7T/image.png', // Using the third image from your provided screenshot
    avatarUrl: 'https://placehold.co/40x40/D5DBDB/7F8C8D?text=MA',
  },
  {
    id: 4,
    title: 'The Playbook That Fueled 12+ Million Users For Chime', // Changed title to match the image
    description: 'I\'ve spent my career in fintech growth marketing, and few stories are as instructive as Chime\'s meteoric rise. Chime is ofte...', // Changed description to match the image
    category: 'Fintech', // Changed category to match the image
    author: 'Mulenga Agley',
    date: 'May 28, 2025', // Changed date to match the image
    imageUrl: 'https://i.ibb.co/yQ68jWJ/image.png', // Using the fourth image from your provided screenshot
    avatarUrl: 'https://placehold.co/40x40/D6EAF8/21618C?text=AW',
  },
  {
    id: 5,
    title: 'The Rise of AI in Content Creation',
    description: 'How artificial intelligence is transforming the way we create and consume content across various platforms.',
    category: 'Content',
    author: 'Bob The Builder',
    date: 'Jun 15, 2025',
    imageUrl: 'https://surl.li/sdjitj',
    avatarUrl: 'https://placehold.co/40x40/FCF3CF/B7950B?text=BB',
  },
  {
    id: 6,
    title: 'Social Media Marketing Strategies for 2025',
    description: 'A deep dive into the most effective social media marketing strategies to boost your brand\'s online presence this year.',
    category: 'Social',
    author: 'Charlie Chaplin',
    date: 'Jun 10, 2025',
    imageUrl: 'https://surl.li/sdjitj',
    avatarUrl: 'https://placehold.co/40x40/F2F4F4/616A6B?text=CC',
  },
];

const categories = ['All', 'Growth Marketing', 'Fintech', 'Growth', 'Social', 'Content', 'Performance Marketing']; // Added Performance Marketing

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(demoPosts);

  /*
  // Backend Compatibility Notes:
  // To make this backend compatible, you would replace the `demoPosts` array with data fetched from an API.

  // 1. API Endpoint:
  //    You would typically have an API endpoint (e.g., `/api/posts`) that returns a list of blog posts.

  // 2. Fetching Data:
  //    Uncomment the following code block to enable backend fetching logic.
  //    When this is active, `filteredPosts` would typically be set directly from the `posts` state
  //    after the backend has performed filtering/searching.

  // const [posts, setPosts] = useState<BlogPost[]>([]); // State for fetched posts when using backend
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       // Construct query parameters for category and search term
  //       const queryParams = new URLSearchParams();
  //       if (selectedCategory !== 'All') {
  //         queryParams.append('category', selectedCategory);
  //       }
  //       if (searchTerm) {
  //         queryParams.append('search', searchTerm);
  //       }

  //       const response = await fetch(`/api/posts?${queryParams.toString()}`);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data: BlogPost[] = await response.json();
  //       setPosts(data); // Update posts state with fetched data
  //       setFilteredPosts(data); // Update filteredPosts directly from backend data
  //     } catch (e: any) {
  //       setError(e.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPosts();
  // }, [selectedCategory, searchTerm]); // Re-fetch when category or search term changes

  // if (loading) return <div className="text-center py-10">Loading posts...</div>;
  // if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  */

  // Filter and search logic (for demo data, active when backend code is commented out)
  useEffect(() => {
    let currentPosts = demoPosts; // Always start with demoPosts for client-side filtering

    // Filter by category
    if (selectedCategory !== 'All') {
      currentPosts = currentPosts.filter(post => post.category === selectedCategory);
    }

    // Search by term
    if (searchTerm) {
      currentPosts = currentPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(currentPosts);
  }, [selectedCategory, searchTerm]); // Depend on selectedCategory and searchTerm for client-side filtering

  return (
    <div className="min-h-screen bg-white px-10 py-20 font-sans text-gray-800">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Inter font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      {/* Header Section */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        <div className="text-left mb-12">
          <h2 className="lg:text-8xl md:text-5xl font-bold mb-4">Blogs</h2>
          <p className="lg:text-2xl md:text-lg max-w-2xl mx-auto">Spin up a complete growth marketing department on-demand or extend your existing team with the specific service packages you need.</p>
        </div>

        {/* Top Images */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">

          <div className="w-[calc(50%-0.5rem)] max-w-[280px]">
            <img
              src="https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/site/headers/_308x479_crop_center-center_none/27063/pan-2.webp"
              alt="Service"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-[calc(50%-0.5rem)] max-w-[280px]">
            <img
              src="https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/site/headers/_308x479_crop_center-center_none/27063/pan-2.webp"
              alt="Service"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

        </div>

      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Category Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out
                  ${selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out shadow-sm"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 group"> {/* Added group class here */}
                <div className="relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-100 object-cover rounded-t-xl" // Changed rounded-2xl to rounded-t-xl for better corner match
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/400x250/CCCCCC/333333?text=Image+Error`; }} // Fallback image
                  />
                  {/* Overlay with View button */}
                  <div className="absolute inset-0  opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <button className="bg-[#0dcaf0] text-black px-4 py-2 rounded-full w-[5rem] h-[5rem]">View</button>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-900 text-xl mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <img
                      src={post.avatarUrl}
                      alt={post.author}
                      className="w-8 h-8 rounded-full mr-2 object-cover"
                      onError={(e) => { e.currentTarget.src = `https://placehold.co/40x40/BDC3C7/7F8C8D?text=AV`; }} // Fallback avatar
                    />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500 text-lg">
              No posts found matching your criteria.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;