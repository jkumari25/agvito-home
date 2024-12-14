export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aqualine Bhungru",
  description:
    "Aqualine Bhungroo is a revolutionary water management technology that helps farmers conserve water and improve crop yields. By efficiently storing excess rainwater underground, Bhungroo ensures a sustainable water supply during droughts, transforming arid lands into productive agricultural fields.",
  keywords: [
    "Next.js 14",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Server Actions",
    "Marketing",
    "SEO",
    "Digital Agency",
  ],
  url: "https://aqualine-bhungru.vercel.app/",
  ogImage: "https://aqualine-bhungru.vercel.app/og-image.png",
};

export const mainNav = [
  {
    title: "HOME",
    href: "/",
  },
  // {
  //   title: "ABOUT US",
  //   href: "/about",
  // },
  // {
  //   title: "PROGRAM",
  //   items: [
  //     {
  //       title: "First Aid CPR",
  //       href: "/first-aid-cpr",
  //       items: [],
  //     },
  //     {
  //       title: "Road Safety Awareness",
  //       href: "/road-safety-awareness",
  //       items: [],
  //     },
  //     {
  //       title: "Stress Management",
  //       href: "/stress-management",
  //       items: [],
  //     },
  //     {
  //       title: "Quality Education",
  //       href: "/quality-education",
  //       items: [],
  //     },
  //   ],
  // },
  // {
  //   title: "CONTACT US",
  //   href: "/contact",
  // },
  // {
  //   title: "SUPPORT US",
  //   href: "/support-us",
  // },
] satisfies MainNavItem[];

export const footerNav = [
  {
    title: "QUICK LINKS",
    items: [
      {
        title: "Home",
        href: "/",
        external: false,
      },
      {
        title: "About Us",
        href: "/",
        external: false,
      },
      {
        title: "Projects",
        href: "/",
        external: false,
      },
      {
        title: "Gallery",
        href: "/",
        external: false,
      },
      {
        title: "Contact US",
        href: "/",
        external: false,
      },
    ],
  },
  // {
  //   title: "OUR PRODUCTS",
  //   items: [
  //     {
  //       title: "SALT",
  //       href: "/salt",
  //       external: false,
  //     },
  //     {
  //       title: "CHINA CLAY",
  //       href: "/china-clay",
  //       external: false,
  //     },
  //     {
  //       title: "SILICA SAND",
  //       href: "/silica-sand",
  //       external: false,
  //     },
  //     {
  //       title: "KAOLIN POWDER",
  //       href: "/kaolin-powder",
  //       external: false,
  //     },
  //     {
  //       title: "BENTONITE POWDER",
  //       href: "/bentonite-powder",
  //       external: false,
  //     },
  //     {
  //       title: "MAGNESIUM CHLORIDE",
  //       href: "/magnesium-chloride",
  //       external: false,
  //     },
  //     {
  //       title: "QUARTZ GRAINS & POWDER",
  //       href: "/quartz-grains-powder",
  //       external: false,
  //     },
  //     {
  //       title: "YELLOW MAIZE",
  //       href: "/yellow-maize",
  //       external: false,
  //     },
  //     {
  //       title: "CORIANDER SEEDS",
  //       href: "/coriander-seeds",
  //       external: false,
  //     },
  //     {
  //       title: "PEANUTS",
  //       href: "/peanuts",
  //       external: false,
  //     },
  //     {
  //       title:"JAGGERY POWDER",
  //       href:"/jaggery-powder",
  //       external: false,
  //     },
  //     {
  //       title:"MAIZE STARCH",
  //       href:"/maize-starch",
  //       external: false,
  //     }
  //     // {
  //     //   title: "POLY ALLUMINIUM CHLORIDE",
  //     //   href: "/products/polyAluminium",
  //     //   external: false,
  //     // },
  //     // {
  //     //   title: "SODIUM CHLORATE",
  //     //   href: "/products/sodiumChlorate",
  //     //   external: false,
  //     // },
  //     // {
  //     //   title: "POTASSIUM CARBONATE",
  //     //   href: "/products/potassiumCarbonate",
  //     //   external: false,
  //     // },
  //   ],
  // },
] satisfies FooterItem[];

export const footerNav2 = [
  {
    title: "Solutions",
    items: [
      {
        title: "SEO Marketing",
        href: "#",
        external: false,
      },
      {
        title: "Search engine optimization",
        href: "#",
        external: false,
      },
      {
        title: "Email marketing",
        href: "#",
        external: false,
      },
      {
        title: "Social Media",
        href: "#",
        external: false,
      },
      {
        title: "Conversion rate optimization",
        href: "#",
        external: false,
      },
    ],
  },
  {
    title: "Quick Links",
    items: [
      {
        title: "Marketing Strategy",
        href: "#",
        external: false,
      },
      {
        title: "Keyword Research Explained",
        href: "#",
        external: false,
      },
      {
        title: "Why SEO Matters",
        href: "#",
        external: false,
      },
      {
        title: "Google Ads",
        href: "#",
        external: false,
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "About Company",
        href: "/about",
        external: false,
      },
      {
        title: "Services & Pricing",
        href: "/services",
        external: false,
      },
      {
        title: "SEO Blog & News",
        href: "/posts",
        external: false,
      },
      {
        title: "Contact",
        href: "/contact",
        external: false,
      },
    ],
  },
] satisfies FooterItem[];
