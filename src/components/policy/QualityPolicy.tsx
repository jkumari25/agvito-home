import Image from "next/image";
import React from "react";

const QualityPolicy = () => {
  return (
    <>
      <main className="relative mt-[4.5rem] lg:mt-[161px]">
        <section className="blockquote-section page-section-ptb mb-20">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 mt-0">
                <Image
                  src="/policy/policy.png"
                  className="float-left mx-4 my-4 mb-10 h-auto w-full md:h-[40vh] md:w-[45vw] lg:mb-0 lg:h-[50vh] lg:w-[25vw]"
                  style={{ paddingRight: "15px" }}
                  alt="About Us"
                  width={500}
                  height={500}
                />
                <p className="items-center text-lg">
                  At Copper Junction, we are dedicated to maintaining the
                  highest standards of excellence in every aspect of our
                  operations. Our commitment to quality is reflected in our
                  stringent quality policy, ensuring that every product we
                  deliver meets or exceeds the expectations of our valued
                  customers.
                  <br /> <br /> We take pride in providing 99.5% pure copper,
                  sourced from trusted suppliers and meticulously tested to
                  guarantee its authenticity and purity. Our relentless pursuit
                  of quality extends beyond the products themselves to every
                  step of the manufacturing and distribution process. <br />{" "}
                  <br /> We adhere to industry-leading quality control measures
                  and continuously invest in state-of-the-art technologies and
                  processes to uphold our reputation as a trusted provider of
                  premium copper materials.
                </p>
                <p className="mt-10 items-center">
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="mb-8 sm:mb-0 ">
                      <h4 className="mb-4 text-2xl font-bold">
                        Our quality policy revolves around the following
                        principles:
                      </h4>
                      <ul className="ml-6 mt-4 list-disc text-lg">
                        <li>
                          <b>Highest Purity :</b> We promise to deliver copper
                          products that are 99.5% pure, meeting the highest
                          industry standards for quality and authenticity.
                        </li>
                        <li>
                          <b>Stringent Testing :</b> Each batch of copper
                          undergoes rigorous testing and inspection procedures
                          to ensure its purity, durability, and reliability.
                        </li>
                        <li>
                          <b>Continuous Improvement : </b> We are committed to
                          continuous improvement, constantly seeking new ways to
                          enhance the quality of our products and services.
                        </li>
                        <li>
                          <b>Customer Satisfaction : </b> Our ultimate goal is
                          customer satisfaction. We strive to exceed our
                          customers&apos; expectations by providing superior
                          quality products and exceptional service.
                        </li>
                        <li>
                          <b>Compliance : </b> We operate in full compliance
                          with all relevant industry regulations and standards,
                          ensuring the safety, integrity, and quality of our
                          products.
                        </li>
                      </ul>
                    </div>
                  </div>
                </p>
                <p className="mt-10 text-xl">
                  At Copper Junction, quality is not just a goal; it&apos;s our
                  promise to our customers. We stand behind every product we
                  deliver, confident in its quality, purity, and performance.
                  With Copper Junction, you can trust that you&apos;re getting
                  the best.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default QualityPolicy;
