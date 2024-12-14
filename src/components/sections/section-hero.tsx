"use client";
import HeroTriangle from "@/components/hero-triangle";
// import NewsletterForm from "@/components/forms/newsletter-form";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import PromoTriangle from "@/components/promo-triangle";
import Link from "next/link";

interface ContentData {
  heading: string;
  subheading: string;
  description: string;
  link: string;
  imagea: string;
  imageb: string;
}

const SectionHero: React.FC = () => {
  const contentData: ContentData[] = [
    {
      heading: "Delivering Quality Copper for Every Business Need",
      subheading: "Copper Wire",
      description: "High-Quality Raw Copper Wire",
      link: "/our-products",
      imagea: "/hero/banner-1.jpg",
      imageb: "/hero/Copper-2.png",
    },
    {
      heading: "Delivering Quality Copper for Every Business Need",
      subheading: "Copper Tubes/Pipes",
      description: "High-Quality Raw Copper Tubes/Pipes",
      link: "/our-products",
      imagea: "/hero/Copper-3.png",
      imageb: "/hero/copper-6.png",
    },
    {
      heading: "Delivering Quality Copper for Every Business Need",
      subheading: "Copper Sheets/Plates",
      description: "HIGH-QUALITY Raw Copper Plates",
      link: "/our-products",
      imagea: "/hero/Copper-4.png",
      imageb: "/hero/copper-7.png",
    },
    {
      heading: "Delivering Quality Copper for Every Business Need",
      subheading: "Copper Bars/Rods",
      description: "HIGH-QUALITY Raw Copper Bars",
      link: "/our-products",
      imagea: "/hero/Copper-5.png",
      imageb: "/hero/copper-8.png",
    },
    {
      heading: "Delivering Quality Copper for Every Business Need",
      subheading: "Copper Alloys",
      description: "HIGH-QUALITY Raw Copper Alloys",
      link: "/our-products",
      imagea: "/hero/copper-6.png",
      imageb: "/hero/copper-9.png",
    },
    {
      heading: "Delivering Quality Copper for Every Business Need",
      subheading: "Copper Foil/Tape",
      description: "HIGH-QUALITY Raw Copper Foil",
      link: "/our-products",
      imagea: "/hero/copper-7.png",
      imageb: "/hero/copper-10.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 5000);

    return () => clearInterval(sliderInterval);
  }, [contentData.length]);

  const currentContent = contentData[currentIndex];
  return (
    <div className="relative overflow-hidden">
      <HeroTriangle
        imagea={currentContent.imagea}
        style={{ opacity: 1, isolation: "isolate" }}
      />
      <section className="pb-16 pt-32 md:pt-40 lg:pb-40 lg:pt-64">
        <div className="container max-w-6xl">
          <div
            className="rounded-xl py-5 text-center backdrop-blur-[3px] md:w-[65%] lg:w-[45%]"
            style={{ opacity: 1 }}
          >
            <h1 className="text-headings text-2xl uppercase text-[#5a342d] lg:text-3xl">
              {currentContent.heading}
            </h1>
            <h2 className="text-headings uppercase text-[#5a342d]">
              {currentContent.subheading}
            </h2>
            <p className="mb-5 text-lg uppercase text-black dark:text-white">
              {currentContent.description}
            </p>
            {/* <Link href={currentContent.link} passHref>
              <Button className="mb-0">
                READ MORE
                <ChevronRightIcon
                  width={20}
                  height={20}
                  className="-mr-2 ml-4"
                />
              </Button>
            </Link> */}
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container max-w-6xl">
          <PromoTriangle
            imageb={currentContent.imageb}
            style={{ opacity: 0.8, isolation: "isolate" }}
          />
          <div
            className="ml-auto rounded-xl py-10 text-center backdrop-blur-[50px] sm:backdrop-blur-[50px] md:backdrop-blur-[8px] lg:w-[50%] lg:backdrop-blur-[5px] xl:w-[55%] xl:backdrop-blur-[3px]"
            style={{ opacity: 1 }}
          >
            <h2 className="uppercase text-[#5a342d]">Copper Junction</h2>
            <p className="text-justify text-md text-black dark:text-white">
              At Copper Junction, we pride ourselves on delivering the highest
              quality copper products to meet your needs. As a leading provider
              of 99.5% pure copper, we offer a wide range of solutions for
              various industries and applications. Whether you&apos;re looking
              for raw copper materials or finished products, we have you
              covered. <br />
              <br />
              Explore our website to discover our extensive product catalog,
              learn more about our company, and find out how we can fulfill your
              copper requirements. With Copper Junction, you can trust that
              you&apos;re getting unmatched quality and reliability every time.
              <br />
              <br />
              Additionally, we are committed to sustainability and environmental
              responsibility. Our copper products are sourced and produced with
              eco-friendly practices, ensuring that we minimize our impact on
              the planet while delivering exceptional results to our customers.
            </p>
            <Link href="/about" passHref>
              <Button>
                READ MORE
                <ChevronRightIcon
                  width={20}
                  height={20}
                  className="-mr-2 ml-4"
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionHero;
