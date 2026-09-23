import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { planAssurances, plans } from "@/data/content";
import { cn } from "@/utils/cn";

export function Pricing() {
  const [financed, setFinanced] = useState(false);

  return (
    <section id="pricing" className="relative z-10 scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionHeading
          eyebrow="Reserve yours"
          title={
            <>
              One aircraft. <span className="text-gradient">Three ways to pack it.</span>
            </>
          }
          body="Every kit ships with the same airframe, the same sensor and the same autonomy stack. The difference is how long you stay out."
        />

        {/* Billing toggle */}
        <Reveal delay={120} className="mt-10 flex justify-center">
          <div
            role="group"
            aria-label="Payment option"
            className="relative flex items-center gap-1 rounded-full glass p-1.5"
          >
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-y-1.5 w-[calc(50%-6px)] rounded-full bg-white transition-transform duration-500 ease-out",
                financed ? "translate-x-[calc(100%+6px)]" : "translate-x-0",
              )}
            />
            {[
              { k: false, label: "Pay once" },
              { k: true, label: "12 months, 0% APR" },
            ].map((opt) => (
              <button
                key={String(opt.k)}
                type="button"
                aria-pressed={financed === opt.k}
                onClick={() => setFinanced(opt.k)}
                className={cn(
                  "relative z-10 w-[148px] rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-500 sm:w-[168px]",
                  financed === opt.k ? "text-ink-950" : "text-white/55 hover:text-white",
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 110}
              as="article"
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-[28px] p-7 transition-all duration-600 ease-out sm:p-8",
                plan.featured
                  ? "glass-strong lg:-my-3 lg:py-11 border-white/20 shadow-[0_50px_110px_-50px_rgba(124,92,255,0.75)]"
                  : "glass hover:-translate-y-1.5 hover:border-white/20",
              )}
            >
              {plan.featured && (
                <>
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(110,231,249,0.9),rgba(255,120,73,0.9),transparent)]" />
                  <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.3),transparent_70%)] blur-2xl" />
                </>
              )}

              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-[21px] font-semibold text-white">{plan.name}</h3>
                  <p className="mt-1.5 max-w-[19rem] text-[13.5px] leading-relaxed text-white/45">
                    {plan.tagline}
                  </p>
                </div>
                {plan.badge && (
                  <span className="shrink-0 rounded-full bg-[linear-gradient(120deg,#FFC78A,#FF7849)] px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ink-950">
                    {plan.badge}
                  </span>
                )}
              </div>

              <div className="relative mt-7 flex items-end gap-2">
                <span className="font-display text-[44px] font-semibold leading-none text-white">
                  ${financed ? plan.monthly : plan.once.toLocaleString("en-US")}
                </span>
                <span className="pb-1.5 text-[13px] text-white/45">
                  {financed ? "/mo for 12 mo" : "one time"}
                </span>
              </div>
              <p className="relative mt-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/30">
                {financed
                  ? `$${plan.once.toLocaleString("en-US")} total · 0% APR`
                  : `or $${plan.monthly}/mo at 0% APR`}
              </p>

              <Button
                href="#reserve"
                variant={plan.featured ? "primary" : "glass"}
                size="lg"
                magnetic={false}
                className="relative mt-7 w-full"
              >
                {plan.cta}
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>

              <ul className="relative mt-8 space-y-3.5 border-t border-white/[0.08] pt-7">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-white/70">
                    <span
                      className={cn(
                        "mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full",
                        plan.featured
                          ? "bg-[linear-gradient(120deg,rgba(255,199,138,0.25),rgba(255,120,73,0.25))] text-ember-300"
                          : "bg-white/[0.07] text-ice-300",
                      )}
                    >
                      <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="grow" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {planAssurances.map((a) => (
              <span key={a} className="inline-flex items-center gap-2 text-[13px] text-white/45">
                <Icon name="shield" className="h-4 w-4 text-white/30" />
                {a}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-[38rem] text-center text-[12.5px] leading-relaxed text-white/40">
            Prices in USD, excluding local duties. Deposits are fully refundable until your aircraft
            enters final assembly. Financing offered through our partner bank, subject to approval.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
