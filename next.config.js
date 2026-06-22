/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      // Cache all coach curriculum pages — NetworkFirst so coaches always get
      // the latest content when online, but fall back to cache when offline.
      {
        urlPattern: /^https:\/\/.*\/coach(\/.*)?$/,
        handler: "NetworkFirst",
        options: {
          cacheName: "coach-pages",
          expiration: { maxEntries: 200, maxAgeSeconds: 7 * 24 * 60 * 60 },
          networkTimeoutSeconds: 10,
        },
      },
      // Cache static assets (JS, CSS, fonts, images) forever — they're hashed.
      {
        urlPattern: /\/_next\/static\/.*/,
        handler: "CacheFirst",
        options: {
          cacheName: "next-static",
          expiration: { maxEntries: 500, maxAgeSeconds: 365 * 24 * 60 * 60 },
        },
      },
      // Cache images & fonts from public/
      {
        urlPattern: /\.(png|jpeg|jpg|svg|ttf|woff2)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "static-assets",
          expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 60 * 60 },
        },
      },
    ],
  },
});

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client", "prisma"],
  },
};

module.exports = withPWA(nextConfig);
