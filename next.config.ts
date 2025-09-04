import type { NextConfig } from "next";

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const baseConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  trailingSlash: true,
  env: {
    NEXT_BACKEND_URL: process.env.NEXT_BACKEND_URL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config: any) => {
    config.externals = [...(config.externals || []), { canvas: "canvas" }];
    return config;
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xxx.com",
        pathname: "/**",
      },
    ],
  },
};

export default withBundleAnalyzer(
  withNextIntl(
    baseConfig,
    withPWA({
      pwa: {
        dest: "public",
        runtimeCaching,
      },
    })
  )
);
