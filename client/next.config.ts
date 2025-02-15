import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@zilliz/milvus2-sdk-node'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/w1280/**",
      },
    ],
  },
};

export default nextConfig;
