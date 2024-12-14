import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="relative mt-[4.5rem] lg:mt-[161px]">
      <section className="blockquote-section page-section-ptb mb-10 ">
        <div className="container">
          <div className="row">
            <div className="section-title line left mb-10 mt-4">
              <p className="text-lg font-bold text-black">A Real-Life Story</p>
              <h2 className="title text-4xl  text-[#7C359C]">
                Nisha&apos;s Story: A Call to Action
              </h2>
            </div>
            <div className="flex h-auto w-[100%] flex-col items-center justify-center gap-24 lg:flex-row">
              <div className="flex w-full flex-col text-md lg:w-[50%]">
                <p className="items-center text-justify">
                  <b className=" uppercase ">Nisha</b>, a vibrant 35-year-old
                  with a promising career at Canara Bank in Pune, was known for
                  her kindness and dedication to social work. Her life was
                  filled with joy and purpose until a tragic accident changed
                  everything. During a long drive, her husband fell asleep at
                  the wheel, causing a devastating crash. Despite being
                  critically injured, Nisha clung to life, but the bystanders,
                  lacking basic first aid knowledge, were unable to help. By the
                  time she reached an ill-equipped hospital, it was too late.
                  Nisha&apos;s life slipped away, a preventable loss due to a
                  lack of awareness and preparedness.
                  <br />
                  <br /> Nisha&apos;s untimely death is a heartbreaking reminder
                  of the critical need for emergency awareness. If those around
                  her had known how to administer first aid, and if the hospital
                  had been better equipped, Nisha might still be with us today.
                  Her story highlights the importance of being prepared and
                  informed, urging us all to take action. Our NGO,
                  &quot;NISHA&quot;, was created in her memory to educate and
                  equip people with the necessary skills and knowledge to
                  respond effectively in emergencies.
                  <br />
                  <br /> Join us in honoring Nisha&apos;s legacy by spreading
                  awareness and saving lives. By learning basic first aid,
                  advocating for better-equipped medical facilities, and
                  fostering a community of preparedness, we can make a
                  difference. Let Nisha&apos;s story inspire you to act, to be
                  informed, and to protect the precious lives around you. Visit
                  our website or contact us to get involved and help ensure no
                  more lives are lost due to a lack of awareness.
                </p>
              </div>
              <div className="flex w-full lg:w-[50%]">
                <Image
                  src="/about/about-nisha.png"
                  className="h-auto w-full rounded-xl  lg:mb-0"
                  alt="About Us"
                  width={600}
                  height={2000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
