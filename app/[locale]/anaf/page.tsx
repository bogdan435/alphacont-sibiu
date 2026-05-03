import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { getHomeContent } from "@/lib/home";
import { getBaseUrl } from "@/lib/seo";

type AnafPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: AnafPageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const baseUrl = getBaseUrl();

  return {
    title:
      safeLocale === "ro"
        ? "ANAF ne informează | Asistență fiscală Sibiu | ALPHACONT"
        : "ANAF Updates | Tax Assistance in Sibiu | ALPHACONT",
    description:
      safeLocale === "ro"
        ? "Asistență în controale ANAF și Antifraudă pentru firme din Sibiu. Linkuri utile, calendar fiscal și sprijin direct în situații complexe."
        : "ANAF and Antifraud assistance for companies in Sibiu. Useful links, fiscal calendar resources, and direct support in complex situations.",
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/anaf`,
      languages: {
        ro: `${baseUrl}/ro/anaf`,
        en: `${baseUrl}/en/anaf`,
      },
    },
  };
}

export default async function AnafPage({ params }: AnafPageProps) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const homeContent = getHomeContent(safeLocale);
  const anafLinks = [
    {
      label: homeContent.anafLinkLabel,
      href: homeContent.anafLinkUrl,
    },
    {
      label: homeContent.anafLinkSecondaryLabel,
      href: homeContent.anafLinkSecondaryUrl,
    },
    {
      label: homeContent.anafLinkThirdLabel,
      href: homeContent.anafLinkThirdUrl,
    },
    {
      label: homeContent.anafLinkFourthLabel,
      href: homeContent.anafLinkFourthUrl,
    },
  ];
  const content =
    safeLocale === "ro"
      ? {
          title: "ANAF ne informează",
          intro:
            "Am adunat într-un singur loc resursele oficiale ANAF folosite frecvent, alături de serviciile noastre de asistență pentru firmele din Sibiu care se confruntă cu controale fiscale sau obligații administrative.",
          supportTitle: "Asistență în controale ANAF și Antifraudă — Sibiu",
          supportParagraphs: [
            "Un control fiscal poate apărea oricând — planificat sau inopinat. Oferim sprijin direct firmelor din Sibiu aflate în curs de control, oferind asistență pe toată durata acestuia, indiferent dacă evidența contabilă a fost întocmită de noi sau de o terță parte.",
            "Intervenim în situații precum: verificarea documentelor solicitate de inspector, clarificarea obligațiilor fiscale restante, identificarea și corectarea erorilor contabile înainte sau în timpul controlului, și comunicarea cu reprezentanții ANAF și Direcției Generale Antifraudă din Sibiu.",
            "Dacă firma ta din Sibiu se confruntă cu o situație urgentă legată de un control fiscal, contactează-ne direct — evaluăm situația și stabilim pașii necesari.",
          ],
          rebuildTitle: "Refacere evidență contabilă înainte de control — Sibiu",
          rebuildParagraph:
            "În multe cazuri, firmele din Sibiu supuse unui control, au evidența contabilă incompletă sau greșit întocmită. Preluăm aceste situații, reorganizăm documentele și readucem contabilitatea într-o formă corectă și predictibilă, reducând riscul de amenzi și penalități.",
          linksTitle: "Linkuri utile ANAF",
          linksIntro:
            "Mai jos găsești linkurile oficiale ANAF și Antifraudă pe care le folosim frecvent pentru calendar fiscal, întrebări și răspunsuri și servicii online.",
          ctaText:
            "Ai o firmă în Sibiu și ai nevoie de asistență pentru un control ANAF sau vrei să verifici situația fiscală? Contactează-ne — analizăm situația fără costuri ascunse.",
          ctaLabel: "Contactează-ne",
        }
      : {
          title: "ANAF updates",
          intro:
            "We gathered in one place the official ANAF resources used most often, together with our assistance services for situations that involve tax inspections or administrative obligations.",
          supportTitle: "Support during ANAF and Antifraud inspections",
          supportParagraphs: [
            "A tax inspection can happen at any time, whether planned or unannounced. We provide direct support to companies in Sibiu that are already under inspection, regardless of whether the accounting records were prepared by us or by a third party.",
            "We step in for situations such as checking the documents requested by the inspector, clarifying outstanding tax obligations, identifying and correcting accounting errors before or during the inspection, and communicating with ANAF and the General Directorate for Fiscal Antifraud.",
            "If your company is facing an urgent situation related to a tax inspection, contact us directly. We assess the situation and establish the steps needed.",
          ],
          rebuildTitle: "Accounting records reconstruction",
          rebuildParagraph:
            "In many cases, companies that enter a tax inspection have incomplete or incorrectly prepared accounting records. We take over these situations, reorganize the documents, and bring the accounting back into a correct and predictable form, reducing the risk of fines and penalties.",
          linksTitle: "Useful ANAF links",
          linksIntro:
            "Below you can find the official ANAF and Fiscal Antifraud links we use most often for the fiscal calendar, questions and answers, and online services.",
          ctaText:
            "Do you need support for an ANAF inspection or want to review your company’s fiscal position? Contact us and we will assess the situation with no hidden costs.",
          ctaLabel: "Contact us",
        };

  return (
    <main className="site-shell">
      <section className="legal-page">
        <p className="section-kicker">ANAF</p>
        <h1>{content.title}</h1>
        <p className="legal-intro">{content.intro}</p>

        <div className="legal-body">
          <h2>{content.supportTitle}</h2>
          {content.supportParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h2>{content.rebuildTitle}</h2>
          <p>{content.rebuildParagraph}</p>

          <h2>{content.linksTitle}</h2>
          <p>{content.linksIntro}</p>

          <div className="seo-service-links">
            <div className="seo-service-links-list">
              {anafLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="seo-service-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <h2>{safeLocale === "ro" ? "Sprijin direct" : "Direct support"}</h2>
          <p>{content.ctaText}</p>
          <div className="hero-actions">
            <Link href={`/${safeLocale}#contact`} className="button contact-button-primary">
              {content.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter locale={safeLocale} />
    </main>
  );
}
