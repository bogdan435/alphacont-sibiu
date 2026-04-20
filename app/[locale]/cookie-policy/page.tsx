import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";

type LegalPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const baseUrl = getBaseUrl();

  return {
    title:
      safeLocale === "ro"
        ? "Politica de cookie-uri | ALPHACONT GROUP"
        : "Cookie Policy | ALPHACONT GROUP",
    description:
      safeLocale === "ro"
        ? "Informații despre utilizarea cookie-urilor pe website-ul ALPHACONT GROUP."
        : "Information about the use of cookies on the ALPHACONT GROUP website.",
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/cookie-policy`,
      languages: {
        ro: `${baseUrl}/ro/cookie-policy`,
        en: `${baseUrl}/en/cookie-policy`,
      },
    },
  };
}

export default async function CookiePolicyPage({ params }: LegalPageProps) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";

  return (
    <main className="site-shell">
      <section className="legal-page">
        <p className="section-kicker">Legal</p>
        <h1>{safeLocale === "ro" ? "Politica de cookie-uri" : "Cookie policy"}</h1>
        <p className="legal-intro">
          {safeLocale === "ro"
            ? "Website-ul poate folosi cookie-uri sau tehnologii similare pentru funcționare de bază, măsurarea traficului și îmbunătățirea experienței de navigare."
            : "The website may use cookies or similar technologies for core functionality, traffic measurement, and improving the browsing experience."}
        </p>

        <div className="legal-body">
          <h2>{safeLocale === "ro" ? "Ce sunt cookie-urile" : "What cookies are"}</h2>
          <p>
            {safeLocale === "ro"
              ? "Cookie-urile sunt fișiere mici stocate pe dispozitivul tău atunci când vizitezi un website. Ele pot ajuta la funcționarea corectă a site-ului și la înțelegerea modului în care este folosit."
              : "Cookies are small files stored on your device when you visit a website. They can help the site function properly and help understand how the site is used."}
          </p>

          <h2>{safeLocale === "ro" ? "Cum le folosim" : "How we use them"}</h2>
          <p>
            {safeLocale === "ro"
              ? "Le putem folosi pentru funcționarea tehnică a website-ului, pentru preferințe de navigare și, dacă este cazul, pentru statistici generale despre trafic."
              : "We may use them for the technical operation of the website, browsing preferences, and, where applicable, for general traffic statistics."}
          </p>

          <h2>{safeLocale === "ro" ? "Controlul cookie-urilor" : "Controlling cookies"}</h2>
          <p>
            {safeLocale === "ro"
              ? "Poți controla sau șterge cookie-urile din setările browserului tău. Dezactivarea anumitor cookie-uri poate afecta modul în care funcționează unele părți ale site-ului."
              : "You can control or delete cookies in your browser settings. Disabling certain cookies may affect how some parts of the site function."}
          </p>

          <p className="legal-backlink">
            <Link href={`/${safeLocale}`}>
              {safeLocale === "ro" ? "Înapoi la homepage" : "Back to homepage"}
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter locale={safeLocale} />
    </main>
  );
}
