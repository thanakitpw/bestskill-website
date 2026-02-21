import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PainPointsSection from "./components/PainPointsSection";
import CurriculumSection from "./components/CurriculumSection";
import OutcomesSection from "./components/OutcomesSection";
import FounderBenefitsSection from "./components/FounderBenefitsSection";
import FAQSection from "./components/FAQSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <CurriculumSection />
      <OutcomesSection />
      <FounderBenefitsSection />
      <FAQSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
