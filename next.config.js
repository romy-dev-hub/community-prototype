/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ALL ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig