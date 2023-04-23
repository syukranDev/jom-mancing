/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['gcdnb.pbrd.co'],
  },
}

module.exports = nextConfig
