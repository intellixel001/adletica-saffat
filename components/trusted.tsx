"use client";

import TrustedForm from "../components/trustedForm";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimationPlaybackControls,
} from "framer-motion";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  {
    src: "https://placehold.co/160x80/31309E/FFFFFF?text=Really+Good",
    alt: "Really Good",
  },
  {
    src: "https://placehold.co/160x80/31309E/FFFFFF?text=ADJUST",
    alt: "Adjust",
  },
  { src: "https://placehold.co/160x80/31309E/FFFFFF?text=W", alt: "W" },
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
  { src: "https://placehold.co/160x80/31309E/FFFFFF?text=Lungy", alt: "Lungy" },
  { src: "https://placehold.co/160x80/31309E/FFFFFF?text=unrd", alt: "unrd" },
  { src: "https://placehold.co/160x80/31309E/FFFFFF?text=Taboo", alt: "Taboo" },
  {
    src: "https://placehold.co/160x80/31309E/FFFFFF?text=Unilever",
    alt: "Unilever",
  },
  {
    src: "https://placehold.co/160x80/31309E/FFFFFF?text=GAUDIO",
    alt: "Gaudio",
  },
];

const duplicatedLogos = [...logos, ...logos, ...logos];
const itemWidth = 180;
const itemHeight = 96;

export default function Trusted() {
  const x1 = useMotionValue(0);
  const x2 = useMotionValue(0);
  const scrollDistance = logos.length * itemWidth;

  // Auto scroll 1
  useEffect(() => {
    const animation = animate(x1, -scrollDistance, {
      ease: "linear",
      duration: scrollDistance / 100,
      repeat: Infinity,
      repeatType: "loop",
      onRepeat: () => x1.set(0),
    });
    return () => animation.stop();
  }, [x1, scrollDistance]);

  // Auto scroll 2
  useEffect(() => {
    const animation = animate(x2, -scrollDistance, {
      ease: "linear",
      duration: scrollDistance / 100,
      repeat: Infinity,
      repeatType: "loop",
      onRepeat: () => x2.set(0),
    });
    return () => animation.stop();
  }, [x2, scrollDistance]);

  return (
    <motion.div
      className="bg-blue-500 lg:py-[40px] py-[20px] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container px-4 mx-auto">
        <motion.h2
          className="text-white text-center text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Trusted by
        </motion.h2>

        {/* Carousel 1 */}
        <div className="mt-6 overflow-hidden">
          <motion.div
            className="flex items-center"
            style={{ x: x1, width: duplicatedLogos.length * itemWidth }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`logo1-${index}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-none flex items-center justify-center bg-[#31309E] rounded-xl mr-5"
                style={{
                  width: itemWidth,
                  height: itemHeight,
                  minWidth: itemWidth,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Carousel 2 */}
        <div className="mt-6 overflow-hidden">
          <motion.div
            className="flex items-center"
            style={{ x: x2, width: duplicatedLogos.length * itemWidth }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`logo2-${index}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-none flex items-center justify-center bg-[#31309E] rounded-xl mr-5"
                style={{
                  width: itemWidth,
                  height: itemHeight,
                  minWidth: itemWidth,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trusted Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TrustedForm />
        </motion.div>
      </div>
    </motion.div>
  );
}
