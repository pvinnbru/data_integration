import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2p1cf6997m1ir.cloudfront.net',
        port: '',
      },
    ],
  }
};

export default nextConfig;
