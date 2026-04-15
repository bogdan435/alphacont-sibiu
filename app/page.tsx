import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="intro-card">
        <div className="logo">
          <Image
            src="/logo-blue.svg"
            alt="ALPHACONT GROUP logo"
            className="logo-image"
            width={280}
            height={77}
          />
        </div>

        <h1>Alege limba / Choose language</h1>
        <p className="intro-lead">
          Selecteaza versiunea site-ului pe care vrei sa o vizitezi.
        </p>

        <div className="language-links">
          <Link href="/ro" className="button intro-button">
            Romana
          </Link>
          <Link href="/en" className="button intro-button">
            English
          </Link>
        </div>
      </section>
    </main>
  );
}
