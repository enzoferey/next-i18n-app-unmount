import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function AboutPage() {
  const { t: tCommon } = useTranslation("common");
  const { t: tAbout } = useTranslation("about");

  return (
    <div>
      <p>{tCommon("COMMON")}</p>
      <p>{tAbout("ABOUT")}</p>
      <Link href="/">Go to home</Link>
      <Link href="/signup">Go to signup</Link>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "about"])),
  },
});
