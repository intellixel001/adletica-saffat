"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimationPlaybackControls,
} from "framer-motion";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface Logo {
  src: string;
  alt: string;
}

const HeroSection: React.FC = () => {
  const logos: Logo[] = [
    {
      src: "https://placehold.co/80x32/E0E0E0/333?text=Monopoly",
      alt: "Monopoly",
    },
    { src: "https://placehold.co/80x32/E0E0E0/333?text=Hubpay", alt: "Hubpay" },
    { src: "https://placehold.co/80x32/E0E0E0/333?text=Anna", alt: "Anna" },
    { src: "https://placehold.co/80x32/E0E0E0/333?text=Koyo", alt: "Koyo" },
    { src: "https://placehold.co/80x32/E0E0E0/333?text=Logo1", alt: "Logo1" },
    { src: "https://placehold.co/80x32/E0E0E0/333?text=Logo2", alt: "Logo2" },
    { src: "https://placehold.co/80x32/E0E0E0/333?text=Logo3", alt: "Logo3" },
    { src: "https://placehold.co/80x32/E0E0E0/333?text=Logo4", alt: "Logo4" },
    { src: "https://placehold.co/80x32/E0E0E0/333?text=Logo5", alt: "Logo5" },
  ];

  const duplicatedLogos: Logo[] = [...logos, ...logos, ...logos];
  const x = useMotionValue(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemWidth = 100;
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    let animation: AnimationPlaybackControls;

    const startAutoScroll = (): void => {
      const scrollDistance = logos.length * itemWidth;

      animation = animate(x, -scrollDistance, {
        ease: "linear",
        duration: scrollDistance / 50,
        repeat: Infinity,
        repeatType: "loop",
        onRepeat: () => {
          x.set(0);
        },
      });
    };

    startAutoScroll();

    return () => {
      animation?.stop();
    };
  }, [x, logos.length, itemWidth]);

  const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
    </svg>
  );

  const VolumeMuteIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 6.343a1 1 0 010 1.414L13.536 9.5a1 1 0 01-1.414-1.414l1.121-1.121a1 1 0 011.414 0z" />
    </svg>
  );

  const VolumeUpIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 6.343a1 1 0 010 1.414L13.536 9.5a1 1 0 01-1.414-1.414l1.121-1.121a1 1 0 011.414 0z" />
    </svg>
  );

  return (
    <section className="w-full bg-white font-sans">
      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start  lg:py-[40px] py-[20px]">
        {/* LEFT TEXT AREA */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Marketing That Fuels Growth
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            The growth partner of choice for the world’s fastest-scaling
            companies.
          </motion.p>

          {/* CHECKPOINT LIST */}
          <motion.div
            className="space-y-2 text-gray-700"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[
              "Nearly a decade of proven growth marketing expertise.",
              "Trusted by startups & enterprises worldwide.",
              "Creative, Media & Performance — seamlessly integrated.",
            ].map((text, index) => (
              <motion.div
                key={index}
                className="flex items-start text-base sm:text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <AiOutlineCheckCircle className="mr-2 text-blue-600 text-xl sm:text-2xl" />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* BUTTON */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/hire"
                className="inline-flex items-center px-6 py-3 border-blue-600 border-2 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg text-4xl sm:text-lg cursor-pointer"
              >
                Start Growing Today <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            {/* 
            <Link
              href="/hire"
              className="inline-flex items-center px-6 py-3 border-blue-600 border-2 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg lg:text-4xl text-xl sm:text-lg cursor-pointer"
            >
              Start Growing Today <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link> */}
          </motion.div>

          {/* LOGO CAROUSEL */}
          {/* <div className="mt-6 overflow-hidden">
            <motion.div
              ref={carouselRef}
              className="flex items-center"
              style={{ x }}
            >
              {duplicatedLogos.map((logo: Logo, index: number) => (
                <motion.div
                  key={index}
                  className="flex-none"
                  style={{ width: itemWidth }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="mx-auto w-20 h-8 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div> */}

          {/* <div className="mt-4 text-sm sm:text-base text-gray-600">
            Reviewed on <span className="font-bold text-black">Clutch</span> – 5
            STAR AGENCY
          </div> */}
        </motion.div>

        {/* VIDEO RIGHT AREA */}
        <motion.div
          className="relative w-full h-auto rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img
            src="/image/hero/alexander-grey--8a5eJ1-mmQ-unsplash.jpg"
            alt="Hero Visual"
            className="rounded-3xl shadow-lg w-full h-auto"
          />
          {/* <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            loop
            autoPlay
            muted={isMuted}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          /> */}
          {/* <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeMuteIcon className="h-6 w-6" />
            ) : (
              <VolumeUpIcon className="h-6 w-6" />
            )}
          </button> */}
        </motion.div>
      </div>

      {/* SECONDARY SECTION */}
      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start lg:py-[40px] py-[20px]">
        <motion.div
          className="relative w-full h-auto rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src="/image/hero/tim-gouw-1K9T5YiZ2WU-unsplash.jpg"
            alt="Hero Visual"
            className="rounded-3xl shadow-lg w-full h-auto"
          />
          {/* <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            loop
            autoPlay
            muted={isMuted}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          /> */}
          {/* <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10"
          >
            {isMuted ? (
              <VolumeMuteIcon className="h-6 w-6" />
            ) : (
              <VolumeUpIcon className="h-6 w-6" />
            )}
          </button> */}
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            More Than a Marketing Agency — A Growth Partner.”
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            We exist to help brands unlock their next stage of growth through
            strategy, creativity, and data-driven performance.”
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 text-gray-700 text-base sm:text-lg"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Core Values:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Transparency:</strong> No hidden agendas, just clear
                  results.
                </li>
                <li>
                  <strong>Performance-Driven:</strong> Every campaign tied to
                  ROI.
                </li>
                <li>
                  <strong>Innovation:</strong> Always ahead of digital trends.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Why Us:
              </h3>
              <p>
                Because we don’t just run ads — we build scalable growth
                engines.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/hire"
              className="inline-flex items-center px-6 py-3 border-blue-600 border-2 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg text-4xl sm:text-lg cursor-pointer"
            >
              Hire us <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
