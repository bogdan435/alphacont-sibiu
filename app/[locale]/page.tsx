import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { getHomeContent } from "@/lib/home";
import { getBaseUrl, getLocaleMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";
import { getFaqSchema, getLocalBusinessSchema } from "@/lib/schema";

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
  const latestPosts = (await getBlogPosts(safeLocale)).slice(0, 3);
  const localBusinessSchema = getLocalBusinessSchema(safeLocale);
  const faqSchema = getFaqSchema(homeContent.faqs);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

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
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="locale-label">{safeLocale === "ro" ? "Romana" : "English"}</p>
            <h1>{homeContent.heroTitle}</h1>
            <p className="hero-lead">{homeContent.heroText}</p>
            <p>{homeContent.heroSubtext}</p>
            <div className="hero-actions">
              <a href="#contact" className="button">
                {homeContent.heroButton}
              </a>
              <Link href={`/${safeLocale}/blog`} className="button button-secondary">
                {safeLocale === "ro" ? "Citeste articole" : "Read articles"}
              </Link>
            </div>
          </div>

          <div className="hero-sidecard">
            <p className="sidecard-label">
              {safeLocale === "ro" ? "Pentru companii din Sibiu" : "For businesses in Sibiu"}
            </p>
            <h2>
              {safeLocale === "ro"
                ? "Ordine in acte, claritate in cifre, mai putin stres administrativ."
                : "Order in documents, clarity in numbers, less administrative stress."}
            </h2>
            <ul className="hero-points">
              <li>
                {safeLocale === "ro"
                  ? "Contabilitate, salarizare si fiscalitate intr-un singur loc"
                  : "Accounting, payroll, and tax support in one place"}
              </li>
              <li>
                {safeLocale === "ro"
                  ? "Comunicare clara pentru antreprenori si firme locale"
                  : "Clear communication for entrepreneurs and local companies"}
              </li>
              <li>
                {safeLocale === "ro"
                  ? "Sprijin practic pentru firme noi si afaceri in crestere"
                  : "Practical support for new and growing businesses"}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-header">
          <p className="section-kicker">
            {safeLocale === "ro" ? "Servicii" : "Services"}
          </p>
          <SectionTitle title={homeContent.servicesTitle} />
        </div>
        <div className="services-grid">
          {homeContent.services.map((service) => (
            <div key={service} className="service-card">
              <p>{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why">
        <div className="section-header">
          <p className="section-kicker">
            {safeLocale === "ro" ? "De ce ALPHACONT GROUP" : "Why ALPHACONT GROUP"}
          </p>
          <SectionTitle title={homeContent.whyTitle} />
        </div>
        <div className="benefit-grid">
          {homeContent.whyItems.map((item) => (
            <div key={item} className="benefit-card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <p className="section-kicker">Blog</p>
          <SectionTitle
            title={safeLocale === "ro" ? "Articole recente" : "Latest articles"}
          />
        </div>
        <ul className="blog-list">
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/${safeLocale}/blog/${post.slug}`}
                className="blog-card-link"
              >
                {post.title}
              </Link>
              <p className="blog-description">{post.description}</p>
              <small className="blog-date">{post.date}</small>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="section-header">
          <p className="section-kicker">FAQ</p>
          <SectionTitle title={homeContent.faqTitle} />
        </div>
        <div className="faq-list">
          {homeContent.faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="section-kicker">Contact</p>
            <SectionTitle title={homeContent.contactTitle} />
            <p>
              {safeLocale === "ro"
                ? "Daca vrei sa discutam despre contabilitate, salarizare sau organizarea financiara a firmei, ne poti contacta direct."
                : "If you want to discuss accounting, payroll, or the financial organization of your business, contact us directly."}
            </p>
          </div>

          <div className="contact-card">
            <p>Email: {homeContent.contactEmail}</p>
            <p>Telefon 1: {homeContent.contactPhone}</p>
            <p>Telefon 2: {homeContent.contactPhoneSecondary}</p>
            <p>{homeContent.contactCity}</p>
            <a href={`mailto:${homeContent.contactEmail}`} className="contact-link">
              {safeLocale === "ro" ? "Trimite email" : "Send email"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
