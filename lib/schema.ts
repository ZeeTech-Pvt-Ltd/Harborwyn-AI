/** Site-wide structured data (Organization + WebSite), emitted on every page. */

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://harborwynai.io/#organization",
  name: "Harborwyn AI",
  url: "https://harborwynai.io/",
  logo: "https://harborwynai.io/icon.svg",
  email: "support@harborwynai.io",
  description:
    "Harborwyn AI is an AI trading platform. It watches 40+ markets around the clock and turns data into clear trading signals.",
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://harborwynai.io/#website",
  url: "https://harborwynai.io/",
  name: "Harborwyn AI",
  publisher: { "@id": "https://harborwynai.io/#organization" },
};
