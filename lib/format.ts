/** Format a number as a USD price, e.g. 67482.1 -> "$67,482.10". */
export function formatPrice(value: number, decimals = 2): string {
  return `$${value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

/** Format a percentage with an explicit sign, e.g. 2.34 -> "+2.34%". */
export function formatPct(value: number, decimals = 2): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(decimals)}%`;
}

/** Compact number, e.g. 2400000000 -> "$2.4B". */
export function compactNumber(value: number, prefix = "$"): string {
  if (value >= 1e9) return `${prefix}${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `${prefix}${(value / 1e6).toFixed(1)}M`;
  if (value >= 1e3) return `${prefix}${(value / 1e3).toFixed(1)}K`;
  return `${prefix}${value}`;
}
