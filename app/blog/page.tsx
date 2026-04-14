import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getBlogPosts();

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
        <h1>Blog ALPHACONT GROUP</h1>
        <p>Articole utile pentru antreprenori, PFA-uri si firme din Sibiu.</p>
      </section>

      <section>
        <h2>Articole disponibile</h2>
        <ul className="blog-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="blog-card-link">
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
