/**
 * Market content for Harborwyn AI.
 * All series are hand-authored or generated with a seeded PRNG so the
 * server-rendered HTML and the hydrated client render byte-identically.
 */

export interface TickerItem {
  symbol: string;
  name: string;
  price: number;
  changePct: number;
}

export interface Candle {
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface SignalItem {
  symbol: string;
  pair: string;
  action: "BUY" | "SELL" | "WAIT";
  confidence: number;
  entry: number;
  target: number;
  stop: number;
  time: string;
}

export interface Holding {
  asset: string;
  symbol: string;
  color: string;
  allocation: number; // % of invested capital
  price: number;
  changePct: number;
  pnl: number;
  value: number;
}

/* ------------------------------------------------------------------ */
/* Ticker tape                                                        */
/* ------------------------------------------------------------------ */

export const TICKERS: TickerItem[] = [
  { symbol: "BTC", name: "Bitcoin", price: 67482.1, changePct: 2.34 },
  { symbol: "ETH", name: "Ethereum", price: 3518.42, changePct: 1.87 },
  { symbol: "SOL", name: "Solana", price: 162.77, changePct: 4.12 },
  { symbol: "BNB", name: "BNB", price: 594.3, changePct: -0.42 },
  { symbol: "XRP", name: "XRP", price: 0.6134, changePct: 0.94 },
  { symbol: "ADA", name: "Cardano", price: 0.4581, changePct: -1.26 },
  { symbol: "AVAX", name: "Avalanche", price: 32.14, changePct: 2.91 },
  { symbol: "LINK", name: "Chainlink", price: 17.63, changePct: 0.35 },
  { symbol: "DOT", name: "Polkadot", price: 6.42, changePct: -0.87 },
  { symbol: "DOGE", name: "Dogecoin", price: 0.1326, changePct: 1.58 },
  { symbol: "AAPL", name: "Apple", price: 231.44, changePct: 0.62 },
  { symbol: "NVDA", name: "NVIDIA", price: 128.96, changePct: 3.08 },
  { symbol: "TSLA", name: "Tesla", price: 246.39, changePct: -1.14 },
  { symbol: "SPY", name: "S&P 500 ETF", price: 573.82, changePct: 0.41 },
  { symbol: "EUR/USD", name: "Euro / Dollar", price: 1.1084, changePct: -0.22 },
  { symbol: "XAU", name: "Gold", price: 2652.7, changePct: 0.78 },
];

/* ------------------------------------------------------------------ */
/* Candlesticks, BTC/USD 4h, deterministic walk                      */
/* ------------------------------------------------------------------ */

/** Mulberry32, tiny deterministic PRNG. */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(20260928);
let cursor = 61240;

export const CANDLES: Candle[] = Array.from({ length: 42 }, () => {
  const drift = (rand() - 0.47) * 0.019;
  const open = cursor;
  const close = open * (1 + drift);
  const high = Math.max(open, close) * (1 + rand() * 0.013);
  const low = Math.min(open, close) * (1 - rand() * 0.013);
  cursor = close;
  return { open, high, low, close };
});

export const CANDLE_SIGNALS = {
  buyIndex: 27,
  sellIndex: 34,
  lastClose: CANDLES[CANDLES.length - 1].close,
};

/* ------------------------------------------------------------------ */
/* Performance, Harborwyn Composite vs benchmarks, indexed to 100    */
/* ------------------------------------------------------------------ */

export interface PerformanceSeries {
  labels: string[];
  harborwyn: number[];
  btc: number[];
  spy: number[];
}

export const PERFORMANCE: PerformanceSeries = {
  labels: [
    "Q1 '22", "Q2 '22", "Q3 '22", "Q4 '22",
    "Q1 '23", "Q2 '23", "Q3 '23", "Q4 '23",
    "Q1 '24", "Q2 '24", "Q3 '24", "Q4 '24",
    "Q1 '25", "Q2 '25", "Q3 '25", "Q4 '25",
    "Q1 '26", "Q2 '26", "Q3 '26",
  ],
  harborwyn: [
    100, 112, 131, 124, 143, 159, 176, 195, 211, 238, 262, 287,
    304, 331, 358, 376, 391, 404, 412,
  ],
  btc: [
    100, 68, 59, 51, 78, 84, 79, 97, 122, 116, 121, 147,
    139, 158, 152, 171, 166, 178, 189,
  ],
  spy: [
    100, 91, 88, 96, 103, 111, 107, 118, 128, 133, 140, 146,
    150, 154, 158, 161, 163, 163, 164,
  ],
};

/* ------------------------------------------------------------------ */
/* Sparklines                                                         */
/* ------------------------------------------------------------------ */

export const SPARK_HERO = [42, 45, 44, 48, 47, 52, 55, 53, 58, 61, 60, 64, 68, 67, 72];

export const SPARK_SIGNALS = [30, 34, 33, 38, 36, 41, 39, 44, 47, 45, 50, 53, 51, 56, 59, 62, 61, 66];

/* ------------------------------------------------------------------ */
/* Signal feed (Showcase · Signals tab)                               */
/* ------------------------------------------------------------------ */

export const SIGNAL_FEED: SignalItem[] = [
  {
    symbol: "BTC", pair: "BTC/USD", action: "BUY", confidence: 94,
    entry: 67482, target: 71300, stop: 65900, time: "2m ago",
  },
  {
    symbol: "ETH", pair: "ETH/USD", action: "SELL", confidence: 87,
    entry: 3518, target: 3340, stop: 3625, time: "14m ago",
  },
  {
    symbol: "SOL", pair: "SOL/USD", action: "WAIT", confidence: 91,
    entry: 0, target: 0, stop: 0, time: "31m ago",
  },
];

/* ------------------------------------------------------------------ */
/* Portfolio (Showcase · Portfolio tab)                               */
/* ------------------------------------------------------------------ */

export const HOLDINGS: Holding[] = [
  { asset: "Bitcoin", symbol: "BTC", color: "#BE8529", allocation: 42, price: 67482.1, changePct: 2.34, pnl: 18.4, value: 26480 },
  { asset: "Ethereum", symbol: "ETH", color: "#9B6BEA", allocation: 26, price: 3518.42, changePct: 1.87, pnl: 11.2, value: 16380 },
  { asset: "Solana", symbol: "SOL", color: "#1DA88E", allocation: 12, price: 162.77, changePct: 4.12, pnl: 26.1, value: 7560 },
  { asset: "Avalanche", symbol: "AVAX", color: "#3987E5", allocation: 8, price: 32.14, changePct: 2.91, pnl: -4.8, value: 5040 },
];

export const CASH_RESERVE = { allocation: 12, value: 7420 };

/* ------------------------------------------------------------------ */
/* Risk panel (Showcase · Risk tab)                                   */
/* ------------------------------------------------------------------ */

export interface RiskRow {
  label: string;
  score: number; // 0-100
  status: "good" | "warning" | "serious" | "critical";
}

export const RISK_ROWS: RiskRow[] = [
  { label: "Volatility Exposure", score: 22, status: "good" },
  { label: "Drawdown Depth", score: 14, status: "good" },
  { label: "Cross-Asset Correlation", score: 31, status: "good" },
  { label: "Leverage In Use", score: 18, status: "good" },
];

export const RISK_SCORE = 23;
export const RISK_STATUS: RiskRow["status"] = "good";
