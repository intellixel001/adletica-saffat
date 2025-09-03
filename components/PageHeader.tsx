"use client";

import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  bgImage: string;
  extraContent?: React.ReactNode; // ✅ optional prop for extra component
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  bgImage,
  extraContent,
}) => {
  return (
    <section className="bg-white text-[#0c0c0c]">
      <div
        className="relative text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="lg:pt-[130px] pt-[130px] pb-[100px] bg-black/60">
          <h2 className="lg:text-6xl text-4xl text-white font-bold mb-4">
            {title}
          </h2>
          <p className="lg:text-xl md:text-lg text-white max-w-2xl mx-auto">
            {description}
          </p>

          {/* ✅ Only render if provided */}
          {extraContent && <div className="mt-6">{extraContent}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
