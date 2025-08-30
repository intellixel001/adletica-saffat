
import React from "react";
import Link from 'next/link';

const GrowthServices = () => {
  const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
    </svg>
  );
  return (
    <section className="bg-[#0053FF] text-white py-16 px-4 md:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* B2C Section */}
        <div className="bg-white p-16 text-[#0A0A0A] p-16 rounded-3xl shadow-xl flex flex-col justify-between h-auto">
          <div>
            <div className="flex items-center mb-2">
              <h3 className="text-4xl font-bold uppercase">For B2C Startups & Enterprise</h3>
              <svg width="5rem" height="5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M14 12L20 4H4L10 12V20L14 22V12Z" fill="#0053FF"/>
              </svg>
            </div>
            <p className="text-2xl text-gray-500 leading-tight mb-4">
              Our experts lead your growth marketing, leveraging the latest in culture, creative, media and technology
            </p>
            <ul className="space-y-3 text-base">
              {[
                "One stop shop for your marketing & growth",
                "Strategy, ad creative, media and performance",
                "Reduce risk with an experienced team",
                "More cost effective than hiring",
                "Start growing from day one",
              ].map((item, index) => (
                <li key={index} className="flex text-xl text-gray-600 items-center">
                  {/* Checkmark SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0053FF] mr-2 flex-shrink-0">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link href="/hire" className="inline-flex items-center px-6 py-3 w-[40%]  border-blue-600 border-2 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg text-4xl sm:text-lg cursor-pointer">
            Book a call <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* B2B Section */}
        <div className="bg-white text-[#0A0A0A] p-16 rounded-3xl shadow-xl flex flex-col justify-between ">
          <div>
            <div className="flex items-center mb-2">
              {/* B2B Icon (Funnel) */}
              
              <h3 className="text-4xl font-bold uppercase">For B2B Startups & Scale Ups</h3>
              <svg width="5rem" height="5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M14 12L20 4H4L10 12V20L14 22V12Z" fill="#0053FF"/>
              </svg>
            </div>
            <p className="text-2xl text-gray-600 leading-tight mb-4">
              Deliver record breaking growth for your business with a complete b2b growth system planned, built and managed by our experts
            </p>
            <ul className="space-y-3 text-base">
              {[
                "Build a robust new business pipeline fast",
                "Tap into our extensive data resources",
                "Get visibility across the entire sales cycle",
                "State of the art personalisation technology",
                "See results up to 10x faster than hiring",
              ].map((item, index) => (
                <li key={index} className="flex text-xl text-gray-600 items-center">
                  {/* Checkmark SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0053FF] mr-2 flex-shrink-0">
                    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
         <Link href="/hire" className="inline-flex items-center px-6 py-3 w-[40%] border-blue-600 border-2 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg text-4xl sm:text-lg cursor-pointer">
            Book a call <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GrowthServices;
