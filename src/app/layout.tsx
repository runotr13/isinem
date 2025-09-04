import "server-only";
import "tailwindcss/tailwind.css";
import { Viewport } from "next";

import "./globals.css";
import ProgressBar from "@/components/progress-bar";
import ScrollToTopButton from "@/components/scroll-top-button";
import "@/assets/fonts/index.scss";
import CustomLayout from "@/layout/RootLayout";
import { NextIntlClientProvider } from "next-intl";

export function generateMetadata() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SERVICE_URL || "https://www.isinemmakina.com.tr/";

  return {
    title: "Isınem | Nem Alma ve Kurutma Sistemleri",
    description:
      "Isınem, endüstriyel kurutma sistemleri, nem alma makineleri ve enerji verimli çözümleriyle sektörün öncüsü. Ev, şantiye ve sanayi alanlarında profesyonel hizmet.",
    keywords:
      "kurutma sistemleri, nem alma cihazı, endüstriyel kurutma, şap kurutma, inşaat sonrası nem giderme, rutubet kurutma, enerji verimli makineler, parke öncesi kurutma, endüstriyel fırınlar, makine kiralama, Isınem",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
      languages: {
        tr: baseUrl,
        en: `${baseUrl}en/`,
      },
    },
    openGraph: {
      type: "website",
      title: "Isınem | Nem Alma ve Kurutma Sistemleri",
      description:
        "Isınem, nem alma ve endüstriyel kurutma çözümleri sunar. Yüksek kalite, enerji verimliliği ve güvenilirlik.",
      url: baseUrl,
      siteName: "Isınem",
      locale: "tr_TR",
      images: [
        {
          url: `${baseUrl}/assets/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: "Isınem Kurutma Sistemleri",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Isınem | Nem Alma ve Kurutma Sistemleri",
      description:
        "Isınem, nem alma ve kurutma sistemlerinde güvenilir çözümler sunar.",
      images: [`${baseUrl}/assets/images/og-default.jpg`],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
    robots: {
      index: true,
      follow: true,
    },
    themeColor: "#fff", // NemTürk gibi mavi ton kullanılabilir
    applicationName: "Isınem",
    category: "Endüstriyel Kurutma",
  };
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"tr"}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Turkish" />
        <meta name="copyright" content="Isınem" />
        <meta name="publisher" content="Isınem" />
      </head>
      <body
        className={`text-sm antialiased text-light-default-baseTextBlack`}
        suppressHydrationWarning={true}
      >
        <NextIntlClientProvider>
          <ProgressBar />
          <CustomLayout>
            <div className="">{children}</div>
          </CustomLayout>
          <ScrollToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
