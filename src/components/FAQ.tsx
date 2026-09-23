import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/content";
import { cn } from "@/utils/cn";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Questions"
            title={
              <>
                The things people
                <br className="hidden sm:block" /> ask before they commit.
              </>
            }
            body="Still unsure? Our support team are working pilots — not a script. They'll tell you honestly whether this is the right aircraft for your trip."
          />

          <Reveal delay={220}>
            <div className="mt-8 rounded-2xl glass p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06] text-ice-300">
                  <Icon name="compass" className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <div className="text-[14px] font-medium text-white">Talk to a staff pilot</div>
                  <div className="text-[12.5px] text-white/45">Average reply: 2h 14m</div>
                </div>
              </div>
              <Button href="#reserve" variant="glass" size="md" className="mt-5 w-full">
                Ask a question
                <Icon name="arrow-up-right" className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 70}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-500",
                    isOpen
                      ? "border-white/18 bg-white/[0.055] shadow-[0_30px_70px_-50px_rgba(0,0,0,1)]"
                      : "border-white/[0.08] bg-white/[0.022] hover:border-white/15 hover:bg-white/[0.04]",
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span
                        className={cn(
                          "font-display text-[16px] font-medium transition-colors duration-300 sm:text-[17.5px]",
                          isOpen ? "text-white" : "text-white/78",
                        )}
                      >
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500",
                          isOpen
                            ? "rotate-180 border-white/25 bg-white text-ink-950"
                            : "border-white/12 bg-white/[0.04] text-white/60",
                        )}
                      >
                        <Icon name="chevron-down" className="h-4 w-4" strokeWidth={2} />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${i}`}
                    className={cn(
                      "grid transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 pr-10 text-[14.5px] leading-relaxed text-white/55 sm:px-6 sm:pr-14">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
