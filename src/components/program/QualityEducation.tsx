import Image from "next/image";
import React from "react";
import Sidebar from "./Sidebar";

const QualityEducation = () => {
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
                      src="/program/education/education.jpg"
                      loading="lazy"
                      width={500}
                      height={500}
                      alt="tripple-refined-salt"
                      className="mb-8 h-[40vh] w-[100%] rounded-xl shadow-md  lg:h-[60vh]"
                    />
                    <h2 className="mt-10 uppercase text-[#7C359C]">
                      Quality education in India is an essential and
                      transformative factor
                    </h2>
                    <p className="mt-4 text-lg">
                      Quality education in India is an essential and
                      transformative factor that can lead to significant
                      progress and social development. While many challenges
                      exist in providing education to all, governments,
                      organizations, and communities increasingly recognize the
                      importance of investing in education to break the cycle of
                      poverty and create opportunities for individuals and
                      societies.
                    </p>
                    <p className="mt-4 text-lg">
                      Despite several challenges, technology can play a
                      transformative role in improving education in developing
                      countries. With the increasing availability of digital
                      devices and internet connectivity, innovative solutions
                      such as e-learning platforms, mobile applications, and
                      open educational resources can expand access to quality
                      education beyond traditional classrooms. These tools can
                      provide self-paced learning opportunities, personalized
                      instruction, and access to educational content worldwide,
                      bridging the educational divide and empowering students
                      and teachers with knowledge and skills.
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

export default QualityEducation;
