export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  eyebrow: string;
  sections: LegalSection[];
}

export const LEGAL_DOCS: Record<"terms" | "privacy" | "risk", LegalDoc> = {
  terms: {
    slug: "terms",
    title: "Terms of Service",
    eyebrow: "Legal",
    sections: [
      {
        heading: "1. Agreement To These Terms",
        paragraphs: [
          "These Terms of Service (\"Terms\") are a deal between you and Harborwyn AI Ltd. (\"Harborwyn AI\", \"we\", \"us\" or \"our\"). They cover your access to and use of the Harborwyn AI platform. That includes the website at harborwynai.io, the web app, the mobile apps, our API services and any related content (together, the \"Service\").",
          "You accept these Terms when you create an account, buy a plan or use the Service in any other way. If you don't agree with any part of them, you must not access or use the Service.",
        ],
      },
      {
        heading: "2. What The Service Is (And Is Not)",
        paragraphs: [
          "The Service is a tool for information and analysis. We give you market data, trading signals from our AI, risk analytics, backtesting tools and portfolio insights. All of it is for education and information.",
          "The Service is not a broker, an exchange, a custodian, an investment adviser or a dealer in securities or digital assets. We never hold, move or trade your funds. If you turn on one-tap execution, orders go to your chosen exchange, inside your own account and your own custody.",
          "Nothing on the Service is a solicitation, a recommendation, an endorsement or an offer to buy or sell any financial instrument. You make every trading decision on your own, and you carry the risk.",
        ],
      },
      {
        heading: "3. Not Financial Advice",
        paragraphs: [
          "Everything on the Service is general information only. That covers signals, ratings, explanations, articles and community posts. It is not personal investment advice, tax advice or legal advice, and it does not look at your own finances, goals or needs.",
          "Think about whether a strategy or signal is right for you before you act on it. Talk to a licensed professional before you make investment decisions.",
        ],
      },
      {
        heading: "4. Eligibility And Accounts",
        paragraphs: [
          "You must be at least 18 years old, or the age of majority where you live, to use the Service. It's your job to make sure your use of the Service is lawful in your jurisdiction. We don't offer the Service where it is prohibited.",
          "You keep your login details private, and you are responsible for everything that happens under your account. Tell us right away at support@harborwynai.io if you think your account has been compromised.",
          "Give us accurate and complete details when you create an account. Don't impersonate anyone, and don't lie about who you work for.",
        ],
      },
      {
        heading: "5. Acceptable Use",
        paragraphs: [
          "You agree not to: (a) use the Service for anything unlawful; (b) reverse engineer, decompile or try to extract the source code of the Service; (c) resell, redistribute or sublicense access to the Service; (d) try to disrupt, overload or damage the Service; (e) scrape, harvest or mass download content from the Service without our written permission; or (f) use the Service to send malware, spam or any other harmful code.",
          "We may suspend or close accounts that break these rules, with or without notice to you.",
        ],
      },
      {
        heading: "6. Intellectual Property",
        paragraphs: [
          "The Service and everything in it belong to Harborwyn AI Ltd. or our licensors. That includes the Harborwyn AI name and logo, our software, designs, text, graphics, data models and signal methods. Intellectual property laws protect all of it.",
          "As long as you follow these Terms, you get a limited, non-exclusive, non-transferable and revocable licence to access and use the Service. That licence is for your own personal, non-commercial use. You can use the signals you receive for your own trades, but you may not resell them, republish them or pass them on.",
        ],
      },
      {
        heading: "7. Subscriptions, Fees And Cancellations",
        paragraphs: [
          "The Service has free and paid plans, and your dashboard shows what each one includes. Paid plans renew on their own at the end of every billing period, unless you cancel first.",
          "You can cancel at any time from your dashboard. Your cancellation takes effect at the end of the billing period you are in. We refund annual plans pro-rata within the first 30 days, and after that refunds are at our discretion.",
          "We may change our prices, and we will give you at least 30 days' notice if you are a paying subscriber. If you keep using the Service after the new price starts, you accept it.",
        ],
      },
      {
        heading: "8. Third-Party Services",
        paragraphs: [
          "The Service works with exchanges, messaging platforms and data providers that other companies run. We are not responsible for how available, accurate or secure those services are. Your use of them is governed by their own terms.",
        ],
      },
      {
        heading: "9. Disclaimer Of Warranties",
        paragraphs: [
          "We provide the Service \"as is\" and \"as available\". We give no warranties of any kind, whether express or implied. That includes warranties of merchantability, fitness for a particular purpose, accuracy, reliability or non-infringement.",
          "We don't promise that the Service will run without breaks, errors or security problems. We don't promise that signals or analytics will be accurate, complete or profitable. Market data can be delayed, wrong or unavailable.",
        ],
      },
      {
        heading: "10. Limitation Of Liability",
        paragraphs: [
          "As far as the law allows, Harborwyn AI Ltd., its officers, employees and affiliates are not liable for indirect, incidental, special, consequential or punitive damages. That includes any loss of profits, revenue, data or goodwill that comes out of your use of the Service. It also includes losses from trading decisions you make based on Service content.",
          "Our total liability will never be more than the greater of two figures. It is capped at the amounts you paid Harborwyn AI in the twelve months before the claim, or one hundred US dollars ($100). Some jurisdictions do not allow limits like these, and there our liability is limited as far as the law permits.",
        ],
      },
      {
        heading: "11. Indemnification",
        paragraphs: [
          "You agree to indemnify and hold harmless Harborwyn AI Ltd. and its officers, employees and affiliates from any claims, damages, losses or expenses, including reasonable legal fees. This covers claims that come from your use of the Service, from your breach of these Terms, or from your breach of any law or the rights of others.",
        ],
      },
      {
        heading: "12. Termination",
        paragraphs: [
          "You can stop using the Service and close your account at any time. We may suspend or end your access if you breach these Terms, if the law requires it, or if we discontinue the Service and give you reasonable notice.",
        ],
      },
      {
        heading: "13. Changes To These Terms",
        paragraphs: [
          "We may update these Terms from time to time. If a change is material, we will tell you by email or with a notice on the Service at least 14 days before it takes effect. If you keep using the Service after that date, you accept the updated Terms.",
        ],
      },
      {
        heading: "14. Governing Law",
        paragraphs: [
          "These Terms are governed by the laws of the jurisdiction in which Harborwyn AI Ltd. is incorporated. Conflict of law rules do not change that. Any dispute will be resolved in the competent courts of that jurisdiction, but you keep any mandatory consumer protections that apply where you live.",
        ],
      },
      {
        heading: "15. Contact",
        paragraphs: [
          "Questions about these Terms? Contact us at support@harborwynai.io or through the contact page at harborwynai.io/contact.",
        ],
      },
    ],
  },

  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    eyebrow: "Legal",
    sections: [
      {
        heading: "1. Overview",
        paragraphs: [
          "This Privacy Policy explains how Harborwyn AI Ltd. (\"we\", \"us\") collects, uses, stores and protects your personal data. It covers the Harborwyn AI platform and the website at harborwynai.io (the \"Service\"). We believe in being open, and we only collect what we need to run the Service well.",
        ],
      },
      {
        heading: "2. Data We Collect",
        paragraphs: [
          "Account data: your name, email address, password (hashed) and billing details when you buy a paid plan. Other companies handle payments for us, and we do not store full card numbers.",
          "Platform data: your exchange API keys, which stay encrypted at rest and read-only by design. It also covers the balances, positions and trading history you connect to the Service, plus your setup choices, such as your compass settings.",
          "Usage data: the pages you visit, the features you use, your device type and your browser. It includes your approximate location, taken from your IP address. We use this data to run, secure and improve the Service.",
          "Communications: any messages you send us through support, contact forms or community channels.",
        ],
      },
      {
        heading: "3. How We Use Your Data",
        paragraphs: [
          "We use your data to run and personalize the Service, which includes making signals and analytics for the accounts you connect. We also use it to handle plans and billing, to keep the Service safe from fraud and abuse, to answer your support requests, and in aggregate to improve our models and features. We send you service announcements, and product updates if you agree to them.",
          "We do not sell your personal data. We do not use your trading data for advertising either.",
        ],
      },
      {
        heading: "4. Cookies And Similar Technologies",
        paragraphs: [
          "The Service uses essential cookies for login and security, and preference cookies to remember your settings. If you agree, we may also use analytics cookies to understand how people use the Service as a group. You can manage cookies through your browser settings at any time.",
        ],
      },
      {
        heading: "5. Sharing Your Data",
        paragraphs: [
          "We share data only in a few cases. We share it with the providers who run infrastructure, payments and communications for us, and they must keep it confidential. We also share it with the exchanges and other services you connect yourself, and with authorities when the law requires it or when we need to protect our rights and our users.",
          "We never share your exchange API keys with anyone except the exchange they belong to.",
        ],
      },
      {
        heading: "6. Data Retention",
        paragraphs: [
          "We keep your account data while your account is active, and for up to 24 months after you close it, unless the law says we must keep it longer. You can export your data or ask us to delete it at any time through the dashboard, or by emailing support@harborwynai.io. Platform data, such as connected accounts and history, is deleted within 30 days.",
        ],
      },
      {
        heading: "7. Security",
        paragraphs: [
          "We protect your data with encryption in transit (TLS) and at rest (AES-256), access controls on our infrastructure, and constant monitoring. Your exchange API keys are stored encrypted, and we never show them in full again after you enter them. No way of sending or storing data is 100% secure, but we build to the highest standard available to us.",
        ],
      },
      {
        heading: "8. Your Rights",
        paragraphs: [
          "Where you live, you may have the right to see, correct, export or delete your personal data. You may also have the right to limit how we use it, to object to that use, and to take back your consent. To use any of these rights, contact support@harborwynai.io, and we will answer every verified request within 30 days.",
          "If you live in the EEA or the UK, you may also complain to your local supervisory authority. If you are a California resident, you may use your rights under the CCPA/CPRA, including the right to know and the right to delete.",
        ],
      },
      {
        heading: "9. International Transfers",
        paragraphs: [
          "We may process your data in countries outside your own, using safeguards such as standard contractual clauses where the law requires them. By using the Service, you consent to these transfers as far as the law allows.",
        ],
      },
      {
        heading: "10. Children",
        paragraphs: [
          "The Service is not for anyone under the age of 18, and we do not knowingly collect personal data from children. If you believe a child has given us personal data, contact us and we will delete it promptly.",
        ],
      },
      {
        heading: "11. Changes To This Policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time. If a change is material, we will announce it by email or on the Service at least 14 days before it takes effect.",
        ],
      },
      {
        heading: "12. Contact",
        paragraphs: [
          "For privacy questions or requests, contact our Data Protection team at support@harborwynai.io or through harborwynai.io/contact.",
        ],
      },
    ],
  },

  risk: {
    slug: "risk-disclosure",
    title: "Risk Disclosure",
    eyebrow: "Legal",
    sections: [
      {
        heading: "1. General Risk Statement",
        paragraphs: [
          "Trading carries a big risk of loss, and it is not suitable for every investor. That is true for cryptocurrencies, stocks, forex and derivatives. You could lose some or all of the capital you invest, and past performance, including backtested performance, does not tell you what will happen next.",
          "Before you trade, think carefully about your investment goals, your experience and how much risk you can handle. Never trade with money you cannot afford to lose.",
        ],
      },
      {
        heading: "2. Market Volatility",
        paragraphs: [
          "The price of a financial asset can move a lot, and it can move fast. Digital assets are especially volatile, and double-digit daily moves are not uncommon. Markets can also gap through stop loss levels, so your loss can be bigger than you expected.",
        ],
      },
      {
        heading: "3. Signals Are Not Guarantees",
        paragraphs: [
          "Harborwyn AI's signals and analytics come from statistical models. In backtests from 2019 to 2026, the signal engine showed a 68.4% win rate and 92.7% directional accuracy, but individual signals can be wrong, and they will be. A confidence score is not a chance of profit, so never follow a signal without using your own judgment.",
          "Always use stop losses, keep your position sizes inside your risk tolerance, and never follow a signal you do not understand.",
        ],
      },
      {
        heading: "4. Leverage And Derivatives",
        paragraphs: [
          "Trading with leverage makes both your gains and your losses bigger. A position leveraged 10× can be liquidated by a 10% adverse move. Derivatives such as perpetual futures carry extra risks, including funding costs, liquidation mechanics and rules that vary by platform, so only trade leveraged products if you fully understand them.",
        ],
      },
      {
        heading: "5. Execution And Technical Risk",
        paragraphs: [
          "Orders routed through third-party exchanges are subject to that exchange's liquidity, outages, slippage and fees, none of which are under Harborwyn AI's control. An internet or platform failure could delay or prevent an order, including a stop loss order, and that could cost you money.",
        ],
      },
      {
        heading: "6. Cybersecurity Risk",
        paragraphs: [
          "Holding assets on an exchange carries counterparty and cybersecurity risk, including hacking, insolvency and frozen withdrawals. Harborwyn AI connects to exchanges with read-only API keys and never holds customer funds. Even so, the safety of your funds on a connected exchange is still up to that exchange's own security practices and terms.",
        ],
      },
      {
        heading: "7. Psychological Risk",
        paragraphs: [
          "Trading can be hard on your head, and fear, overconfidence and revenge trading are common causes of loss, even for experienced traders. If trading is affecting your wellbeing, stop and get support. The Harborwyn platform is designed to cut down on impulsive decisions, but it cannot remove them.",
        ],
      },
      {
        heading: "8. Fraud Awareness",
        paragraphs: [
          "Watch out for people pretending to be us, and for investment scams. Harborwyn AI will never ask for your password, for withdrawal rights or for custody of your funds, and we will never promise guaranteed returns. Everything official comes from the harborwynai.io domain, so check before you trust, and report suspected fraud to support@harborwynai.io.",
        ],
      },
      {
        heading: "9. Seek Professional Advice",
        paragraphs: [
          "Harborwyn AI provides informational tools, not personal advice. Before you make any investment decision, think about talking to a licensed financial adviser, an accountant or a legal professional who understands your personal circumstances and your jurisdiction.",
        ],
      },
    ],
  },
};
