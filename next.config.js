/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //domains: ["storageapi.fleek.co", "savivets.wpengine.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fleek.co/**",
        pathname: "/9ec37732-832c-4af1-a4fa-cc87c28c6dae-bucket/assets/img/**",
      },
      {
        protocol: "https",
        hostname: "**.lh3.googleusercontent.com/**",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "**.gravatar.com/**",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.media-exp1.licdn.com/**",
        pathname: "/**",
      },
    ],
    domains: [
      "storageapi.fleek.co",
      "lh3.googleusercontent.com",
      "gravatar.com",
      "media-exp1.licdn.com",
    ],
  },
};

module.exports = nextConfig;
