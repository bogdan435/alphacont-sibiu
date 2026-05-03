import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();

  return {
    title: "Termeni și condiții | ALPHACONT",
    description:
      "Informații generale privind utilizarea website-ului ALPHACONT.",
    alternates: {
      canonical: `${baseUrl}/ro/termeni`,
      languages: {
        ro: `${baseUrl}/ro/termeni`,
        en: `${baseUrl}/en/terms`,
      },
    },
  };
}

export default function RomanianTermsPage() {
  return (
    <main className="site-shell">
      <section className="legal-page">
        <p className="section-kicker">Legal</p>
        <h1>Termeni și condiții</h1>
        <p className="legal-intro">
          Website-ul are rol informativ și de prezentare a serviciilor ALPHACONT.
          Trimiterea unei solicitări prin formular sau prin email nu creează automat o
          relație contractuală.
        </p>

        <div className="legal-body">
          <h2>Utilizarea website-ului</h2>
          <p>
            Conținutul paginilor are scop general și poate fi actualizat fără notificare
            prealabilă. Informațiile afișate nu reprezintă consultanță fiscală sau juridică
            personalizată în lipsa unei discuții directe și a unei analize concrete.
          </p>

          <h2>Solicitări și colaborare</h2>
          <p>
            Orice colaborare efectivă se stabilește separat, în urma unei discuții și a unei
            confirmări explicite privind serviciile, documentele și condițiile de lucru.
          </p>

          <h2>Drepturi asupra conținutului</h2>
          <p>
            Textele, elementele vizuale și structura website-ului sunt folosite pentru
            prezentarea activității ALPHACONT și nu pot fi reproduse integral fără acord.
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
