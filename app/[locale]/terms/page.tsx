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
    title: "Terms and Conditions | ALPHACONT",
    description: "General information regarding the use of the ALPHACONT website.",
    alternates: {
      canonical: `${baseUrl}/en/terms`,
      languages: {
        ro: `${baseUrl}/ro/termeni`,
        en: `${baseUrl}/en/terms`,
      },
    },
  };
}

export default async function TermsPage({ params }: LegalPageProps) {
  const { locale } = await params;

  if (locale !== "en") {
    notFound();
  }

  return (
    <main className="site-shell">
      <section className="legal-page">
        <p className="section-kicker">Legal</p>
        <h1>Terms and conditions</h1>
        <p className="legal-intro">
          The website is intended to present ALPHACONT services and provide
          information. Sending an enquiry through the form or by email does not
          automatically create a contractual relationship.
        </p>

        <div className="legal-body">
          <h2>Use of the website</h2>
          <p>
            The website content is for general information and may be updated
            without prior notice. The information shown does not constitute
            personalised tax or legal advice without a direct discussion and
            concrete review.
          </p>

          <h2>Enquiries and collaboration</h2>
          <p>
            Any actual collaboration is established separately, after a direct
            discussion and explicit confirmation of the services, documents, and
            working conditions.
          </p>

          <h2>Content rights</h2>
          <p>
            The text, visual elements, and site structure are used to present
            ALPHACONT activity and may not be fully reproduced without
            permission.
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
