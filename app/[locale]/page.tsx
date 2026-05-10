import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import LeadTracking from "@/components/LeadTracking";
import SectionTitle from "@/components/SectionTitle";
import SiteFooter from "@/components/SiteFooter";
import TrackedPhoneLink from "@/components/TrackedPhoneLink";
import TrackedWhatsAppButton from "@/components/TrackedWhatsAppButton";
import { getHomeContent } from "@/lib/home";
import { getBaseUrl } from "@/lib/seo";
import { getBlogPosts } from "@/lib/blog";
import { getFaqSchema, getLocalBusinessSchema } from "@/lib/schema";
import { getAlternateServicePageSlug } from "@/lib/service-pages";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const homepageServiceCards = [
  {
    slug: "contabil-srl-sibiu",
    roTitle: "Contabilitate SRL Sibiu",
    enTitle: "LLC Accounting Sibiu",
  },
  {
    slug: "contabil-pfa-sibiu",
    roTitle: "Contabilitate PFA Sibiu",
    enTitle: "Sole Trader Accounting Sibiu",
  },
  {
    slug: "consultanta-fiscala-sibiu",
    roTitle: "Consultanță fiscală Sibiu",
    enTitle: "Tax Advisory Sibiu",
  },
  {
    slug: "salarizare-sibiu",
    roTitle: "Salarizare Sibiu",
    enTitle: "Payroll Services Sibiu",
  },
  {
    slug: "infiintare-firma-sibiu",
    roTitle: "Înființare firmă Sibiu",
    enTitle: "Company Formation Sibiu",
  },
] as const;

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
        ? "Contabilitate Sibiu | Contabil în Sibiu | ALPHACONT"
        : "English-Speaking Accountant in Sibiu | Accounting Services Romania",
    description:
      safeLocale === "ro"
        ? "Servicii de contabilitate în Sibiu pentru SRL și PFA. Contabil în Sibiu cu experiență, fiscalitate, salarizare și suport complet pentru firme."
        : "English-speaking accountant in Sibiu for LLCs, freelancers, expats, and foreign-owned companies. Accounting, payroll, tax advisory, and company setup in Romania.",
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
            "English speaking accountant Sibiu",
            "accountant in Sibiu",
            "accounting services Sibiu",
            "accounting services Romania",
            "tax advisor Romania",
            "payroll services Romania",
            "company formation Romania",
            "accountant for expats Romania",
            "foreign owned company accounting Romania",
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
        "x-default": `${baseUrl}/ro`,
      },
    },
    openGraph: {
      title:
        safeLocale === "ro"
          ? "Contabilitate Sibiu | ALPHACONT"
          : "English-Speaking Accountant in Sibiu | ALPHACONT",
      description:
        safeLocale === "ro"
          ? "Servicii de contabilitate și fiscalitate pentru firme din Sibiu."
          : "Accounting, payroll, tax advisory, and company setup in Romania for expats, freelancers, and foreign-owned businesses.",
      url: `${baseUrl}/${safeLocale}`,
      siteName: "ALPHACONT",
      locale: safeLocale === "ro" ? "ro_RO" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/hero-office-optimized.webp",
          width: 1200,
          height: 630,
          alt: "ALPHACONT - Contabilitate Sibiu",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        safeLocale === "ro"
          ? "Contabilitate Sibiu | ALPHACONT"
          : "Accounting Sibiu | ALPHACONT",
      description:
        safeLocale === "ro"
          ? "Servicii de contabilitate și fiscalitate pentru firme din Sibiu."
          : "Accounting and tax services for businesses in Sibiu.",
      images: ["/images/hero-office-optimized.webp"],
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const homeContent = getHomeContent(safeLocale);
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
  const whySplitIndex = Math.ceil(homeContent.whyDetails.length / 2);
  const whyColumns = [
    homeContent.whyDetails.slice(0, whySplitIndex),
    homeContent.whyDetails.slice(whySplitIndex),
  ];
  const internationalRecommendation =
    safeLocale === "ro"
      ? {
          kicker: "RECOMANDARE INTERNAȚIONALĂ",
          title: "Ce spun partenerii noștri",
          author: "Eric Verdier, Group CFO — MORA International Group, Franța",
          linkLabel: "Vezi scrisoarea integrală →",
        }
      : {
          kicker: "INTERNATIONAL RECOMMENDATION",
          title: "What our partners say",
          author: "Eric Verdier, Group CFO — MORA International Group, France",
          linkLabel: "Read the full letter →",
        };
  const recommendationQuote =
    "Mr. Bogdan ANGHEL took charge of all the accounting production and tax declarations of our Romanian subsidiary. He has always been very involved in the local authorities, assumed his responsibilities, took up the challenges and carried out each mission entrusted with great importance to regulation compliance and customer satisfaction.";
  const homepageServices = homepageServiceCards.map((service) => ({
    href: `/${safeLocale}/${getAlternateServicePageSlug("ro", service.slug, safeLocale)}`,
    title: safeLocale === "ro" ? service.roTitle : service.enTitle,
  }));

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
            <Link href={safeLocale === "ro" ? "/ro/servicii" : "/en/services"}>
              {safeLocale === "ro" ? "Servicii" : "Services"}
            </Link>
            <a href="#why">{safeLocale === "ro" ? "Avantaje" : "Benefits"}</a>
            <Link href={`/${safeLocale}/blog`}>
              {safeLocale === "ro"
                ? "Resurse fiscal-contabile"
                : "Accounting & tax resources"}
            </Link>
            <Link href={`/${safeLocale}/anaf`}>ANAF</Link>
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
        <div className="hero-copy hero-copy-panel">
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
        <div className="hero-image-wrap">
          <Image
            src="/images/office-clean.webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            className="hero-image"
          />
        </div>
      </section>

      <section
        id={safeLocale === "ro" ? "servicii" : "services"}
        className="content-section"
      >
        <div className="section-header">
          <p className="section-kicker">
            {safeLocale === "ro" ? "Servicii" : "Services"}
          </p>
          <SectionTitle title={safeLocale === "ro" ? "Serviciile noastre" : "Our services"} />
        </div>
        <div className="services-segments homepage-services-grid">
          {homepageServices.map((service) => (
            <Link key={service.href} href={service.href} className="service-segment service-segment-link">
              <h3>{service.title}</h3>
              <p className="service-subtext">
                {safeLocale === "ro"
                  ? "Vezi pagina dedicată"
                  : "View the dedicated service page"}
              </p>
            </Link>
          ))}
        </div>
        <div className="services-section-actions">
          <Link
            href={safeLocale === "ro" ? "/ro/servicii" : "/en/services"}
            className="blog-section-link"
          >
            {safeLocale === "ro" ? "Vezi toate serviciile →" : "View all services →"}
          </Link>
        </div>
      </section>

      <section id="why" className="content-section">
        <div className="section-header editorial-why-header">
          <p className="section-kicker">
            {safeLocale === "ro" ? "De ce ALPHACONT" : "Why ALPHACONT"}
          </p>
          <SectionTitle title={homeContent.whyTitle} />
        </div>
        <p className="editorial-why-intro">{homeContent.whyIntro}</p>
        <div className="editorial-why-layout">
          {whyColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="editorial-why-column">
              {column.map((item) => (
                <article key={item.title} className="editorial-why-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
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
        <div className="section-header">
          <p className="section-kicker">
            {safeLocale === "ro" ? "Recenzii" : "Reviews"}
          </p>
          <SectionTitle title={homeContent.socialProofTitle} />
        </div>
        <div className="social-proof-grid social-proof-grid-reviews">
          {homeContent.socialProofItems.map((item) => (
            <article key={`${item.author}-${item.quote}`} className="social-proof-card">
              <p className="social-proof-quote">{item.quote}</p>
              <div className="social-proof-meta">
                <p className="social-proof-author">{item.author}</p>
                <p className="social-proof-source">{item.source}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section recommendation-highlight-section">
        <div className="section-header">
          <p className="section-kicker">{internationalRecommendation.kicker}</p>
          <SectionTitle title={internationalRecommendation.title} />
        </div>
        <article className="recommendation-highlight-card">
          <blockquote className="recommendation-highlight-quote">
            {recommendationQuote}
          </blockquote>
          <p className="recommendation-highlight-author">
            {internationalRecommendation.author}
          </p>
          <Link
            href={safeLocale === "ro" ? "/ro/recomandari" : "/en/recommendations"}
            className="recommendation-highlight-link"
          >
            {internationalRecommendation.linkLabel}
          </Link>
        </article>
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
            <div className="about-visual">
              <Image
                src="/images/hero-office.webp"
                alt={
                  safeLocale === "ro"
                    ? "Colț de birou ALPHACONT din Sibiu"
                    : "ALPHACONT office lounge in Sibiu"
                }
                width={1368}
                height={1024}
                className="about-visual-image"
              />
            </div>
            <div className="about-highlights">
              {homeContent.aboutHighlights.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
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
              src="/images/sibiu_desk_web.webp"
              alt={
                safeLocale === "ro"
                  ? "Birou contabilitate ALPHACONT Sibiu"
                  : "English-speaking accounting office in Sibiu, Romania"
              }
              width={1600}
              height={1275}
              sizes="(max-width: 780px) 100vw, (max-width: 1200px) 50vw, 720px"
            />
          </div>
        </div>
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
              className="map-frame"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={safeLocale === "ro" ? "Harta biroului ALPHACONT" : "ALPHACONT office map"}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section contact-redesign">
        <div className="contact-layout">
          <div className="contact-stack">
            <p className="section-kicker">Contact</p>
            <SectionTitle
              title={
                safeLocale === "ro"
                  ? "Hai să discutăm despre firma ta"
                  : "Contact an English-speaking accountant in Sibiu"
              }
            />
            {safeLocale === "ro" ? (
              <>
                <p className="contact-lead">
                  Ne poți contacta telefonic, pe WhatsApp sau prin email.
                </p>
                <p className="contact-extra">
                  Ne poți contacta și dacă ai o situație contabilă neclară, un control în
                  desfășurare sau o firmă preluată cu evidență incompletă.
                </p>
                <p className="pricing-note">
                  Prețurile pornesc de la 300 lei / lună. Costul final depinde de
                  volumul firmei și de complexitatea serviciilor solicitate.
                </p>
                <div className="contact-cta-buttons">
                  <TrackedPhoneLink
                    className="button button-primary-dark"
                    locale={safeLocale}
                    location="contact_cta"
                    phoneNumber={homeContent.contactPhone}
                    label="Sună acum · RO"
                  >
                    Sună acum · RO
                  </TrackedPhoneLink>
                  <TrackedWhatsAppButton
                    className="button button-whatsapp"
                    locale={safeLocale}
                    location="contact_cta"
                    phoneNumber={homeContent.whatsappNumber}
                    label="Scrie pe WhatsApp"
                  />
                </div>
              </>
            ) : (
              <>
                <p className="contact-lead">
                  Whether you&apos;re setting up a company in Romania, managing an existing
                  one, or dealing with a tax situation — we&apos;re here to help. Reach us
                  by phone, WhatsApp, or email.
                </p>
                <p className="pricing-note">
                  Romanian accounting and tax rules can feel like a maze from the
                  outside. We make sure you always know where you stand — so you can
                  focus on your business, not on bureaucracy.
                </p>
                <div className="contact-cta-buttons">
                  <TrackedPhoneLink
                    className="button button-primary-dark"
                    locale={safeLocale}
                    location="contact_cta"
                    phoneNumber={homeContent.contactPhone}
                    label="Call now · RO"
                  >
                    Call now · RO
                  </TrackedPhoneLink>
                  <TrackedWhatsAppButton
                    className="button button-whatsapp"
                    locale={safeLocale}
                    location="contact_cta"
                    phoneNumber={homeContent.whatsappNumber}
                    label="Message us on WhatsApp"
                  />
                </div>
              </>
            )}
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-item">
              <p className="contact-info-label">
                {safeLocale === "ro" ? "Email" : "Email"}
              </p>
              <a
                href={`mailto:${homeContent.contactEmail}`}
                className="contact-info-value contact-address-link"
              >
                {homeContent.contactEmail}
              </a>
            </div>

            <div className="contact-info-item">
              <p className="contact-info-label">
                {safeLocale === "ro" ? "Telefon" : "Phone"}
              </p>
              <div className="contact-info-phones">
                <TrackedPhoneLink
                  locale={safeLocale}
                  location="contact_info_ro"
                  phoneNumber={homeContent.contactPhone}
                  label={`🇷🇴 ${primaryPhoneDisplay}`}
                  className="contact-info-phone-row"
                >
                  <span>🇷🇴</span> {primaryPhoneDisplay}
                </TrackedPhoneLink>
                <TrackedPhoneLink
                  locale={safeLocale}
                  location="contact_info_it"
                  phoneNumber={homeContent.contactPhoneSecondary}
                  label={`🇮🇹 ${secondaryPhoneDisplay}`}
                  className="contact-info-phone-row"
                >
                  <span>🇮🇹</span> {secondaryPhoneDisplay}
                </TrackedPhoneLink>
              </div>
            </div>

            <div className="contact-info-item">
              <p className="contact-info-label">
                {safeLocale === "ro" ? "Birou" : "Office"}
              </p>
              <a
                href={homeContent.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-value contact-address-link"
              >
                {homeContent.contactCity}
              </a>
              <p className="contact-info-note">
                {safeLocale === "ro" ? "Cu programare" : "By appointment"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter locale={safeLocale} />
    </main>
  );
}
