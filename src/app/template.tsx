"use client";
import { breadcrumbLists } from "@/components/seo/seoLdJson";
import { usePathname } from "next/navigation";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const URL = process.env.NEXT_PUBLIC_SERVICE_URL;
  const currentUrl = URL + pathname;

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: URL,
    name: "Isınem Makine",
    logo: `${URL}/logo.svg`,
    description:
      "Isınem Makine, inşaat ve endüstriyel alanlar için profesyonel kurutma ve nem alma çözümleri sunmaktadır.",
    foundingDate: "2025-01-01",
    founder: {
      "@type": "Person",
      name: "Berkay Ay",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "TR",
      addressCountry: "Türkiye",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "isinemmakine@gmail.com",
      contactType: "Müşteri Destek",
      areaServed: "TR",
      availableLanguage: ["Türkçe", "İngilizce"],
    },
    sameAs: [
      "https://www.linkedin.com/company/isinem-makine",
      "https://www.facebook.com/isinemmakine",
      "https://www.instagram.com/isinemmakine",
    ],
    image: `${URL}/images/favicon.svg`,
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Isınem Makine",
    description:
      "Isınem Makine, inşaat ve endüstriyel projeler için kurutma, nem alma, beton ve şap kurutma çözümleri sunmaktadır.",
    url: currentUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Isınem Makine",
      url: URL,
    },
  };

  const matchedBreadcrumb = breadcrumbLists.find(
    (breadcrumb) => breadcrumb.path === pathname
  );

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: URL,
      },
      ...(matchedBreadcrumb
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: matchedBreadcrumb.name,
              item: `${URL}${pathname}`,
            },
          ]
        : []),
    ],
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      // ENGLISH FAQ
      {
        "@type": "Question",
        name: "How is moisture removed from buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Moisture is removed using industrial drying systems, including dehumidifiers, air movers, and heat-assisted drying. This ensures structures stay dry and prevents mold formation.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits and risks of concrete drying?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Proper concrete drying prevents cracks and structural issues. Over-drying or uneven drying can cause shrinkage or surface defects. Using professional equipment ensures safe and effective drying.",
        },
      },
      {
        "@type": "Question",
        name: "Why is screed (şap) drying important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Screed drying is essential to ensure flooring materials adhere properly and to prevent long-term moisture damage. Controlled drying reduces construction delays and maintains quality.",
        },
      },
      {
        "@type": "Question",
        name: "How do industrial drying machines work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Industrial dryers remove humidity by circulating warm, dry air or using dehumidification techniques. They accelerate the drying process and are suitable for construction sites, warehouses, and factories.",
        },
      },
      {
        "@type": "Question",
        name: "Why is drying important in industrial and construction areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Proper drying prevents mold, corrosion, and structural damage. It ensures safety, quality of finishes, and longevity of materials used in construction and industrial facilities.",
        },
      },

      // TURKISH FAQ
      {
        "@type": "Question",
        name: "Binalardan nem nasıl alınır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nem, endüstriyel kurutma sistemleri kullanılarak alınır; nem alma cihazları, hava sirkülasyonu ve ısı destekli kurutma yöntemleri ile yapıların kuru kalması ve küf oluşumunun önlenmesi sağlanır.",
        },
      },
      {
        "@type": "Question",
        name: "Beton kurutmanın faydaları ve zararları nelerdir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Doğru beton kurutma çatlak ve yapısal sorunları önler. Fazla veya düzensiz kurutma çekme ve yüzey bozukluklarına yol açabilir. Profesyonel ekipman kullanmak güvenli ve etkili kurutma sağlar.",
        },
      },
      {
        "@type": "Question",
        name: "Şap (screed) kurutma neden önemlidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Şap kurutma, zemin kaplama malzemelerinin düzgün yapışmasını ve uzun vadeli nem hasarlarının önlenmesini sağlar. Kontrollü kurutma, inşaat gecikmelerini azaltır ve kaliteyi korur.",
        },
      },
      {
        "@type": "Question",
        name: "Endüstriyel kurutma cihazları nasıl çalışır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Endüstriyel kurutucular, nemi sıcak ve kuru hava dolaşımı veya nem alma teknikleri ile uzaklaştırır. Kurutma sürecini hızlandırır ve şantiye, depo ve fabrika ortamları için uygundur.",
        },
      },
      {
        "@type": "Question",
        name: "Endüstriyel ve inşaat alanlarında kurutma neden önemlidir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Doğru kurutma, küf, korozyon ve yapısal hasarı önler. Malzemelerin güvenliği, kaplama kalitesi ve uzun ömürlü kullanım sağlanır.",
        },
      },
    ],
  };

  return (
    <>
      <link rel="canonical" href={currentUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Z59VW9NXWJ"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z59VW9NXWJ', { page_path: '${pathname}' });
          `,
        }}
      />
      {children}
    </>
  );
}
