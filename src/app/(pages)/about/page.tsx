import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionStats from "@/components/sections/section-stats";
import HeroSection from "@/components/about/HeroSection";
import MissionVision from "@/components/about/MissionVision";
import About from "@/components/about/About";
import Letter from "@/components/about/Letter";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "About Us",
  description:
    "Welcome to Nisha Foundation, your premier destination for top-quality copper products. As a leading provider of 99.5% pure copper, we cater to a wide range of industries, delivering exceptional solutions that meet diverse application needs.",
  alternates: {
    canonical: `/about`,
  },
};

export default function PageAbout() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle
          titleClasses="custom-title-classes"
          bg="/about/about-bg.webp"
        >
          About Us
        </SectionPageTitle>
        <HeroSection />
        <About />
        <Letter />
        {/* <SectionStats /> */}
        <MissionVision />
      </main>
      <Footer />
    </>
  );
}
