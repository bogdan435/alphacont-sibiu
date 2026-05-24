import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";

type RecommendationPageProps = {
  params: Promise<{ locale: string }>;
};

const lastModified = "2026-05-10";

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
    other: {
      lastModified,
    },
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

  const recommendationCards = [
    {
      initials: "EV",
      name: "Eric Verdier",
      role: "Group CFO — MORA International Group, Franța",
      quote:
        "Mr. Bogdan ANGHEL took charge of all the accounting production and tax declarations of our Romanian subsidiary.",
      pdfUrl: "/documents/REC_LETTER_ERIC_V.pdf",
    },
    {
      initials: "ADK",
      name: "Andre De Kinder",
      role: "Retired CFO — Mora Group, Franța",
      quote:
        "I would highly recommend AlphaCont as an external consultant in accounting and tax matters.",
      pdfUrl: "/documents/REC_LETTER_DE_KINDER.pdf",
    },
  ];

  return (
    <main className="site-shell">
      <section className="legal-page document-page">
        <p className="section-kicker">Recomandări</p>
        <h1>Scrisori de recomandare</h1>
        <p className="legal-intro">
          Fiecare recomandare poate fi deschisă direct într-un tab nou, împreună
          cu scrisoarea aferentă.
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
                  Vizualizează scrisoarea
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter locale="ro" />
    </main>
  );
}
