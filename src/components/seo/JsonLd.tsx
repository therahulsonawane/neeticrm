import { FAQ_DATA } from "@/lib/constants";

export function JsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NeetiCRM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "NeetiCRM is a lead conversion platform that captures leads from Meta Ads, WhatsApp, and your website, then uses AI calls, WhatsApp, SMS, and email to follow up automatically until they convert.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free trial available",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "120",
    },
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NeetiCRM",
    url: "https://neeticrm.com",
    description:
      "Lead conversion platform for businesses running Meta Ads, WhatsApp, and multi-channel marketing.",
    sameAs: [
      "https://twitter.com/neeticrm",
      "https://linkedin.com/company/neeticrm",
      "https://youtube.com/@neeticrm",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}
