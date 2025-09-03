"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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

const services = [
  {
    id: 1,
    title: "SEO & Search Marketing",
    desc: "Boost rankings and visibility on search engines.",
    link: "/services/seo",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    desc: "Engage and grow your community with smart campaigns.",
    link: "/services/social",
  },
  {
    id: 3,
    title: "Google Ads & PPC",
    desc: "Maximize ROI with highly targeted ad campaigns.",
    link: "/services/ppc",
  },
  {
    id: 4,
    title: "Content Marketing",
    desc: "Build authority with blogs, videos & more.",
    link: "/services/content",
  },
  {
    id: 5,
    title: "Email Campaigns",
    desc: "Convert leads with automated email strategies.",
    link: "/services/email",
  },
  {
    id: 6,
    title: "Web Design & Development",
    desc: "Create stunning, responsive websites & landing pages.",
    link: "/services/web",
  },
  {
    id: 7,
    title: "Video & Graphic Design",
    desc: "Visuals that inspire and capture attention.",
    link: "/services/design",
  },
  {
    id: 8,
    title: "Lead Generation & Analytics",
    desc: "Data-driven strategies to scale growth.",
    link: "/services/analytics",
  },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Hero auto slide
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
    <section className="relative h-[100vh] flex flex-col justify-between overflow-hidden">
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
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto flex-1 flex items-center justify-center">
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

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-3 shadow-lg transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white rounded-full p-3 shadow-lg transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Services Swiper Carousel */}
      <div className="relative z-20 bg-black/60 py-10 px-4">
        <div className="container mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-800 text-white lg:p-6 p-2 rounded-xl shadow hover:bg-cyan-900 transition min-h-[170px] h-full flex flex-col"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 flex-1">{service.desc}</p>
                  <Link
                    href={service.link}
                    className="mt-4 inline-block text-cyan-400 hover:underline"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
