import Hero from "@/components/home/Hero";
import Offerings from "@/components/home/Offerings";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Gallery from "@/components/home/Gallery";
import AboutTeaser from "@/components/home/AboutTeaser";
import Process from "@/components/home/Process";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Offerings />
      <FeaturedProjects />
      <Gallery />
      <AboutTeaser />
      <Process />
      <CTABanner />
    </>
  );
}
