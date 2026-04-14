import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog";

type LocaleBlogPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleBlogPage({ params }: LocaleBlogPageProps) {
  const { locale } = await params;
  const safeLocale = locale === "en" ? "en" : "ro";
  const posts = await getBlogPosts(safeLocale);

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
        <h1>{safeLocale === "ro" ? "Blog ALPHACONT GROUP" : "ALPHACONT GROUP Blog"}</h1>
        <p>
          {safeLocale === "ro"
            ? "Articole utile pentru antreprenori, PFA-uri si firme din Sibiu."
            : "Useful articles for entrepreneurs, sole traders, and companies in Sibiu."}
        </p>
      </section>

      <section>
        <h2>{safeLocale === "ro" ? "Articole disponibile" : "Available articles"}</h2>
        <ul className="blog-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/${safeLocale}/blog/${post.slug}`} className="blog-card-link">
                {post.title}
              </Link>
              <p className="blog-description">{post.description}</p>
              <small className="blog-date">{post.date}</small>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
