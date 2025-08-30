'use client'
import { useState } from 'react';
import Image from 'next/image'; // Required for Next.js image optimization
import TrustedForm from '../../components/trustedForm.tsx';

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
}

// ✅ Hardcoded array data (frontend only)
const aboutData: AboutData = {
  title: "About Us",
  subtitle: "We’re an elite team of creatives, engineers, hackers and quants – changing the way companies grow.",
  topImages: ["https://s3.euh-west-2.amazonaws.com/growthcurve.site/media/site/headers/_308x479_crop_center-center_none/27063/pan-2.webp", "https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/site/headers/_308x479_crop_center-center_none/27063/pan-2.webp"],
  middleSection: {
    title: "The team behind some of the world’s fastest growing brands",
    text: "Growthcurve® is an elite team of digital marketers, media strategists, designers, data scientists and developers.",
    image: "https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/content/_640x640_crop_center-center_none/26733/adobest.webp",
  },
  bottomSection: {
    title: "Why is Growthcurve Special?",
    text: "We embed a tailored team of highly experienced marketing experts into your business based on your unique growth objectives...",
    image: "https://s3.eu-west-2.amazonaws.com/growthcurve.site/media/content/_640x640_crop_center-center_none/26804/KS009811.webp",
  },
  missionSection: {
    title: "Why is Growthcurve Special?",
    text: "We embed a tailored team of highly experienced marketing experts into your business based on your unique growth objectives...",
    image: "http://www.w3.org/2000/svg",
  }
};

// Main Component
const App: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState<boolean>(false);

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
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-25 bg-white text-[#0c0c0c]">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <div className="text-left mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">{data.subtitle}</p>
          </div>

          {/* Top Images */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {data.topImages.map((img, i) => (
              <div key={i} className="w-[calc(50%-0.5rem)] max-w-[280px]">
                <Image
                  src={img}
                  alt={`Top Image ${i + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

        </div>
        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
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
            <h3 className="text-xl md:text-2xl font-bold mb-4">{data.middleSection.title}</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{data.middleSection.text}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">{data.bottomSection.title}</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{data.bottomSection.text}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
           <div>
            <svg
              xmlns={data.bottomSection.image}
             
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">{data.missionSection.title}</h3>
              <p className="text-gray-700 leading-relaxed">
              {data.missionSection.text}
              </p>
            </div>
          </div>

      </section>

      {/* FORM SECTION */}
      <div className="min-h-screen bg-blue-900 flex flex-col items-center justify-center p-4 font-inter">
        <div className="bg-transparent w-full">
          
          {/* Progress Stepper */}
         
          
          {/* Form */}
          <TrustedForm/>
         
        </div>

        {/* Placeholder for company logos */}
        <div className="w-full max-w-5xl px-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 opacity-70">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="flex items-center justify-center h-16 bg-blue-800 rounded-lg">
              <span className="text-white text-sm font-semibold opacity-50">LOGO</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
