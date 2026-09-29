import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from "@/lib/schema";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const title = "AI Trading Platform And Signals | Harborwyn AI";
const description =
  "Trade with AI signals that explain themselves. Watch 40+ markets around the clock with Harborwyn AI. Start your free 14-day trial today.";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/" },
  metadataBase: new URL("https://harborwynai.io"),
  title: {
    default: title,
    template: "%s | Harborwyn AI",
  },
  description,
  keywords: [
    "Harborwyn AI",
    "AI trading",
    "trading signals",
    "AI trading platform",
    "crypto trading",
    "stock trading",
    "algorithmic trading",
    "trading intelligence",
    "risk radar",
    "harborwynai",
  ],
  authors: [{ name: "Harborwyn AI" }],
  openGraph: {
    title,
    description,
    url: "https://harborwynai.io",
    siteName: "Harborwyn AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#04070F",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <JsonLd data={ORGANIZATION_SCHEMA} />
        <JsonLd data={WEBSITE_SCHEMA} />
        <Navbar />
        <main className="flex min-h-screen flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
