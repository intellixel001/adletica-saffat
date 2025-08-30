import HeroSection from "../components/heroSection.tsx";
import GrowthServices from "../components/growthServices.tsx";
import AllServices from "../components/allServices.tsx";
import Article from '../components/article.tsx';
import Testimonials from '../components/testimonials.tsx';
import Trusted from '../components/trusted.tsx';



export default function Home() {
  return (
    <>
     <HeroSection/>
     <GrowthServices/>
     <AllServices/>
     <Testimonials/>
     <Trusted/>
     <Article/>
    </>
  );
}
