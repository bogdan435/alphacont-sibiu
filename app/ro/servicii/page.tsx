import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";
import { getAlternateServicePageSlug } from "@/lib/service-pages";

const primaryServices = [
  {
    slug: "contabil-srl-sibiu",
    title: "Contabilitate SRL Sibiu",
    description:
      "Evidență contabilă completă, declarații fiscale și salarizare pentru societăți cu răspundere limitată din Sibiu. De la 300 lei/lună.",
  },
  {
    slug: "contabil-pfa-sibiu",
    title: "Contabilitate PFA Sibiu",
    description:
      "Gestionăm obligațiile fiscale și contabile ale PFA-urilor și profesiilor independente din Sibiu.",
  },
  {
    slug: "consultanta-fiscala-sibiu",
    title: "Consultanță fiscală Sibiu",
    description:
      "Analizăm situația fiscală a firmei tale și îți oferim soluții clare pentru optimizare legală și conformitate.",
  },
  {
    slug: "salarizare-sibiu",
    title: "Salarizare Sibiu",
    description:
      "Întocmim state de plată, gestionăm REVISAL, ITM și toate obligațiile legate de angajați.",
  },
  {
    slug: "infiintare-firma-sibiu",
    title: "Înființare firmă Sibiu",
    description:
      "Te ghidăm pas cu pas în procesul de înființare SRL, PFA, ONG sau altă formă juridică în Sibiu.",
  },
] as const;

const specializedServices = [
  {
    title: "Refacere și reorganizare contabilitate",
    description:
      "Preluăm firme cu evidență contabilă incompletă sau greșit întocmită și reorganizăm documentele și fluxul contabil.",
  },
  {
    title: "Preluare firme cu evidență incompletă",
    description:
      "Analizăm situația existentă și stabilim pașii necesari pentru a readuce contabilitatea într-o formă corectă și predictibilă.",
  },
  {
    title: "Stabilire activ, pasiv și obligații fiscale",
    description:
      "Clarificăm activul, pasivul și obligațiile fiscale ale societății pentru decizii mai sigure și o imagine financiară mai clară.",
  },
  {
    title: "Suport e-Factura, e-Transport, ITM și REVISAL",
    description:
      "Te ajutăm să gestionezi obligațiile administrative și fiscale curente, cu organizare clară și pași ușor de urmărit.",
  },
  {
    title: "Soluții personalizate în funcție de activitate",
    description:
      "Adaptăm serviciile în funcție de specificul firmei tale, de etapa în care se află și de nivelul de complexitate al situației.",
  },
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrl();

  return {
    title: "Servicii contabilitate Sibiu | ALPHACONT",
    description:
      "Servicii complete de contabilitate, fiscalitate și salarizare pentru firme din Sibiu. SRL, PFA, ONG, înființare firmă și asistență ANAF.",
    alternates: {
      canonical: `${baseUrl}/ro/servicii`,
      languages: {
        ro: `${baseUrl}/ro/servicii`,
        en: `${baseUrl}/en/services`,
      },
    },
  };
}

export default function RomanianServicesPage() {
  const linkedPrimaryServices = primaryServices.map((service) => ({
    href: `/ro/${getAlternateServicePageSlug("ro", service.slug, "ro")}`,
    title: service.title,
    description: service.description,
  }));

  return (
    <main className="site-shell">
      <section className="content-section service-content-section">
        <p className="section-kicker">Servicii</p>
        <h1>Servicii contabile în Sibiu</h1>
        <p className="legal-intro">
          Oferim o gamă completă de servicii contabile și fiscale pentru firme din
          Sibiu — de la evidență contabilă lunară până la asistență în controale
          ANAF și reorganizare contabilă. Lucrăm cu SRL-uri, PFA-uri, ONG-uri și
          firme nou înființate, cu comunicare în română, engleză, franceză și
          italiană.
        </p>
      </section>

      <section className="content-section service-content-section">
        <div className="section-header">
          <p className="section-kicker">Servicii dedicate</p>
          <h2>Servicii principale</h2>
        </div>

        <div className="services-segments services-hub-grid">
          {linkedPrimaryServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="service-segment service-segment-link"
            >
              <h3>{service.title}</h3>
              <p className="services-hub-description">{service.description}</p>
              <span className="service-segment-cta">Vezi detalii</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section service-content-section">
        <div className="section-header">
          <p className="section-kicker">Situații complexe</p>
          <h2>Servicii specializate</h2>
        </div>

        <div className="special-services-grid">
          {specializedServices.map((service) => (
            <article key={service.title} className="special-service-card">
              <h3 className="special-service-title">{service.title}</h3>
              <p className="special-service-description">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section service-cta-section">
        <div className="service-cta-layout">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Nu știi ce serviciu ți se potrivește?</h2>
            <p className="service-cta-copy">
              Contactează-ne și îți explicăm opțiunile fără nicio obligație.
            </p>
          </div>
          <div className="service-cta-actions">
            <Link href="/ro#contact" className="button contact-button-primary">
              Contactează-ne
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter locale="ro" />
    </main>
  );
}
