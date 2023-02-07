/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
      {
        source: "/login",
        destination: "/login",
      },
    ];
  },
};

module.exports = nextConfig;