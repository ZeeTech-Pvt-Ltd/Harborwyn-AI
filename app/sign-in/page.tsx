import type { Metadata } from "next";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = {
  alternates: { canonical: "https://harborwynai.io/sign-in" },
  title: "AI Trading Sign In",
  description:
    "Sign in to your Harborwyn AI command deck and pick up where you left off. Your signals are waiting.",
};

export default function SignInPage() {
  return <AuthForm />;
}
