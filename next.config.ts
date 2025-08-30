// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        // Change 'eu' to 'euh' to match the error message hostname
        hostname: 's3.euh-west-2.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        // Change 'eu' to 'euh' to match the error message hostname
        hostname: 's3.eu-west-2.amazonaws.com',
        pathname: '**',
      },
    ],
    
  },
   theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'custom-green': '#4CAF50', // Replace with exact hex codes from your image
        'custom-purple': '#800080',
        // ...
      },
    },
  },
};

export default nextConfig;
