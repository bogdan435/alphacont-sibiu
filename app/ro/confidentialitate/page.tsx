import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();

  return {
    title: "Politica de confidențialitate | ALPHACONT",
    description:
      "Informații despre modul în care ALPHACONT gestionează datele transmise prin website.",
    alternates: {
      canonical: `${baseUrl}/ro/confidentialitate`,
      languages: {
        ro: `${baseUrl}/ro/confidentialitate`,
        en: `${baseUrl}/en/privacy-policy`,
      },
    },
  };
}

export default function RomanianPrivacyPolicyPage() {
  return (
    <main className="site-shell">
      <section className="legal-page">
        <p className="section-kicker">Legal</p>
        <h1>Politica de confidențialitate</h1>
        <p className="legal-intro">
          Această pagină explică pe scurt cum folosim datele trimise prin
          formularul de contact sau prin canalele de comunicare afișate pe
          website.
        </p>

        <div className="legal-body">
          <h2>Ce date putem primi</h2>
          <p>
            Putem primi nume, numele firmei, adresa de email, numărul de telefon
            și mesajul transmis prin formularul de contact sau prin email ori
            WhatsApp.
          </p>

          <h2>Cum folosim aceste date</h2>
          <p>
            Folosim aceste informații doar pentru a răspunde solicitărilor,
            pentru a discuta despre servicii de contabilitate, salarizare sau
            fiscalitate și pentru a continua comunicarea legată de cererea
            trimisă.
          </p>

          <h2>Păstrarea și transmiterea datelor</h2>
          <p>
            Nu vindem datele primite prin website. Datele pot fi procesate prin
            servicii tehnice folosite pentru funcționarea formularului sau a
            website-ului, strict în scopul administrării solicitărilor.
          </p>

          <h2>Contact</h2>
          <p>
            Pentru întrebări legate de datele transmise prin website, ne poți
            scrie la <a href="mailto:contact@alphacont.ro">contact@alphacont.ro</a>.
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
