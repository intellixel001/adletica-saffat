"use client";

import PageHeader from "@/components/PageHeader";
import React, { JSX, useState } from "react";
import {
  FaBullhorn,
  FaMousePointer,
  FaSearch,
  FaShareAlt,
  FaLaptopCode,
  FaGoogle,
  FaFacebookSquare,
  FaMicrosoft,
  FaAmazon,
  FaShoppingCart,
  FaVideo,
  FaPenFancy,
} from "react-icons/fa";

// Main App component
const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Services (real content you provided)
  const services = [
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Our digital marketing agency uses leading digital channels such as social media, advertising platforms, and websites to help you reach and engage customers. We design websites, manage ads, and grow conversions.",
      icon: <FaBullhorn className="h-10 w-10 text-blue-500" />,
    },
    {
      id: "ppc",
      title: "Pay Per Click Advertising",
      description:
        "We use PPC ads to drive traffic to websites and landing pages, ensuring every dollar is spent effectively. With real-time KPIs and optimization, you only pay for the leads that help grow your business.",
      icon: <FaMousePointer className="h-10 w-10 text-blue-500" />,
    },
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      description:
        "Our digital marketing company optimizes your website to increase visibility and enhance organic search rankings. From website content to social media strategy, we boost your organic reach.",
      icon: <FaSearch className="h-10 w-10 text-blue-500" />,
    },
    {
      id: "smm",
      title: "Social Media Marketing",
      description:
        "Advertise on Facebook, Instagram, LinkedIn, and more. We create and promote content, run ads, and help you achieve marketing and branding goals through powerful social channels.",
      icon: <FaShareAlt className="h-10 w-10 text-blue-500" />,
    },
    {
      id: "webdev",
      title: "Website Design & Development",
      description:
        "Our expert designers and developers build stunning, responsive websites that elevate your brand identity and perform seamlessly.",
      icon: <FaLaptopCode className="h-10 w-10 text-blue-500" />,
    },
    {
      id: "google-ads",
      title: "Google Advertising",
      description:
        "As a Google Partner, we expertly manage Google Ads campaigns to boost your brand reach, generate leads, and maximize ad spend.",
      icon: <FaGoogle className="h-10 w-10 text-blue-500" />,
    },
    {
      id: "fb-ads",
      title: "Facebook & Instagram Ads",
      description:
        "Harness the power of Facebook & Instagram to advertise your business. We optimize campaigns for visibility, engagement, and conversions.",
      icon: <FaFacebookSquare className="h-10 w-10 text-blue-500" />,
    },
    {
      id: "ecommerce-marketing",
      title: "Ecommerce Marketing",
      description:
        "We help you sell more products via Google Shopping, Bing Shopping, and other eCommerce platforms using ads, promotions, and remarketing.",
      icon: <FaShoppingCart className="h-10 w-10 text-blue-500" />,
    },
    {
      id: "video-marketing",
      title: "Video Marketing",
      description:
        "Engage your audience with impactful video ads on YouTube, Instagram, and more. We help you reach more customers with compelling video campaigns.",
      icon: <FaVideo className="h-10 w-10 text-blue-500" />,
    },
    {
      id: "content-writing",
      title: "Content Writing",
      description:
        "Our content writers create SEO-friendly blogs, ads, and social media content to engage audiences and boost your brand authority.",
      icon: <FaPenFancy className="h-10 w-10 text-blue-500" />,
    },
  ];

  // Filter services by search
  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white font-inter">
      {/* Header Section */}

      <PageHeader
        bgImage={"/image/allpages/aboutheader.jpg"}
        description="   Invest in Your Future with an agency that Gets Results"
        title="Our Services"
        extraContent={
          <div className="max-w-3xl relative mx-auto mt-10 px-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 rounded-lg bg-yellow-900 placeholder:text-yellow-600 border-[3px] border-yellow-600 text-white"
            />
            <FaSearch className="absolute right-[30px] text-yellow-600 text-[20px] top-[30%]" />
          </div>
        }
      />

      {/* Services Grid */}
      <section className="py-10 container px-4 mx-auto">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">❌ No services found.</p>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or browse all services.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

// ServiceCard Component
interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: JSX.Element;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative bg-transparent p-6 rounded-2xl shadow-lg border transition-all duration-300 border-blue-600 hover:shadow-blue-500/30 overflow-hidden">
      <div className="mb-4 flex justify-center">{service.icon}</div>
      <h3 className="text-2xl font-semibold text-white text-center mb-2">
        {service.title}
      </h3>
      <p className="text-gray-400 mb-6 text-center">{service.description}</p>
      <a
        href="#"
        className="text-blue-500 hover:text-blue-400 transition-colors duration-200 flex items-center justify-center"
      >
        Read More
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
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out rounded-full"></span>
    </div>
  );
};

export default App;
