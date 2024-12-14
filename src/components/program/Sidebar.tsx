"use client";
import React, { useState, useTransition } from "react";
import { Button } from "../ui/button";
import { FaFileDownload } from "react-icons/fa";
import { sendEmail } from "@/utils/send-email";
import Swal from "sweetalert2";
import { Spinner } from "../icons/icons";
import { toast } from "sonner";

// type SidebarProps = {
//   brochureUrl: string; // Add a prop for the brochure URL
// };

const Sidebar = () => {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await sendEmail(formData);
      Swal.fire({
        title: "Message sent successfully",
        icon: "success",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: "Error sending email",
        icon: "error",
      });
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="order-last mt-8  px-4 lg:order-first lg:mt-0 lg:w-1/4">
      <div>
        <div className="mb-12">
          <h4 className="text-dark text-lg font-medium capitalize xl:text-xl">
            ENQUIRE NOW
          </h4>
          <form className="flex w-full flex-col " onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="mb-3 border bg-[#ffffff] p-2"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="mb-3 border bg-[#ffffff] p-2"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="mb-3 border bg-[#ffffff] p-2"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              rows={3}
              cols={40}
              name="message"
              value={formData.message}
              className="mb-3 w-full resize-none border bg-[#ffffff] p-[1em] px-3 py-4"
              placeholder="Enter your enquiry"
              onChange={handleChange}
            ></textarea>
            <Button type="submit" size="lg" disabled={isPending}>
              {isPending ? (
                <>
                  <Spinner className="mr-2 h-5 w-5 animate-spin" />
                  <span>Sending</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
