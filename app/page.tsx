import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeatureGrid />
      <HowItWorks />
      <CallToAction />
    </>
  );
}