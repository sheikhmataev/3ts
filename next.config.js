/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/3ts' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/3ts' : '',
}

module.exports = nextConfig
