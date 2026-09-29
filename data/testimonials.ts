export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I used to check charts forty times a day. Now Harborwyn AI tells me when it matters and, just as important, when it doesn't. My screen time is down and my P&L is up.",
    name: "Maya Reyes",
    role: "Swing trader · 6 years",
    location: "Sydney, Australia",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "The Risk Radar alone is worth the subscription. It talked me out of three bad entries this month before I could make them.",
    name: "Diego Ferreira",
    role: "Day trader",
    location: "Toronto, Canada",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "This is the first platform where the AI actually explains its reasoning. I trust the signals because I understand them.",
    name: "Priya Sharma",
    role: "Portfolio manager",
    location: "London, United Kingdom",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "My account went from down 12% to up 31% in one quarter. Same markets, better head. That's the whole review.",
    name: "Tom Keller",
    role: "Retail trader",
    location: "New York, United States",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "Signals land on Telegram before I finish my coffee, and execution takes one tap. It just works.",
    name: "Elena Vasquez",
    role: "Futures trader",
    location: "Singapore",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    quote:
      "The Backtesting Lab is dangerous in the best way. I killed four losing strategies before they ever touched real money.",
    name: "Marcus Bennett",
    role: "Systems trader",
    location: "Berlin, Germany",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];
