"use client";

import React, { useState, useEffect, useRef, JSX } from "react";

// Main App component
const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Refs for scrolling to sections
  const growRef = useRef<HTMLDivElement>(null);
  const optimiseRef = useRef<HTMLDivElement>(null);
  const createRef = useRef<HTMLDivElement>(null);

  // Demo data for services
  const services = [
    {
      id: "user-acquisition",
      category: "grow",
      title: "User Acquisition",
      description:
        "Partner with us to lead your marketing, grow your user base and accelerate your sales in record time, whilst maximising return.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.354a4 4 0 110 5.292M12 20.005H.995V10.995h22V20.005H12zm0 0v-8.203"
          />
        </svg>
      ),
    },
    {
      id: "ppc",
      category: "grow",
      title: "PPC",
      description:
        "Get access to top PPC talent and the latest paid search strategies to boost growth, increase sales and outmaneuver competitors.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z"
          />
        </svg>
      ),
    },
    {
      id: "facebook-ads",
      category: "grow",
      title: "Facebook Ads",
      description:
        "Our Facebook ad specialists can help you get more from the platform than you ever thought possible.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM12 14c-1.463 0-2.873.267-4.159.753c-.663.243-1.309.526-1.928.847C2.79 16.514 2 17.555 2 18.736V21h20v-2.264c0-1.18-.79-2.221-1.992-2.894a8.125 8.125 0 00-1.928-.847A15.938 15.938 0 0012 14z"
          />
        </svg>
      ),
    },
    {
      id: "retargeting",
      category: "grow",
      title: "Retargeting",
      description:
        "Re-engage leads that haven't converted with personalised re-marketing campaigns that surface the right message at the right time.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      id: "app-store-optimisation",
      category: "optimise",
      title: "App Store Optimisation",
      description:
        "Improve your app's ranking on the App Store and Google Play. Maximise installs from both paid and organic traffic.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      id: "conversion-rate-optimisation",
      category: "optimise",
      title: "Conversion Rate Optimisation",
      description:
        "Work with our world-class team of conversion rate optimisation experts to ensure you yield the greatest value possible from paid and organic...",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "growth-marketing",
      category: "optimise",
      title: "Growth Marketing",
      description:
        "Systematically improve your key business metrics month over month with our growth marketing subscription.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      id: "landing-pages",
      category: "optimise",
      title: "Landing Pages",
      description:
        "Test your campaign conversion rates to the next level with our bespoke landing pages optimised by our leading data driven experimentation.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-1.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "website-development",
      category: "create",
      title: "Website Development",
      description:
        "Crafting responsive and high-performance websites tailored to your business needs. From concept to launch, we build digital experiences that convert.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      id: "mobile-app-design",
      category: "create",
      title: "Mobile App Design",
      description:
        "Designing intuitive and engaging mobile applications for iOS and Android. We focus on user experience and modern aesthetics to make your app stand out.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "content-creation",
      category: "create",
      title: "Content Creation",
      description:
        "Producing high-quality, engaging content including articles, blogs, videos, and infographics to captivate your audience and boost your SEO.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
    },
    {
      id: "brand-identity",
      category: "create",
      title: "Brand Identity",
      description:
        "Developing a strong and memorable brand identity that resonates with your target audience. This includes logo design, brand guidelines, and visual assets.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ];

  // Backend compatibility states (commented out)
  /*
  const [backendServices, setBackendServices] = useState<typeof services>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServicesFromBackend = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Replace with your actual backend API endpoint
        // const response = await fetch('/api/services');
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data: typeof services = await response.json();
        // setBackendServices(data);

        // For demo, just use the local services array
        setBackendServices(services);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServicesFromBackend();
  }, []);

  // Conditional rendering for loading and error states
  if (loading) return <div className="text-center text-white mt-20">Loading services...</div>;
  if (error) return <div className="text-center text-red-500 mt-20">Error: {error}</div>;
  */

  // Filtered services based on search term and active category
  const filteredServices = services.filter((service) => {
    // Change 'services' to 'backendServices' if using backend data
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeFilter === "all" || service.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  // Scroll to section when filter changes
  useEffect(() => {
    let refToScroll: HTMLDivElement | null = null;
    if (activeFilter === "grow" && growRef.current) {
      refToScroll = growRef.current;
    } else if (activeFilter === "optimise" && optimiseRef.current) {
      refToScroll = optimiseRef.current;
    } else if (activeFilter === "create" && createRef.current) {
      refToScroll = createRef.current;
    }

    if (refToScroll) {
      refToScroll.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeFilter]);

  // Handle filter button click
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setSearchTerm(""); // Clear search when filter is applied
  };

  // Group services by category for rendering
  const growServices = filteredServices.filter((s) => s.category === "grow");
  const optimiseServices = filteredServices.filter(
    (s) => s.category === "optimise"
  );
  const createServices = filteredServices.filter(
    (s) => s.category === "create"
  );

  return (
    <div className="min-h-screen bg-black px-8 py-15 text-white font-inter">
      {/* The original header content (search and filter) is now moved into the main section */}
      <main className="pt-8 pb-16 px-4 sm:px-8 lg:px-16">
        {" "}
        {/* Adjusted padding-top */}
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-left mb-12">
            <h2 className="lg:text-8xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="lg:text-2xl md:text-lg text-white max-w-2xl mx-auto">
              Spin up a complete growth marketing department on-demand or extend
              your existing team with the specific service packages you need.
            </p>
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
        </div>
        {/* Filter and Search Options (moved here) */}
        <div className="py-4 px-6 flex flex-col sm:flex-row items-center justify-between mb-12 bg-transparent rounded-lg">
          <div className="relative w-full sm:w-1/3 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 text-2xl rounded-full bg-gray-800   focus:outline-none focus:ring-2 border border-white text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <nav className="flex border border-blue-600 rounded-full p-1  space-x-4">
            <button
              className={`px-6 py-2 text-2xl rounded-full transition-colors cursor-pointer duration-300 ${
                activeFilter === "grow"
                  ? "bg-blue-600"
                  : "bg-gray-800 hover:bg-blue-600"
              }`}
              onClick={() => handleFilterClick("grow")}
            >
              Grow
            </button>
            <button
              className={`px-6 py-2 text-2xl rounded-full transition-colors cursor-pointer duration-300 ${
                activeFilter === "optimise"
                  ? "bg-blue-600"
                  : "bg-gray-800 hover:bg-blue-600"
              }`}
              onClick={() => handleFilterClick("optimise")}
            >
              Optimise
            </button>
            <button
              className={`px-6 py-2 text-2xl  rounded-full transition-colors cursor-pointer duration-300 ${
                activeFilter === "create"
                  ? "bg-blue-600"
                  : "bg-gray-800 hover:bg-blue-600"
              }`}
              onClick={() => handleFilterClick("create")}
            >
              Create
            </button>
          </nav>
        </div>
        {/* Grow Section */}
        {(growServices.length > 0 ||
          activeFilter === "grow" ||
          searchTerm === "") && (
          <section ref={growRef} className="mb-20">
            <h2 className="text-5xl font-bold mb-8 text-white">Grow</h2>
            <p className="text-gray-400 mb-12 max-w-2xl">
              Acquire new users for your app, customers for your product,
              subscribers for your service or members for your community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {growServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        )}
        {/* Optimise Section */}
        {(optimiseServices.length > 0 ||
          activeFilter === "optimise" ||
          searchTerm === "") && (
          <section ref={optimiseRef} className="mb-20">
            <h2 className="text-5xl font-bold mb-8 text-white">Optimise</h2>
            <p className="text-gray-400 mb-12 max-w-2xl">
              Increase the number of visitors to your app, website and landing
              pages that become valuable customers or users.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {optimiseServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        )}
        {/* Create Section */}
        {(createServices.length > 0 ||
          activeFilter === "create" ||
          searchTerm === "") && (
          <section ref={createRef} className="mb-20">
            <h2 className="text-5xl font-bold mb-8 text-white">Create</h2>
            <p className="text-gray-400 mb-12 max-w-2xl">
              Bring your ideas to life with our expert design and development
              services. We build innovative solutions that stand out.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {createServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        )}
        {/* No results message */}
        {filteredServices.length === 0 && (
          <div className="text-center text-gray-400 text-xl mt-20">
            No services found matching your criteria.
          </div>
        )}
      </main>
    </div>
  );
};

// ServiceCard component for displaying individual service details
interface ServiceCardProps {
  service: {
    id: string;
    category: string;
    title: string;
    description: string;
    icon: JSX.Element;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    // Added 'group', 'relative', and 'overflow-hidden' to the main card div
    <div className="group relative bg-transparent p-6 rounded-2xl shadow-lg border  transition-all duration-300 border-blue-600  hover:shadow-blue-500/30 overflow-hidden">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-900 rounded-full mr-4">{service.icon}</div>
        <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
      </div>
      <p className="text-gray-400 mb-6">{service.description}</p>
      <a
        href="#"
        className="text-blue-500 hover:text-blue-400 transition-colors duration-200 flex items-center"
      >
        learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
      {/* The underline element, now reacting to the main card's hover */}
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out rounded-full"></span>
    </div>
  );
};

export default App;
