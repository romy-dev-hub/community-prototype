/** @type {import('next').NextConfig} */
const nextConfig = {
  // NO output: 'export' - Let Vercel handle server rendering
  // Remove any existing output setting
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig