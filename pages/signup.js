import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function SignupPage() {
  const { t } = useTranslation("common");

  return (
    <div>
      <p>{t("COMMON")}</p>
      <Link href="/">Go to home</Link>
      <Link href="/about">Go to about</Link>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
