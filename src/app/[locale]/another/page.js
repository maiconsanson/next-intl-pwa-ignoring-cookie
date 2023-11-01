import { useTranslations } from "next-intl";
import Link from "@/app/components/Link";
import styles from "@/app/page.module.css";

export default function Another({ params }) {
  const t = useTranslations("another_page");
  const tHome = useTranslations("homepage");
  const { locale } = params;

  return (
    <main className={styles.main}>
      <h1>{t("title")}</h1>
      <p>
        <em>locale: {locale}</em>
      </p>
      <br />
      <Link href="/another" locale={t("link.locale")}>
        {tHome("link.text")}
      </Link>
      <br />
      <Link href="/" locale={t("link.locale")}>
        {t("link.text")}
      </Link>
    </main>
  );
}
