import { cn } from "@/utils/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid h-9 w-9 place-items-center rounded-[13px] bg-[linear-gradient(140deg,rgba(110,231,249,0.9),rgba(124,92,255,0.85)_55%,rgba(255,120,73,0.9))] shadow-[0_8px_24px_-8px_rgba(124,92,255,0.9)]",
        className,
      )}
    >
      <span className="absolute inset-[1.5px] rounded-[11px] bg-ink-950/85" />
      <svg viewBox="0 0 24 24" className="relative h-[19px] w-[19px]" aria-hidden="true">
        <defs>
          <linearGradient id="aetherMark" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#A8F4FF" />
            <stop offset="55%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#FFB489" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke="url(#aetherMark)"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3.4 20 20.6 12 16.3 4 20.6 12 3.4Z" />
          <path d="M12 3.4v12.9" opacity="0.55" />
        </g>
      </svg>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="Aether — back to top"
    >
      <LogoMark className="transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-[0.26em] text-white">
          AETHER
        </span>
        <span className="mt-1 font-mono text-[9px] tracking-[0.34em] text-white/40">
          AERIAL SYSTEMS
        </span>
      </span>
    </a>
  );
}
