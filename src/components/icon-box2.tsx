import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type IconBoxProps = {
  iconBox: IconBox;
  className?: string;
};

const IconBox2 = ({
  className,
  iconBox: { icon, title, description, link, issue },
}: IconBoxProps) => {
  return (
    <div
      className={cn(
        "hover-shadow z-[1] overflow-hidden rounded-2xl bg-white p-1 before:absolute before:left-0 before:top-0 before:block before:h-[.3125rem] before:w-0 before:bg-secondary before:transition-all before:duration-200 hover:before:w-full dark:bg-slate-800 md:p-2 lg:p-4",
        className,
      )}
    >
      {icon ? (
        <Link href={link}>
          <Image
            src={icon}
            alt={title || ""}
            width={2000}
            height={2000}
            layout="responsive"
            className="mb-6 inline-block h-[25vh] w-full rounded-2xl"
          />
        </Link>
      ) : null}
      {title ? (
        <h3 className="text-center text-sm uppercase md:text-md lg:text-md">
          {title}
        </h3>
      ) : null}
      {description ? (
        <p className="mb-4 text-center text-sm md:text-md lg:text-md">
          {description}
        </p>
      ) : null}
      {issue ? (
        <p className="mb-4 text-center text-sm md:text-md lg:text-md">
          {issue}
        </p>
      ) : null}
    </div>
  );
};

export default IconBox2;
