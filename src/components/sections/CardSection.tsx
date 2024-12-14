import Image from "next/image";
import React from "react";

const CardSection = () => {
  return (
    <div className="my-10 flex h-auto w-full flex-col items-center justify-center ">
      <div className="flex w-[80%] flex-col">
        <h2 className="text-6xl text-black">Be smart: save water!</h2>
        <p className="text-xl ">
          A small investment that would save a lot of energy long term? These
          water saving products make it possible to save energy, gas, and water
          at the washbasin, in the shower, or in the kitchen. They are very easy
          to install and improve your environmental footprint.
        </p>
      </div>
      <div className="mt-10 flex h-auto w-[80%] items-center justify-center gap-10">
        <div className="w-[50%]">
          <span className="w-full">
            <Image
              src="/hero/card-1.png"
              alt=""
              width={500}
              height={500}
              className="w-full"
            />
          </span>
          <span>
            <h2 className="mt-10 text-black">Smart Village & Panchayats</h2>
            <p>
              Our Smart Village & Panchayats initiative focuses on the holistic
              development of rural areas through improved governance, digital
              inclusion, and sustainable practices. By fostering community
              participation and using technology as a tool, we aim to create
              smarter villages with better infrastructure, healthcare, and
              education systems. Our objective is to make rural areas
              self-reliant while maintaining harmony with nature.
            </p>
          </span>
          <button className="my-4 rounded-xl border-2 border-[#00AEFF] px-8 py-2 font-semibold text-[#00AEFF] hover:border-black hover:text-black">
            Find Out More
          </button>
        </div>
        <div className="w-[50%]">
          <span className="w-full">
            <Image
              src="/hero/card-2.png"
              alt=""
              width={500}
              height={500}
              className="w-full"
            />
          </span>
          <span>
            <h2 className="mt-10 text-black">Agriculture & Livelihood</h2>
            <p>
              Through our Agriculture & Livelihood initiative, we promote
              sustainable farming practices that improve crop yields, conserve
              resources, and generate better income for farmers. We work on
              capacity building for farmers, introducing modern technologies,
              and creating market linkages that allow them to thrive. This
              initiative also focuses on alternative livelihood programs,
              ensuring that rural communities have multiple sources of income.
            </p>
          </span>
          <button className="my-4 rounded-xl border-2 border-[#00AEFF] px-8 py-2 font-semibold text-[#00AEFF] hover:border-black hover:text-black">
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
