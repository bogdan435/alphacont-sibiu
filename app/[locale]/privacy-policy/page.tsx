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
        ? "Politica de confidențialitate | ALPHACONT GROUP"
        : "Privacy Policy | ALPHACONT GROUP",
    description:
      safeLocale === "ro"
        ? "Informații despre modul în care ALPHACONT GROUP gestionează datele transmise prin website."
        : "Information about how ALPHACONT GROUP handles data sent through the website.",
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/privacy-policy`,
      languages: {
        ro: `${baseUrl}/ro/privacy-policy`,
        en: `${baseUrl}/en/privacy-policy`,
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: LegalPageProps) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";

  return (
    <main>
      <section className="legal-page">
        <p className="section-kicker">Legal</p>
        <h1>{safeLocale === "ro" ? "Politica de confidențialitate" : "Privacy policy"}</h1>
        <p className="legal-intro">
          {safeLocale === "ro"
            ? "Această pagină explică pe scurt cum folosim datele trimise prin formularul de contact sau prin canalele de comunicare afișate pe website."
            : "This page briefly explains how we use the data sent through the contact form or through the communication channels displayed on the website."}
        </p>

        <div className="legal-body">
          <h2>{safeLocale === "ro" ? "Ce date putem primi" : "What data we may receive"}</h2>
          <p>
            {safeLocale === "ro"
              ? "Putem primi nume, numele firmei, adresa de email, numărul de telefon și mesajul transmis prin formularul de contact sau prin email ori WhatsApp."
              : "We may receive your name, company name, email address, phone number, and the message sent through the contact form or via email or WhatsApp."}
          </p>

          <h2>{safeLocale === "ro" ? "Cum folosim aceste date" : "How we use this data"}</h2>
          <p>
            {safeLocale === "ro"
              ? "Folosim aceste informații doar pentru a răspunde solicitărilor, pentru a discuta despre servicii de contabilitate, salarizare sau fiscalitate și pentru a continua comunicarea legată de cererea trimisă."
              : "We use this information only to reply to enquiries, discuss accounting, payroll, or tax services, and continue the communication related to the request you sent."}
          </p>

          <h2>{safeLocale === "ro" ? "Păstrarea și transmiterea datelor" : "Data retention and sharing"}</h2>
          <p>
            {safeLocale === "ro"
              ? "Nu vindem datele primite prin website. Datele pot fi procesate prin servicii tehnice folosite pentru funcționarea formularului sau a website-ului, strict în scopul administrării solicitărilor."
              : "We do not sell the data received through the website. Data may be processed by technical services used for the form or website, strictly for handling enquiries and site administration."}
          </p>

          <h2>{safeLocale === "ro" ? "Contact" : "Contact"}</h2>
          <p>
            {safeLocale === "ro"
              ? "Pentru întrebări legate de datele transmise prin website, ne poți scrie la "
              : "For questions related to data sent through the website, you can contact us at "}
            <a href="mailto:contact@alphacont.ro">contact@alphacont.ro</a>.
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
