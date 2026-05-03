import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import { getBaseUrl } from "@/lib/seo";

type LegalPageProps = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  const baseUrl = getBaseUrl();

  return {
    title: "Privacy Policy | ALPHACONT",
    description:
      "Information about how ALPHACONT handles data sent through the website.",
    alternates: {
      canonical: `${baseUrl}/en/privacy-policy`,
      languages: {
        ro: `${baseUrl}/ro/confidentialitate`,
        en: `${baseUrl}/en/privacy-policy`,
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: LegalPageProps) {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  return (
    <main className="site-shell">
      <section className="legal-page">
        <p className="section-kicker">Legal</p>
        <h1>Privacy policy</h1>
        <p className="legal-intro">
          This page briefly explains how we use the data sent through the
          contact form or through the communication channels displayed on the
          website.
        </p>

        <div className="legal-body">
          <h2>What data we may receive</h2>
          <p>
            We may receive your name, company name, email address, phone
            number, and the message sent through the contact form or via email
            or WhatsApp.
          </p>

          <h2>How we use this data</h2>
          <p>
            We use this information only to reply to enquiries, discuss
            accounting, payroll, or tax services, and continue the communication
            related to the request you sent.
          </p>

          <h2>Data retention and sharing</h2>
          <p>
            We do not sell the data received through the website. Data may be
            processed by technical services used for the form or website,
            strictly for handling enquiries and site administration.
          </p>

          <h2>Contact</h2>
          <p>
            For questions related to data sent through the website, you can
            contact us at <a href="mailto:contact@alphacont.ro">contact@alphacont.ro</a>.
          </p>

          <p className="legal-backlink">
            <Link href="/en">Back to homepage</Link>
          </p>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
