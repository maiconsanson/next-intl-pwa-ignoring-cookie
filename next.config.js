/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./src/messages/i18n.js");
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA(withNextIntl({}));
