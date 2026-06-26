import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { WhatsAppFlowBuilder } from "@/components/sections/WhatsAppFlowBuilder";
import { MultiChannel } from "@/components/sections/MultiChannel";
import { Results } from "@/components/sections/Results";
import { Industries } from "@/components/sections/Industries";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 overflow-x-hidden">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <WhatsAppFlowBuilder />
        <MultiChannel />
        <Results />
        <Industries />
        <Comparison />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
