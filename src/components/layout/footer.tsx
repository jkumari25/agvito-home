"use client";

import Link from "next/link";
import SiteLogo from "./site-logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { footerNav } from "@/config/site";
import { Address, Email, Phone, WhatsApp } from "../icons/icons";

const Footer = () => {
  return (
    <footer className=" bg-muted shadow-slate-850 dark:bg-slate-900">
      <div className="container">
        <div className="pb-16 pt-20">
          <div className="gap-10 space-y-10 md:grid md:grid-cols-12 md:space-y-0">
            <div className="col-span-3">
              <Link href="/" className="shrink-0">
                <SiteLogo
                  width={130}
                  height={39}
                  lightClasses="w-4/5 dark:hidden lg:w-auto"
                  darkClasses="hidden w-4/5 dark:block lg:w-auto"
                />
              </Link>
              <p className="mb-8 mt-6">
                Feel Free to contact us for all your queries at{" "}
                <Link
                  href="tel:+(91) 8709167691"
                  className="hover:text-primary"
                >
                  +(91) 8709167691
                </Link>{" "}
                or Mail us on{" "}
                <Link
                  href="mailto:teambhungru@gmail.com"
                  className="font-serif hover:text-primary"
                >
                  teambhungru@gmail.com
                </Link>{" "}
              </p>
              <div className="flex space-x-2">
                <Link
                  aria-label="Facebook button"
                  target="_blank"
                  href="#"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-[#0073b1] text-white transition-colors hover:bg-[#112E74] hover:text-white"
                >
                  <FontAwesomeIcon icon={faFacebook} width={15} />
                </Link>
                <Link
                  aria-label="Instagram button"
                  target="_blank"
                  href="#"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-red-500 text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faInstagram} width={15} />
                </Link>

                <Link
                  aria-label="LinkedIn button"
                  target="_blank"
                  href="#"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-[#0073b1] text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} width={15} />
                </Link>
                <Link
                  aria-label="Twitter button"
                  target="_blank"
                  href="#"
                  className="mb-2 flex h-10 w-10 items-center justify-center rounded bg-black text-white transition-colors hover:bg-foreground hover:text-white"
                >
                  <FontAwesomeIcon icon={faXTwitter} width={15} />
                </Link>
              </div>
            </div>

            {footerNav &&
              footerNav.map((item, index) => (
                <div
                  key={item.title}
                  className={`${
                    index === 0 ? "xl:col-start-7" : ""
                  } col-span-3 xl:col-span-2`}
                >
                  <h2 className="mb-4 text-sm text-[#112E74]">{item.title}</h2>
                  <NavigationMenu orientation="vertical">
                    <NavigationMenuList className="flex-col items-start space-y-2">
                      {item.items.map((link) => (
                        <NavigationMenuItem
                          key={link.title}
                          className="text-sm"
                        >
                          <Link
                            href={link.href}
                            target={link?.external ? "_blank" : undefined}
                            rel={link?.external ? "noreferrer" : undefined}
                            className="block hover:text-[#112E74]"
                          >
                            {link.title}
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              ))}
            <div className="col-span-3 xl:col-span-2">
              <h2 className="mb-4 text-sm text-[#112E74]">REGISTERED OFFICE</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <address className="-mt-px flex gap-2 leading-6">
                    <Address className="" />
                    Flat No. 6/A, A Block, Jayshree Green City, Pundag Road,
                    Near Old Argora Chowk, Ranchi, Jharkhand - 834002
                  </address>
                </li>
                {/* <li>
                  <address className="-mt-px flex gap-2 leading-6">
                    <Address className="" />
                    4/23, Siddhi Darshan Society, Shivaji Nagar, 2nd Rabodi,
                    Thane (West) 400601 Mumbai, Maharashtra.
                  </address>
                </li> */}
                <li className="flex gap-2">
                  <Phone />
                  <Link
                    href="tel:+91 8294086329"
                    className="font-serif hover:text-primary"
                  >
                    +91 8294086329
                  </Link>
                </li>
                <li className="flex gap-2">
                  <Phone />
                  <Link
                    href="tel:+91 7549197534"
                    className="font-serif hover:text-primary"
                  >
                    +91 7549197534
                  </Link>
                </li>
                {/* <li className="flex gap-2">
                  <WhatsApp />
                  <Link
                    href={"https://wa.me/17072678728"}
                    className="font-serif hover:text-primary"
                  >
                    +1-707-2678728
                  </Link>
                </li> */}
                <li className="flex gap-2">
                  <Email />
                  <Link
                    href="mailto:teambhungru@gmail.com"
                    className="font-serif text-base hover:text-primary"
                  >
                    teambhungru@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-4">
        <div className="container text-center">
          <span className="uppercase">Aqualine Bhungru</span> all right
          reserved. © {new Date().getFullYear()} Made by{" "}
          <a
            target="_blank"
            href="https://exogenoustechnology.com"
            className="hover:text-primary"
          >
            Exogenous Technology
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
