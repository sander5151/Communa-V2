import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://z6wq97uuc3.ufs.sh/**')]
  }
};

export default nextConfig;
