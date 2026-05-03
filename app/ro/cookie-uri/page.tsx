import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();

  return {
    title: "Politica de cookie-uri | ALPHACONT",
    description:
      "Informații despre utilizarea cookie-urilor pe website-ul ALPHACONT.",
    alternates: {
      canonical: `${baseUrl}/ro/cookie-uri`,
      languages: {
        ro: `${baseUrl}/ro/cookie-uri`,
        en: `${baseUrl}/en/cookie-policy`,
      },
    },
  };
}

export default function RomanianCookiePolicyPage() {
  return (
    <main className="site-shell">
      <section className="legal-page">
        <p className="section-kicker">Legal</p>
        <h1>Politica de cookie-uri</h1>
        <p className="legal-intro">
          Website-ul poate folosi cookie-uri sau tehnologii similare pentru
          funcționare de bază, măsurarea traficului și îmbunătățirea experienței
          de navigare.
        </p>

        <div className="legal-body">
          <h2>Ce sunt cookie-urile</h2>
          <p>
            Cookie-urile sunt fișiere mici stocate pe dispozitivul tău atunci
            când vizitezi un website. Ele pot ajuta la funcționarea corectă a
            site-ului și la înțelegerea modului în care este folosit.
          </p>

          <h2>Cum le folosim</h2>
          <p>
            Le putem folosi pentru funcționarea tehnică a website-ului, pentru
            preferințe de navigare și, dacă este cazul, pentru statistici
            generale despre trafic.
          </p>

          <h2>Controlul cookie-urilor</h2>
          <p>
            Poți controla sau șterge cookie-urile din setările browserului tău.
            Dezactivarea anumitor cookie-uri poate afecta modul în care
            funcționează unele părți ale site-ului.
          </p>

          <p className="legal-backlink">
            <Link href="/ro">Înapoi la homepage</Link>
          </p>
        </div>
      </section>

      <SiteFooter locale="ro" />
    </main>
  );
}
