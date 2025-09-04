/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",                  // frontend request
        destination: "http://167.71.255.240:8000/:path*", // backend (HTTP)
      },
    ]
  },
}

export default nextConfig
