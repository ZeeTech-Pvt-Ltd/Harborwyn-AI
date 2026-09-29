import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL_DOCS } from "@/data/legal";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/privacy" },
  title: "Harborwyn AI Privacy Policy",
  description:
    "How Harborwyn AI collects, uses and protects your personal data. Read it, then trade with confidence.",
};

export default function PrivacyPage() {
  return <LegalPage doc={LEGAL_DOCS.privacy} />;
}
