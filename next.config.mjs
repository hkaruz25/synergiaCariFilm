/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pub-60fea93cb19e4eaab629cc696d6eeb9d.r2.dev",
        pathname: "/",
        protocol: "https",
      },
    ],
  },
}

export default nextConfig
