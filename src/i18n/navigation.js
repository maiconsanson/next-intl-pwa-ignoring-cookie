import { createSharedPathnamesNavigation } from "next-intl/navigation";

const LOCALES = ["en", "pt"];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ LOCALES });
