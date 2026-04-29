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
    ];
  },
};

export default nextConfig;
