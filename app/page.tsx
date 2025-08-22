import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import PostsList from "@/components/PostsList";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <PostsList />
      <Testimonials />
      <CallToAction />
    </>
  );
}
