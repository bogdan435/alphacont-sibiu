import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import { getHomeContent } from "@/lib/home";
import { getBaseUrl } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();

  return {
    title: "Internship contabilitate Sibiu | ALPHACONT",
    description:
      "Internship / stagiu de practică la ALPHACONT în Sibiu pentru studenți, absolvenți și tineri interesați de contabilitate, organizare și experiență practică.",
    alternates: {
      canonical: `${baseUrl}/ro/stagiu-practica`,
      languages: {
        ro: `${baseUrl}/ro/stagiu-practica`,
      },
    },
  };
}

export default function RomanianInternshipPage() {
  const homeContent = getHomeContent("ro");

  return (
    <main className="site-shell">
      <section className="content-section internship-section">
        <p className="section-kicker">Oportunități</p>
        <h1>{homeContent.internshipTitle}</h1>

        <div className="internship-block">
          <p className="internship-copy">{homeContent.internshipIntro}</p>

          <div className="internship-highlights">
            {homeContent.internshipHighlights.map((item) => (
              <article key={item} className="internship-highlight-card">
                <p>{item}</p>
              </article>
            ))}
          </div>

          <a
            href={`mailto:${homeContent.contactEmail}?subject=${encodeURIComponent(
              "CV stagiu de practică",
            )}`}
            className="button"
          >
            {homeContent.internshipButton}
          </a>
        </div>
      </section>

      <SiteFooter locale="ro" />
    </main>
  );
}
