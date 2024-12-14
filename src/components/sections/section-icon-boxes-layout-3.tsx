"use client";
import { motion } from "framer-motion";
import IconBox from "@/components/icon-box";
import SectionTitle from "./section-title";

export const iconBoxes = [
  {
    thumbnail: "/certificates/iso.jpg",
    image: "/certificates/iso-certificate.webp",
    alt: "ISO Certificate",
    issue: "",
  },
  {
    thumbnail: "/certificates/star.jpg",
    image: "/certificates/One_Star.png",
    alt: "star",
    issue: "",
  },
  {
    thumbnail: "/certificates/halal-certifed.jpg",
    image: "/certificates/Halal_1.png",
    alt: "halal certified",
    issue: "",
  },
  {
    thumbnail: "/certificates/apeda.jpg",
    image: "/certificates/Apeda.png",
    alt: "apeda certified",
    issue: "",
  },
  {
    thumbnail: "/certificates/fssai.jpg",
    image: "/certificates/coming-soon.jpg",
    alt: "fssai certified",
    issue: "",
  },
  {
    thumbnail: "/certificates/fieo.jpg",
    image: "/certificates/Certificate_FIEO.png",
    alt: "fieo certificate",
    issue: "",
  },
  {
    thumbnail: "/certificates/haacp.jpg",
    image: "/certificates/HACCP.png",
    alt: "haacp certified",
    issue: "",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SectionIconBoxesLayout3 = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="pb-10 pt-16 lg:pb-20 lg:pt-24">
      <div className="container">
        {!noTitle && (
          <SectionTitle
            subtitle="We offer a variety of services here to get you started and successfully suite every need using Margin."
            sectionClasses="mx-auto max-w-xl text-center mb-12"
            titleClasses="mb-3 text-center"
            subtitleClasses="text-md font-medium"
          >
            Our Certifications
          </SectionTitle>
        )}

        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-10 ">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox
                  iconBox={iconBox}
                  className="py-2 text-center shadow-md before:hidden"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxesLayout3;
