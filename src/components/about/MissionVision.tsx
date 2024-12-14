import Image from "next/image";
import React from "react";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const MissionVision = () => {
  return (
    <>
      <main className="relative ">
        <div className="container mb-10">
          <div className="col-lg-12 col-md-12 ">
            <div className="section-title line left mb-2 ">
              <h2 className="title text-[#7c359c]">Our Mission & Vision</h2>
            </div>
            <p className="flex items-center gap-2 pb-2 text-justify text-md">
              Our mission is to provide training and skills to people to make
              our surroundings safe. Through collaborative partnerships and
              sustainable initiatives, we aim to create positive and lasting
              change, fostering self-reliance and a sense of dignity among
              individuals and communities in need.
            </p>
            <p className="flex items-center gap-2 pb-2 text-justify text-md">
              Our vision is a world where everyone lives a healthy and long
              life. We envision a world where compassion, equality, and human
              dignity prevail, leaving a lasting impact for generations to come.
            </p>

            {/* <div className="section-title line left mb-2 mt-10">
              <h2 className="title">Our Vision</h2>
            </div>
            <p className="items-center text-lg">
              Driven by a vision of excellence, Copper Junction aims to improve
              the copper industry by setting new benchmarks for quality,
              sustainability, and customer satisfaction. We envision a future
              where our premium copper materials fuel innovation, empower
              businesses, and contribute to a brighter, more sustainable world.
            </p>
            <br /> */}
            {/* <p className="items-center text-lg">
              With over 10+ of experience in the industry, Copper Junction is
              your trusted partner for all your raw copper material needs. Join
              us on our journey towards excellence, and together, let&apos;s
              shape a future powered by quality and innovation.
            </p> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default MissionVision;
