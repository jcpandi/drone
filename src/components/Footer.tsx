import { LogoMark } from "@/components/Logo";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { footerColumns } from "@/data/content";

const socials = [
  { label: "Instagram", d: "M12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm5.1-1.1a.95.95 0 1 1-1.9 0 .95.95 0 0 1 1.9 0ZM7.5 3.5h9A4 4 0 0 1 20.5 7.5v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4Z" },
  { label: "YouTube", d: "M3.5 8.2c0-1.4 1.1-2.5 2.5-2.6 2-.1 4-.1 6-.1s4 0 6 .1c1.4.1 2.5 1.2 2.5 2.6v7.6c0 1.4-1.1 2.5-2.5 2.6-2 .1-4 .1-6 .1s-4 0-6-.1a2.6 2.6 0 0 1-2.5-2.6V8.2ZM10.3 9.4v5.2l4.5-2.6-4.5-2.6Z" },
  { label: "X", d: "M4 4h4.3l4 5.5L16.9 4H20l-6.2 7.6L20.4 20H16l-4.3-5.9L6.8 20H3.6l6.6-8.1L4 4Z" },
  { label: "Strava", d: "M11 3 5 15h3.6L11 10.2 13.4 15H17L11 3Zm2.5 12-1.6 3.1L10.3 15H8l3.9 6 3.9-6h-2.3Z" },
];

export function Footer() {
  return (
    <footer className="relative z-10 mt-8 overflow-hidden border-t border-white/[0.08]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(110,231,249,0.5),rgba(124,92,255,0.5),transparent)]" />

      <div className="mx-auto w-full max-w-[1240px] px-4 pb-10 pt-16 sm:px-6 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2.65fr]">
          {/* Brand */}
          <Reveal>
            <div className="flex items-center gap-3">
              <LogoMark />
              <div className="flex flex-col leading-none">
                <span className="font-display text-[15px] font-semibold tracking-[0.26em] text-white">
                  AETHER
                </span>
                <span className="mt-1 font-mono text-[9px] tracking-[0.34em] text-white/40">
                  AERIAL SYSTEMS
                </span>
              </div>
            </div>

            <p className="mt-5 max-w-[26rem] text-[14px] leading-relaxed text-white/45">
              We build flying cameras for people who go where the road stops. Designed in
              Reykjavík, field-tested in Patagonia, Svalbard and the Eastern Sierra.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="group grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-400 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="currentColor" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ice-400" />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">
                Assembly line live · Reykjavík
              </span>
            </div>
          </Reveal>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col, i) => (
              <Reveal key={col.title} delay={i * 70}>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="group inline-flex items-center gap-1.5 text-[13.5px] text-white/55 transition-colors duration-300 hover:text-white"
                      >
                        {link}
                        <Icon
                          name="arrow-up-right"
                          className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-70"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Ghost wordmark */}
        <div aria-hidden="true" className="relative mt-16 select-none overflow-hidden">
          <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0))] bg-clip-text text-center font-display text-[clamp(3.6rem,16vw,12rem)] font-bold leading-none tracking-[-0.04em] text-transparent">
            AETHER ONE
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-white/[0.07] pt-7 sm:flex-row">
          <p className="text-center text-[12.5px] text-white/45 sm:text-left">
            © {new Date().getFullYear()} Aether Aerial Systems ehf. All rights reserved. Fictional
            concept brand — photography courtesy of Pexels.
          </p>

          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2 text-[12.5px] text-white/45">
              <Icon name="globe" className="h-3.5 w-3.5" />
              English (US) · $ USD
            </span>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[12.5px] text-white/60 transition-all duration-400 hover:border-white/25 hover:text-white"
            >
              Back to top
              <Icon
                name="arrow-up"
                className="h-3.5 w-3.5 transition-transform duration-400 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
