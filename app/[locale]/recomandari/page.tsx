import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";

type RecommendationPageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "ro" }];
}

export async function generateMetadata({
  params,
}: RecommendationPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "ro") {
    notFound();
  }

  const baseUrl = getBaseUrl();

  return {
    title: "Scrisori de recomandare | ALPHACONT",
    description:
      "Scrisori de recomandare și documente de referință pentru colaborările ALPHACONT, disponibile pentru vizualizare online.",
    alternates: {
      canonical: `${baseUrl}/ro/recomandari`,
      languages: {
        ro: `${baseUrl}/ro/recomandari`,
        en: `${baseUrl}/en/recommendations`,
      },
    },
  };
}

export default async function RecommendationPage({
  params,
}: RecommendationPageProps) {
  const { locale } = await params;

  if (locale !== "ro") {
    notFound();
  }

  const pdfUrl = "/documents/REC_LETTER_ERIC_V.pdf";

  return (
    <main className="site-shell">
      <section className="legal-page document-page">
        <p className="section-kicker">Documente</p>
        <h1>Scrisori de recomandare</h1>
        <p className="legal-intro">Poți deschide scrisoarea într-un tab nou.</p>

        <div className="document-actions">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button contact-button-primary"
          >
            Vizualizează scrisoarea
          </a>
        </div>
      </section>

      <SiteFooter locale="ro" />
    </main>
  );
}
