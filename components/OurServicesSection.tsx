"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

const OurServicesSection: React.FC = () => {
  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const services = [
    "SEO",
    "Social Media Marketing and Ads",
    "Google Ads & PPC Campaigns",
    "Content Marketing",
    "Email Marketing",
    "Web Design & Landing Pages",
    "Video & Graphics Design",
    "Lead Generation & Analytics",
  ];

  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Expert Digital Marketing Services
        </motion.h2>

        <motion.p
          className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our team of experts combines{" "}
          <span className="font-semibold text-blue-600">
            strategy, creativity, and technology
          </span>{" "}
          to deliver powerful digital marketing solutions. We don’t just focus
          on clicks or likes; we build{" "}
          <span className="font-semibold">meaningful connections</span> between
          your brand and your audience.
        </motion.p>

        {/* Services List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-3 bg-gray-50 p-5 rounded-xl shadow-sm cursor-pointer"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
              }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
              <p className="text-gray-800 font-medium">{service}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="mt-12 text-lg text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          At <span className="font-semibold text-blue-600">Adlectica</span>, we
          take pride in our
          <span className="font-semibold">
            {" "}
            innovation, transparency, and collaboration.
          </span>{" "}
          We work closely with our clients to understand their vision,
          challenges, and goals, ensuring every campaign delivers impact.
        </motion.p>
      </div>
    </section>
  );
};

export default OurServicesSection;
