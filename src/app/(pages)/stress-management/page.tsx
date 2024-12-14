import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import StressManagement from "@/components/program/StressManagement";
import SectionPageTitle from "@/components/sections/section-page-title";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Stress Management",
  description:
    "Welcome to Nisha Foundation, your premier destination for top-quality copper products. As a leading provider of 99.5% pure copper, we cater to a wide range of industries, delivering exceptional solutions that meet diverse application needs.",
  alternates: {
    canonical: `/about`,
  },
};

const PageStressManagement = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle
          titleClasses="custom-title-classes"
          // subtitle="Focus on engaging, reusable content that decrease the cost per leads while helps you to increase profits margin. Margin strives to deliver the tools and support that helps companies grow with unparalleled success."
          bg="/program/stress/3.jpg"
        >
          Stress Management
        </SectionPageTitle>
        <StressManagement />
      </main>
      <Footer />
    </>
  );
};

export default PageStressManagement;
