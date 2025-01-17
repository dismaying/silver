import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

module.exports = {
  output: 'export', // Export as a static site
};
