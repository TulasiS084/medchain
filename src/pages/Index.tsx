import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MedicalWallet from "@/components/MedicalWallet";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MedicalWallet />
        <Features />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
