"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Arrow Icon Component
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    />
  </svg>
);

// Animation Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const GrowthServices: React.FC = () => {
  const b2cItems: string[] = [
    "One stop shop for your marketing & growth",
    "Strategy, ad creative, media and performance",
    "Reduce risk with an experienced team",
    "More cost effective than hiring",
    "Start growing from day one",
  ];

  const b2bItems: string[] = [
    "Build a robust new business pipeline fast",
    "Tap into our extensive data resources",
    "Get visibility across the entire sales cycle",
    "State of the art personalisation technology",
    "See results up to 10x faster than hiring",
  ];

  return (
    <section className="bg-[#0053FF] text-white lg:py-[40px] py-[20px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
      >
        {[b2cItems, b2bItems].map((list, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            custom={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white text-[#0A0A0A] p-10 md:p-16 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-3xl md:text-4xl font-bold uppercase">
                  {i === 0
                    ? "For B2C Startups & Enterprise"
                    : "For B2B Startups & Scale Ups"}
                </h3>
                <svg
                  width="5rem"
                  height="5rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3"
                >
                  <path d="M14 12L20 4H4L10 12V20L14 22V12Z" fill="#0053FF" />
                </svg>
              </div>
              <p className="text-lg md:text-2xl text-gray-600 leading-tight mb-4">
                {i === 0
                  ? "Our experts lead your growth marketing, leveraging the latest in culture, creative, media and technology."
                  : "Deliver record-breaking growth with a complete B2B system planned, built, and managed by experts."}
              </p>
              <ul className="space-y-3 text-base">
                {list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex text-lg text-gray-600 items-center"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#0053FF] mr-2 flex-shrink-0"
                    >
                      <path
                        d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                        fill="currentColor"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/hire"
              className="inline-flex items-center mt-6 px-6 py-3 w-fit border-blue-600 border-2 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg text-lg"
            >
              Book a call <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GrowthServices;
