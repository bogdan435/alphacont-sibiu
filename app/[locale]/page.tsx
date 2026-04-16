import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import SiteFooter from "@/components/SiteFooter";
import { getHomeContent } from "@/lib/home";
import { getBaseUrl, getLocaleMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";
import { getFaqSchema, getLocalBusinessSchema } from "@/lib/schema";
import { getServicePageLinks } from "@/lib/service-pages";

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
    keywords: metadata.keywords,
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
  const baseUrl = getBaseUrl();
  const homeContent = getHomeContent(safeLocale);
  const serviceLinks = getServicePageLinks(safeLocale);
  const latestPosts = (await getBlogPosts(safeLocale)).slice(0, 3);
  const [featuredPost, ...secondaryPosts] = latestPosts;
  const localBusinessSchema = getLocalBusinessSchema(safeLocale);
  const faqSchema = getFaqSchema(homeContent.faqs);

  const primaryPhoneDisplay = "+40 721 644 296";
  const secondaryPhoneDisplay = "+39 334 741 2487";

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
            width={240}
            height={66}
          />
          <div className="logo-support">
            <span>
              {safeLocale === "ro" ? "Contabilitate & Fiscalitate" : "Accounting & Tax"}
            </span>
          </div>
        </div>
        <div className="topbar-right">
          <div className="nav-links">
            <a href="#services">{safeLocale === "ro" ? "Servicii" : "Services"}</a>
            <a href="#why">{safeLocale === "ro" ? "Avantaje" : "Benefits"}</a>
            <Link href={`/${safeLocale}/blog`}>
              {safeLocale === "ro" ? "ANAF ne informează" : "ANAF updates"}
            </Link>
            <a href="#contact">Contact</a>
          </div>
          <div className="language-switch" aria-label="Language switch">
            <Link
              href="/ro"
              className={safeLocale === "ro" ? "language-link is-active" : "language-link"}
            >
              RO
            </Link>
            <Link
              href="/en"
              className={safeLocale === "en" ? "language-link is-active" : "language-link"}
            >
              EN
            </Link>
          </div>
        </div>
      </nav>

      <section className="hero hero-redesign">
        <div className="hero-copy">
          <h1>{homeContent.heroTitle}</h1>
          <p className="hero-lead">{homeContent.heroText}</p>
          <p className="hero-summary">{homeContent.heroSubtext}</p>
          <div className="hero-actions">
            <a href={`mailto:${homeContent.contactEmail}`} className="button">
              {homeContent.heroButton}
            </a>
            <a
              href={`https://wa.me/${homeContent.whatsappNumber}`}
              className="button button-secondary"
              target="_blank"
              rel="noreferrer"
            >
              {homeContent.heroSecondaryButton}
            </a>
          </div>
          <p className="hero-response-line">{homeContent.heroResponseLine}</p>
        </div>
      </section>

      <section className="trust-strip">
        <ul className="trust-strip-list">
          {safeLocale === "ro" ? (
            <>
              <li>20+ ani de experiență în servicii financiar-contabile</li>
              <li>4,9/5 din recenzii publice</li>
              <li>SRL-uri, PFA-uri, ONG-uri și profesii liberale</li>
              <li>SAF-T, RO e-Factura și sprijin în controale ANAF</li>
            </>
          ) : (
            <>
              <li>20+ years of accounting and tax experience</li>
              <li>4.9/5 from public reviews</li>
              <li>LLCs, sole traders, NGOs, and liberal professions</li>
              <li>SAF-T, RO e-Factura, and ANAF inspection support</li>
            </>
          )}
        </ul>
      </section>

      <section id="services" className="content-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Servicii" : "Services"}
            </p>
            <SectionTitle title={homeContent.servicesTitle} />
          </div>
        </div>
        <div className="services-segments">
          {homeContent.services.map((service) => (
            <article key={service} className="service-segment">
              <h3>{service}</h3>
            </article>
          ))}
        </div>
        <div className="seo-service-links">
          <p className="seo-service-links-title">{homeContent.seoServiceLinksTitle}</p>
          <div className="seo-service-links-list">
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="seo-service-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="content-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "De ce ALPHACONT GROUP" : "Why ALPHACONT GROUP"}
            </p>
            <SectionTitle title={homeContent.whyTitle} />
          </div>
        </div>
        <div className="benefit-grid">
          {homeContent.whyItems.map((item) => (
            <article
              key={item}
              className={
                item.toLowerCase().includes("digital")
                  ? "benefit-card benefit-card-digital"
                  : "benefit-card"
              }
            >
              {item.toLowerCase().includes("digital") ? (
                <span className="benefit-chip">
                  {safeLocale === "ro" ? "Flux digital" : "Digital workflow"}
                </span>
              ) : null}
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section complexity-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Control financiar" : "Financial control"}
            </p>
            <SectionTitle title={homeContent.complexityTitle} />
          </div>
        </div>
        <ul className="complexity-list">
          {homeContent.complexityItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="content-section process-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Proces" : "Process"}
            </p>
            <SectionTitle title={homeContent.processTitle} />
          </div>
          <p className="split-copy">
            {safeLocale === "ro"
              ? "Colaborarea trebuie să fie simplă de înțeles de la primul contact. De aceea, explicăm clar ce urmează și cum lucrăm, pas cu pas."
              : "The collaboration should be easy to understand from the first contact. That is why we explain clearly what happens next and how we work, step by step."}
          </p>
        </div>
        <ol className="process-list">
          {homeContent.processItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="content-section social-proof-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Recenzii" : "Reviews"}
            </p>
            <SectionTitle title={homeContent.socialProofTitle} />
          </div>
          <div className="social-proof-summary">
            <p className="social-proof-rating">{homeContent.socialProofRating}</p>
            <p className="split-copy">{homeContent.socialProofNote}</p>
          </div>
        </div>
        <div className="social-proof-grid">
          {homeContent.socialProofItems.map((item) => (
            <article key={item} className="social-proof-card">
              <p>{item}</p>
            </article>
          ))}
        </div>
        <a
          href={homeContent.socialProofSourceUrl}
          className="social-proof-link"
          target="_blank"
          rel="noreferrer"
        >
          {homeContent.socialProofSourceLabel}
        </a>
      </section>

      <section className="content-section about-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Despre noi" : "About us"}
            </p>
            <SectionTitle title={homeContent.aboutTitle} />
          </div>
        </div>
        <div className="about-layout">
          <p className="about-copy">{homeContent.aboutText}</p>
          <div className="about-card">
            <p>{safeLocale === "ro" ? "Birou local în Sibiu" : "Local office in Sibiu"}</p>
            <p>
              {safeLocale === "ro"
                ? "Comunicare directă prin email, telefon și WhatsApp"
                : "Direct communication by email, phone, and WhatsApp"}
            </p>
            <p>
              {safeLocale === "ro"
                ? "Lucrăm cu SRL-uri, PFA-uri și firme nou înființate"
                : "We work with LLCs, sole traders, and newly established businesses"}
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "ANAF ne informează" : "ANAF updates"}
            </p>
            <SectionTitle title={homeContent.latestArticlesTitle} />
          </div>
          <div className="blog-section-copy">
            <Link href={`/${safeLocale}/blog`} className="blog-section-link">
              {safeLocale === "ro" ? "Vezi toate informările" : "See all updates"}
            </Link>
            <a
              href={homeContent.anafLinkUrl}
              className="blog-section-link"
              target="_blank"
              rel="noreferrer"
            >
              {homeContent.anafLinkLabel}
            </a>
            <a
              href={homeContent.anafLinkSecondaryUrl}
              className="blog-section-link"
              target="_blank"
              rel="noreferrer"
            >
              {homeContent.anafLinkSecondaryLabel}
            </a>
            <a
              href={homeContent.anafLinkThirdUrl}
              className="blog-section-link"
              target="_blank"
              rel="noreferrer"
            >
              {homeContent.anafLinkThirdLabel}
            </a>
            <a
              href={homeContent.anafLinkFourthUrl}
              className="blog-section-link"
              target="_blank"
              rel="noreferrer"
            >
              {homeContent.anafLinkFourthLabel}
            </a>
          </div>
        </div>

        {featuredPost ? (
          <div className="blog-preview-layout">
            <article className="featured-article">
              <small className="blog-date">{featuredPost.formattedDate}</small>
              <Link
                href={`/${safeLocale}/blog/${featuredPost.slug}`}
                className="featured-article-link"
              >
                {featuredPost.title}
              </Link>
              <p className="featured-article-copy">{featuredPost.description}</p>
            </article>

            <div className="secondary-articles">
              {secondaryPosts.map((post) => (
                <article key={post.slug} className="secondary-article">
                  <small className="blog-date">{post.formattedDate}</small>
                  <Link
                    href={`/${safeLocale}/blog/${post.slug}`}
                    className="secondary-article-link"
                  >
                    {post.title}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="content-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">FAQ</p>
            <SectionTitle title={homeContent.faqTitle} />
          </div>
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

      <section id="contact" className="contact-section contact-redesign">
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="section-kicker">Contact</p>
            <p className="contact-urgency">
              {safeLocale === "ro" ? "Răspuns rapid" : "Fast response"}
            </p>
            <SectionTitle
              title={
                safeLocale === "ro"
                  ? "Hai să discutăm despre firma ta"
                  : "Let’s talk about your business"
              }
            />
            <p className="contact-lead">
              {safeLocale === "ro"
                ? "Completezi formularul de mai jos cu câteva detalii despre firmă, iar noi revenim rapid cu pașii următori."
                : "Complete the form below with a few details about your business and we will get back to you quickly with the next steps."}
            </p>
            <p className="contact-promise">{homeContent.contactPromise}</p>
            <p className="pricing-note">{homeContent.pricingNote}</p>
            <form
              action={`https://formsubmit.co/${homeContent.contactEmail}`}
              method="POST"
              className="lead-form"
            >
              <input
                type="hidden"
                name="_subject"
                value={
                  safeLocale === "ro"
                    ? "Cerere ofertă nouă - website ALPHACONT GROUP"
                    : "New quote request - ALPHACONT GROUP website"
                }
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value={`${baseUrl}/${safeLocale}?sent=1#contact`}
              />

              <div className="form-grid">
                <label className="form-field">
                  <span>{safeLocale === "ro" ? "Nume" : "Name"}</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={safeLocale === "ro" ? "Numele tău" : "Your name"}
                  />
                </label>

                <label className="form-field">
                  <span>{safeLocale === "ro" ? "Firmă" : "Company"}</span>
                  <input
                    type="text"
                    name="company"
                    placeholder={safeLocale === "ro" ? "Numele firmei" : "Company name"}
                  />
                </label>

                <label className="form-field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={safeLocale === "ro" ? "adresa@firma.ro" : "name@company.com"}
                  />
                </label>

                <label className="form-field">
                  <span>{safeLocale === "ro" ? "Telefon" : "Phone"}</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={safeLocale === "ro" ? "+40..." : "+40..."}
                  />
                </label>

                <label className="form-field">
                  <span>{safeLocale === "ro" ? "Tip firmă" : "Business type"}</span>
                  <select name="business_type" defaultValue="">
                    <option value="" disabled>
                      {safeLocale === "ro" ? "Selectează" : "Select"}
                    </option>
                    <option value="SRL">SRL / LLC</option>
                    <option value="PFA">PFA / Sole trader</option>
                    <option value={safeLocale === "ro" ? "Firmă nouă" : "New business"}>
                      {safeLocale === "ro" ? "Firmă nouă" : "New business"}
                    </option>
                  </select>
                </label>

                <label className="form-field form-field-full">
                  <span>{safeLocale === "ro" ? "Mesaj" : "Message"}</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder={
                      safeLocale === "ro"
                        ? "Spune-ne pe scurt cu ce ai nevoie de ajutor."
                        : "Tell us briefly what you need help with."
                    }
                  />
                </label>
              </div>

              <button type="submit" className="button contact-button-primary form-submit">
                {homeContent.contactFormButton}
              </button>
            </form>
            <div className="contact-secondary-actions">
              <a
                href={`https://wa.me/${homeContent.whatsappNumber}`}
                className="contact-secondary-link whatsapp-link"
                target="_blank"
                rel="noreferrer"
              >
                {safeLocale === "ro" ? "Scrie pe WhatsApp" : "Message us on WhatsApp"}
              </a>
              <a
                href={homeContent.mapsUrl}
                className="contact-secondary-link"
                target="_blank"
                rel="noreferrer"
              >
                Google Maps
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-row">
              <p className="contact-label">Email</p>
              <a href={`mailto:${homeContent.contactEmail}`} className="contact-value">
                {homeContent.contactEmail}
              </a>
            </div>

            <div className="contact-row">
              <p className="contact-label">
                {safeLocale === "ro" ? "Telefon România" : "Romania phone"}
              </p>
              <a href={`tel:${homeContent.contactPhone}`} className="contact-value">
                {primaryPhoneDisplay}
              </a>
            </div>

            <div className="contact-row">
              <p className="contact-label">
                {safeLocale === "ro" ? "Telefon Italia" : "Italy phone"}
              </p>
              <a href={`tel:${homeContent.contactPhoneSecondary}`} className="contact-value">
                {secondaryPhoneDisplay}
              </a>
            </div>

            <div className="contact-row">
              <p className="contact-label">{safeLocale === "ro" ? "Adresa" : "Address"}</p>
              <p className="contact-value">{homeContent.contactCity}</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter locale={safeLocale} />
    </main>
  );
}
