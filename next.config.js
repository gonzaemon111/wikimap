/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'imagedelivery.net',
        protocol: 'https'
      }
    ]
  },
}

module.exports = nextConfig
