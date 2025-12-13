import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SuccessRateSection from "@/components/SuccessRateSection";
import WhyFileSection from "@/components/WhyFileSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import JivoChat from "@/components/JivoChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SuccessRateSection />
        <WhyFileSection />
        <ContactSection />
      </main>
      <Footer />
      <JivoChat />
    </div>
  );
};

export default Index;
