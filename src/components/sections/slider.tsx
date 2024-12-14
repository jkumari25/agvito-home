// "use client";
// import React, { useState, useEffect } from "react";

// const slides = [
//   { eachSlide: "/hero/Nb-1.png" },
//   { eachSlide: "/hero/Nb-2.png" },
//   { eachSlide: "/hero/Nb-3.png" },
// ];

// const Slider: React.FC = () => {
//   const [active, setActive] = useState(0);
//   const [autoplay, setAutoplay] = useState(false);
//   const max = slides.length;

//   const intervalBetweenSlides = () =>
//     autoplay && setActive(active === max - 1 ? 0 : active + 1);

//   useEffect(() => {
//     const interval = setInterval(() => intervalBetweenSlides(), 3000);
//     return () => clearInterval(interval);
//   }, [autoplay, active]);

//   const toggleAutoPlay = () => setAutoplay(!autoplay);

//   const nextOne = () => active < max - 1 && setActive(active + 1);

//   const prevOne = () => active > 0 && setActive(active - 1);

//   const isActive = (value: number) => (active === value ? "active" : "");

//   const setSliderStyles = () => {
//     const transition = active * -100;
//     return {
//       transform: `translateX(${transition}vw)`,
//     };
//   };

//   const renderSlides = () =>
//     slides.map((item, index) => (
//       <div
//         className="each-slide mt-0 flex h-auto w-[100vw] flex-shrink-0 items-center justify-center  bg-transparent bg-cover bg-center  md:mt-24 lg:mt-20 lg:h-[80vh]"
//         key={index}
//         style={{ backgroundImage: `url(${item.eachSlide})` }}
//       ></div>
//     ));

//   const renderDots = () =>
//     slides.map((_, index) => (
//       <li className={`${isActive(index)} inline-block p-1 pb-4`} key={index}>
//         <button
//           onClick={() => setActive(index)}
//           className="text-gray-600 hover:opacity-70"
//         >
//           <span>&#9679;</span>
//         </button>
//       </li>
//     ));

//   const renderPlayStop = () =>
//     autoplay ? (
//       <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
//         <path d="M0 0h24v24H0z" fill="none" />
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
//       </svg>
//     ) : (
//       <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
//         <path d="M0 0h24v24H0z" fill="none" />
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
//       </svg>
//     );

//   const renderArrows = () => (
//     <>
//       <button
//         type="button"
//         className="arrows prev h-15 absolute left-0 top-1/2 cursor-pointer border-0 bg-none outline-none transition duration-300 ease-linear"
//         onClick={prevOne}
//       >
//         <svg fill="#4b5563" width="50" height="50" viewBox="0 0 24 24">
//           <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
//           <path d="M0 0h24v24H0z" fill="none" />
//         </svg>
//       </button>
//       <button
//         type="button"
//         className="arrows next h-15 absolute right-0 top-1/2 cursor-pointer border-0 bg-none outline-none transition duration-300 ease-linear"
//         onClick={nextOne}
//       >
//         <svg fill="#4b5563" height="50" viewBox="0 0 24 24" width="50">
//           <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
//           <path d="M0 0h24v24H0z" fill="none" />
//         </svg>
//       </button>
//     </>
//   );

//   return (
//     <section className="slider relative h-screen w-screen overflow-hidden">
//       <div
//         className="wrapper flex h-full transition-transform duration-500 ease-linear"
//         style={setSliderStyles()}
//       >
//         {renderSlides()}
//       </div>
//       {renderArrows()}
//       <ul className="dots-container absolute bottom-2.5 left-1/2 z-10 m-0 -translate-x-1/2 transform list-none p-0">
//         {renderDots()}
//       </ul>
//       <button
//         type="button"
//         className="toggle-play absolute bottom-2.5 right-5 z-50 border-none bg-transparent text-gray-600"
//         onClick={toggleAutoPlay}
//       >
//         {renderPlayStop()}
//       </button>
//     </section>
//   );
// };

// export default Slider;

"use client";
// import React, { useState, useEffect } from "react";

// const slides = [
//   // { eachSlide: "/hero/Nb-1.png" },
//   { eachSlide: "/hero/Nb-2.png" },
//   { eachSlide: "/hero/Nb-3.png" },
// ];

// const Slider: React.FC = () => {
//   const [active, setActive] = useState(0);
//   const [autoplay, setAutoplay] = useState(true); // Set autoplay to true
//   const max = slides.length;

//   const intervalBetweenSlides = () =>
//     autoplay && setActive(active === max - 1 ? 0 : active + 1);

//   useEffect(() => {
//     const interval = setInterval(() => intervalBetweenSlides(), 8000);
//     return () => clearInterval(interval);
//   }, [autoplay, active]);

//   const toggleAutoPlay = () => setAutoplay(!autoplay);

//   const nextOne = () => active < max - 1 && setActive(active + 1);

//   const prevOne = () => active > 0 && setActive(active - 1);

