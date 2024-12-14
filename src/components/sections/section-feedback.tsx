"use client";

import React from "react";
import { IoHeartSharp } from "react-icons/io5";

const FeedbackSection: React.FC = () => {
  return (
    <div className="mt-4 h-auto bg-gradient-to-r from-[#00AEFF] to-[#112E74] px-4 py-16 text-white">
      <div className="mx-auto max-w-[80%] text-center">
        <h2 className="mb-4 text-5xl font-bold text-white">
          WHO WE ARE AND WHAT WE WANT TO ACHIEVE
        </h2>
        <p className="mb-8 text-left text-lg text-black">
          Our <b>goal</b> is clear: we want to encourage everyone – from
          individuals to companies and government institutions – to use drinking
          water <b>more responsibly</b>.
          <br />
          <br />
          As a <b>knowledge hub</b>, we provide <b>energy efficiency</b> tips
          and key info on the sustainable use of natural resources, and talk
          about specific <b>water and energy saving solutions</b>. In this way,
          each and every one of us can make a valuable contribution to climate
          and environmental protection – from our homes, in companies, or in
          public institutions. <b>Every drop counts</b>.
          <br />
          <br />
          Watersaving.com is an <b>initiative</b> of the Neoperl Group, which
          develops innovative solutions relating to all aspects of drinking
          water. Whether faucet aerators, flow regulators, or check valves:
          these are all crucial to helping us use drinking water as a resource
          more sustainably.
        </p>

        <hr className="my-8 border-t border-white opacity-50" />
      </div>
    </div>
  );
};

export default FeedbackSection;
