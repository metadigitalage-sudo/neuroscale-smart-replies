import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { OfferSection } from "@/components/OfferSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <TestimonialSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
