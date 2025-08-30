"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimationPlaybackControls,
} from "framer-motion";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Re-import AiOutlineCheckCircle

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

  // Duplicate logos to create a seamless infinite scroll effect
  const duplicatedLogos: Logo[] = [...logos, ...logos, ...logos];

  // Motion value for horizontal scroll position
  const x = useMotionValue(0);
  // Ref for the carousel container
  const carouselRef = useRef<HTMLDivElement>(null);

  // Define the width of each logo item in pixels. This is used for animation calculations.
  const itemWidth: number = 100;
  // Calculate the total width of all duplicated logos for animation
  // const totalWidth: number = duplicatedLogos.length * itemWidth;

  // State to manage video mute/unmute
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // Effect to handle the auto-scrolling animation of the logo carousel
  useEffect(() => {
    let animation: AnimationPlaybackControls;

    const startAutoScroll = (): void => {
      // The distance to scroll before resetting the position to create a loop
      const scrollDistance: number = logos.length * itemWidth;

      // Animate the 'x' motion value from 0 to -scrollDistance
      animation = animate(x, -scrollDistance, {
        ease: "linear", // Linear easing for constant speed
        duration: scrollDistance / 50, // Duration based on distance to maintain consistent speed
        repeat: Infinity, // Repeat indefinitely
        repeatType: "loop", // Loop back to the start
        onRepeat: () => {
          // Reset 'x' to 0 when the animation repeats to create a seamless loop
          x.set(0);
        },
      });
    };

    startAutoScroll();

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      if (animation) {
        animation.stop();
      }
    };
  }, [x, logos.length, itemWidth]); // Dependencies for the effect

  // Inline SVG for Arrow Right (kept as SVG to avoid reintroducing react-icons/ai error for this specific icon)
  const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  // Inline SVG for Volume Mute (kept as SVG to avoid reintroducing react-icons/fa error)
  const VolumeMuteIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 6.343a1 1 0 010 1.414L13.536 9.5a1 1 0 01-1.414-1.414l1.121-1.121a1 1 0 011.414 0zm2.828 2.828a1 1 0 010 1.414L16.364 12.5a1 1 0 01-1.414-1.414l1.121-1.121a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  // Inline SVG for Volume Up (kept as SVG to avoid reintroducing react-icons/fa error)
  const VolumeUpIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 6.343a1 1 0 010 1.414L13.536 9.5a1 1 0 01-1.414-1.414l1.121-1.121a1 1 0 011.414 0zm2.828 2.828a1 1 0 010 1.414L16.364 12.5a1 1 0 01-1.414-1.414l1.121-1.121a1 1 0 011.414 0zM17.778 5.222a1 1 0 010 1.414L16.364 8a1 1 0 01-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM19.192 3.808a1 1 0 010 1.414L17.778 6.636a1 1 0 01-1.414-1.414l1.414-1.414a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-16 pt-30 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Marketing that drives growth
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            The growth marketing agency of record for the world&apos;s fastest
            growing companies.
          </p>

          <div className="space-y-2 text-gray-700">
            <div className="flex items-center text-base sm:text-lg">
              <AiOutlineCheckCircle className="mr-2 text-blue-600 text-xl sm:text-2xl" />
              <span>The #1 Growth Marketing Agency</span>
            </div>
            <div className="flex items-center text-base sm:text-lg">
              <AiOutlineCheckCircle className="mr-2 text-blue-600 text-xl sm:text-2xl" />
              <span>Nearly a decade As Industry Leaders</span>
            </div>
            <div className="flex items-center text-base sm:text-lg">
              <AiOutlineCheckCircle className="mr-2 text-blue-600 text-xl sm:text-2xl" />
              <span>Creative, Media & Performance</span>
            </div>
          </div>

          <Link
            href="/hire"
            className="inline-flex items-center px-6 py-3 border-blue-600 border-2 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg text-4xl sm:text-lg cursor-pointer"
          >
            Book a call <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>

          <div className="mt-6 overflow-hidden ">
            <motion.div
              ref={carouselRef}
              className="flex items-center"
              style={{ x }} // Apply the motion value for horizontal translation
            >
              {duplicatedLogos.map((logo: Logo, index: number) => (
                <div
                  key={index}
                  className="flex-none"
                  style={{ width: itemWidth + "px" }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="mx-auto w-20 h-8 object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 text-sm sm:text-base text-gray-600">
            Reviewed on <span className="font-bold text-black">Clutch</span> – 5
            STAR AGENCY
          </div>
        </div>

        <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            loop
            autoPlay
            muted={isMuted}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10"
            aria-label={
              isMuted ? "Unmute video" : "Mute video".replace("'", "&apos;")
            }
          >
            {isMuted ? (
              <VolumeMuteIcon className="h-6 w-6" />
            ) : (
              <VolumeUpIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16 py-10">
        <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            loop
            autoPlay
            muted={isMuted}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10"
            aria-label={
              isMuted ? "Unmute video" : "Mute video".replace("'", "&apos;")
            }
          >
            {isMuted ? (
              <VolumeMuteIcon className="h-6 w-6" />
            ) : (
              <VolumeUpIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Ad agencies are dead. We’re what comes next.
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Embed a hands-on team of Growth Marketing experts in your business
            as your full-stack growth marketing department, or as an extension
            of your internal marketing team.
          </p>
          <Link
            href="/hire"
            className="inline-flex items-center px-6 py-3 border-blue-600 border-2 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg text-4xl sm:text-lg cursor-pointer"
          >
            Hire us <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
