import type { Metadata } from "next";
import AnalyticsWithConsent from "@/components/AnalyticsWithConsent";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALPHACONT GROUP",
  description: "Contabilitate și fiscalitate pentru firme din Sibiu",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  return (
    <html
      lang={locale ?? "ro"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="consent-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              analytics_storage: 'denied'
            });
          `}
        </Script>
        {children}
        <AnalyticsWithConsent />
        <ScrollToTop />
        <CookieBanner locale={locale} />
      </body>
    </html>
  );
}
