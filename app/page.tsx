import HeroSection from "@/components/sections/HeroSection";
import SocialProofBar from "@/components/sections/SocialProofBar";
import BrandStorySection from "@/components/sections/BrandStorySection";
import ProblemSection from "@/components/sections/ProblemSection";
import AndromedaSection from "@/components/sections/AndromedaSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProofSection from "@/components/sections/ProofSection";
import PMAXSection from "@/components/sections/PMAXSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/cursor/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="custom-cursor">
        <HeroSection />
        <SocialProofBar />
        <BrandStorySection />
        <ProblemSection />
        <ServicesGrid />
        <IndustriesSection />
        <ProcessSection />
        <ProofSection />
        <ClientsSection />
        <AndromedaSection />
        <PMAXSection />
        <WhyUsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
