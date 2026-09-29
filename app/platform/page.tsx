import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import HowItWorks from "@/components/HowItWorks";
import Markets from "@/components/Markets";
import SecuritySection from "@/components/SecuritySection";
import CtaStrip from "@/components/CtaStrip";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/platform" },
  title: "AI Trading Platform Features",
  description:
    "Explore the Harborwyn AI platform: AI signals, Risk Radar, backtesting and one-tap execution. Try every feature free for 14 days.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="Platform"
        title={
          <>
            One Calm, Intelligent{" "}
            <em className="font-normal italic">
              Command Deck
            </em>
          </>
        }
        description={
          <>
            Harborwyn AI replaces your pile of tabs, spreadsheets and gut
            feelings with{" "}
            one clear view.
            You get signals you can read, risk you can see, and execution one
            tap away.
          </>
        }
      />
      <Features showHeading={false} />
      <Showcase showHeading={false} />
      <Markets showHeading={false} />
      <SecuritySection showHeading={false} />
      <HowItWorks showHeading={false} />
      <CtaStrip
        title="Try The Full Deck, Free For 14 Days"
        copy="Signals, radar, backtesting and execution all unlock on the Captain trial. No credit card required."
      />
    </>
  );
}
