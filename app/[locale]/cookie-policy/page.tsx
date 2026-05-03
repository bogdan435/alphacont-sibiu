import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";

type LegalPageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  const baseUrl = getBaseUrl();

  return {
    title: "Cookie Policy | ALPHACONT",
    description:
      "Information about the use of cookies on the ALPHACONT website.",
    alternates: {
      canonical: `${baseUrl}/en/cookie-policy`,
      languages: {
        ro: `${baseUrl}/ro/cookie-uri`,
        en: `${baseUrl}/en/cookie-policy`,
      },
    },
  };
}

export default async function CookiePolicyPage({ params }: LegalPageProps) {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  return (
    <main className="site-shell">
      <section className="legal-page">
        <p className="section-kicker">Legal</p>
        <h1>Cookie policy</h1>
        <p className="legal-intro">
          The website may use cookies or similar technologies for core
          functionality, traffic measurement, and improving the browsing
          experience.
        </p>

        <div className="legal-body">
          <h2>What cookies are</h2>
          <p>
            Cookies are small files stored on your device when you visit a
            website. They can help the site function properly and help
            understand how the site is used.
          </p>

          <h2>How we use them</h2>
          <p>
            We may use them for the technical operation of the website,
            browsing preferences, and, where applicable, for general traffic
            statistics.
          </p>

          <h2>Controlling cookies</h2>
          <p>
            You can control or delete cookies in your browser settings.
            Disabling certain cookies may affect how some parts of the site
            function.
          </p>

          <p className="legal-backlink">
            <Link href="/en">Back to homepage</Link>
          </p>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
