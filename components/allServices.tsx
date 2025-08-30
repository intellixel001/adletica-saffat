import { FaUserPlus, FaMousePointer, FaStore, FaChartLine, FaFacebookF, FaBullseye, FaRocket, FaPalette, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    title: "User Acquisition",
    description: "Partner with us to lead your marketing, grow your user base and accelerate your sales in record time, whilst maximising return.",
    icon: <FaUserPlus />,
  },
  {
    title: "PPC",
    description: "Get access to top PPC talent and the latest paid search strategies to boost growth, increase sales and outmanoeuvre competitors.",
    icon: <FaMousePointer />,
  },
  {
    title: "App Store Optimisation",
    description: "Improve your app’s ranking on the App Store and Google Play. Maximise installs from both paid and organic traffic.",
    icon: <FaStore />,
  },
  {
    title: "Conversion Rate Optimisation",
    description: "Work with our world-class team of conversion rate optimisation experts to ensure you yield the greatest value possible from paid and organic traffic.",
    icon: <FaChartLine />,
  },
  {
    title: "Facebook Ads",
    description: "Our Facebook ad specialists can help you get more from the platform than you ever thought possible.",
    icon: <FaFacebookF />,
  },
  {
    title: "Retargeting",
    description: "Re-engage leads that haven’t converted with personalised re-marketing campaigns that surface the right message at the right time.",
    icon: <FaBullseye />,
  },
  {
    title: "Growth Marketing",
    description: "Systematically improve your key business metrics month over month with our growth marketing subscription.",
    icon: <FaRocket />,
  },
  {
    title: "Creative Production",
    description: "We’re experts in producing high performance ad creative for channels like Instagram, TikTok, Twitter, Pinterest, LinkedIn, Snapchat, Facebook, Youtube plus more.",
    icon: <FaPalette />,
  },
  {
    title: "Landing Pages",
    description: "Take your campaign conversion rates to the next level with responsive landing pages optimised by our leading data driven experimentation.",
    icon: <FaFileAlt />,
  },
];

export default function AllServices() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white text-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center">All Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="border border-blue-600 rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
            <div className='flex'>
              <div className="text-3xl  text-blue-600 mb-4">{service.icon}</div>
              <h3 className="font-semibold text-blue-600 text-lg mb-2">{service.title}</h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">{service.description}</p>
            <a href="#" className="text-blue-500 text-xl  no-underline ">Learn more →</a>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href='/services' className="px-6 py-3 cursor-pointer bg-blue-600 text-white text-2xl rounded-lg hover:bg-blue-700 transition duration-300">
          View all services
        </Link>
      </div>
    </section>
  );
}