import HeroSection from "../components/heroSection";
import GrowthServices from "../components/growthServices";
import AllServices from "../components/allServices";
import Article from "../components/article";
import Testimonials from "../components/testimonials";
import Trusted from "../components/trusted";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GrowthServices />
      <AllServices />
      <Testimonials />
      <Trusted />
      <Article />
    </>
  );
}
