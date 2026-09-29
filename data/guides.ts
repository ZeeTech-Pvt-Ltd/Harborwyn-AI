export interface GuideSection {
  heading: string;
  paragraphs: string[];
  callout?: { type: "tip" | "warning"; text: string };
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  date: string;
  metaTitle: string;
  metaDescription: string;
  sections: GuideSection[];
}

export const GUIDES: Guide[] = [
  {
    slug: "harborwyn-ai-getting-started",
    title: "Getting Started With Harborwyn AI: From Sign Up To Your First Signal",
    metaTitle: "How To Start Trading With AI",
    metaDescription:
      "New to Harborwyn AI? Connect your exchange and get your first signal in ten minutes. Start your free 14-day trial today.",
    excerpt:
      "A simple walkthrough of your first ten minutes on Harborwyn AI. You'll connect your exchange, set your compass and get your first signal.",
    tag: "Getting started",
    readTime: "6 min read",
    date: "Sep 24, 2026",
    sections: [
      {
        heading: "Your First Ten Minutes",
        paragraphs: [
          "Every trip out of the harbor starts the same way, with a clean departure. Harborwyn AI was built so the gap between 'I signed up' and 'I'm trading with a clear head' is measured in minutes, not days.",
          "Once you create your account, the platform walks you through three short steps. You connect an exchange, set your compass, and meet your dashboard. There's no long phone check, no form with forty fields, and no card on day one, so your 14-day Captain trial just starts.",
        ],
      },
      {
        heading: "Step 1, Connect Your Exchange (Read-Only)",
        paragraphs: [
          "Harborwyn AI links to Binance, Coinbase, Kraken, Bybit, OKX and twelve more exchanges with read-only API keys. These keys let the platform see your balances and put signals in front of you. They can never pull out funds.",
          "When you make an API key on your exchange, turn the 'withdrawals' permission off. The Harborwyn setup wizard shows you which boxes to tick for each exchange. Most traders are connected in under two minutes.",
        ],
        callout: {
          type: "warning",
          text: "Never share an API key that can withdraw funds. Not with anyone, and not with us. Read-only means read-only.",
        },
      },
      {
        heading: "Step 2, Set Your Compass",
        paragraphs: [
          "Your compass is the profile Harborwyn uses to filter the signal stream for you. You pick a style (scalp, swing or HODL) and set the most risk per trade you can live with. Scalps last minutes to hours, swings last days to weeks, and HODL runs for months to years.",
          "A smaller risk budget doesn't just shrink your position sizes. It changes which signals the engine shows you. High confidence, low volatility setups float to the top for a calm compass, while bold compasses see more trades with more upside.",
          "You can change your compass at any time. Many traders keep two, one for their main account and one for a small test account.",
        ],
      },
      {
        heading: "Step 3, Meet Your Dashboard",
        paragraphs: [
          "Your dashboard is your command deck. The live signal feed sits on the left, your portfolio sits on the right, and the Risk Radar sweeps overhead. Spend two minutes in the Signals, Portfolio and Risk views, and you'll see the same data the engine sees.",
        ],
      },
      {
        heading: "Step 4, Your First Signal",
        paragraphs: [
          "Your first signal usually lands within the hour, on your dashboard, on Telegram, or both. Each signal comes with four things. You get an entry zone, a stop loss, a target, and a plain English note on why the engine likes the setup.",
          "Read that note, because it's the difference between following a black box and learning to see the market like the engine does. Then you decide: take it, trim it, or skip it. You're the captain, and Harborwyn is the lighthouse.",
        ],
        callout: {
          type: "tip",
          text: "For your first two weeks, trade every signal on paper before you risk real money. The Backtesting Lab and paper mode let you build confidence for free.",
        },
      },
    ],
  },
  {
    slug: "ai-trading-signals-explained",
    title: "How AI Trading Signals Work, And Why They Beat Guesswork",
    metaTitle: "How AI Trading Signals Work",
    metaDescription:
      "Learn how AI trading signals work and why they beat guesswork. Try the Harborwyn AI signal engine free for 14 days.",
    excerpt:
      "What really happens between a market tick and a Harborwyn signal? You get a plain English tour of the engine, what it reads, and why every signal comes with an explanation.",
    tag: "Signals",
    readTime: "7 min read",
    date: "Sep 18, 2026",
    sections: [
      {
        heading: "Signals Are Decisions, Packaged",
        paragraphs: [
          "A trading signal is a decision in a box. You enter this market, near this price, with this stop and this target, because of this reason. The gap between a good signal and a guess is what happens before the box is sealed.",
          "Harborwyn AI builds its signals from three layers. Market data covers price action, order flow and volatility. Context covers news, social sentiment and on-chain activity, and discipline is the risk filters that decide if a setup is worth your money at all.",
        ],
      },
      {
        heading: "Layer One, The Data Diet",
        paragraphs: [
          "The engine reads price data, order books, funding rates, open interest and volatility across 40+ markets, about 2.4 billion data points a day. But size isn't the edge. The filters are.",
          "For each market, the engine scores more than 120 technical and structural indicators. Then it weights them by how well they've predicted moves in that exact market mood. A breakout pattern that works in a trend gets ignored in choppy water, and the engine knows the difference because it has seen both thousands of times.",
        ],
      },
      {
        heading: "Layer Two, Reading The Crowd",
        paragraphs: [
          "Markets are stories that people tell each other. Harborwyn's language models read the news wire, X, Telegram channels and on-chain transfers as they happen. Then they turn that noise into a live sentiment score for every asset you track.",
          "When sentiment and price disagree, that's useful news. A rally on fading conviction is weak, and a dip on rising conviction is often a gift. The Sentiment Stream shows you these splits as they form.",
        ],
      },
      {
        heading: "Layer Three, Discipline As A Filter",
        paragraphs: [
          "The best signal is often the one you don't take. Before any setup reaches your screen, it has to pass the Risk Radar. That means volatility inside your compass, drawdown inside your budget, and no overlap with the positions you already hold.",
          "About a third of the engine's best technical setups get thrown out by these filters. That's not waste, it's the whole point. You don't need every wave, just the waves worth sailing.",
        ],
      },
      {
        heading: "Why Every Signal Comes With An Explanation",
        paragraphs: [
          "Black boxes fail you twice. They're hard to trust when they're right, and impossible to learn from when they're wrong. Every Harborwyn signal comes with a plain English note: which indicators fired, what sentiment looks like, and what would kill the setup.",
          "Over time, reading these notes teaches you to spot setups on your own. Many members who've been here for years say the signals become a check for their own analysis. That's exactly how a lighthouse should work.",
        ],
        callout: {
          type: "tip",
          text: "A signal is only as good as its stop. If you can't place the stop at the level we suggest because the market is thin, skip the trade.",
        },
      },
    ],
  },
  {
    slug: "risk-management-guide",
    title: "The Harborwyn Guide To Position Sizing And Risk",
    metaTitle: "Trading Risk Management Guide",
    metaDescription:
      "Simple position sizing and risk rules every trader needs. Protect your account with the Harborwyn AI Risk Radar. Try it free.",
    excerpt:
      "Risk first, returns second. Here's how you size positions, place stops and keep drawdowns boring, the same rules the Risk Radar runs on.",
    tag: "Risk",
    readTime: "8 min read",
    date: "Sep 11, 2026",
    sections: [
      {
        heading: "Risk Is A Decision You Make Before The Trade",
        paragraphs: [
          "Most trading losses don't start with a bad entry. They start with sizing that was never a real choice. Positions grow on a feeling, and stops move on hope.",
          "You can fix this with one rule you write in a single line: never risk more than a set share of your account on one trade. Harborwyn's default compass is 1%, and many pros use 0.5%. The number matters less than the fact that it never changes.",
        ],
      },
      {
        heading: "The Position Size Formula",
        paragraphs: [
          "Once your risk per trade is fixed, position size is simple math: divide your dollar risk by the distance to your stop. If you risk $100 and your stop sits 2% from entry, your position is $5,000, full stop. Not $6,000 because you like the setup, and not $4,000 because you're nervous.",
          "The engine does this math for you on every signal, so you never have to do it in the heat of the moment. One-tap execution fills the exact size your compass allows.",
        ],
      },
      {
        heading: "Stops Are Promises",
        paragraphs: [
          "A stop loss is a promise you make to your future self. The engine puts suggested stops at levels where the setup is truly broken, not at round numbers where the crowd parks theirs.",
          "There's one rule: stops only move in one direction. You can tighten a stop to lock in gains. If you widen one because the market went against you, small losses turn into account killers.",
        ],
        callout: {
          type: "warning",
          text: "Never widen a stop after you enter. A loss bigger than your planned risk isn't a trade anymore. It's an unplanned event.",
        },
      },
      {
        heading: "Correlation Is The Hidden Risk",
        paragraphs: [
          "Five positions can look spread out and still move as one. When everything you hold is a crypto asset that rallies at the same time, your real exposure is the sum, not the parts.",
          "The Risk Radar scores correlation between assets in real time. When your positions start moving as one, it tells you, and suggests which one to trim. Treat that nudge as a stop loss on your whole portfolio.",
        ],
      },
      {
        heading: "Drawdown Is A Schedule, Not A Surprise",
        paragraphs: [
          "Every strategy has a normal drawdown. Across nine years of backtests, the Harborwyn Composite's worst was 11.4%. Knowing your strategy's normal drawdown ahead of time is what lets you sit through it without selling the bottom in a panic.",
          "If your account ever drops more than your strategy's expected drawdown, the engine raises a flag. That's the moment to stop trading and review your journal. Ask whether the market mood changed, and don't double down.",
        ],
      },
    ],
  },
  {
    slug: "backtesting-basics",
    title: "Backtesting 101: Prove Your Strategy Before You Trade",
    metaTitle: "Trading Strategy Backtesting Guide",
    metaDescription:
      "Prove your strategy before you risk a dollar. Learn backtesting basics with the Harborwyn AI Backtesting Lab. Start free today.",
    excerpt:
      "Why most strategies fail the first test, how to read a backtest report with honest eyes, and the four traps to avoid.",
    tag: "Strategy",
    readTime: "7 min read",
    date: "Sep 4, 2026",
    sections: [
      {
        heading: "The Backtest Is The Cheapest Money You'll Ever Lose",
        paragraphs: [
          "Every strategy works in the mind of the person who built it. A backtest is where that idea meets ten years of real market history. Most of them die there, which is a mercy, because they never get the chance to hurt you.",
          "Harborwyn's Backtesting Lab replays 2019 to 2026 data across 40+ markets. You can test entry rules, stop placement, position sizing and profit targets against what really happened, not what you remember.",
        ],
      },
      {
        heading: "How To Read A Report Honestly",
        paragraphs: [
          "A backtest report is a handful of numbers, and the order you read them in matters. Start with max drawdown, because if you can't live through it, nothing else matters. Then read the win rate and profit factor together, because a 40% win rate with a 2.5 profit factor is serious while an 80% win rate with a 0.9 profit factor is a slow leak.",
          "Next, read the equity curve from left to right and ask one question. Would you have kept trading through the worst flat stretch? If your honest answer is no, the strategy isn't for you, even if the final number is green.",
        ],
      },
      {
        heading: "The Four Traps Of Overfitting",
        paragraphs: [
          "Trap one is testing too many rules on too little history. With enough knobs, any strategy can look perfect in the past and fall apart the next day. Trap two is ignoring costs, since spreads, fees and slippage turn many so-so backtests negative.",
          "Trap three is survivorship, because testing only on assets that still exist today flatters every strategy. The losers were delisted long ago. Trap four is the quiet one: you tweak the strategy after the test until it passes, which is just trap one in a disguise.",
        ],
        callout: {
          type: "tip",
          text: "The Harborwyn rule of thumb: a strategy is worth live testing only if it survives a drawdown twice as big as you expected. It also has to stay profitable after you add fees.",
        },
      },
      {
        heading: "From Paper To Production",
        paragraphs: [
          "A strategy that passes its backtest earns a paper account. You get live signals and real market conditions, with zero dollars at risk. Trade on paper for at least four weeks, through one quiet week and one wild one, then compare your live results with the backtest.",
          "When your live results track the backtest, scale in slowly. Use half size for the first month, then go full size only once your journal shows you're following the plan instead of making it up. The market will still be there.",
        ],
      },
      {
        heading: "The Best Strategy Is The One You Can Execute",
        paragraphs: [
          "The best backtest ever written is worthless if it asks you to sit through a 30% drawdown you can't handle. It's just as worthless if it needs orders placed at 3 a.m. when you'll be asleep. Pick the strategy that fits your life first, then tune it.",
        ],
      },
    ],
  },
];
