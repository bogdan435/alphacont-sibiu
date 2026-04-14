import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { getHomeContent } from "@/lib/home";
import { getBaseUrl, getLocaleMetadata } from "@/lib/seo";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const metadata = getLocaleMetadata(safeLocale);
  const baseUrl = getBaseUrl();

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `${baseUrl}/${safeLocale}`,
      languages: {
        ro: `${baseUrl}/ro`,
        en: `${baseUrl}/en`,
      },
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const homeContent = getHomeContent(safeLocale);

  return (
    <main>
      <nav className="topbar">
        <div className="logo">
          <Image
            src="/logo-blue.svg"
            alt="ALPHACONT GROUP logo"
            className="logo-image"
            width={190}
            height={52}
          />
          <div className="logo-text">
            <strong>ALPHACONT GROUP</strong>
            <span>Accounting & Tax</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#services">{safeLocale === "ro" ? "Servicii" : "Services"}</a>
          <a href="#why">{safeLocale === "ro" ? "Avantaje" : "Benefits"}</a>
          <Link href={`/${safeLocale}/blog`}>Blog</Link>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="locale-label">{safeLocale === "ro" ? "Romana" : "English"}</p>
        <h1>{homeContent.heroTitle}</h1>
        <p>{homeContent.heroText}</p>
        <p>{homeContent.heroSubtext}</p>
        <a href="#contact" className="button">
          {homeContent.heroButton}
        </a>
      </section>

      <section id="services">
        <SectionTitle title={homeContent.servicesTitle} />
        <div className="services-grid">
          {homeContent.services.map((service) => (
            <div key={service} className="service-card">
              <p>{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why">
        <SectionTitle title={homeContent.whyTitle} />
        <ul>
          {homeContent.whyItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="contact-section">
        <SectionTitle title={homeContent.contactTitle} />
        <p>Email: {homeContent.contactEmail}</p>
        <p>Telefon: {homeContent.contactPhone}</p>
        <p>{homeContent.contactCity}</p>
        <a href={`mailto:${homeContent.contactEmail}`} className="contact-link">
          {safeLocale === "ro" ? "Trimite email" : "Send email"}
        </a>
      </section>
    </main>
  );
}
