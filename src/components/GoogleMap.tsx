import React from "react";

const GoogleMap = () => {
  return (
    <div className="border-green-500  flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center lg:w-3/5">
        <h2 className="mb-12 uppercase text-[#5a342d]">
          OURS <span className="text-primary">Exporting Locations</span>
        </h2>
      </div>
      <div className="mx-auto h-[30em] w-full bg-cover bg-center bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1SPVl4UY19UWPr8Nn3q_TXQEMwoMXOFI&ehbc=2E312F"
          className="h-full w-full"
          title="google map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
