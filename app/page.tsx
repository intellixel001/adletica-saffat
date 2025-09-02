import Head from "next/head";
import HeroSection from "../components/heroSection";
import GrowthServices from "../components/growthServices";
import AllServices from "../components/allServices";
import Article from "../components/article";
import Testimonials from "../components/testimonials";
import Trusted from "../components/trusted";
import HeroSectionTop from "@/components/HeroSectionTop";

interface CTA {
  label: string;
  href: string;
}

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  highlights: string[];
  cta: CTA;
}

interface Service {
  title: string;
  description: string;
}

interface GrowthServicesProps {
  headline: string;
  subheadline: string;
  services: Service[];
}

interface ArticleProps {
  headline: string;
  subheadline: string;
}

export default function Home() {
  const heroProps: HeroSectionProps = {
    headline: "Marketing That Fuels Growth",
    subheadline:
      "The growth partner of choice for the world’s fastest-scaling companies.",
    highlights: [
      "Nearly a decade of proven growth marketing expertise.",
      "Creative, Media & Performance — seamlessly integrated.",
      "Trusted by startups & enterprises worldwide.",
    ],
    cta: {
      label: "Start Growing Today",
      href: "/contact",
    },
  };

  const growthServicesProps: GrowthServicesProps = {
    headline: "Full-Funnel Growth Services for Modern Brands.",
    subheadline:
      "From awareness to acquisition to retention — we cover it all.",
    services: [
      {
        title: "SEO",
        description: "Rank higher, capture intent, drive organic growth.",
      },
      {
        title: "Paid Media (PPC)",
        description: "Google, Meta & beyond — engineered for ROAS.",
      },
      {
        title: "Social Media Marketing",
        description: "Content, community, and conversions.",
      },
      {
        title: "Content Marketing",
        description: "Stories that sell, at scale.",
      },
      {
        title: "Email & Automation",
        description: "Nurture leads into loyal customers.",
      },
      {
        title: "Web Design & CRO",
        description: "Sites that convert, not just look good.",
      },
    ],
  };

  const articleProps: ArticleProps = {
    headline: "Insights That Fuel Smarter Marketing.",
    subheadline:
      "Stay ahead of the curve with our latest strategies, trends & tips.",
  };

  return (
    <>
      <Head>
        <title>Marketing That Fuels Growth | Adletica</title>
        <meta
          name="description"
          content="The growth partner of choice for the world’s fastest-scaling companies. Nearly a decade of proven growth marketing expertise."
        />
        <meta
          name="keywords"
          content="Digital Marketing, Growth Marketing, SEO, PPC, Content Marketing, Web Design"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Marketing That Fuels Growth | Adletica"
        />
        <meta
          property="og:description"
          content="Trusted by startups & enterprises worldwide. Creative, Media & Performance — seamlessly integrated."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adletica.com" />
        <meta property="og:image" content="https://adletica.com/og-image.jpg" />
        <link rel="canonical" href="https://adletica.com" />

        {/* JSON-LD Schema for Organization */}
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
      </Head>

      <main>
        <section aria-label="Hero Section">
          <HeroSectionTop />
        </section>

        <section aria-label="Growth Services">
          <HeroSection />
        </section>

        <section aria-label="Growth Services">
          <GrowthServices />
        </section>

        <section aria-label="All Services Overview">
          <AllServices />
        </section>

        <section aria-label="Testimonials">
          <Testimonials />
        </section>

        <section aria-label="Trusted By">
          <Trusted />
        </section>

        <section aria-label="Latest Articles">
          <Article />
        </section>
      </main>
    </>
  );
}
