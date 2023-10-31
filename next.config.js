/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*'
          },
        ],
      },
    eslint: {
      ignoreDuringBuilds : true
    },
    experimental: { 
      optimizePackageImports: ['@phosphor-icons/react']
    }
}

module.exports = nextConfig
