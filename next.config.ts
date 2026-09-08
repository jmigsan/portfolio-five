import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/case-studies/hymndeck",
        permanent: true,
      },
      {
        source: "/projects/:path*",
        destination: "/case-studies/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
