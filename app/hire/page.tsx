"use client";

import React, { useState } from "react";
import Trusted from "../../components/trustedForm";

function App() {
  return (
    <div className="min-h-screen pt-12 flex flex-col lg:flex-row font-sans bg-gray-100">
      {/* Left Section (Blue Background) */}
      <div className="w-full lg:w-2/5 bg-blue-600 text-white p-8 md:p-12 flex flex-col justify-between rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none shadow-lg">
        <div>
          {/* Logo */}
          <div className="flex items-center mb-12">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7L17 10L12 15L7 10L12 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-2xl font-bold">Growthcurve</span>
          </div>

          {/* Feature List */}
          <div className="space-y-10">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Hear back in 24 hours
                </h3>
                <p className="text-blue-200">
                  To complete the onboarding process for your business.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a4 4 0 014-4h12.55M17 20v-2A3 3 0 005.72 11.02L7.5 13.5m0 0l2.5-2.5M7.5 13.5l3.5-3.5M12 12a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Meet your team lead
                </h3>
                <p className="text-blue-200">
                  To select a plan which fits your goals and budgets.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19V6l12-3v13M9 19c-1.381 0-2.5 1.066-2.5 2.5S7.619 24 9 24s2.5-1.066 2.5-2.5S10.381 19 9 19zm12 0c-1.381 0-2.5 1.066-2.5 2.5S19.619 24 21 24s2.5-1.066 2.5-2.5S22.381 19 21 19zm-9-5.5a2.5 2.5 0 000-5 2.5 2.5 0 000 5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Scale up growth flexibly
                </h3>
                <p className="text-blue-200">
                  Adjust your Growthcurve team up and down with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (White Background) */}
      <div className="w-full lg:w-3/5 bg-white p-8 md:p-12 flex flex-col justify-center rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none shadow-lg lg:shadow-none">
        <div className="max-w-md mx-auto w-full">
          <Trusted />

          {/* Clutch Review Section */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-2">REVIEWED ON</p>
            <div className="flex items-center justify-center mb-2">
              <span className="text-yellow-400 text-2xl mr-1">★★★★★</span>{" "}
              {/* 5 stars */}
              <img
                src="https://placehold.co/80x20/FFFFFF/333333?text=Clutch" // Placeholder for Clutch logo
                alt="Clutch"
                className="h-5"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/80x20/CCCCCC/333333?text=Clutch`;
                }}
              />
            </div>
            <p className="text-sm text-gray-500">14 REVIEWS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
