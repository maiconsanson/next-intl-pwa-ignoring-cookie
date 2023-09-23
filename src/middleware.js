import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  defaultLocale: "pt",
  localePrefix: "always",
  locales: ["en", "pt"],
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
