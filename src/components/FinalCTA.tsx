import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { media } from "@/data/content";
import { cn } from "@/utils/cn";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sent">("idle");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setError("Enter a valid email so we can hold your place in line.");
      return;
    }
    setError("");
    setState("sent");
  };

  return (
    <section id="reserve" className="relative z-10 scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <Reveal className="mx-auto w-full max-w-[1240px]">
        <div className="relative overflow-hidden rounded-[34px] border border-white/12 shadow-[0_60px_140px_-70px_rgba(0,0,0,1)]">
          {/* Backdrop */}
          <img
            src={media.coastDusk}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,5,10,0.96)_10%,rgba(6,8,18,0.78)_52%,rgba(4,5,10,0.65)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_85%_20%,rgba(124,92,255,0.28),transparent_65%)]" />
          <div className="absolute -bottom-32 left-[10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,120,73,0.28),transparent_70%)] blur-3xl animate-drift" />
          <div className="grain absolute inset-0" />

          <div className="relative grid gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:py-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/70">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ember-400" />
                1,412 units left in the first run
              </span>

              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.02] text-white">
                The horizon isn't
                <br className="hidden sm:block" /> going to{" "}
                <span className="text-gradient">film itself.</span>
              </h2>

              <p className="mt-5 max-w-[34rem] text-[16px] leading-relaxed text-white/60">
                Join the reservation list and lock in first-run pricing, free Care+ for a year, and
                a place in the March 2026 delivery window. Fully refundable, no card required today.
              </p>

              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Fully refundable deposit",
                  "30-day flight test",
                  "Free worldwide shipping",
                  "Firmware updates for life",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-[14px] text-white/70">
                    <Icon name="check" className="h-4 w-4 text-ice-400" strokeWidth={2.4} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form card */}
            <div className="relative rounded-[26px] glass-strong p-6 sm:p-8">
              <div
                className={cn(
                  "transition-all duration-500",
                  state === "sent" ? "pointer-events-none absolute inset-6 opacity-0 blur-sm" : "opacity-100",
                )}
              >
                <h3 className="font-display text-[20px] font-semibold text-white">
                  Reserve your Aether One
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/50">
                  We'll email your configuration link and hold your slot for 72 hours.
                </p>

                <form onSubmit={submit} className="mt-6" noValidate>
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <div className="group relative">
                    <input
                      id="cta-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="you@basecamp.com"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? "cta-error" : undefined}
                      className={cn(
                        "h-[54px] w-full rounded-full border bg-white/[0.04] px-5 pr-5 text-[15px] text-white placeholder:text-white/30",
                        "transition-all duration-300 outline-none",
                        error
                          ? "border-ember-500/70"
                          : "border-white/12 focus:border-ice-400/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(110,231,249,0.12)]",
                      )}
                    />
                  </div>

                  {error && (
                    <p id="cta-error" role="alert" className="mt-2.5 px-1 text-[12.5px] text-ember-300">
                      {error}
                    </p>
                  )}

                  <Button type="submit" size="lg" className="mt-3 w-full" magnetic={false}>
                    Hold my place in line
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Button>
                </form>

                <p className="mt-4 text-center text-[11.5px] leading-relaxed text-white/32">
                  No spam, ever. One email when your window opens — unsubscribe in a click.
                </p>
              </div>

              {/* Success state */}
              <div
                className={cn(
                  "flex flex-col items-center justify-center text-center transition-all duration-700",
                  state === "sent"
                    ? "opacity-100 blur-0"
                    : "pointer-events-none absolute inset-0 scale-95 opacity-0 blur-sm",
                )}
              >
                <span className="relative grid h-16 w-16 place-items-center rounded-full bg-[linear-gradient(140deg,rgba(110,231,249,0.35),rgba(124,92,255,0.35))]">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full border border-ice-400/70" />
                  <Icon name="check" className="h-7 w-7 text-white" strokeWidth={2.6} />
                </span>
                <h3 className="mt-5 font-display text-[21px] font-semibold text-white">
                  You're on the list.
                </h3>
                <p className="mt-2 max-w-[22rem] text-[14px] leading-relaxed text-white/55">
                  Position <span className="font-mono text-ice-300">#04,188</span> — your
                  configuration link is on its way to{" "}
                  <span className="text-white/80">{email}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setState("idle");
                    setEmail("");
                  }}
                  className="mt-6 text-[13px] text-white/45 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Reserve another aircraft
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
