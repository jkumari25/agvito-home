"use client";
import { motion } from "framer-motion";
import IconBox2 from "../icon-box2";

export const iconBoxes = [
  {
    icon: "/hero/accident.jpg",
    title: "Road Accidents",
    description: "Drive Safe, Save Lives.",
    issue:
      "Lack of awareness about road safety, proper use of seat belts and helmets, and insufficient first aid knowledge lead to high fatalities on Indian roads.",
    link: "/road-safety-awareness",
  },
  {
    icon: "/hero/drawning-1.jpg",
    title: "Drowning Incidents",
    description: "Be Water Wise, Stay Alive.",
    issue:
      "Many drownings occur due to lack of supervision, inability to swim, and lack of CPR knowledge among the public.",
    link: "/",
  },
  {
    icon: "/hero/fire-1.jpg",
    title: "Fire Accidents",
    description: "Fire Safety First.",
    issue:
      "Poor knowledge of fire safety measures, absence of fire extinguishers, and inadequate evacuation plans lead to preventable deaths.",
    link: "/",
  },
  {
    icon: "/hero/stress.jpg",
    title: "Stress Management",
    description: "Relieve Stress, Embrace Peace.",
    issue:
      "Stress affects millions, impacting mental and physical health, productivity, and quality of life.",
    link: "/stress-management",
  },
  {
    icon: "/hero/cpr-1.jpg",
    title: "Cardiac Arrests",
    description: "Learn CPR, Be a Lifesaver.",
    issue:
      "High mortality rates from cardiac arrests are due to lack of CPR training and limited access to Automated External Defibrillators (AEDs).",
    link: "/first-aid-cpr",
  },
  {
    icon: "/hero/first-aid.jpg",
    title: "First Aid",
    description: "Immediate Care, Lifesaving Impact.",
    issue:
      "First aid treats severe injuries immediately, preventing complications and stabilizing patients until professional help arrives.",
    link: "/first-aid-cpr",
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

const SectionIconBoxes = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="py-8 lg:py-6">
      <div className="container">
        {!noTitle && (
          <div className="flex justify-center">
            <div className="text-center lg:w-3/5">
              <h2 className="mb-12 uppercase text-[#00AEFF]">
                Latest articles{" "}
                <span className="text-black">
                  about water consumption and saving water
                </span>
              </h2>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3  lg:gap-10">
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
                <IconBox2 iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionIconBoxes;
