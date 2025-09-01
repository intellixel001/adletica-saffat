"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaMousePointer,
  FaUsers,
  FaRegNewspaper,
  FaEnvelopeOpenText,
  FaLaptopCode,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    title: "SEO",
    description: "Rank higher, capture intent, drive organic growth.",
    icon: <FaSearch />,
  },
  {
    title: "Paid Media (PPC)",
    description: "Google, Meta & beyond — engineered for ROAS.",
    icon: <FaMousePointer />,
  },
  {
    title: "Social Media Marketing",
    description: "Content, community, and conversions.",
    icon: <FaUsers />,
  },
  {
    title: "Content Marketing",
    description: "Stories that sell, at scale.",
    icon: <FaRegNewspaper />,
  },
  {
    title: "Email & Automation",
    description: "Nurture leads into loyal customers.",
    icon: <FaEnvelopeOpenText />,
  },
  {
    title: "Web Design & CRO",
    description: "Sites that convert, not just look good.",
    icon: <FaLaptopCode />,
  },
];

export default function AllServices() {
  return (
    <section className="lg:py-[40px] py-[20px] bg-white text-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Full-Funnel Growth Services for Modern Brands.
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From awareness to acquisition to retention — we cover it all.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border border-blue-600 rounded-xl p-6 shadow-md bg-white hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-center mb-4 space-x-3">
                <div className="text-3xl text-blue-600">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-600">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Learn more →
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
          >
            View all services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
