import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fastscraping.com', 'images.unsplash.com'],
  },
}

export default nextConfig
