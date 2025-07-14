/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,

  images: {
    domains: ['localhost','tlavc-peru.org']
  }
}

export default nextConfig

