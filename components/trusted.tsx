"use client";

import TrustedForm from "../components/trustedForm";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimationPlaybackControls,
} from "framer-motion"; // Use AnimationControls here
import Image from "next/image"; // Ensure Image component is imported if you're using Next.js Image

// Define the Logo interface
interface Logo {
  src: string;
  alt: string;
}

function Trusted() {
  const logos: Logo[] = [
    {
      src: "https://placehold.co/160x80/31309E/FFFFFF?text=Really+Good",
      alt: "Really Good",
    },
    {
      src: "https://placehold.co/160x80/31309E/FFFFFF?text=ADJUST",
      alt: "Adjust",
    },
    { src: "https://placehold.co/160x80/31309E/FFFFFF?text=W", alt: "W" }, // This could be Weebly or Wordpress
    {
      src: "https://placehold.co/160x80/31309E/FFFFFF?text=BEAR+HUG%0AENTERTAINMENT",
      alt: "Bear Hug Entertainment",
    },
    {
      src: "https://placehold.co/160x80/31309E/FFFFFF?text=FUNDER",
      alt: "Funder",
    },
    {
      src: "https://placehold.co/160x80/31309E/FFFFFF?text=PE%0A0-2",
      alt: "PE 0-2",
    },
    {
      src: "https://placehold.co/160x80/31309E/FFFFFF?text=Lungy",
      alt: "Lungy",
    },
    { src: "https://placehold.co/160x80/31309E/FFFFFF?text=unrd", alt: "unrd" },
    {
      src: "https://placehold.co/160x80/31309E/FFFFFF?text=Taboo",
      alt: "Taboo",
    },
    {
      src: "https://placehold.co/160x80/31309E/FFFFFF?text=Unilever",
      alt: "Unilever",
    },
    {
      src: "https://placehold.co/160x80/31309E/FFFFFF?text=GAUDIO",
      alt: "Gaudio",
    },
  ];

  // Duplicated logos array for infinite scroll effect (3 times for a good loop)
  const duplicatedLogos: Logo[] = [...logos, ...logos, ...logos];

  // Estimated width for each logo container based on the image
  const itemWidth: number = 180; // Adjusted for better visual spacing and card size
  const itemHeight: number = 96; // Adjusted height for the cards

  // First Carousel (Left to Right)
  const x1 = useMotionValue(0);
  const carouselRef1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: AnimationPlaybackControls | undefined; // Corrected type here

    const startAutoScroll = (): void => {
      // The distance to scroll before resetting, effectively one full set of original logos
      const scrollDistance: number = logos.length * itemWidth;

      animation = animate(x1, -scrollDistance, {
        // Animate x1 to negative for left-to-right
        ease: "linear",
        duration: scrollDistance / 100, // Adjust duration for desired speed
        repeat: Infinity,
        repeatType: "loop",
        onRepeat: () => {
          x1.set(0); // Reset x1 to 0 after one full cycle
        },
      });
    };

    startAutoScroll();

    return () => {
      if (animation) {
        animation.stop();
      }
    };
  }, [x1, logos.length, itemWidth]);

  // Second Carousel (Right to Left)
  const x2 = useMotionValue(0);
  const carouselRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: AnimationPlaybackControls | undefined; // Corrected type here

    const startAutoScroll = (): void => {
      const scrollDistance: number = logos.length * itemWidth;

      animation = animate(x2, -scrollDistance, {
        // Animate x2 to positive for right-to-left appearance
        ease: "linear",
        duration: scrollDistance / 100, // Same duration as first for consistency
        repeat: Infinity,
        repeatType: "loop",
        onRepeat: () => {
          x2.set(0); // Reset x2 to 0, which effectively restarts the right-to-left cycle
        },
      });
    };

    startAutoScroll();

    return () => {
      if (animation) {
        animation.stop();
      }
    };
  }, [x2, logos.length, itemWidth]);

  return (
    <div className="bg-blue-500 py-16 overflow-hidden">
      {/* Main container background color */}
      <h2 className="text-white text-center text-3xl font-bold mb-10">
        Trusted by
      </h2>
      {/* Logos 1 Carousel (Left to Right) */}
      <div className="mt-6 overflow-hidden">
        <motion.div
          ref={carouselRef1}
          className="flex items-center"
          style={{ x: x1, width: duplicatedLogos.length * itemWidth }} // Set explicit width for motion.div
        >
          {duplicatedLogos.map((logo: Logo, index: number) => (
            <div
              key={index}
              className="flex-none flex items-center justify-center bg-[#31309E] rounded-xl mr-5" // Logo card styling
              style={{
                width: itemWidth,
                height: itemHeight,
                minWidth: itemWidth,
              }} // Enforce width and height
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
      {/* Logos 2 Carousel (Right to Left) */}
      <div className="mt-6 overflow-hidden">
        <motion.div
          ref={carouselRef2}
          className="flex items-center"
          style={{ x: x2, width: duplicatedLogos.length * itemWidth }} // Set explicit width for motion.div
        >
          {duplicatedLogos.map((logo: Logo, index: number) => (
            <div
              key={index}
              className="flex-none flex items-center justify-center bg-[#31309E] rounded-xl mr-5" // Logo card styling
              style={{
                width: itemWidth,
                height: itemHeight,
                minWidth: itemWidth,
              }} // Enforce width and height
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <TrustedForm />
    </div>
  );
}

export default Trusted;
