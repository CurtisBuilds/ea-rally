/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: false,
  aggressiveFrontEndNavCaching: false,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
    // NEVER cache HTML pages — auth state must always be checked fresh from server.
    // Only cache static assets (JS bundles, CSS, fonts, images).
    runtimeCaching: [
      // Next.js hashed JS/CSS chunks — safe to cache forever
      {
        urlPattern: /\/_next\/static\/.*/,
        handler: "CacheFirst",
        options: {
          cacheName: "next-static",
          expiration: { maxEntries: 500, maxAgeSeconds: 365 * 24 * 60 * 60 },
        },
      },
      // Public assets: fonts, images
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
