import { cn } from "@/utils/cn";

export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "play"
  | "check"
  | "plus"
  | "minus"
  | "star"
  | "menu"
  | "close"
  | "sparkle"
  | "shield"
  | "battery"
  | "camera"
  | "wind"
  | "signal"
  | "compass"
  | "snowflake"
  | "feather"
  | "globe"
  | "chevron-down"
  | "quote"
  | "target"
  | "map"
  | "bolt"
  | "eye"
  | "volume"
  | "cpu"
  | "arrow-up";

const paths: Record<IconName, React.ReactNode> = {
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M9 7h8v8" />,
  "arrow-up": <path d="M12 19V5M6 11l6-6 6 6" />,
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
  check: <path d="m4 12.5 5 5L20 6.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  star: (
    <path d="m12 3.6 2.6 5.5 6 .85-4.35 4.2 1.03 5.95L12 17.3l-5.28 2.8 1.03-5.95L3.4 9.95l6-.85L12 3.6Z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  sparkle: <path d="M12 3v5M12 16v5M3 12h5M16 12h5M6.3 6.3l3 3M14.7 14.7l3 3M17.7 6.3l-3 3M9.3 14.7l-3 3" />,
  shield: <path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />,
  battery: (
    <>
      <rect x="2" y="8" width="16" height="9" rx="2.5" />
      <path d="M21 11.5v2M6 12h6" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h2L9 4h6l1.5 2h2A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-8Z" />
      <circle cx="12" cy="12.2" r="3.4" />
    </>
  ),
  wind: <path d="M3 8h9a3 3 0 1 0-3-3M3 12h13a3 3 0 1 1-3 3M3 16h7" />,
  signal: <path d="M5 19v-4M10 19v-8M15 19v-12M20 19V5" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5 4.5-1.9Z" />
    </>
  ),
  snowflake: <path d="M12 2v20M4.2 6.5l15.6 11M19.8 6.5 4.2 17.5M12 6l-2.5-2.5M12 6l2.5-2.5M12 18l-2.5 2.5M12 18l2.5 2.5" />,
  feather: (
    <>
      <path d="M20.2 4.1a5.5 5.5 0 0 0-7.8 0l-7 7V18h6.9l7-7a5.5 5.5 0 0 0-.1-6.9Z" />
      <path d="M15 8 4 19" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3.5 15h17M12 3a15 15 0 0 1 0 18A15 15 0 0 1 12 3Z" />
    </>
  ),
  "chevron-down": <path d="m6 9.5 6 6 6-6" />,
  quote: <path d="M9.5 6C6.9 7.3 5 10 5 13.2 5 16 6.6 18 9 18c1.9 0 3.3-1.4 3.3-3.3 0-1.8-1.3-3.2-3-3.2-.3 0-.6 0-.8.1.3-1.6 1.5-3 3.1-3.9L9.5 6Zm9 0c-2.6 1.3-4.5 4-4.5 7.2 0 2.8 1.6 4.8 4 4.8 1.9 0 3.3-1.4 3.3-3.3 0-1.8-1.3-3.2-3-3.2-.3 0-.6 0-.8.1.3-1.6 1.5-3 3.1-3.9L18.5 6Z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
    </>
  ),
  map: <path d="m3 6.5 6-2.5 6 2.5 6-2.5v13l-6 2.5-6-2.5-6 2.5v-13ZM9 4v13M15 6.5v13" />,
  bolt: <path d="M13.5 2 5 13.5h6L10.5 22 19 10.5h-6L13.5 2Z" />,
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  volume: <path d="M11 5 6.5 9H3v6h3.5L11 19V5ZM15.5 9.5a3.5 3.5 0 0 1 0 5M18.5 6.5a7.5 7.5 0 0 1 0 11" />,
  cpu: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2.5" />
      <path d="M10 3v3.5M14 3v3.5M10 17.5V21M14 17.5V21M3 10h3.5M3 14h3.5M17.5 10H21M17.5 14H21" />
    </>
  ),
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
  filled = false,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("h-5 w-5", className)}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
