/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    domains: ['steamuserimages-a.akamaihd.net']
  }
}
