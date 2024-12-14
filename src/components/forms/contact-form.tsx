"use client";

import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { Spinner } from "@/components/icons/icons";
import Swal from "sweetalert2";
import { sendEmail } from "@/utils/send-email";
import { toast } from "sonner";

export default function ContactForm() {
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
    <div className="relative z-10 mx-auto -mt-20 max-w-4xl rounded-md bg-white px-[7%] py-10 shadow-lg dark:bg-slate-900 dark:shadow-slate-950/40 md:py-[5%]">
      <div className="container">
        <ul className="mb-6 space-y-1 text-center text-md">
          <li>
            <address className="-mt-px leading-6">
              <b>Office Address :</b> Flat No.5, Mayapuri, RK Lane, Dariyapur,
              Patna, Bihar, India, 800004
            </address>
          </li>

          <li>
            <b>Phone:</b>{" "}
            <a href="tel:+(91) 9905045924" className="hover:text-primary">
              +(91) 9905045924
            </a>
          </li>

          <li>
            <b>Email: </b>
            <a
              href="mailto:info@nishafoundation.org.in"
              className="hover:text-primary"
            >
              info@nishafoundation.org.in
            </a>
          </li>
        </ul>
        <div>
          <form
            className="flex flex-col dark:text-black"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">
              <div className="mb-6 w-full lg:w-1/2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full rounded-lg  border bg-[#ffffff] p-[1em]"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6 w-full lg:w-1/2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-lg  border bg-[#ffffff] p-[1em]"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-6 w-full lg:w-full">
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="w-full rounded-lg  border bg-[#ffffff] p-[1em]"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <textarea
                rows={5}
                cols={60}
                name="message"
                value={formData.message}
                className="w-full resize-none rounded-lg border bg-[#ffffff] p-[1em] px-3 py-4"
                placeholder="Enter your enquiry"
                onChange={handleChange}
              ></textarea>
            </div>

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
}
