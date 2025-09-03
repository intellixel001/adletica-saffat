"use client";
import Image from "next/image"; // Required for Next.js image optimization
import TrustedForm from "../../components/trustedForm";
import PageHeader from "@/components/PageHeader";
import OurServicesSection from "@/components/OurServicesSection";

// Define AboutData interface
interface AboutData {
  title: string;
  subtitle: string;
  topImages: string[];
  middleSection: {
    title: string;
    text: string;
    image: string;
  };
  bottomSection: {
    title: string;
    text: string;
    image: string;
  };
  missionSection: {
    title: string;
    text: string;
    image: string;
  };
}

// ✅ Hardcoded array data (frontend only)
const aboutData: AboutData = {
  title: "About Us",
  subtitle:
    "At Adletica, we love helping brands shine online. Every business has its own story, and we’re here to make sure yours reaches the right people in the right way.",
  topImages: [
    "https://s3.euh-west-2.amazonaws.com/adletica.site/media/site/headers/_308x479_crop_center-center_none/27063/pan-2.webp",
    "https://s3.eu-west-2.amazonaws.com/adletica.site/media/site/headers/_308x479_crop_center-center_none/27063/pan-2.webp",
  ],
  middleSection: {
    title: "The team behind some of the world’s fastest growing brands",
    text: "adletica® is an elite team of digital marketers, media strategists, designers, data scientists and developers.",
    image:
      "https://s3.eu-west-2.amazonaws.com/adletica.site/media/content/_640x640_crop_center-center_none/26733/adobest.webp",
  },
  bottomSection: {
    title: "Why is adletica Special?",
    text: "We embed a tailored team of highly experienced marketing experts into your business based on your unique growth objectives...",
    image:
      "https://s3.eu-west-2.amazonaws.com/adletica.site/media/content/_640x640_crop_center-center_none/26804/KS009811.webp",
  },
  missionSection: {
    title: "Why is adletica Special?",
    text: "We embed a tailored team of highly experienced marketing experts into your business based on your unique growth objectives...",
    image: "http://www.w3.org/2000/svg",
  },
};

// Main Component
const App: React.FC = () => {
  // ✅ Commented backend-compatible code
  /*
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/about-us")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (!data) return <div className="text-center py-16 text-red-500">Failed to load content.</div>;
  */

  const data = aboutData;

  return (
    <div>
      {/* ABOUT SECTION */}
      <PageHeader
        bgImage={"/image/allpages/aboutus.jpeg"}
        description=" At Adletica, we love helping brands shine online. Every business
              has its own story, and we’re here to make sure yours reaches the
              right people in the right way."
        title="About Us"
      />

      <OurServicesSection />

      <div className="container mx-auto">
        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-[20px] lg:py-[40px]">
          <div className="order-1 md:order-none">
            <Image
              src={data.middleSection.image}
              alt="Middle Section Image"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              {data.middleSection.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {data.middleSection.text}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-[20px] lg:py-[40px]">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              {data.bottomSection.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {data.bottomSection.text}
            </p>
          </div>
          <div>
            <Image
              src={data.bottomSection.image}
              alt="Bottom Section Image"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </div>
        {/* Our Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-[20px] lg:py-[40px]">
          <div>
            <svg
              xmlns={data.bottomSection.image}
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              {data.missionSection.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {data.missionSection.text}
            </p>
          </div>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="bg-gradient-to-t from-gray-900 to-transparent flex flex-col items-center justify-center p-4 font-inter">
        <div className="bg-transparent w-full">
          {/* Progress Stepper */}

          {/* Form */}
          <TrustedForm />
        </div>

        {/* Placeholder for company logos */}
        {/* <div className="w-full max-w-5xl px-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 opacity-70">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 bg-blue-800 rounded-lg"
            >
              <span className="text-white text-sm font-semibold opacity-50">
                LOGO
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default App;
