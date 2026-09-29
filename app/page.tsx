import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import TrustBar from "@/components/TrustBar";
import AboutPlatform from "@/components/AboutPlatform";
import Features from "@/components/Features";
import SecuritySection from "@/components/SecuritySection";
import HowItWorks from "@/components/HowItWorks";
import EarningsCalculator from "@/components/EarningsCalculator";
import Performance from "@/components/Performance";
import Markets from "@/components/Markets";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <TrustBar />
      <AboutPlatform />
      <Features />
      <SecuritySection />
      <HowItWorks />
      <EarningsCalculator />
      <Performance />
      <Markets />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
