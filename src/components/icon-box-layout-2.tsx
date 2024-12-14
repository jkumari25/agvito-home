import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type IconBoxProps = {
  iconBox: IconBox;
};

const IconBoxLayout2 = ({
  iconBox: { icon, link, title, description, shadow, issue },
}: IconBoxProps) => {
  return (
    <div
      className={cn(
        "hover:shadow relative top-0 z-[1] overflow-hidden rounded-2xl bg-white p-1 shadow-sm transition-all duration-200 hover:-top-[.125rem] hover:shadow-slate-500/20 dark:bg-slate-800 dark:hover:shadow-slate-950/40 md:p-2 lg:p-3",
        shadow,
      )}
    >
      {icon ? (
        <Image
          src={icon}
          alt={title || ""}
          width={1000}
          height={1000}
          className="mb-6 inline-block w-full rounded-2xl"
        />
      ) : null}

      {title ? (
        <div className="mb-6 h-[1rem] overflow-hidden md:h-[1.4rem] lg:h-[1.6rem]">
          <h3 className="text-sm uppercase md:text-md lg:text-md">{title}</h3>
        </div>
      ) : null}
      {description ? <p>{description}</p> : null}
    </div>
  );
};

export default IconBoxLayout2;
