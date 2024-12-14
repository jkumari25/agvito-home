/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deothemes.com",
      },
      {
        protocol: "https",
        hostname: "wordpress-597675-3975829.cloudwaysapps.com",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
      },
    ],
  },
  redirects: async () => [
    {
      source: "/mission-vision",
      destination: "/",
      permanent: true,
    },
    {
      source: "/sodium-chlorate",
      destination: "/",
      permanent: true,
    },
    {
      source: "/poly-alluminium-chloride",
      destination: "/",
      permanent: true,
    },
    {
      source: "/potassium-carbonate",
      destination: "/",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
