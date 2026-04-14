import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getBlogPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  return (
    <main>
      <nav className="topbar">
        <div className="logo">
          <img
            src="/logo-blue.svg"
            alt="ALPHACONT GROUP logo"
            className="logo-image"
          />
          <div className="logo-text">
            <strong>ALPHACONT GROUP</strong>
            <span>Accounting & Tax</span>
          </div>
        </div>
        <div className="nav-links">
          <Link href="/">Acasa</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>

      <section className="hero">
        <p className="locale-label">Romana</p>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <p>{post.date}</p>
      </section>

      <section className="article-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </section>
    </main>
  );
}
