import { notFound } from "next/navigation";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "ro" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!["ro", "en"].includes(locale)) {
    notFound();
  }

  return <>{children}</>;
}
