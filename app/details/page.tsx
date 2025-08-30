"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TrustedForm from "../../components/trustedForm";

// Define card data
interface Card {
  id: string;
  imageSrc: string;
  altText: string;
}

const HomePage: React.FC = () => {
  // State to hold your card data, initialized as an empty array
  // This would typically be populated by a backend fetch
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Simulate fetching data from a backend
  useEffect(() => {
    const fetchCardData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // --- Backend Fetch Code  ---
        // In a real application, you would uncomment this and replace with your actual API call
        // const response = await fetch('/api/cards');
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data: Card[] = await response.json();
        // setCards(data);
        // --- End Backend Fetch Code ---

        // Placeholder data for demonstration since backend fetch is commented out
        const dummyData: Card[] = [
          {
            id: "card1",
            imageSrc: "https://shorturl.at/dmL1E",
            altText: "Male portrait for health check",
          },
          {
            id: "card2",
            imageSrc: "https://shorturl.at/dmL1E",
            altText: "Technology breakthrough scanning",
          },
          {
            id: "card3",
            imageSrc: "https://shorturl.at/dmL1E",
            altText: "Man receiving health insights",
          },
        ];
        setCards(dummyData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        console.error("Failed to fetch card data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCardData();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header/Navigation */}
      <header className="py-4 text-center">
        <img
          src="https://placehold.co/100x30/E0E0E0/333333?text=iSelfie"
          alt="iSelfie Logo"
          className="mx-auto h-8 rounded-md"
        />
      </header>

      <main className="container mx-auto px-4 py-12 lg:py-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Instant Vitals, Human First
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 mb-8">
            At the heart of iSelfie&apos;s innovation is simplicity, an app that
            turns your camera into a health-check tool, no wearables or wires
            needed. Our creative direction focuses on making that feel real and
            relatable. By using genuine and expressive portraits, we communicate
            trust, emotion, and clarity.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm sm:text-base text-gray-700">
            <div className="flex items-center rounded-full px-3 py-1 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              Dynamic bio-overlays
            </div>
            <div className="flex items-center rounded-full px-3 py-1 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2 animate-pulse"></span>
              Scroll-stopping glow
            </div>
            <div className="flex items-center rounded-full px-3 py-1 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2 animate-pulse"></span>
              Human-centric close-ups
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            <p className="col-span-full text-center text-lg text-gray-500">
              Loading vital insights...
            </p>
          ) : error ? (
            <p className="col-span-full text-center text-lg text-red-600">
              Error: {error}
            </p>
          ) : (
            cards.map((card) => (
              <div
                key={card.id}
                className="relative bg-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                {/* Card Image */}
                <Image
                  src={card.imageSrc}
                  alt={card.altText}
                  width={500} // Adjust size as needed
                  height={300} // Adjust size as needed
                  className="w-full h-99 rounded-lg object-cover shadow-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://placehold.co/400x300/cccccc/000000?text=Image+Error";
                  }}
                />
              </div>
            ))
          )}
        </section>

        {/* Text */}
        <section className="mt-16 text-center text-lg text-gray-600 max-w-3xl mx-auto p-4 bg-gray-50 rounded-lg shadow-inner">
          <p className="leading-relaxed">
            The floating biometrics (including heart rate, heart age and oxygen
            levels) give users an immediate sense of what the app does and how
            it works. We make the tech understandable in seconds, and help
            people easily imagine using iSelfie for their own health.
          </p>
        </section>
      </main>

      <section className="w-full p-10 bg-blue-600">
        <TrustedForm />
      </section>
    </div>
  );
};

export default HomePage;
