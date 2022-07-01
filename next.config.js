/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

}
async rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: 'https://todo-app-netxjs.vercel.app/',
    },
  ]
}

module.exports = {nextConfig,rewrites}
