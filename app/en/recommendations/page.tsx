import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();

  return {
    title: "Recommendation letters | ALPHACONT",
    description:
      "Recommendation letters and reference documents for ALPHACONT collaborations, available for online viewing.",
    alternates: {
      canonical: `${baseUrl}/en/recommendations`,
      languages: {
        ro: `${baseUrl}/ro/recomandari`,
        en: `${baseUrl}/en/recommendations`,
      },
    },
  };
}

export default function EnglishRecommendationPage() {
  const pdfUrl = "/documents/REC_LETTER_ERIC_V.pdf";

  return (
    <main className="site-shell">
      <section className="legal-page document-page">
        <p className="section-kicker">Documents</p>
        <h1>Recommendation letters</h1>
        <p className="legal-intro">
          You can open the recommendation letter in a new tab.
        </p>

        <div className="document-actions">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button contact-button-primary"
          >
            View the letter
          </a>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
