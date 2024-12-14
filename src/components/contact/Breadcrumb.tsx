import Image from "next/image";
import React from "react";

const Breadcrumb = () => {
  return (
    <>
      <main className="relative mt-[4.5rem] lg:mt-[161px]">
        <div className="h-75 relative flex flex-col items-center justify-center px-4 py-16 before:absolute before:inset-0 before:z-[1]  before:bg-foreground/60  lg:h-[22rem] ">
          <Image
            src="/about/contact-bg.jpg"
            alt=""
            fill
            className="mb-6 object-cover"
          />
          <div className="relative z-[1] mx-auto max-w-4xl text-center">
            <h1 className="mb-2 text-white lg:text-5xl">Contact</h1>
            <h3 className="mb-6 text-white md:mb-8 lg:mb-2">
              Let’s have a discussion about your business
            </h3>
          </div>
        </div>
      </main>
    </>
  );
};

export default Breadcrumb;
