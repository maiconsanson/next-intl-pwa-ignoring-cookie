"use client";

import { Link as LinkI18n, useRouter } from "@/i18n/navigation";

export default function Link({ children, href, locale }) {
  const router = useRouter();

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();

    setTimeout(() => {
      router.push(href, locale ? { locale: locale } : null);
    }, 400);
  };

  return (
    <LinkI18n
      href={href}
      locale={locale}
      onClick={handleClick}
      prefetch={false}
    >
      {children}
    </LinkI18n>
  );
}
