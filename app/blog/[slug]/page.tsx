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
          <a href="/">Acasa</a>
          <a href="/blog">Blog</a>
        </div>
      </nav>

      <section className="hero">
        <p className="locale-label">Romana</p>
        <h1>{post.slug.replace(/-/g, " ")}</h1>
      </section>

      <section>
        <h2>Continut articol</h2>
        <pre>{post.content}</pre>
      </section>
    </main>
  );
}
