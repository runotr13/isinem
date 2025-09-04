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
    process.env.NEXT_PUBLIC_SERVICE_URL || "https://www.dila.com/";

  return {
    title: "DILA GOLD",
    description: "DILA GOLD",
    keywords: "altın , gold , dila gold , dila",
    author: "DILA",
    creator: "DILA",
    publisher: "DILA",
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: "website",
      title: "DILA",
      description: "DILA",
      url: baseUrl,
      siteName: "DILA",
      locale: "tr_TR",
      images: [
        {
          url: `${baseUrl}/assets/images/og-default.jpg`, // özel OG görselin varsa bunu kullan
          width: 1200,
          height: 630,
          alt: "DILA",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "DILA",
      description: "DILA",
      site: "@DILA", // varsa Twitter hesabınız
      creator: "@DILA",
      images: [
        {
          url: `${baseUrl}/assets/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: "DILA",
        },
      ],
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
    themeColor: "#FFFFFF",
    category: "DILA",
    applicationName: "DILA",
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
        <meta name="copyright" content="DILA" />
        <meta name="publisher" content="DILA" />
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
