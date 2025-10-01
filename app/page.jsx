import AboutSection from "@/components/home/AboutSection";
import BrandsSection from "@/components/home/BrandsSection";
import CalibrationServicesSection from "@/components/home/CalibrationServicesSection";
import CarouselSection from "@/components/home/CarouselSection";
import HeroSection from "@/components/home/HeroSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ServicesGridSection from "@/components/home/ServicesGridSection";
import StatsSection from "@/components/home/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CarouselSection />
      <CalibrationServicesSection />
      <StatsSection />
      <ServicesGridSection />
      <IndustriesSection />
      <BrandsSection />
    </>
  );
}
