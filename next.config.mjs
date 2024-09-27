/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,

  images: {
    domains: ['localhost']
  }
}

export default nextConfig

