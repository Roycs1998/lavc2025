/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,

  reactStrictMode: false,

  images: {
    domains: ['localhost']
  }
}

module.exports = nextConfig

