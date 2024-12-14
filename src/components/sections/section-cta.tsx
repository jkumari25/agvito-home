"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IoHeartSharp } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";

const SectionCTA = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.5,
        }}
      >
        <div className="container relative z-10 -mt-36 mb-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-md bg-muted px-6 py-12 text-center shadow-lg dark:bg-slate-800 dark:shadow-slate-850/20">
              <h2 className="mb-8 text-black">Packaging</h2>
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {/* Packaging Card */}
                <div className="hover:shadow-2xl transform   border-b-2 border-black p-8">
                  <h3 className="mb-4 text-2xl font-bold text-gray-800">
                    Weight
                  </h3>
                  <p className="text-lg text-gray-700">
                    Available in 40g and 60g bars to suit different customer
                    needs.
                  </p>
                </div>

                {/* Packaging Material Card */}
                <div className="hover:shadow-2xl transform   border-b-2 border-black p-8 ">
                  <h3 className="mb-4 text-2xl font-bold text-gray-800">
                    Material
                  </h3>
                  <p className="text-lg text-gray-700">
                    Eco-friendly, biodegradable packaging that minimizes
                    environmental impact.
                  </p>
                </div>

                {/* Packaging Design Card */}
                <div className="hover:shadow-2xl transform   border-b-2 border-black p-8 ">
                  <h3 className="mb-4 text-2xl font-bold text-gray-800">
                    Design
                  </h3>
                  <p className="text-lg text-gray-700">
                    Bright, attractive design with clear labeling of nutritional
                    information for easy reading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionCTA;
