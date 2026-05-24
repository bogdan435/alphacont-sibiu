import type { MetadataRoute } from "next";
import { generateMetadata as generateLocaleHomeMetadata } from "./[locale]/page";
import { generateMetadata as generateAnafMetadata } from "./[locale]/anaf/page";
import { generateMetadata as generateLocaleBlogMetadata } from "./[locale]/blog/page";
import { generateMetadata as generateLocaleRecommendationsMetadata } from "./[locale]/recomandari/page";
import { generateMetadata as generateEnglishServicesMetadata } from "./[locale]/services/page";
import { generateMetadata as generateEnglishPrivacyPolicyMetadata } from "./[locale]/privacy-policy/page";
import { generateMetadata as generateEnglishCookiePolicyMetadata } from "./[locale]/cookie-policy/page";
import { generateMetadata as generateEnglishTermsMetadata } from "./[locale]/terms/page";
import { generateMetadata as generateEnglishRecommendationsMetadata } from "./en/recommendations/page";
import { generateMetadata as generateRomanianPrivacyPolicyMetadata } from "./ro/confidentialitate/page";
import { generateMetadata as generateRomanianCookiePolicyMetadata } from "./ro/cookie-uri/page";
import { generateMetadata as generateRomanianTermsMetadata } from "./ro/termeni/page";
import { generateMetadata as generateRomanianInternshipMetadata } from "./ro/stagiu-practica/page";
import { generateMetadata as generateRomanianServicesMetadata } from "./ro/servicii/page";
import { getBlogPosts } from "../lib/blog";
import { getServicePageContent, servicePageSlugs } from "../lib/service-pages";

const baseUrl = "https://alphacont.ro";
const fallbackLastModified = new Date().toISOString().split("T")[0];

type SitemapEntry = {
  url: string;
  lastModified?: string;
};

function resolveLastModified(lastModified?: string) {
  return lastModified || fallbackLastModified;
}

function readLastModified(metadata: { other?: Record<string, unknown> }) {
  const lastModified = metadata.other?.lastModified;

  if (typeof lastModified === "string") {
    return lastModified;
  }

  return fallbackLastModified;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [
    localeHomeRoMetadata,
    localeHomeEnMetadata,
    anafRoMetadata,
    anafEnMetadata,
    romanianPrivacyPolicyMetadata,
    englishPrivacyPolicyMetadata,
    romanianCookiePolicyMetadata,
    englishCookiePolicyMetadata,
    romanianTermsMetadata,
    englishTermsMetadata,
    romanianInternshipMetadata,
    romanianServicesMetadata,
    englishServicesMetadata,
    localeRecommendationsMetadata,
    englishRecommendationsMetadata,
    localeBlogRoMetadata,
    localeBlogEnMetadata,
  ] = await Promise.all([
    generateLocaleHomeMetadata({ params: Promise.resolve({ locale: "ro" }) }),
    generateLocaleHomeMetadata({ params: Promise.resolve({ locale: "en" }) }),
    generateAnafMetadata({ params: Promise.resolve({ locale: "ro" }) }),
    generateAnafMetadata({ params: Promise.resolve({ locale: "en" }) }),
    generateRomanianPrivacyPolicyMetadata(),
    generateEnglishPrivacyPolicyMetadata({ params: Promise.resolve({ locale: "en" }) }),
    generateRomanianCookiePolicyMetadata(),
    generateEnglishCookiePolicyMetadata({ params: Promise.resolve({ locale: "en" }) }),
    generateRomanianTermsMetadata(),
    generateEnglishTermsMetadata({ params: Promise.resolve({ locale: "en" }) }),
    generateRomanianInternshipMetadata(),
    generateRomanianServicesMetadata(),
    generateEnglishServicesMetadata({ params: Promise.resolve({ locale: "en" }) }),
    generateLocaleRecommendationsMetadata({ params: Promise.resolve({ locale: "ro" }) }),
    generateEnglishRecommendationsMetadata(),
    generateLocaleBlogMetadata({ params: Promise.resolve({ locale: "ro" }) }),
    generateLocaleBlogMetadata({ params: Promise.resolve({ locale: "en" }) }),
  ]);

  const entries: SitemapEntry[] = [
    { url: `${baseUrl}/ro`, lastModified: readLastModified(localeHomeRoMetadata) },
    { url: `${baseUrl}/en`, lastModified: readLastModified(localeHomeEnMetadata) },
    { url: `${baseUrl}/ro/anaf`, lastModified: readLastModified(anafRoMetadata) },
    { url: `${baseUrl}/en/anaf`, lastModified: readLastModified(anafEnMetadata) },
    {
      url: `${baseUrl}/ro/confidentialitate`,
      lastModified: readLastModified(romanianPrivacyPolicyMetadata),
    },
    {
      url: `${baseUrl}/en/privacy-policy`,
      lastModified: readLastModified(englishPrivacyPolicyMetadata),
    },
    {
      url: `${baseUrl}/ro/cookie-uri`,
      lastModified: readLastModified(romanianCookiePolicyMetadata),
    },
    {
      url: `${baseUrl}/en/cookie-policy`,
      lastModified: readLastModified(englishCookiePolicyMetadata),
    },
    {
      url: `${baseUrl}/ro/termeni`,
      lastModified: readLastModified(romanianTermsMetadata),
    },
    {
      url: `${baseUrl}/en/terms`,
      lastModified: readLastModified(englishTermsMetadata),
    },
    {
      url: `${baseUrl}/ro/stagiu-practica`,
      lastModified: readLastModified(romanianInternshipMetadata),
    },
    {
      url: `${baseUrl}/ro/servicii`,
      lastModified: readLastModified(romanianServicesMetadata),
    },
    {
      url: `${baseUrl}/en/services`,
      lastModified: readLastModified(englishServicesMetadata),
    },
    {
      url: `${baseUrl}/ro/recomandari`,
      lastModified: readLastModified(localeRecommendationsMetadata),
    },
    {
      url: `${baseUrl}/en/recommendations`,
      lastModified: readLastModified(englishRecommendationsMetadata),
    },
    {
      url: `${baseUrl}/ro/blog`,
      lastModified: readLastModified(localeBlogRoMetadata),
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: readLastModified(localeBlogEnMetadata),
    },
  ];

  for (const slug of servicePageSlugs.ro) {
    const page = getServicePageContent("ro", slug);
    entries.push({
      url: `${baseUrl}/ro/${slug}`,
      lastModified: page?.lastModified,
    });
  }

  for (const slug of servicePageSlugs.en) {
    const page = getServicePageContent("en", slug);
    entries.push({
      url: `${baseUrl}/en/${slug}`,
      lastModified: page?.lastModified,
    });
  }

  const [blogEn, blogRo] = await Promise.all([getBlogPosts("en"), getBlogPosts("ro")]);

  for (const post of blogEn) {
    entries.push({
      url: `${baseUrl}/en/blog/${post.slug}`,
      lastModified: post.lastModified,
    });
  }

  for (const post of blogRo) {
    entries.push({
      url: `${baseUrl}/ro/blog/${post.slug}`,
      lastModified: post.lastModified,
    });
  }

  return entries.map(({ url, lastModified }) => ({
    url,
    lastModified: resolveLastModified(lastModified),
  }));
}
