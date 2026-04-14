import SectionTitle from "@/components/SectionTitle";
import { homeContent as homeContentRo } from "@/content/home-ro";
import { homeContent as homeContentEn } from "@/content/home-en";

export default function Home() {
  const locale = "ro";
  const homeContent = locale === "ro" ? homeContentRo : homeContentEn;

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
          <a href="#services">Servicii</a>
          <a href="#why">Avantaje</a>
          <a href="/blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="locale-label">{locale === "ro" ? "Romana" : "English"}</p>
        <h1>{homeContent.heroTitle}</h1>
        <p>{homeContent.heroText}</p>
        <p>{homeContent.heroSubtext}</p>
        <a href="#contact" className="button">
          {homeContent.heroButton}
        </a>
      </section>

      <section id="services">
        <SectionTitle title={homeContent.servicesTitle} />
        <div className="services-grid">
          {homeContent.services.map((service) => (
            <div key={service} className="service-card">
              <p>{service}</p>
            </div>
          ))}
        </div>
      </section>


      <section id="why">
        <SectionTitle title={homeContent.whyTitle} />
        <ul>
          {homeContent.whyItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="contact-section">
        <SectionTitle title={homeContent.contactTitle} />
        <p>Email: {homeContent.contactEmail}</p>
        <p>Telefon: {homeContent.contactPhone}</p>
        <p>{homeContent.contactCity}</p>
        <a href={`mailto:${homeContent.contactEmail}`} className="contact-link">
          Trimite email
        </a>
      </section>

    </main>
  );
}
