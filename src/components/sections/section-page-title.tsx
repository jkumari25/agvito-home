// import { cn } from "@/lib/utils";

// type SectionPageTitleProps = {
//   children: React.ReactNode;
//   subtitle?: string;
//   titleClasses?: string;
//   subtitleClasses?: string;
//   bg?: string;
// };

// const SectionPageTitle = ({
//   children,
//   subtitle,
//   titleClasses,
//   subtitleClasses,
// }: SectionPageTitleProps) => {
//   return (
//     <section className="bg-muted pb-32 pt-48 dark:bg-slate-900">
//       <div className="container">
//         <div className="mx-auto max-w-3xl text-center">
//           <h1 className={cn("mb-6", titleClasses)}>{children}</h1>
//           {subtitle && (
//             <p className={cn("text-lg", subtitleClasses)}>{subtitle}</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionPageTitle;

// import { cn } from "@/lib/utils";

// type SectionPageTitleProps = {
//   children: React.ReactNode;
//   subtitle?: string;
//   titleClasses?: string;
//   subtitleClasses?: string;
//   bg?: string;
// };

// const SectionPageTitle = ({
//   children,
//   subtitle,
//   titleClasses,
//   subtitleClasses,
//   bg,
// }: SectionPageTitleProps) => {
//   return (
//     <section
//       className="bg-muted bg-cover bg-center bg-no-repeat object-cover pb-32 pt-48 opacity-60 dark:bg-slate-900"
//       style={{ backgroundImage: bg ? `url(${bg})` : undefined }}
//     >
//       <div className="container">
//         <div className="mx-auto max-w-3xl text-center">
//           <h1 className={cn("mb-6", titleClasses)}>{children}</h1>
//           {subtitle && (
//             <p className={cn("text-lg", subtitleClasses)}>{subtitle}</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SectionPageTitle;

import { cn } from "@/lib/utils";

type SectionPageTitleProps = {
  children: React.ReactNode;
  subtitle?: string;
  titleClasses?: string;
  subtitleClasses?: string;
  bg?: string;
};

const SectionPageTitle = ({
  children,
  subtitle,
  titleClasses,
  subtitleClasses,
  bg,
}: SectionPageTitleProps) => {
  return (
    <section className="relative  pb-32 pt-48  dark:bg-slate-900">
      {bg && (
        <div
          className="absolute inset-0 bg-black bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      )}
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center text-black ">
          <h1 className={cn("mb-6 text-black", titleClasses)}>{children}</h1>
          {subtitle && (
            <p className={cn("text-2xl", subtitleClasses)}>{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionPageTitle;
