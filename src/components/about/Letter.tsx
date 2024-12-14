import Image from "next/image";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const Letter = () => {
  return (
    <main className="relative mt-[4.5rem] lg:mt-[161px]">
      <section className="blockquote-section page-section-ptb mb-10 ">
        <div className="container">
          <h2 className="title text-center text-4xl text-[#7C359C]">
            A Heartfelt Message from <span className="uppercase">Nisha</span>
          </h2>
          <div className="row">
            <div className="flex h-auto w-[100%] flex-col items-center justify-center gap-24 lg:flex-row">
              <div className="flex h-[100%] w-full lg:w-[50%]">
                <Image
                  src="/about/Letter.png"
                  className="h-[100%] w-full rounded-xl  lg:mb-0"
                  alt="About Us"
                  width={600}
                  height={2000}
                />
              </div>
              <div className="flex w-full flex-col text-md lg:w-[50%]">
                <p className="items-center text-justify">
                  <b className=" uppercase ">My Dearest Loved Ones,</b>
                  <br />
                  <br />
                  <ImQuotesLeft />
                  As I write to you from the other side, my heart aches with the
                  knowledge that I can no longer share in the joys and sorrows
                  of life as you do. The warmth of the sun, the laughter of
                  friends, and the embrace of family are but distant memories
                  now, as I watch over you from beyond.
                  <br />
                  <br /> My journey to this place was abrupt and unexpected, cut
                  short by the harsh reality of a car accident. In an instant,
                  everything changed. The dreams I held, the plans I made, all
                  shattered like glass on a concrete floor. And yet, amidst the
                  pain and loss, there is a message I wish to impart—a message
                  of profound importance that I hope you will carry with you
                  always.
                  <br />
                  <br />
                  Life is precious. It is fragile, fleeting, and infinitely
                  valuable. It is a gift bestowed upon us, a treasure to be
                  cherished and protected. In the blink of an eye, it can be
                  taken away, leaving behind only memories and regrets.
                  <br />
                  <br />
                  Please, my dear ones, heed my words with all the earnestness
                  they deserve. Drive safely. Take no unnecessary risks. Wear
                  your seatbelts, obey the speed limits, and never, ever drive
                  under the influence. Be vigilant, be cautious, and above all,
                  be mindful of the lives you hold in your hands—your own and
                  those of others.
                  <br />
                  <br />I know that my absence brings you great sorrow, and for
                  that, I am deeply sorry. But let not my death be in vain. Let
                  it serve as a reminder—a wake-up call to the fragility of life
                  and the importance of living it well.
                  <br />
                  <br />
                  Cherish each moment, my beloved family and friends. Hold each
                  other close, and never take for granted the precious gift of
                  time. For in the end, it is not the wealth we amass or the
                  accolades we earn that matter most, but the love we give and
                  the memories we create.
                  <br />
                  <br />
                  My family has started this initiative, &quot;NISHA,&quot; to
                  spread awareness about leading a safe and healthy life, and I
                  hope each one of you will be positively impacted by this
                  initiative. <br />
                  <br />
                  With all my love,
                  <br />
                  Nisha
                  <ImQuotesRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Letter;
