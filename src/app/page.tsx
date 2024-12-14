import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
// import SectionCTA from "@/components/sections/section-cta";
import SectionHero from "@/components/sections/section-hero";
import SectionIconBoxes from "@/components/sections/section-icon-boxes";
// import SectionPartners from "@/components/sections/section-partners";
import SectionPromo from "@/components/sections/section-promo";
import SectionIconBoxesLayout2 from "@/components/sections/section-icon-boxes-layout-2";
import SectionResults from "@/components/sections/section-results";
import SectionStats from "@/components/sections/section-stats";
import GoogleMap from "@/components/GoogleMap";
import { Metadata } from "next";
import Head from "next/head";
import Slider from "@/components/sections/slider";
import FeedbackSection from "@/components/sections/section-feedback";
import Testimonials from "@/components/sections/testimonial-section";
import SectionCTA from "@/components/sections/section-cta";
import TrendingSlider from "@/components/sections/BlogSlider";
import Background from "@/components/sections/Background";
import CardSection from "@/components/sections/CardSection";
import EnergyBarSections from "@/components/sections/EnergyBarSections";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Home",
  description:
    "Discover Agvito Moringa Energy Bar – a premium, nutritious snack made with high-quality ingredients to fuel your busy lifestyle. Packed with the power of Moringa, it's the perfect healthy choice for a delicious, on-the-go breakfast or energy boost anytime.",
  alternates: {
    canonical: `/`,
  },
};

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="relative">
        {/* <Slider /> */}
        {/* <SectionHero /> */}
        {/* <SectionPromo /> */}

        <SectionResults />
        <SectionStats />
        <TrendingSlider />
        <EnergyBarSections />

        <SectionCTA />
      </main>
      {/* <Footer /> */}
    </>
  );
}
