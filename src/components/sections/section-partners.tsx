import SectionTitle from "./section-title";
import Image from "next/image";

const SectionPartners = () => {
  const countries = [
    "Gujarat",
    "Bangladesh",
    "Indonesia",
    "Malaysia",
    "Japan",
    "Saudi Arabia",
    "United Arab Emirates",
    "Qatar",
    "Kuwait",
    "Oman",
    "Yemen",
    "Bahrain",
  ];

  return (
    <section className="relative bg-[#2A385A] pb-10 pt-24 before:absolute before:inset-0">
      {/* <Image
        src="/partners/map.png"
        alt="Partners"
        fill
        className="object-cover object-center opacity-50"
      /> */}

      <div className="container relative mb-12 max-w-6xl">
        <SectionTitle
          subtitle="An idea that takes the parts of a structure and turns the whole system."
          sectionClasses="mx-auto max-w-xl text-center "
          titleClasses="mb-3 text-center text-white"
          subtitleClasses="text-md font-medium text-white text-xl pt-10"
        >
          Join thousands of independent entrepreneurs in the biochemistry
          industry.
        </SectionTitle>
        <div className="flex flex-wrap justify-center">
          {countries.map((country, index) => (
            <div
              key={index}
              className="m-2 text-2xl font-bold text-white md:m-5"
            >
              {country}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionPartners;
