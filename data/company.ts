export interface Value {
  title: string;
  copy: string;
  icon: "compass" | "shield" | "eye" | "anchor";
}

export const VALUES: Value[] = [
  {
    title: "Clarity",
    copy: "Every signal comes with a plain English explanation. If you can't see why the engine made a call, it isn't finished yet.",
    icon: "compass",
  },
  {
    title: "Custody",
    copy: "Your keys, your money, your final say. We connect in read-only mode, and we never touch what isn't ours.",
    icon: "shield",
  },
  {
    title: "Candor",
    copy: "We give you honest win rates, honest drawdowns and honest uncertainty. We'd rather lose a sale than oversell a signal.",
    icon: "eye",
  },
  {
    title: "Calm",
    copy: "We built the product to keep you out of bad trades, not to keep you glued to your screen. Boring risk wins.",
    icon: "anchor",
  },
];

export interface Milestone {
  year: string;
  title: string;
  copy: string;
}

export const TIMELINE: Milestone[] = [
  {
    year: "2021",
    title: "The First Light",
    copy: "A small crew of traders and machine learning engineers founds Harborwyn AI. They share one belief, which is that signals should explain themselves.",
  },
  {
    year: "2022",
    title: "The First Signal Engine",
    copy: "The first engine goes live across five crypto markets. It scores 120+ indicators in real time and loses its first backtests, honestly.",
  },
  {
    year: "2023",
    title: "Risk Radar Launches",
    copy: "The discipline layer arrives. It watches volatility, drawdown, correlation and exposure, and it filters signals before they reach you.",
  },
  {
    year: "2024",
    title: "50,000 Traders",
    copy: "The community crosses fifty thousand traders. The Sentiment Stream and one-tap execution ship, and every exchange link goes read-only worldwide.",
  },
  {
    year: "2025",
    title: "Backtesting Lab",
    copy: "Ten years of market history, replayable by anyone. You can kill more bad strategies in the Lab than the market ever could.",
  },
  {
    year: "2026",
    title: "The Harbor Today",
    copy: "Today the harbor holds 128,000+ traders across 70 countries and 40+ markets under watch. The first institutional pilots set sail.",
  },
];
