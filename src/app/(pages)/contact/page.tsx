import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import SectionPageTitle from "@/components/sections/section-page-title";
import SectionContactForm from "@/components/sections/section-contact-form";
import GoogleMap from "@/components/contact/GoogleMap";
import Breadcrumb from "@/components/contact/Breadcrumb";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "Contact Us",
  description:
    "Welcome to Nisha Foundation, your premier destination for top-quality copper products. As a leading provider of 99.5% pure copper, we cater to a wide range of industries, delivering exceptional solutions that meet diverse application needs.",
  alternates: {
    canonical: `/contact`,
  },
};

export default function PageContact() {
  return (
    <>
      <Header />
      <main className="relative">
        <SectionPageTitle
          titleClasses="custom-title-classes"
          // subtitle=" Let's have a discussion about your business"
          bg="/contact_details_bg.jpg"
        >
          Contact Us
        </SectionPageTitle>
        {/* <Breadcrumb /> */}
        <SectionContactForm />
        <GoogleMap />
      </main>
      <Footer />
    </>
  );
}
