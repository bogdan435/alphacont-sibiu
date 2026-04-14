import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug } from "@/lib/blog";
import { getBaseUrl } from "@/lib/seo";

type LocaleBlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: LocaleBlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const post = await getBlogPostBySlug(safeLocale, slug);
  const baseUrl = getBaseUrl();

  const alternateSlug = safeLocale === "ro" ? "first-article" : "primul-articol";

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/blog/${slug}`,
      languages: {
        ro: `${baseUrl}/ro/blog/${safeLocale === "ro" ? slug : alternateSlug}`,
        en: `${baseUrl}/en/blog/${safeLocale === "en" ? slug : alternateSlug}`,
      },
    },
  };
}

export default async function LocaleBlogPostPage({ params }: LocaleBlogPostPageProps) {
  const { locale, slug } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const post = await getBlogPostBySlug(safeLocale, slug);

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
          <Link href={`/${safeLocale}`}>{safeLocale === "ro" ? "Acasa" : "Home"}</Link>
          <Link href={`/${safeLocale}/blog`}>Blog</Link>
        </div>
      </nav>

      <section className="hero">
        <p className="locale-label">{safeLocale === "ro" ? "Romana" : "English"}</p>
        <h1>{post.title}</h1>
        <p className="hero-lead">{post.description}</p>
        <p className="blog-date">{post.date}</p>
      </section>

      <section className="article-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </section>
    </main>
  );
}
