import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";

const lastModified = "2026-05-10";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();

  return {
    title: "Recommendation letters | ALPHACONT",
    description:
      "Recommendation letters and reference documents for ALPHACONT collaborations, available for online viewing.",
    other: {
      lastModified,
    },
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
  const recommendationCards = [
    {
      initials: "EV",
      name: "Eric Verdier",
      role: "Group CFO — MORA International Group, France",
      quote:
        "Mr. Bogdan ANGHEL took charge of all the accounting production and tax declarations of our Romanian subsidiary.",
      pdfUrl: "/documents/REC_LETTER_ERIC_V.pdf",
    },
    {
      initials: "ADK",
      name: "Andre De Kinder",
      role: "Retired CFO — Mora Group, France",
      quote:
        "I would highly recommend AlphaCont as an external consultant in accounting and tax matters.",
      pdfUrl: "/documents/REC_LETTER_DE_KINDER.pdf",
    },
  ];

  return (
    <main className="site-shell">
      <section className="legal-page document-page">
        <p className="section-kicker">Recommendations</p>
        <h1>Recommendation letters</h1>
        <p className="legal-intro">
          Each recommendation can be opened directly in a new tab together with
          its corresponding letter.
        </p>

        <div className="recommendation-card-grid">
          {recommendationCards.map((item) => (
            <article key={item.name} className="recommendation-person-card">
              <div className="recommendation-person-header">
                <div className="recommendation-avatar" aria-hidden="true">
                  {item.initials}
                </div>
                <div className="recommendation-person-meta">
                  <h2 className="recommendation-person-name">{item.name}</h2>
                  <p className="recommendation-person-role">{item.role}</p>
                </div>
              </div>

              <p className="recommendation-person-quote">{item.quote}</p>

              <div className="document-actions">
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button contact-button-primary"
                >
                  View the letter
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
