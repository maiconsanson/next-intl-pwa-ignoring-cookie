/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const withNextIntl = require("next-intl/plugin")("./src/i18n");

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/another",
        permanent: false,
      },
    ];
  },
};

module.exports = withPWA(withNextIntl(nextConfig));
