"use client";

import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  Firestore,
} from "firebase/firestore";

// Define global variables for Firebase configuration if they exist, otherwise use defaults
declare const __app_id: string | undefined;
declare const __firebase_config: string | undefined;
declare const __initial_auth_token: string | undefined;

function App() {
  const [email, setEmail] = useState("");
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false);
  const [currentStep] = useState(1); // Assuming 1 is 'ABOUT YOU'
  const [db, setDb] = useState<Firestore | null>(null);
  // const [auth, setAuth] = useState<Auth | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Firebase and set up auth listener
  useEffect(() => {
    try {
      // const appId =
      //   typeof __app_id !== "undefined" ? __app_id : "default-app-id";
      const firebaseConfig =
        typeof __firebase_config !== "undefined"
          ? JSON.parse(__firebase_config)
          : {};

      if (Object.keys(firebaseConfig).length === 0) {
        console.error(
          "Firebase config is not provided. Backend functionality will be limited."
        );
        setIsAuthReady(true); // Allow UI to render even without full Firebase setup
        return;
      }

      const app = initializeApp(firebaseConfig);
      const firestore = getFirestore(app);
      const firebaseAuth = getAuth(app);

      setDb(firestore);
      // setAuth(firebaseAuth);

      const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          // Sign in anonymously if no token is provided
          if (typeof __initial_auth_token !== "undefined") {
            await signInWithCustomToken(firebaseAuth, __initial_auth_token);
            setUserId(firebaseAuth.currentUser?.uid || crypto.randomUUID());
          } else {
            await signInAnonymously(firebaseAuth);
            setUserId(firebaseAuth.currentUser?.uid || crypto.randomUUID());
          }
        }
        setIsAuthReady(true);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Failed to initialize Firebase:", error);
      setIsAuthReady(true); // Ensure UI loads even if Firebase init fails
    }
  }, []);

  // Function to handle form submission (simulated backend interaction)
  const handleSubmit = async () => {
    if (!email || !agreeToPrivacy) {
      setMessage(
        "Please enter your business email and agree to the privacy policy."
      );
      return;
    }

    if (!db || !userId) {
      setMessage(
        "Firebase is not initialized or user not authenticated. Cannot save data."
      );
      console.error("Firebase DB or User ID is not available.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      // Example of saving data to Firestore
      const appId =
        typeof __app_id !== "undefined" ? __app_id : "default-app-id";
      const userDocRef = doc(
        collection(db, `artifacts/${appId}/users/${userId}/proposals`)
      );

      await setDoc(userDocRef, {
        email: email,
        agreeToPrivacy: agreeToPrivacy,
        timestamp: new Date().toISOString(),
        step: currentStep,
      });

      // Simulate a call to a generative model for a "proposal" response
      const prompt = `Generate a short, friendly confirmation message for a user who just requested a proposal with the email: ${email}. Thank them for their interest and mention that a team member will reach out within 24 hours.`;
      const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      };
      const apiKey = ""; // Canvas will provide this at runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        const generatedText = result.candidates[0].content.parts[0].text;
        setMessage(`Success! ${generatedText}`);
      } else {
        setMessage(
          "Proposal request submitted successfully, but failed to generate a confirmation message."
        );
        console.error(
          "Failed to get a valid response from the generative model."
        );
      }

      // In a real app, you might navigate to the next step or a confirmation page
      // setCurrentStep(currentStep + 1); // Example for multi-step form
    } catch (error) {
      setMessage(
        `Failed to submit proposal: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper component for the step indicator
  const StepIndicator = ({
    stepNumber,
    label,
    isActive,
  }: {
    stepNumber: number;
    label: string;
    isActive: boolean;
  }) => (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300
        ${isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}
      >
        {stepNumber}
      </div>
      <div
        className={`mt-2 text-xs font-medium ${
          isActive ? "text-blue-600" : "text-gray-500"
        }`}
      >
        {label}
      </div>
    </div>
  );

  return (
    <div className="min-h-auto bg-transparent flex items-center justify-center p-4 lg:pt-[40px] pt-[20px] font-inter">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 max-w-md w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
          Request A Proposal
        </h1>
        <p className="text-gray-600 text-center mb-8 text-sm sm:text-base">
          Our team will respond within 24 hours
        </p>

        {/* Progress Indicator */}
        <div className="flex justify-between items-center relative mb-8 px-4">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 z-0 mx-auto w-[calc(100%-4rem)]"></div>
          <StepIndicator
            stepNumber={1}
            label="ABOUT YOU"
            isActive={currentStep === 1}
          />
          <StepIndicator
            stepNumber={2}
            label="YOUR NEEDS"
            isActive={currentStep === 2}
          />
          <StepIndicator
            stepNumber={3}
            label="BOOKING"
            isActive={currentStep === 3}
          />
        </div>

        {/* Form Section */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-base font-medium mb-2"
          >
            Enter your business email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="your@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Business email"
          />
        </div>

        {/* Privacy Policy Checkbox */}
        <div className="flex items-center mb-8">
          <input
            type="checkbox"
            id="privacyPolicy"
            className="form-checkbox text-black h-4 w-4  rounded border-gray-300 focus:ring-blue-500"
            checked={agreeToPrivacy}
            onChange={(e) => setAgreeToPrivacy(e.target.checked)}
            aria-label="Agree to privacy policy"
          />
          <label htmlFor="privacyPolicy" className="ml-2 text-gray-600 text-sm">
            I agree to the{" "}
            <a
              href="#"
              className="text-black hover:underline"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
          </label>
        </div>

        {/* Submission Message */}
        {message && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm ${
              message.includes("Success")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={isLoading || !isAuthReady}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105
              disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next step"
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <>
                Next
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </>
            )}
          </button>
        </div>
        {userId && (
          <div className="text-xs text-gray-400 mt-4 text-center">
            User ID: {userId}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
