import React from "react";
import { FaShippingFast, FaBullhorn, FaCertificate } from "react-icons/fa";

const EnergyBarSections = () => {
  return (
    <section className="bg-[#132606] px-6 py-20 pb-56 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Shipping Information */}
        <div className="hover:shadow-2xl flex transform flex-col items-center rounded-lg bg-white p-8 text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105">
          <div className="text-green-500 mb-4 text-4xl">
            <FaShippingFast />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            Shipping Information
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              1. <b>Minimum Order Quantity (MOQ):</b> 5,000 units.
            </li>
            <li>
              2. <b>Lead Time:</b> 4–6 weeks for production and shipment.
            </li>
            <li>
              3. <b>Packaging for Export:</b>
              <ul className="list-disc pl-6 text-gray-600">
                <li>
                  Master cartons containing 24 individually packed bars each.
                </li>
                <li>Cartons are secured on pallets for bulk shipping.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Marketing Highlights */}
        <div className="hover:shadow-2xl flex transform flex-col items-center rounded-lg bg-white p-8 text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105">
          <div className="mb-4 text-4xl text-[#3a3d41]">
            <FaBullhorn />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            Marketing Highlights
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>1. Promote as a healthy, on-the-go breakfast alternative.</li>
            <li>
              2. Ideal for retail chains, gyms, airports, and online
              marketplaces.
            </li>
            <li>
              3. Emphasize sustainability in packaging and ethical sourcing of
              ingredients.
            </li>
          </ul>
        </div>

        {/* Certifications and Labels */}
        <div className="hover:shadow-2xl flex transform flex-col items-center rounded-lg bg-white p-8 text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105">
          <div className="text-yellow-500 mb-4 text-4xl">
            <FaCertificate />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            Certifications and Labels
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              1. Organic Certification (where applicable). <b>(Yes)</b>
            </li>
            <li>
              2. Gluten-Free and Vegan Certification. <b>(Yes)</b>
            </li>
            <li>
              3. Halal and Kosher Certifications available upon request.{" "}
              <b>(Based on confirmation)</b>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EnergyBarSections;
