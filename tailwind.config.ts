import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep-ocean navy ramp — the "harbor at night" canvas.
        abyss: {
          950: "#04070F",
          900: "#070C1A",
          800: "#0A1224",
          700: "#101B35",
        },
        ink: "#EAF0FB",
        mist: "#9AA8C7",
        // Lighthouse gold — the brand accent.
        gold: {
          300: "#F7CE7E",
          400: "#F0B84B",
          500: "#D99A2B",
          600: "#B87B1C",
        },
        // Signal teal & coral — up/down delta cues (always paired with sign + arrow).
        teal: "#3FD8C1",
        coral: "#FF6B5E",
        // Validated dark-mode categorical steps (L 0.48–0.67, surface #0A1224).
        chart: {
          gold: "#BE8529",
          violet: "#9B6BEA",
          teal: "#1DA88E",
          blue: "#3987E5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        sweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        radar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "80%, 100%": { transform: "scale(2.6)", opacity: "0" },
        },
      },
      animation: {
        ticker: "ticker 45s linear infinite",
        sweep: "sweep 42s linear infinite",
        radar: "radar 4.2s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "ping-slow": "ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      backgroundImage: {},
      boxShadow: {
        glow: "0 0 44px -10px rgba(240, 184, 75, 0.4)",
        card: "0 24px 64px -28px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
