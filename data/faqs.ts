export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "How Does Harborwyn AI Generate Its Signals?",
    answer:
      "The engine reads price action, order flow, on-chain data and news sentiment across 40+ markets. It then scores 120+ indicators with machine learning models that we retrain on fresh data all the time. Every signal comes with an entry, a stop loss, a target and a plain English explanation, so you're never trading a black box. Each signal also carries an honest confidence score, which shows how unusual or routine the setup really is.",
  },
  {
    question: "Does Harborwyn AI Trade For Me?",
    answer:
      "No, and that's on purpose. Harborwyn AI is a decision engine, not a fund. Signals reach you on the web, on mobile and on Telegram, and one-tap execution lets you decide whether to act. Your keys, your custody, your final say.",
  },
  {
    question: "Is This Financial Advice?",
    answer:
      "No. Harborwyn AI gives you educational tools and information. Nothing on the platform is personal investment advice for your situation, and all trading carries a big risk of loss. Always do your own research, and never risk money you can't afford to lose.",
  },
  {
    question: "Which Exchanges Can You Connect?",
    answer:
      "You can connect Binance, Coinbase, Kraken, Bybit, OKX, Bitfinex, KuCoin, Gate.io, Interactive Brokers and nine more. They all link through read-only API keys. New exchanges take under two minutes to add.",
  },
  {
    question: "How Accurate Are Your Signals?",
    answer:
      "Across backtests from 2019 to 2026, the engine shows a 68.4% win rate and 92.7% directional accuracy on qualified setups. Past results never promise future ones, so every signal also carries an honest confidence score. The Risk Radar also keeps you away from weak setups.",
  },
  {
    question: "Can You Cancel Anytime?",
    answer:
      "Yes. You can upgrade, downgrade or cancel in one click from your dashboard. There are no phone calls and no retention maze, and annual plans are refunded pro-rata within the first 30 days.",
  },
  {
    question: "Is Your Data Secure?",
    answer:
      "Exchange links use read-only API keys, so Harborwyn AI can never withdraw your funds. Your data is encrypted in transit and at rest, and we never sell it to third parties. You can export or delete your account data at any time.",
  },
];
