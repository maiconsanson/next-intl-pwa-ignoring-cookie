import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import styles from "../page.module.css";

export default function Home({ params }) {
  const t = useTranslations("index");
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
    </main>
  );
}
