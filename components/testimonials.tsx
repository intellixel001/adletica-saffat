"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

// Firebase types
import { FirebaseApp } from "firebase/app";
import { Auth, User } from "firebase/auth";

// Testimonial type
interface Testimonial {
  id: number;
  type: string;
  image: string;
  logo: string;
  logoBg: string;
  stars: number;
  quote: string;
  source: string;
}

const App: React.FC = () => {
  useEffect(() => {
    const initializeFirebase = async () => {
      const firebaseConfig =
        typeof __firebase_config !== "undefined"
          ? JSON.parse(__firebase_config)
          : {};

      if (Object.keys(firebaseConfig).length > 0) {
        try {
          const { initializeApp } = await import("firebase/app");
          const { getAuth, signInAnonymously, onAuthStateChanged } =
            await import("firebase/auth");

          const app: FirebaseApp = initializeApp(firebaseConfig);
          const firebaseAuth: Auth = getAuth(app);

          onAuthStateChanged(firebaseAuth, (user: User | null) => {
            if (!user) signInAnonymously(firebaseAuth);
          });
        } catch (error) {
          console.error("Failed to initialize Firebase:", error);
        }
      }
    };

    initializeFirebase();
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      type: "person",
      image: "/image/testimonials/portrait-businessman-smiling.png",
      logo: "P",
      logoBg: "bg-red-500",
      stars: 5,
      quote:
        "They think outside the box and look at the big picture while steadily improving our CPA",
      source: "Pestlo",
    },
    // More testimonials...
  ];

  const renderStars = (count: number) => (
    <div className="flex text-yellow-400 mb-2">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-auto lg:py-[40px] py-[20px] bg-gray-100 flex items-center justify-center font-sans">
      <div className="container px-4 mx-auto">
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex justify-center items-stretch h-full"
              >
                <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm mx-auto transition-transform duration-300">
                  {testimonial.type === "person" ? (
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt="Testimonial Person"
                        className="w-full h-48 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                        width={300}
                        height={400}
                      />
                    </div>
                  ) : (
                    <div className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-center bg-gray-800 p-4 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                      <Image
                        src={testimonial.image}
                        alt="Testimonial Illustration"
                        className="w-full h-auto object-contain max-h-48"
                        width={300}
                        height={400}
                      />
                    </div>
                  )}

                  <div className="flex-1 p-6 flex flex-col justify-between bg-blue-600 text-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
                    <div className="flex items-start mb-4">
                      <div
                        className={`w-10 h-10 ${testimonial.logoBg} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 mr-4`}
                      >
                        {testimonial.logo}
                      </div>
                      <div>
                        {renderStars(testimonial.stars)}
                        <p className="text-lg font-medium leading-relaxed mb-4">
                          {testimonial.quote}
                        </p>
                        <p className="text-sm font-light opacity-80">
                          {testimonial.source}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default App;
