import React from "react";

const Background = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center bg-[url('/hero/home-bg.png')] bg-cover bg-center text-black">
      <div className="flex w-[60%] flex-col items-center justify-center">
        <h2 className="w-full text-left text-7xl text-black">
          Save water and money: twelve everyday tips
        </h2>
        <p className="text-xl text-white">
          The current energy crisis is affecting us all. One way to keep energy
          costs down is to use water more efficiently. The best thing about it:
          saving water is simple and can be easily integrated into everyday
          life. We show you how to do it.
        </p>
      </div>
      <div className="my-10 flex w-[60%] gap-10 text-md font-bold uppercase">
        {" "}
        <button className="rounded-xl border-2 border-white bg-white px-6 py-2 text-[#00AEFF]">
          Learn Tips
        </button>
        <button className="rounded-xl border-2 border-white bg-white px-6 py-2 text-[#00AEFF]">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Background;
