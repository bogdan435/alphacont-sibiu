import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";
import { getAlternateServicePageSlug } from "@/lib/service-pages";

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

const primaryServices = [
  {
    slug: "contabil-srl-sibiu",
    roTitle: "Contabilitate SRL Sibiu",
    enTitle: "LLC Accounting in Sibiu",
    roDescription:
      "Evidență contabilă completă, declarații fiscale și salarizare pentru societăți cu răspundere limitată din Sibiu. De la 300 lei/lună.",
    enDescription:
      "Complete accounting records, tax filings, and payroll support for limited liability companies in Sibiu. Starting from RON 300 per month.",
  },
  {
    slug: "contabil-pfa-sibiu",
    roTitle: "Contabilitate PFA Sibiu",
    enTitle: "Sole Trader Accounting in Sibiu",
    roDescription:
      "Gestionăm obligațiile fiscale și contabile ale PFA-urilor și profesiilor independente din Sibiu.",
    enDescription:
      "We manage the tax and accounting obligations of sole traders and independent professionals in Sibiu.",
  },
  {
    slug: "consultanta-fiscala-sibiu",
    roTitle: "Consultanță fiscală Sibiu",
    enTitle: "Tax Advisory in Sibiu",
    roDescription:
      "Analizăm situația fiscală a firmei tale și îți oferim soluții clare pentru optimizare legală și conformitate.",
    enDescription:
      "We analyse your company's tax position and provide clear solutions for legal optimization and compliance.",
  },
  {
    slug: "salarizare-sibiu",
    roTitle: "Salarizare Sibiu",
    enTitle: "Payroll Services in Sibiu",
    roDescription:
      "Întocmim state de plată, gestionăm REVISAL, ITM și toate obligațiile legate de angajați.",
    enDescription:
      "We prepare payroll statements, manage REVISAL, labour compliance, and the obligations related to your employees.",
  },
  {
    slug: "infiintare-firma-sibiu",
    roTitle: "Înființare firmă Sibiu",
    enTitle: "Company Formation in Sibiu",
    roDescription:
      "Te ghidăm pas cu pas în procesul de înființare SRL, PFA, ONG sau altă formă juridică în Sibiu.",
    enDescription:
      "We guide you step by step through the process of setting up an LLC, sole trader activity, NGO, or another legal form in Sibiu.",
  },
] as const;

const specializedServices = [
  {
    roTitle: "Refacere și reorganizare contabilitate",
    enTitle: "Accounting reconstruction and reorganization",
    roDescription:
      "Preluăm firme cu evidență contabilă incompletă sau greșit întocmită și reorganizăm documentele și fluxul contabil.",
    enDescription:
      "We take over companies with incomplete or incorrectly prepared accounting records and reorganize the documents and accounting flow.",
  },
  {
    roTitle: "Preluare firme cu evidență incompletă",
    enTitle: "Takeover of companies with incomplete records",
    roDescription:
      "Analizăm situația existentă și stabilim pașii necesari pentru a readuce contabilitatea într-o formă corectă și predictibilă.",
    enDescription:
      "We analyse the current situation and establish the steps needed to bring the accounting back into a correct and predictable form.",
  },
  {
    roTitle: "Stabilire activ, pasiv și obligații fiscale",
    enTitle: "Review of assets, liabilities, and tax obligations",
    roDescription:
      "Clarificăm activul, pasivul și obligațiile fiscale ale societății pentru decizii mai sigure și o imagine financiară mai clară.",
    enDescription:
      "We clarify the company's assets, liabilities, and tax obligations so you can make safer decisions with a clearer financial picture.",
  },
  {
    roTitle: "Suport e-Factura, e-Transport, ITM și REVISAL",
    enTitle: "Support for e-Invoice, e-Transport, labour files, and REVISAL",
    roDescription:
      "Te ajutăm să gestionezi obligațiile administrative și fiscale curente, cu organizare clară și pași ușor de urmărit.",
    enDescription:
      "We help you manage ongoing administrative and tax obligations through a clear structure and easy-to-follow next steps.",
  },
  {
    roTitle: "Soluții personalizate în funcție de activitate",
    enTitle: "Tailored solutions based on your activity",
    roDescription:
      "Adaptăm serviciile în funcție de specificul firmei tale, de etapa în care se află și de nivelul de complexitate al situației.",
    enDescription:
      "We adapt our services to the specifics of your company, the stage it is in, and the complexity of the situation.",
  },
] as const;

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  const baseUrl = getBaseUrl();

  return {
    title: "Accounting Services in Sibiu | ALPHACONT",
    description:
      "Complete accounting, tax, and payroll services for businesses in Sibiu. LLCs, sole traders, NGOs, company formation, and ANAF assistance.",
    alternates: {
      canonical: `${baseUrl}/en/services`,
      languages: {
        ro: `${baseUrl}/ro/servicii`,
        en: `${baseUrl}/en/services`,
      },
    },
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  const safeLocale = "en";
  const content = {
    kicker: "Services",
    title: "Accounting services in Sibiu",
    intro:
      "We provide a complete range of accounting and tax services for businesses in Sibiu, from monthly bookkeeping to ANAF inspection assistance and accounting reorganization. We work with LLCs, sole traders, NGOs, and newly formed companies, with communication in Romanian, English, French, and Italian.",
    primaryTitle: "Core services",
    primaryKicker: "Dedicated services",
    specializedTitle: "Specialized services",
    specializedKicker: "Complex situations",
    ctaTitle: "Not sure which service fits your company?",
    ctaText:
      "Contact us and we will explain your options with no obligation.",
    ctaLabel: "Contact us",
    viewDetailsLabel: "View details",
  };

  const linkedPrimaryServices = primaryServices.map((service) => ({
    href: `/${safeLocale}/${getAlternateServicePageSlug("ro", service.slug, safeLocale)}`,
    title: service.enTitle,
    description: service.enDescription,
  }));

  return (
    <main className="site-shell">
      <section className="content-section service-content-section">
        <p className="section-kicker">{content.kicker}</p>
        <h1>{content.title}</h1>
        <p className="legal-intro">{content.intro}</p>
      </section>

      <section className="content-section service-content-section">
        <div className="section-header">
          <p className="section-kicker">{content.primaryKicker}</p>
          <h2>{content.primaryTitle}</h2>
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
              <span className="service-segment-cta">
                {content.viewDetailsLabel}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section service-content-section">
        <div className="section-header">
          <p className="section-kicker">{content.specializedKicker}</p>
          <h2>{content.specializedTitle}</h2>
        </div>

        <div className="special-services-grid">
          {specializedServices.map((service) => (
            <article key={service.roTitle} className="special-service-card">
              <h3 className="special-service-title">{service.enTitle}</h3>
              <p className="special-service-description">{service.enDescription}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section service-cta-section">
        <div className="service-cta-layout">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>{content.ctaTitle}</h2>
            <p className="service-cta-copy">{content.ctaText}</p>
          </div>
          <div className="service-cta-actions">
            <Link
              href={`/${safeLocale}#contact`}
              className="button contact-button-primary"
            >
              {content.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter locale={safeLocale} />
    </main>
  );
}
