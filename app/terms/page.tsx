import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL_DOCS } from "@/data/legal";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/terms" },
  title: "Harborwyn AI Terms Of Service",
  description:
    "The rules for using the Harborwyn AI platform. Read them before you start trading with our signals.",
};

export default function TermsPage() {
  return <LegalPage doc={LEGAL_DOCS.terms} />;
}
