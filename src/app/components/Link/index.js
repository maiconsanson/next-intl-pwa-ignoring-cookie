"use client";

import { Link as LinkI18n, useRouter } from "@/i18n/navigation";

export default function Link({ children, href, locale }) {
  const router = useRouter();

  return (
    <LinkI18n href={href} locale={locale} prefetch={false}>
      {children}
    </LinkI18n>
  );
}
