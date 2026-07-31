export type TimelineThemeName =
  | "birth"
  | "birthday"
  | "christmas"
  | "school"
  | "default";

export type TimelineTheme = {
  title: string;
  accent: string;
  glow: string;
  divider: string;
  quote: string;
};

export const timelineThemes: Record<
  TimelineThemeName,
  TimelineTheme
> = {
  birth: {
    title: "text-pink-100",
    accent: "text-pink-200",
    glow: "drop-shadow-[0_0_35px_rgba(255,190,235,.45)]",
    divider: "via-pink-300/80",
    quote: "text-pink-100",
  },

  birthday: {
    title: "text-yellow-100",
    accent: "text-yellow-200",
    glow: "drop-shadow-[0_0_35px_rgba(255,220,120,.40)]",
    divider: "via-yellow-300/80",
    quote: "text-yellow-100",
  },

  christmas: {
    title: "text-red-100",
    accent: "text-red-200",
    glow: "drop-shadow-[0_0_35px_rgba(255,120,120,.35)]",
    divider: "via-red-300/80",
    quote: "text-red-100",
  },

  school: {
    title: "text-sky-100",
    accent: "text-sky-200",
    glow: "drop-shadow-[0_0_35px_rgba(160,220,255,.45)]",
    divider: "via-sky-300/80",
    quote: "text-sky-100",
  },

  default: {
    title: "text-white",
    accent: "text-pink-200",
    glow: "drop-shadow-[0_0_35px_rgba(255,190,235,.30)]",
    divider: "via-pink-300/70",
    quote: "text-pink-100",
  },
};