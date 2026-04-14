export default function BlogPage() {
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
        <h1>Blog ALPHACONT GROUP</h1>
        <p>Articole utile pentru antreprenori, PFA-uri si firme din Sibiu.</p>
      </section>

      <section>
        <h2>Articole disponibile</h2>
        <ul>
          <li>
            <a href="/blog/primul-articol">Primul articol</a>
          </li>
        </ul>
      </section>
    </main>
  );
}
