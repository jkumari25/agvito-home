import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import QualityEducation from "@/components/program/QualityEducation";
import SectionPageTitle from "@/components/sections/section-page-title";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Quality Education",
  description:
    "Welcome to Nisha Foundation, your premier destination for top-quality copper products. As a leading provider of 99.5% pure copper, we cater to a wide range of industries, delivering exceptional solutions that meet diverse application needs.",
  alternates: {
    canonical: `/about`,
  },
};

const PageQualityEducation = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle
          titleClasses="custom-title-classes"
          // subtitle="Focus on engaging, reusable content that decrease the cost per leads while helps you to increase profits margin. Margin strives to deliver the tools and support that helps companies grow with unparalleled success."
          bg="/program/education/4.jpg"
        >
          Quality Education
        </SectionPageTitle>
        <QualityEducation />
      </main>
      <Footer />
    </>
  );
};

export default PageQualityEducation;
