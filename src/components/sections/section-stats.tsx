"use client";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import Image from "next/image";
import { useEffect, useState } from "react";

const SectionStats = () => {
  const [shipment, setShipment] = useState(0);
  const [clearance, setClearance] = useState(0);
  const [project, setProject] = useState(0);
  const [client, setClient] = useState(0);

  useEffect(() => {
    const countingInterval = setInterval(() => {
      setShipment((prevShipment) => {
        const newShipment = prevShipment + 128;
        return newShipment <= 7500 ? newShipment : 7500;
      });

      setClearance((prevClearance) => {
        const newClearance = prevClearance + 23;
        return newClearance <= 1305 ? newClearance : 1305;
      });

      setClient((prevClient) => {
        const newClient = prevClient + 50;
        return newClient <= 2516 ? newClient : 2516;
      });

      setProject((prevProject) => {
        const newProject = prevProject + 60;
        return newProject <= 3021 ? newProject : 3021;
      });
    }, 50);

    return () => clearInterval(countingInterval);
  }, []);

  return (
    <section className=" relative my-20">
      <h2 className="text-center text-xl uppercase text-black lg:pb-8 lg:text-4xl">
        Features and Benefits
      </h2>
      <div className="relative  after:absolute after:inset-0 ">
        <div className="container relative z-[1] text-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center    border border-black border-opacity-25 bg-[#fff] bg-opacity-70 py-10 shadow-sm shadow-[#6c8292] backdrop-blur-sm backdrop-filter transition-transform hover:scale-105 hover:shadow-white">
              <span>
                <Image
                  src="/feature-1.jpeg"
                  alt="road accident icon"
                  width={500}
                  height={500}
                  className="h-[250px] w-[250px] "
                />
              </span>
              <span className="mb-4 block h-auto w-full pl-4 pt-4 text-left text-xl font-bold text-[#112e74]">
                Nutritional Excellence
              </span>
              <span className="block p-2 text-left text-sm  capitalize text-black">
                1. Packed with essential vitamins and minerals to support daily
                energy needs.
              </span>
              <span className="block p-2 text-left text-sm capitalize text-black">
                2. High in fiber for improved digestion and satiety.
              </span>
              <span className="block p-2 text-left text-sm capitalize text-black">
                3. Low in sugar to maintain steady energy levels without crashes
              </span>
            </div>
            <div className="flex flex-col items-center justify-center  border border-black border-opacity-25 bg-[#fff] bg-opacity-70 py-10 shadow-sm shadow-[#6c8292] backdrop-blur-sm backdrop-filter transition-transform hover:scale-105 hover:shadow-white">
              <span>
                <Image
                  src="/feature-2.jpeg"
                  alt="road accident icon"
                  width={500}
                  height={500}
                  className="h-[250px] w-[250px] "
                />
              </span>
              <span className="mb-4 block h-auto w-full pl-4 pt-4 text-left  text-xl font-bold text-[#112e74]">
                Premium Ingredients
              </span>
              <span className="block w-full p-2 text-left text-sm capitalize text-black">
                1. Whole grains for sustained energy.{" "}
              </span>
              <span className="block p-2 text-left text-sm capitalize text-black">
                2. Natural sweeteners like honey or dates.
              </span>
              <span className="block p-2 text-left text-sm capitalize text-black">
                3. Rich in nuts and seeds for healthy fats and protein.
              </span>
              <span className="block p-2 text-left text-sm capitalize text-black">
                4. Contains dried fruits for natural sweetness and added
                nutrients.
              </span>
            </div>
            <div className="flex flex-col items-center justify-center  border border-black border-opacity-25 bg-[#fff] bg-opacity-70 py-10 shadow-sm shadow-[#6c8292] backdrop-blur-sm backdrop-filter transition-transform hover:scale-105 hover:shadow-white">
              <span>
                <Image
                  src="/feature-3.jpeg"
                  alt="road accident icon"
                  width={500}
                  height={500}
                  className="h-[250px] w-[250px]"
                />
              </span>
              <span className="mb-4 block h-auto w-full pl-4 pt-4 text-left text-xl font-bold text-[#112e74]">
                Convenience
              </span>
              <span className="block p-2 text-left text-sm capitalize text-black">
                1. Individually wrapped for on-the-go consumption.
              </span>
              <span className="block p-2 text-left text-sm capitalize text-black">
                2. Long shelf life with no refrigeration required.
              </span>
              <span className="block p-2 text-left text-sm capitalize text-black">
                3. Lightweight and portable, perfect for travel, work, or
                pre/post-workout.
              </span>
            </div>
            <div className="flex flex-col items-center justify-center border border-black border-opacity-25 bg-[#fff] bg-opacity-70 py-10 shadow-sm shadow-[#6c8292] backdrop-blur-sm backdrop-filter transition-transform hover:scale-105 hover:shadow-white">
              <span>
                <Image
                  src="/feature-4.jpeg"
                  alt="road accident icon"
                  width={500}
                  height={500}
                  className="h-[250px] w-[250px]"
                />
              </span>
              <span className="mb-4 block h-auto w-full pl-4 pt-4 text-left text-xl font-bold text-[#112e74]">
                Health-Friendly
              </span>
              <span className="block p-2 text-left text-sm capitalize text-black">
                1. Gluten-free and vegan options available.
              </span>
              <span className="block p-2 text-left text-sm capitalize text-black">
                2. No artificial flavors, colors, or preservatives.
              </span>
              <span className="block p-2 text-left text-sm capitalize text-black">
                3. Free from trans fats and hydrogenated oils.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionStats;
