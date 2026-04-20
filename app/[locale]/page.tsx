import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import LeadTracking from "@/components/LeadTracking";
import SectionTitle from "@/components/SectionTitle";
import TrackedMapsLink from "@/components/TrackedMapsLink";
import SiteFooter from "@/components/SiteFooter";
import TrackedPhoneLink from "@/components/TrackedPhoneLink";
import TrackedWhatsAppButton from "@/components/TrackedWhatsAppButton";
import { getHomeContent } from "@/lib/home";
import { getBaseUrl } from "@/lib/seo";
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
  const baseUrl = getBaseUrl();

  return {
    metadataBase: new URL(baseUrl),
    title:
      safeLocale === "ro"
        ? "Contabilitate Sibiu | Contabil în Sibiu | ALPHACONT GROUP"
        : "Accounting Sibiu | Accountant in Sibiu | ALPHACONT GROUP",
    description:
      safeLocale === "ro"
        ? "Servicii de contabilitate în Sibiu pentru SRL și PFA. Contabil în Sibiu cu experiență, fiscalitate, salarizare și suport complet pentru firme."
        : "Accounting services in Sibiu for LLCs and sole traders. Experienced accountant, tax, payroll, and full business support.",
    keywords:
      safeLocale === "ro"
        ? [
            "contabilitate sibiu",
            "contabil în sibiu",
            "servicii contabilitate sibiu",
            "fiscalitate sibiu",
            "salarizare sibiu",
            "contabil srl sibiu",
            "contabil pfa sibiu",
          ]
        : [
            "accounting sibiu",
            "accountant in sibiu",
            "tax services sibiu",
            "payroll sibiu",
            "accounting services sibiu",
          ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${safeLocale}`,
      languages: {
        ro: `${baseUrl}/ro`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title:
        safeLocale === "ro"
          ? "Contabilitate Sibiu | ALPHACONT GROUP"
          : "Accounting Sibiu | ALPHACONT GROUP",
      description:
        safeLocale === "ro"
          ? "Servicii de contabilitate și fiscalitate pentru firme din Sibiu."
          : "Accounting and tax services for businesses in Sibiu.",
      url: `${baseUrl}/${safeLocale}`,
      siteName: "ALPHACONT GROUP",
      locale: safeLocale === "ro" ? "ro_RO" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/hero-office.jpg",
          width: 1200,
          height: 630,
          alt: "ALPHACONT GROUP - Contabilitate Sibiu",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        safeLocale === "ro"
          ? "Contabilitate Sibiu | ALPHACONT GROUP"
          : "Accounting Sibiu | ALPHACONT GROUP",
      description:
        safeLocale === "ro"
          ? "Servicii de contabilitate și fiscalitate pentru firme din Sibiu."
          : "Accounting and tax services for businesses in Sibiu.",
      images: ["/images/hero-office.jpg"],
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const baseUrl = getBaseUrl();
  const homeContent = getHomeContent(safeLocale);
  const serviceLinks = getServicePageLinks(safeLocale);
  const allPosts = await getBlogPosts(safeLocale);

  const resourcePosts = allPosts
    .filter((post) => {
      const title = post.title?.toLowerCase?.() ?? "";
      const description = post.description?.toLowerCase?.() ?? "";
      const category = post.category?.toLowerCase?.() ?? "";
      const tags = (post.tags ?? []).map((tag) => tag.toLowerCase());

      const isAnafOnly =
        title.includes("anaf") ||
        description.includes("anaf") ||
        category.includes("anaf") ||
        tags.some((tag) => tag.includes("anaf"));

      const isMonografie = category === "monografii contabile";

      const isFiscalAccountingResource = [
        "contabilitate",
        "fiscalitate",
        "taxe",
        "srl",
        "pfa",
        "documente",
        "salarizare",
        "declara",
        "impozit",
        "tva",
      ].some(
        (term) =>
          title.includes(term) ||
          description.includes(term) ||
          category.includes(term) ||
          tags.some((tag) => tag.includes(term)),
      );

      return isFiscalAccountingResource && !isAnafOnly && !isMonografie;
    })
    .slice(0, 3);

  const monografiiPosts = allPosts
    .filter((post) => {
      const category = post.category?.toLowerCase?.() ?? "";
      return category === "monografii contabile";
    })
    .slice(0, 3);

  const [featuredPost, ...secondaryPosts] = resourcePosts;
  const localBusinessSchema = getLocalBusinessSchema(safeLocale);
  const faqSchema = getFaqSchema(homeContent.faqs);

  const primaryPhoneDisplay = "+40 721 644 296";
  const secondaryPhoneDisplay = "+39 334 741 2487";

  return (
    <main className="site-shell">
      <Suspense fallback={null}>
        <LeadTracking locale={safeLocale} />
      </Suspense>

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
            priority
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
              {safeLocale === "ro"
                ? "Resurse fiscal-contabile"
                : "Accounting & tax resources"}
            </Link>
            <a href="#anaf">{safeLocale === "ro" ? "ANAF" : "ANAF"}</a>
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

      <section className="hero hero-redesign hero-photo">
        <div className="hero-copy">
          <p className="hero-badge">{homeContent.heroBadge}</p>
          <h1>{homeContent.heroTitle}</h1>
          <p className="hero-lead">{homeContent.heroText}</p>
          <p className="hero-subtext">{homeContent.heroSubtext}</p>
          <div className="hero-actions">
            <TrackedWhatsAppButton
              className="button button-whatsapp"
              locale={safeLocale}
              location="hero"
              phoneNumber={homeContent.whatsappNumber}
              label={safeLocale === "ro" ? "Scrie-ne pe WhatsApp" : "Message us on WhatsApp"}
            />
            <a href={`mailto:${homeContent.contactEmail}`} className="button button-secondary">
              {homeContent.heroButton}
            </a>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <ul className="trust-strip-list">
          {homeContent.trustItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="office-section">
        <div className="office-card">
          <div className="office-copy">
            <div className="office-eyebrow">
              {safeLocale === "ro" ? "BIROUL NOSTRU" : "OUR OFFICE"}
            </div>

            <h2 className="office-title">{homeContent.officeShowcaseTitle}</h2>

            <p className="office-lead">{homeContent.officeShowcaseText}</p>

            <p className="office-text">{homeContent.officeShowcaseSubtext}</p>

            <div className="office-meta">{homeContent.officeShowcaseMeta}</div>
          </div>

          <div className="office-media">
            <Image
              src="/images/sibiu_desk_web.jpg"
              alt={
                safeLocale === "ro"
                  ? "Biroul AlphaCont Group din Sibiu"
                  : "AlphaCont Group office in Sibiu"
              }
              width={1600}
              height={1275}
              sizes="(max-width: 780px) 100vw, 46vw"
            />
          </div>
        </div>
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
              <p className="service-subtext">
                {safeLocale === "ro"
                  ? "Servicii adaptate nevoilor specifice"
                  : "Services adapted to specific needs"}
              </p>
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

      <section className="content-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Servicii speciale" : "Specialized services"}
            </p>
            <SectionTitle title={homeContent.specialServicesTitle} />
          </div>
        </div>
        <div className="special-services-grid">
          {homeContent.specialServices.map((service) => (
            <article key={service.title} className="special-service-card">
              <h3 className="special-service-title">{service.title}</h3>
              <p className="special-service-description">{service.description}</p>
            </article>
          ))}
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
            <article key={item} className="benefit-card">
              <span className="benefit-accent-line" />
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

        <div className="complexity-grid">
          {homeContent.complexityItems.map((item) => (
            <article key={item.title} className="complexity-card">
              <h3 className="complexity-card-title">{item.title}</h3>
              <p className="complexity-card-description">{item.description}</p>
            </article>
          ))}
        </div>
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
        <div className="process-grid">
          {homeContent.processItems.map((item) => (
            <article key={item.step} className="process-card">
              <div className="process-step">{item.step}</div>
              <h3 className="process-card-title">{item.title}</h3>
              <p className="process-card-description">{item.description}</p>
            </article>
          ))}
        </div>
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
        <div className="social-proof-actions">
          <a
            href={homeContent.socialProofGoogleUrl}
            className="social-proof-link social-proof-link-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {homeContent.socialProofGoogleLabel}
          </a>
        </div>
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
          <div className="about-copy">
            {homeContent.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-card">
            {homeContent.aboutHighlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section security-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Siguranța datelor" : "Data security"}
            </p>
            <SectionTitle title={homeContent.securityTitle} />
          </div>
        </div>
        <p className="security-copy">{homeContent.securityText}</p>
        <ul className="security-list">
          {homeContent.securityItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="content-section">
        <div className="section-header">
          <p className="section-kicker">
            {safeLocale === "ro"
              ? "Resurse fiscal-contabile"
              : "Accounting & tax resources"}
          </p>
          <h2>
            {safeLocale === "ro"
              ? "Resurse fiscal-contabile"
              : "Accounting & tax resources"}
          </h2>
        </div>

        <h3 className="subsection-title">
          {safeLocale === "ro" ? "Articole disponibile" : "Available articles"}
        </h3>

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

        <h3 className="subsection-title">
          {safeLocale === "ro"
            ? "Monografii contabile"
            : "Accounting case studies"}
        </h3>

        <div className="blog-index-grid">
          {monografiiPosts.map((post) => (
            <article key={post.slug} className="blog-index-card">
              <small className="blog-date">{post.formattedDate}</small>
              <Link href={`/${safeLocale}/blog/${post.slug}`} className="blog-card-link">
                {post.title}
              </Link>
              <p className="blog-description">{post.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="anaf" className="content-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">ANAF</p>
            <SectionTitle
              title={safeLocale === "ro" ? "ANAF ne informează" : "ANAF updates"}
            />
          </div>
          <div className="blog-section-copy">
            <a
              href={homeContent.anafLinkUrl}
              className="blog-section-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {homeContent.anafLinkLabel}
            </a>
            <a
              href={homeContent.anafLinkSecondaryUrl}
              className="blog-section-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {homeContent.anafLinkSecondaryLabel}
            </a>
            <a
              href={homeContent.anafLinkThirdUrl}
              className="blog-section-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {homeContent.anafLinkThirdLabel}
            </a>
            <a
              href={homeContent.anafLinkFourthUrl}
              className="blog-section-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {homeContent.anafLinkFourthLabel}
            </a>
          </div>
        </div>
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

      <section className="content-section location-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Biroul nostru" : "Our office"}
            </p>
            <SectionTitle title={homeContent.locationTitle} />
          </div>
        </div>
        <div className="location-layout">
          <div className="location-copy">
            <p>{homeContent.locationText}</p>
            <div className="location-actions">
              <a
                href={homeContent.mapsUrl}
                className="button button-secondary location-map-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </div>
          </div>
          <div className="map-frame-wrap">
            <iframe
              src={homeContent.mapsEmbedUrl}
              title={homeContent.locationTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-frame"
            />
          </div>
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
            <p className="contact-extra">
              {safeLocale === "ro"
                ? "Ne poți contacta și dacă ai o situație contabilă neclară, un control în desfășurare sau o firmă preluată cu evidență incompletă."
                : "You can also contact us if you have an unclear accounting situation, an ongoing inspection, or a business taken over with incomplete records."}
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
                rel="noopener noreferrer"
              >
                {safeLocale === "ro" ? "Scrie pe WhatsApp" : "Message us on WhatsApp"}
              </a>
              <TrackedMapsLink
                href={homeContent.mapsUrl}
                className="contact-secondary-link"
                label="Google Maps"
                locale={safeLocale}
                location="contact_section"
              />
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
              <p className="contact-label">{safeLocale === "ro" ? "Telefon" : "Phone"}</p>

              <div className="contact-phone-buttons">
                <TrackedPhoneLink
                  className="contact-phone-button"
                  locale={safeLocale}
                  location="contact_card_ro"
                  phoneNumber={homeContent.contactPhone}
                  label={`🇷🇴 RO · ${primaryPhoneDisplay}`}
                >
                  <span className="contact-phone-flag" aria-hidden="true">
                    🇷🇴
                  </span>
                  <span className="contact-phone-text">RO · {primaryPhoneDisplay}</span>
                </TrackedPhoneLink>

                <TrackedPhoneLink
                  className="contact-phone-button"
                  locale={safeLocale}
                  location="contact_card_it"
                  phoneNumber={homeContent.contactPhoneSecondary}
                  label={`🇮🇹 IT · ${secondaryPhoneDisplay}`}
                >
                  <span className="contact-phone-flag" aria-hidden="true">
                    🇮🇹
                  </span>
                  <span className="contact-phone-text">IT · {secondaryPhoneDisplay}</span>
                </TrackedPhoneLink>
              </div>
            </div>

            <div className="contact-row">
              <p className="contact-label">{safeLocale === "ro" ? "Adresa" : "Address"}</p>
              <p className="contact-value">{homeContent.contactCity}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section internship-section">
        <div className="split-header">
          <div>
            <p className="section-kicker">
              {safeLocale === "ro" ? "Oportunități" : "Opportunities"}
            </p>
            <SectionTitle title={homeContent.internshipTitle} />
          </div>
        </div>
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
              safeLocale === "ro" ? "CV internship" : "Internship CV",
            )}`}
            className="button"
          >
            {homeContent.internshipButton}
          </a>
        </div>
      </section>

      <SiteFooter locale={safeLocale} />
    </main>
  );
}
