import { useTranslations } from "next-intl";
import Link from "@/app/components/Link";
import styles from "../page.module.css";

export default function Home({ params }) {
  const t = useTranslations("homepage");
  const tAnother = useTranslations("another_page");
  const { locale } = params;

  return (
    <main className={styles.main}>
      <h1>{t("title")}</h1>
      <p>
        <em>locale: {locale}</em>
      </p>
      <br />
      <Link href="/" locale={t("link.locale")}>
        {t("link.text")}
      </Link>
      <br />
      <Link href="/another">{tAnother("title")}</Link>
    </main>
  );
}
