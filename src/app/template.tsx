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
    url: currentUrl,
    name: "XXX AI",
    logo: `${URL}/logo.svg`,
    description:
      "XXX AI provides data-driven strategies for businesses through artificial intelligence solutions.",
    foundingDate: "2023-10-01",
    founder: {
      "@type": "Person",
      name: "Kerim Buyukakyuz",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "US",
      addressCountry: "United States",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@xxx.ai",
      contactType: "Customer Support",
      areaServed: "TR",
      availableLanguage: ["English"],
    },
    sameAs: ["https://www.linkedin.com/company/xxx"],
    image: `${URL}/images/favicon.svg`,
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "XXX AI",
    description: "XXX AI: Shape the future with artificial intelligence.",
    url: currentUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "XXX AI",
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
        name: "Home",
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
      {
        "@type": "Question",
        name: "What is XXX AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "XXX AI is a company providing artificial intelligence solutions and consulting services.",
        },
      },
      {
        "@type": "Question",
        name: "What services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer data analysis, machine learning model development, and custom artificial intelligence solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact you?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach us by filling out the contact form on our website or by contacting us directly via email.",
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
      {children}
    </>
  );
}
