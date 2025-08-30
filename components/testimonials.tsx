'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Main App component
const App: React.FC = () => {
  // State for Firebase and user ID (required for Firestore, even if not used for this specific app)
  const [db, setDb] = useState<any>(null);
  const [auth, setAuth] = useState<any>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);

  // Initialize Firebase and set up auth listener
  useEffect(() => {
    const initializeFirebase = async () => {
      // Ensure __app_id and __firebase_config are defined in the environment
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};

      // Only initialize if firebaseConfig has keys
      if (Object.keys(firebaseConfig).length > 0) {
        try {
          const { initializeApp } = await import('firebase/app');
          const { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } = await import('firebase/auth');
          const { getFirestore } = await import('firebase/firestore');

          const app = initializeApp(firebaseConfig);
          const firestoreDb = getFirestore(app);
          const firebaseAuth = getAuth(app);

          setDb(firestoreDb);
          setAuth(firebaseAuth);

          onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
              setUserId(user.uid);
            } else {
              // Sign in anonymously if no initial auth token
              if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                try {
                  await signInWithCustomToken(firebaseAuth, __initial_auth_token);
                } catch (error) {
                  console.error("Error signing in with custom token:", error);
                  // Fallback to anonymous if custom token fails
                  await signInAnonymously(firebaseAuth);
                }
              } else {
                await signInAnonymously(firebaseAuth);
              }
              setUserId(firebaseAuth.currentUser?.uid || crypto.randomUUID());
            }
            setIsAuthReady(true);
          });
        } catch (error) {
          console.error("Failed to initialize Firebase:", error);
        }
      } else {
        console.warn("Firebase config not found. Running without Firebase.");
        setIsAuthReady(true); // Mark auth as ready even without Firebase init
        setUserId(crypto.randomUUID()); // Generate a random ID if no Firebase
      }
    };

    initializeFirebase();
  }, []); // Run once on component mount

  // Placeholder for user ID display (can be removed if not needed for the UI)
  const displayUserId = isAuthReady ? (userId || 'Loading User ID...') : 'Initializing Auth...';

  // Data for the testimonial cards, matching the image's structure
  const testimonials = [
    {
      id: 1,
      type: 'person',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image 1
      logo: 'P',
      logoBg: 'bg-red-500',
      stars: 5,
      quote: 'They think outside the box and look at the big picture while steadily improving our CPA',
      source: 'Pestlo',
    },
    {
      id: 2,
      type: 'person',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image 2
      logo: 'OC',
      logoBg: 'bg-orange-500',
      stars: 5,
      quote: 'Growthcurve grew our martial arts school from $0 to $33,000 monthly recurring revenue in 3 months',
      source: 'Olympic Combat',
    },
    {
      id: 3,
      type: 'person',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image 2
      logo: 'OC',
      logoBg: 'bg-orange-500',
      stars: 5,
      quote: 'Growthcurve grew our martial arts school from $0 to $33,000 monthly recurring revenue in 3 months',
      source: 'Olympic Combat',
    },
    {
      id: 4,
      type: 'person',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image 2
      logo: 'OC',
      logoBg: 'bg-orange-500',
      stars: 5,
      quote: 'Growthcurve grew our martial arts school from $0 to $33,000 monthly recurring revenue in 3 months',
      source: 'Olympic Combat',
    },
    
  ];

  // Helper function to render stars
  const renderStars = (count: number) => {
    return (
      <div className="flex text-yellow-400 mb-2">
        {[...Array(count)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.908-7.417 3.908 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      {/* Display User ID for debugging/multi-user context if needed */}
      {/* <div className="absolute top-4 left-4 text-sm text-gray-600">User ID: {displayUserId}</div> */}

      <div className="w-full max-w-7xl">
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true} // Enable looping for a continuous carousel effect
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper p-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex justify-center items-stretch h-full"> {/* Ensure cards stretch to fill height */}
                <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105">
                  {/* Image Section */}
                  {testimonial.type === 'person' ? (
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt="Testimonial Person"
                        className="w-full h-48 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `https://placehold.co/200x200/333333/FFFFFF?text=Image+Error`;
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-full md:w-1/3 flex-shrink-0 flex items-center justify-center bg-gray-800 p-4 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                      <img
                        src={testimonial.image}
                        alt="Testimonial Illustration"
                        className="w-full h-auto object-contain max-h-48"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `https://placehold.co/200x200/10B981/FFFFFF?text=Image+Error`;
                        }}
                      />
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="flex-1 p-6 flex flex-col justify-between bg-blue-600 text-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
                    <div className="flex items-start mb-4">
                      {/* Logo/Icon */}
                      <div className={`w-10 h-10 ${testimonial.logoBg} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 mr-4`}>
                        {testimonial.logo}
                      </div>
                      {/* Stars and Quote */}
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default App;