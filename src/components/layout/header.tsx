// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import SiteLogo from "./site-logo";
// import MainNav from "./main-nav";
// import { DarkModeSwitch } from "../dark-mode-switch";
// import { mainNav } from "@/config/site";
// import { cn } from "@/lib/utils";
// import { MobileNav } from "./mobile-nav";

// const Header = () => {
//   const [stickyClass, setStickyClass] = useState("");

//   useEffect(() => {
//     window.addEventListener("scroll", stickyHeader);

//     return () => {
//       window.removeEventListener("scroll", stickyHeader);
//     };
//   }, []);

//   const stickyHeader = () => {
//     if (window !== undefined) {
//       let windowHeight = window.scrollY;
//       windowHeight > 10
//         ? setStickyClass("bg-white dark:bg-slate-900 lg:py-3 py-3")
//         : setStickyClass("");
//     }
//   };

//   return (
//     <>
//       <header className="fixed top-0 z-20 w-full">
//         <div
//           className={cn(
//             "flex w-full items-center px-2 py-5 transition-all lg:py-12 xl:px-20",
//             stickyClass,
//           )}
//         >
//           <Link href="/" className="mr-12 shrink-0">
//             <SiteLogo
//               width={120}
//               height={39}
//               lightClasses="w-4/5 dark:hidden lg:w-auto"
//               darkClasses="hidden w-4/5 dark:block lg:w-auto"
//             />
//           </Link>

//           <div className="relative flex w-full items-end justify-end bg-transparent">
//             <MainNav items={mainNav} />
//             <DarkModeSwitch />
//             <MobileNav mainNavItems={mainNav} />

//             {/*
//             <div className="hidden lg:ml-auto lg:inline-block">
//               <a
//                 href="tel:97-271-29949"
//                 className="inline-block rounded-md bg-[#2a385a] px-4 py-2 text-center font-bold text-white"
//               >
//                 <span className="block text-xxs">Call us on</span>
//                 <span className="text-md">97-271-29949</span>
//               </a>
//             </div> */}
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SiteLogo from "./site-logo";
import MainNav from "./main-nav";
import { DarkModeSwitch } from "../dark-mode-switch";
import { mainNav } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

const Header = () => {
  const [stickyClass, setStickyClass] = useState(
    "bg-white dark:bg-slate-900 lg:py-3 py-3",
  );

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);

    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  const stickyHeader = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 10
        ? setStickyClass("bg-white dark:bg-slate-900 lg:py-3 py-3")
        : setStickyClass("bg-white dark:bg-slate-900 lg:py-3 py-3");
    }
  };

  return (
    <>
      <header className="fixed top-0 z-20 w-full bg-white dark:bg-slate-900">
        <div
          className={cn(
            "flex w-full items-center px-2 py-5 transition-all lg:py-12 xl:px-20",
            stickyClass,
          )}
        >
          <Link href="/" className="mr-12 shrink-0">
            <SiteLogo
              width={60}
              height={30}
              lightClasses="w-2/5 dark:hidden lg:w-auto"
              darkClasses="hidden w-2/5 dark:block lg:w-auto"
            />
          </Link>

          <div className="relative flex w-full items-end justify-end">
            <MainNav items={mainNav} />
            {/* <DarkModeSwitch /> */}
            <MobileNav mainNavItems={mainNav} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
