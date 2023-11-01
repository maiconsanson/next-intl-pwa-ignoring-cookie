import { Link as LinkI18n } from "@/i18n/navigation";

export default function Link({ children, href, locale }) {
  return (
    <LinkI18n href={href} {...(locale && { locale })} prefetch={false}>
      {children}
    </LinkI18n>
  );
}
