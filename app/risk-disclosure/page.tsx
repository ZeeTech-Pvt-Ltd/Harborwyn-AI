import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { LEGAL_DOCS } from "@/data/legal";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/risk-disclosure" },
  title: "Trading Risk Disclosure",
  description:
    "The honest risks of trading, told plainly by Harborwyn AI. Read this before you risk a dollar.",
};

export default function RiskDisclosurePage() {
  return <LegalPage doc={LEGAL_DOCS.risk} />;
}
