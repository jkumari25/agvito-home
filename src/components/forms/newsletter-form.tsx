"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { Spinner } from "../icons/icons";
import { sendHomeEmail } from "@/utils/send-email";

const brochureOptions = {
  Salt: "/products/salt/salt brochure - bmc.pdf",
  China_Clay: "/products/chinaClay/china_clay.pdf",
  Silica_Sand: "/products/silicaSand/silica sand brochure - bmc.pdf",
  Kaolin_Powder: "/products/kaolinPowder/kaolin.pdf",
  Magnesium_Chloride: "/products/magnesiumChloride/magenesium.pdf",
  Quartz_Grain: "/products/quartzGrain/quartz-grain.pdf",
  Yellow_Maize: "/products/yellowMAize/yellowMaize.pdf",
  Coriander: "/products/Coriander/coriander_brochures.pdf",
  Peanuts: "/products/peanuts/Peanuts-Brochure.pdf",
  Jaggery_Powder: "/products/jaggery/jaggery-powder.pdf",
  Maize_Starch: "/products/maizeStarch/corn-starch.pdf",
  Company_Profile: "/products/companyprofile.pdf",
  About: "/products/about.pdf",
};

const NewsletterForm: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brochure: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDownload = () => {
    const { brochure } = formData;
    if (brochure) {
      const pdfUrl = brochureOptions[brochure as keyof typeof brochureOptions];
      if (pdfUrl) {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = `${brochure}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.brochure
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await sendHomeEmail(formData);
      toast.success("Download Successful");
      setFormData({
        name: "",
        email: "",
        phone: "",
        brochure: "",
      });
      // Trigger the download after a successful submission
      handleDownload();
    } catch (error) {
      toast.error("Error in downloading");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="rounded-md bg-muted px-2 py-4 shadow-lg dark:bg-slate-800 dark:shadow-slate-850/20 md:px-16 md:pb-5">
      <h2 className="mb-8 text-lg">Get the free brochures download</h2>
      <form className="flex flex-col dark:text-black" onSubmit={handleSubmit}>
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
        <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">
          <div className="mb-6 w-full lg:w-1/2">
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="w-full rounded-lg  border bg-[#ffffff] p-[1em]"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 w-full lg:w-1/2">
            <select
              aria-label="Download Brochure"
              name="brochure"
              className="w-full rounded-lg border bg-[#ffffff] p-[1em]"
              value={formData.brochure}
              onChange={(e: any) => handleChange(e)}
            >
              <option value="">Download Brochures</option>
              <option value="Salt">Salt</option>
              <option value="China Clay">China Clay</option>
              <option value="Silica Sand">Silica Sand</option>
              <option value="Kaolin Powder">Kaolin Powder</option>
              <option value="Bentonite Powder">Bentonite Powder</option>
              <option value="Magnesium Chloride">Magnesium Chloride</option>
              <option value="Quartz Grain and Powder">
                Quartz Grain and Powder
              </option>
              <option value="Yellow Maize">Yellow Maize</option>
              <option value="Coriander Powder">Coriander Powder</option>
              <option value="Peanuts">Peanuts</option>
              <option value="Jaggery Powder">Jaggery Powder</option>
              <option value="Maize Starch">Maize Starch</option>
              <option value="Company Profile">Company Profile</option>
              <option value="About">About</option>
            </select>
          </div>
        </div>
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <Spinner className="mr-2 h-5 w-5 animate-spin" />
              <span>Free Download</span>
            </>
          ) : (
            <span>Free Download</span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
