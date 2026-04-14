import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero">
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

        <h1>Alege limba / Choose language</h1>
        <p>Selecteaza versiunea site-ului pe care vrei sa o vizitezi.</p>

        <div className="language-links">
          <Link href="/ro" className="button">
            Romana
          </Link>
          <Link href="/en" className="button">
            English
          </Link>
        </div>
      </section>
    </main>
  );
}
