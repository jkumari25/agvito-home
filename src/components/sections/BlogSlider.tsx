"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const TrendingSlider: React.FC = () => {
  const filteredItems = [
    {
      id: 1,
      img: "/slider-1.png",
      hastag: "Compliance",
      description:
        "Manufactured in an ISO-certified facility, the product meets international food safety standards (HACCP, FSSAI, FDA) and includes clear allergen labeling for consumer safety.",
    },
    {
      id: 2,
      img: "/slider-2.png",
      hastag: "Storage Requirements",
      description:
        "Store in a cool, dry place away from direct sunlight, with a recommended temperature range of 10–25°C to maintain optimal product quality and freshness.",
    },
    {
      id: 3,
      img: "/slider-3.png",
      hastag: "Shelf Life",
      description:
        "Best before 12 months from the date of manufacture to ensure optimal product quality, freshness, and safety for consumption under recommended storage conditions.",
    },
  ];

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft -= 235;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft += 235;
    }
  };

  return (
    <div className="mt-4 h-screen">
      <div className="container mx-auto flex h-full flex-col justify-center">
        <h2 className="mb-12 text-center uppercase text-black">
          Export Specifications
        </h2>
        <div id="slider" className="flex gap-6 overflow-hidden  p-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="h-auto flex-shrink-0 cursor-pointer border border-gray-300 transition duration-150 hover:border-black"
            >
              <div className="h-[250px] w-[400px]">
                <img src={item.img} alt="product" className="h-full w-full" />
              </div>
              <div className="h-auto w-[400px] p-4 text-lg">
                <p className=" mb-4 w-full text-md font-bold uppercase text-black">
                  {item.hastag}
                </p>
                <p className="w-full text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mb-10 flex justify-between">
          <div className="flex gap-2">
            <button
              title="scroll left"
              onClick={slideLeft}
              className="flex h-16 w-16 items-center justify-center bg-gray-800 p-4 text-white transition duration-150 hover:bg-black"
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              title="scroll right"
              onClick={slideRight}
              className="flex h-16 w-16 items-center justify-center bg-gray-800 p-4 text-white transition duration-150 hover:bg-black"
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TrendingSlider;
