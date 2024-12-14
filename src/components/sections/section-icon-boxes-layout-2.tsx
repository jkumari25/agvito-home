"use client";
import { motion } from "framer-motion";
import IconBoxLayout2 from "@/components/icon-box-layout-2";

export const iconBoxes = [
  {
    icon: "/hero/copper-alloy.jpg",
    title: "Raw Copper Alloys",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#ca2b28]",
    issue: "",
  },
  {
    icon: "/hero/copper-foil.jpg",
    title: "Raw Copper Foil/Tape",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#0169c1]",
    issue: "",
  },
  {
    icon: "/hero/copper-coil.jpg",
    title: "Raw Copper Coils",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#ffb428]",
    issue: "",
  },
  {
    icon: "/hero/copper-fitting.jpg",
    title: "Raw Copper Fittings",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#51cd8d]",
    issue: "",
  },
  {
    icon: "/hero/copper-cathode.jpg",
    title: "Raw Copper Cathodes",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#c780e8]",
    issue: "",
  },
  {
    icon: "/hero/copper-component.jpg",
    title: "Raw Copper Components",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#ff017e]",
    issue: "",
  },
  {
    icon: "/hero/copper-clad.jpg",
    title: "Raw Copper Clad Laminates ",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#8a5830]",
    issue: "",
  },
  {
    icon: "/hero/copper-sink.jpg",
    title: "Raw Bathroom Material",
    shadow: "shadow-[0_1px_6px_rgba(61,65,84,.15),0_5px_0_0_#f15246]",
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

const SectionIconBoxesLayout2 = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="text-center lg:w-3/5">
            <h2 className="mb-12 uppercase text-[#5a342d]">
              OUR <span className="text-primary">OTHER PRODUCTS</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={iconBox.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBoxLayout2 iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxesLayout2;
