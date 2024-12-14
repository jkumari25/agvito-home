import Image from "next/image";
import React from "react";

const Certification = () => {
  return (
    <>
      <main className="relative mt-[4.5rem] lg:mt-[161px]">
        <div className="lg:h-75 relative flex h-60 flex-col items-center justify-center px-4 py-16 before:absolute before:inset-0 before:z-[1]  before:bg-[#736a5f]/40  lg:h-[22rem] ">
          <Image
            src="/about/certification-bg.jpg"
            alt="china clay bg"
            fill
            className="mb-6 object-cover"
          />
          <div className="relative z-[1] mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-white lg:text-5xl">Certification</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Certification;
