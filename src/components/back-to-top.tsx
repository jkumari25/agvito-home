"use client";
import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        style={{ bottom: isVisible ? "20px" : "-32px" }}
        aria-label="back to top"
        className="fixed right-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-muted shadow-sm transition-all hover:bg-primary hover:text-white dark:bg-slate-900 "
      >
        <ChevronUpIcon width={20} height={20} />
      </button>
    </>
  );
};

export default BackToTop;
