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
        ? "Termeni și condiții | ALPHACONT GROUP"
        : "Terms and Conditions | ALPHACONT GROUP",
    description:
      safeLocale === "ro"
        ? "Informații generale privind utilizarea website-ului ALPHACONT GROUP."
        : "General information regarding the use of the ALPHACONT GROUP website.",
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/terms`,
      languages: {
        ro: `${baseUrl}/ro/terms`,
        en: `${baseUrl}/en/terms`,
      },
    },
  };
}

export default async function TermsPage({ params }: LegalPageProps) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";

  return (
    <main>
      <section className="legal-page">
        <p className="section-kicker">Legal</p>
        <h1>{safeLocale === "ro" ? "Termeni și condiții" : "Terms and conditions"}</h1>
        <p className="legal-intro">
          {safeLocale === "ro"
            ? "Website-ul are rol informativ și de prezentare a serviciilor ALPHACONT GROUP. Trimiterea unei solicitări prin formular sau prin email nu creează automat o relație contractuală."
            : "The website is intended to present ALPHACONT GROUP services and provide information. Sending an enquiry through the form or by email does not automatically create a contractual relationship."}
        </p>

        <div className="legal-body">
          <h2>{safeLocale === "ro" ? "Utilizarea website-ului" : "Use of the website"}</h2>
          <p>
            {safeLocale === "ro"
              ? "Conținutul paginilor are scop general și poate fi actualizat fără notificare prealabilă. Informațiile afișate nu reprezintă consultanță fiscală sau juridică personalizată în lipsa unei discuții directe și a unei analize concrete."
              : "The website content is for general information and may be updated without prior notice. The information shown does not constitute personalised tax or legal advice without a direct discussion and concrete review."}
          </p>

          <h2>{safeLocale === "ro" ? "Solicitări și colaborare" : "Enquiries and collaboration"}</h2>
          <p>
            {safeLocale === "ro"
              ? "Orice colaborare efectivă se stabilește separat, în urma unei discuții și a unei confirmări explicite privind serviciile, documentele și condițiile de lucru."
              : "Any actual collaboration is established separately, after a direct discussion and explicit confirmation of the services, documents, and working conditions."}
          </p>

          <h2>{safeLocale === "ro" ? "Drepturi asupra conținutului" : "Content rights"}</h2>
          <p>
            {safeLocale === "ro"
              ? "Textele, elementele vizuale și structura website-ului sunt folosite pentru prezentarea activității ALPHACONT GROUP și nu pot fi reproduse integral fără acord."
              : "The text, visual elements, and site structure are used to present ALPHACONT GROUP activity and may not be fully reproduced without permission."}
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