//   const isActive = (value: number) => (active === value ? "active" : "");

//   const setSliderStyles = () => {
//     const transition = active * -100;
//     return {
//       transform: `translateX(${transition}vw)`,
//     };
//   };

//   const renderSlides = () =>
//     slides.map((item, index) => (
//       <div
//         className="each-slide mt-16 flex h-auto w-[100vw] flex-shrink-0 items-center justify-evenly bg-transparent bg-cover bg-center md:mt-24 lg:mt-20 lg:h-[80vh]"
//         key={index}
//         style={{ backgroundImage: `url(${item.eachSlide})` }}
//       ></div>
//     ));

//   const renderDots = () =>
//     slides.map((_, index) => (
//       <li className={`${isActive(index)} inline-block p-1 pb-4`} key={index}>
//         <button
//           onClick={() => setActive(index)}
//           className="text-gray-600 hover:opacity-70"
//         >
//           <span>&#9679;</span>
//         </button>
//       </li>
//     ));

//   const renderPlayStop = () =>
//     autoplay ? (
//       <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
//         <path d="M0 0h24v24H0z" fill="none" />
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
//       </svg>
//     ) : (
//       <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
//         <path d="M0 0h24v24H0z" fill="none" />
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
//       </svg>
//     );

//   const renderArrows = () => (
//     <>
//       <button
//         type="button"
//         className="arrows prev h-15 absolute left-0 top-1/2 cursor-pointer border-0 bg-none outline-none transition duration-300 ease-linear"
//         onClick={prevOne}
//       >
//         <svg fill="#4b5563" width="50" height="50" viewBox="0 0 24 24">
//           <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
//           <path d="M0 0h24v24H0z" fill="none" />
//         </svg>
//       </button>
//       <button
//         type="button"
//         className="arrows next h-15 absolute right-0 top-1/2 cursor-pointer border-0 bg-none outline-none transition duration-300 ease-linear"
//         onClick={nextOne}
//       >
//         <svg fill="#4b5563" height="50" viewBox="0 0 24 24" width="50">
//           <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
//           <path d="M0 0h24v24H0z" fill="none" />
//         </svg>
//       </button>
//     </>
//   );

//   return (
//     <section className="slider relative h-screen w-screen overflow-hidden">
//       <div
//         className="wrapper flex h-full transition-transform duration-500 ease-linear"
//         style={setSliderStyles()}
//       >
//         {renderSlides()}
//       </div>
//       {renderArrows()}
//       <ul className="dots-container absolute bottom-2.5 left-1/2 z-10 m-0 -translate-x-1/2 transform list-none p-0">
//         {renderDots()}
//       </ul>
//       <button
//         type="button"
//         className="toggle-play absolute bottom-2.5 right-5 z-50 border-none bg-transparent text-gray-600"
//         onClick={toggleAutoPlay}
//       >
//         {renderPlayStop()}
//       </button>
//     </section>
//   );
// };

// export default Slider;

"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

const Slider: React.FC = () => {
  return (
    <div className="relative mx-auto w-full text-[20px] text-white">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler: () => void, hasPrev: boolean) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 right-[31px] z-10 flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-black hover:opacity-90 md:right-[51px] md:h-[50px] md:w-[50px]"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler: () => void, hasNext: boolean) => (
          <div
            onClick={clickHandler}
            className="absolute bottom-0 right-0 z-10 flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-black hover:opacity-90 md:h-[50px] md:w-[50px]"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <img
            src="/hero/slider-1.jpg"
            className="aspect-[16/10] object-cover md:aspect-auto"
          />
          {/* <div className="font-oswald absolute bottom-[25px] left-0 cursor-pointer bg-white px-[15px] py-[10px] text-[15px] font-medium uppercase text-black/[0.9] hover:opacity-90 md:bottom-[75px] md:px-[40px] md:py-[25px] md:text-[30px]">
            Shop now
          </div> */}
        </div>

        {/* <div>
          <img
            src="/hero/2.jpg"
            className="aspect-[16/10] object-cover md:aspect-auto"
          /> */}
        {/* <div className="font-oswald absolute bottom-[25px] left-0 cursor-pointer bg-white px-[15px] py-[10px] text-[15px] font-medium uppercase text-black/[0.9] hover:opacity-90 md:bottom-[75px] md:px-[40px] md:py-[25px] md:text-[30px]">
            Shop now
          </div> */}
        {/* </div> */}

        <div>
          <img
            src="/hero/3.jpg"
            className="aspect-[16/10] object-cover md:aspect-auto"
          />
          {/* <div className="font-oswald absolute bottom-[25px] left-0 cursor-pointer bg-white px-[15px] py-[10px] text-[15px] font-medium uppercase text-black/[0.9] hover:opacity-90 md:bottom-[75px] md:px-[40px] md:py-[25px] md:text-[30px]">
            Shop now
          </div> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
