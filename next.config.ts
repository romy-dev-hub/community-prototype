import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
   eslint: {
    ignoreDuringBuilds: true,
  },
};




module.exports = nextConfig

export default nextConfig;
