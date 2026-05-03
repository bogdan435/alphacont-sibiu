import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/en/contabil-pfa-sibiu",
        destination: "/en/sole-trader-accountant-sibiu",
        permanent: true,
      },
      {
        source: "/en/contabil-srl-sibiu",
        destination: "/en/llc-accountant-sibiu",
        permanent: true,
      },
      {
        source: "/en/infiintare-firma-sibiu",
        destination: "/en/company-formation-sibiu",
        permanent: true,
      },
      {
        source: "/en/consultanta-fiscala-sibiu",
        destination: "/en/tax-advisory-sibiu",
        permanent: true,
      },
      {
        source: "/en/salarizare-sibiu",
        destination: "/en/payroll-services-sibiu",
        permanent: true,
      },
      {
        source: "/en/blog/first-article",
        destination: "/en/blog",
        permanent: true,
      },
      {
        source: "/ro/blog/primul-articol",
        destination: "/ro/blog",
        permanent: true,
      },
      {
        source: "/ro/terms",
        destination: "/ro/termeni",
        permanent: true,
      },
      {
        source: "/ro/privacy-policy",
        destination: "/ro/confidentialitate",
        permanent: true,
      },
      {
        source: "/ro/cookie-policy",
        destination: "/ro/cookie-uri",
        permanent: true,
      },
      {
        source: "/ro/internship",
        destination: "/ro/stagiu-practica",
        permanent: true,
      },
      {
        source: "/ro/services",
        destination: "/ro/servicii",
        permanent: true,
      },
      {
        source: "/en/servicii",
        destination: "/en/services",
        permanent: true,
      },
      {
        source: "/en/recomandari",
        destination: "/en/recommendations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
