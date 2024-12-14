import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <main className="relative mt-[4.5rem] lg:mt-[161px]">
        {/* <div className="h-75 relative flex flex-col items-center justify-center px-4 py-10 before:absolute before:inset-0 before:z-[1]  before:bg-black/75  lg:h-[22rem] ">
          <Image
            src="/about/bg.jpg"
            alt="china clay bg"
            fill
            className="mb-6 object-cover"
          />
          <div className="relative z-[1] mx-auto max-w-4xl text-center">
            <h1 className="mb-5 text-white lg:text-5xl">Company Profile</h1>
          </div>
        </div> */}
        <section className="blockquote-section page-section-ptb mb-10 ">
          <div className="container">
            <div className="row">
              <div className="section-title line left mb-10 mt-4 text-4xl">
                <h2 className="title text-[#7C359C]">
                  Nishi Initiative for Safety and Health Awareness (NISHA)
                </h2>
              </div>
              <div className="flex h-auto w-[100%] flex-col items-center justify-center gap-10 lg:flex-row">
                <div className="flex w-full lg:w-[50%]">
                  <Image
                    src="/about/about-1.jpg"
                    className="h-auto w-auto rounded-md shadow-md shadow-[#374059] lg:mb-0"
                    alt="About Us"
                    width={600}
                    height={2000}
                  />
                </div>
                <div className="flex w-full flex-col text-md lg:w-[50%]">
                  <p className="items-center text-justify">
                    <b className="uppercase">Nisha</b> is more than a project;
                    it&apos;s a journey born from a deep, personal loss. Losing
                    someone dear to us due to a lack of awareness left an
                    indelible mark, driving us to prevent others from
                    experiencing the same heartache. It&apos;s a mission fueled
                    by compassion and a commitment to empower communities with
                    life-saving knowledge.
                    <br />
                    <br /> Every effort under Nisha is an endeavor to fill the
                    gaps in awareness, ensuring that every individual has the
                    tools and understanding to respond effectively in critical
                    moments. Our goal is to transform grief into action, making
                    awareness a shield against tragedy and a beacon of hope for
                    countless families.
                    <br />
                    <br /> Join us in this heartfelt journey. Together, we can
                    turn loss into a legacy of saving lives and create a safer,
                    more compassionate world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroSection;
