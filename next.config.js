/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RAPID_HOST: process.env.RAPID_HOST,
  }
}

module.exports = nextConfig
