import React from "react";

const GoogleMap = () => {
  return (
    <div className="border-green-500 flex  items-center justify-center overflow-hidden shadow-lg ">
      <div className="mx-auto h-[25em] w-full bg-cover bg-center bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7195.508508779615!2d85.154585!3d25.613081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58f1156d068f%3A0x2881068473e04487!2sDariyapur%2C%20Machhua%20Toli%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1720957376772!5m2!1sen!2sin"
          className="h-full w-full"
          title="google map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
