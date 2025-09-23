import "server-only";
import "tailwindcss/tailwind.css";
import { Viewport } from "next";
import { cookies } from "next/headers";

import "./globals.css";
import ProgressBar from "@/components/progress-bar";
import "@/assets/fonts/index.scss";
import CustomLayout from "@/layout/RootLayout";
import { NextIntlClientProvider } from "next-intl";
import SupportButtons from "@/components/supportButtons";

export function generateMetadata() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SERVICE_URL || "https://www.isinemmakine.com.tr/";

  return {
    title: "Isınem | Nem Alma ve Kurutma Sistemleri",
    description:
      "Isınem, endüstriyel kurutma sistemleri, nem alma makineleri ve enerji verimli çözümleriyle sektörün öncüsü. Ev, şantiye ve sanayi alanlarında profesyonel hizmet.",
    keywords:
      "kurutma sistemleri, nem alma cihazı, endüstriyel kurutma, şap kurutma, inşaat sonrası nem giderme, rutubet kurutma, enerji verimli makineler, parke öncesi kurutma, endüstriyel fırınlar, makine kiralama, Isınem",
    metadataBase: new URL(baseUrl),
    alternates: {
      languages: {
        tr: baseUrl,
        en: `${baseUrl}`,
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
          url: `${baseUrl}/logo.svg`,
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
      images: [`${baseUrl}/logo.svg`],
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
    themeColor: "#fff",
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
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "tr";
  return (
    <html lang={lang}>
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
        <meta name="language" content={lang === "tr" ? "Turkish" : "English"} />
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
          <SupportButtons />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
