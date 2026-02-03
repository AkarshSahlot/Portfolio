/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Disable optimization if you later switch to output: "export"
    unoptimized: true,
    domains: ['avatars.githubusercontent.com', 'opengraph.githubassets.com'],
  },
};

module.exports = nextConfig;
