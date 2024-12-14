import Image from "next/image";

const SectionResults = () => {
  return (
    <section className=" py-20 lg:py-20">
      <div className="container">
        <div className="flex flex-wrap items-center lg:flex-nowrap lg:space-x-16">
          <div className="mt-10 h-auto w-full rounded-xl lg:h-auto lg:w-[50%] lg:pr-20">
            <Image
              src="/1.jpeg"
              alt="why choose us"
              width={1000}
              height={800}
              className="h-[500px] w-[100%] rounded-2xl transition-transform hover:scale-105"
            />
          </div>

          <div className="w-full lg:w-[50%]">
            <div className="flex flex-col ">
              <h2 className="text-left text-3xl uppercase text-black lg:pb-4">
                About Moringa Energy Bar
              </h2>
              <p className="mb-4 text-justify text-md">
                <b>Moringa Energy Bar</b> The is a premium, energy-packed snack
                designed to cater to health-conscious individuals seeking a
                convenient, nutritious, and delicious start to their day. Made
                with high-quality ingredients, it delivers a perfect balance of
                taste and health, making it an ideal choice for people with busy
                lifestyles
              </p>
              <p className="mb-4 text-justify text-md">
                Packed with the power of Moringa, a superfood known for its
                numerous health benefits, this energy bar offers essential
                vitamins, minerals, and antioxidants that support overall
                well-being. Whether you&apos;re heading to work, hitting the
                gym, or simply in need of a healthy snack, the Moringa Energy
                Bar provides the energy boost you need without compromising on
                taste or quality.
              </p>
              {/* <p className="mb-4 text-justify text-md">
                <b>What We Do:</b> We aim to drive a paradigm shift in societal
                development by encouraging people’s participation and ensuring
                effective implementation of initiatives. Through our projects,
                we promote community-driven growth and innovation across various
                sectors.
              </p>
              <p className="text-justify text-md">
                <b>Why We Do It:</b> Our goal is to achieve excellence in all
                endeavors. We aspire to create a lasting impact on society by
                fostering sustainable solutions that cater to the needs of
                people, environment, and economy.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionResults;
