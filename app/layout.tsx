import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Adletica - Marketing That Fuels Growth",
    template: "%s | Adletica",
  },
  description:
    "The growth partner of choice for the world’s fastest-scaling companies. Nearly a decade of proven growth marketing expertise.",
  openGraph: {
    title: "Adletica - Marketing That Fuels Growth",
    description:
      "Trusted by startups & enterprises worldwide. Creative, Media & Performance — seamlessly integrated.",
    url: "https://adletica.com",
    siteName: "Adletica",
    images: [
      {
        url: "https://adletica.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adletica Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adletica - Marketing That Fuels Growth",
    description:
      "Trusted by startups & enterprises worldwide. Creative, Media & Performance — seamlessly integrated.",
    site: "@adletica",
    creator: "@adletica",
    images: ["https://adletica.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Adletica",
              url: "https://adletica.com",
              logo: "https://adletica.com/logo.png",
              sameAs: [
                "https://www.facebook.com/adletica",
                "https://twitter.com/adletica",
                "https://www.linkedin.com/company/adletica",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-555-5555",
                contactType: "Customer Service",
                email: "contact@adletica.com",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
