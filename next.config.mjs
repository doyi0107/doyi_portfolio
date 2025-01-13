/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  experimental: {
    windowHistorySupport: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
