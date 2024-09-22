import CTABanner from "@/components/CTABanner";
import FeaturesHigh from "@/components/FeaturesHigh";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <FeaturesHigh />
      <CTABanner />
    </main>
  );
}
