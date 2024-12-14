import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";

const RoadSafetyAwareness = () => {
  return (
    <>
      <main className="relative mt-[4.5rem] lg:mt-[161px]">
        {/* Hero section end */}

        {/* blog grid section start */}

        <div className="">
          <div className="container">
            <div className="-mx-4 flex flex-col flex-wrap lg:flex-row">
              {/* Sidebar section start */}

              <Sidebar />

              {/* -----Sidebar end ----------------------- */}
              <div className="flex-1 gap-4">
                <div className="blog-details-wrapper">
                  <div className="mb-4 p-4 text-justify lg:mb-8">
                    <Image
                      src="/program/road/Our-Work-Education-Awareness.jpg"
                      loading="lazy"
                      width={500}
                      height={500}
                      alt="tripple-refined-salt"
                      className="mb-8 h-[40vh] w-[100%] rounded-xl shadow-md  lg:h-[60vh]"
                    />
                    <h2 className="mt-10 uppercase text-[#7C359C]">
                      Road Safety Awareness
                    </h2>
                    <p className="mt-4 text-lg">
                      Available statistics about road safety in India indicates
                      that more than a lakh people die in road accidents every
                      year. Pedestrians, cyclists, and riders of motorized 2-
                      and 3-wheelers and their passengers are collectively known
                      as &quot;vulnerable road users&quot; and account for half
                      of all road traffic deaths around the world. A higher
                      proportion of vulnerable road users die in low-income
                      countries than in high-income countries.
                    </p>
                    <p className="mt-4 text-lg">
                      There is an increasing trend of unsafe driving that leads
                      to vehicle accidents in which many people die, undergo
                      serious injuries or lose their body parts permanently.
                      Many of these accidents occur due to poor driving skills,
                      non-adherence to road safety precautions, lack of
                      awareness and violation of traffic rules.
                    </p>
                    <p className="mt-4 text-lg text-black">
                      Based on recommendations of the WHO*, following general
                      safety tips if implemented would help make our roads
                      safer:
                    </p>
                    <p className="mt-4 text-lg">
                      Always drive at safe speed. Statistics indicate that for
                      every 1% increase in mean speed, there is a 4% increase in
                      the risk of a fatal crash.
                    </p>
                    <p className="mt-4 text-lg">
                      Wear a helmet (of ISI standard) which is strapped on while
                      riding a two-wheeler. Wearing a good quality helmet can
                      reduce the risk of death by 42% and severe injury by
                      approximately 70%.
                    </p>
                    <p className="mt-4 text-lg">
                      Wear seat belt (both driver and passenger) to avoid
                      injury. Wearing a seat-belt reduces the risk of injuries
                      and deaths among front seat occupants by 45-50% and
                      rear-seat car occupants by 25–75%.
                    </p>
                    <p className="mt-4 text-lg">
                      Do not make children sit in front seats. Placing children
                      in child restraints reduces the risk of death by at least
                      60%, particularly for children aged less than 4 years.
                    </p>
                    <p className="mt-4 text-lg">
                      Do not use mobile phones or other gadgets that can
                      distract concentration while driving. Driver reaction
                      times are 50% slower while using a telephone than without.
                    </p>
                    <p className="mt-4 text-lg">
                      Ensure the voice level of music systems are within safe
                      audible limits.
                    </p>
                    <p className="mt-4 text-lg">
                      Avoid unwanted honking on the road which may distract
                      other vehicle drivers or pedestrians.
                    </p>
                    <p className="mt-4 text-lg">
                      Ensure your vehicle is properly serviced as per the
                      vehicle maintenance frequency.
                    </p>
                    <p className="mt-4 text-lg">
                      Do not drive under the influence of alcohol. Drinking and
                      driving increase the risk of an accident dramatically when
                      the driver has a blood-alcohol concentration (BAC) of
                      above 0.05 g/dl.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RoadSafetyAwareness;
