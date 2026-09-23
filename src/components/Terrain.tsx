import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparison, terrains } from "@/data/content";

export function Terrain() {
  return (
    <section id="terrain" className="relative z-10 scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto w-full max-w-[1240px]">
        <SectionHeading
          eyebrow="Built for your terrain"
          title={
            <>
              Three environments that break drones.
              <br className="hidden sm:block" /> <span className="text-white/45">None of them break this one.</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {terrains.map((t, i) => (
            <Reveal
              key={t.tag}
              delay={i * 120}
              as="article"
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-ink-900 shadow-[0_40px_80px_-50px_rgba(0,0,0,1)] transition-all duration-700 hover:border-white/25 hover:shadow-[0_50px_100px_-45px_rgba(0,0,0,1)]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[4/5] md:aspect-[3/4.2]">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="h-full w-full scale-105 object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.18]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,10,0.15)_0%,rgba(4,5,10,0.55)_45%,rgba(4,5,10,0.96)_100%)]" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(70%_50%_at_50%_100%,rgba(110,231,249,0.18),transparent_70%)]" />

                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/80">
                  <Icon name="compass" className="h-3 w-3" />
                  {t.tag}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-[24px] font-semibold leading-tight text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/60">{t.body}</p>

                  <ul className="mt-4 grid gap-2 overflow-hidden transition-all duration-700 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[13px] text-white/75">
                        <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-ice-400" strokeWidth={2.4} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Comparison */}
        <Reveal delay={120} className="mt-16">
          <div className="overflow-hidden rounded-[28px] glass">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 border-b border-white/[0.08] px-5 py-4 sm:px-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                The difference
              </span>
              <span className="text-center font-display text-[13px] font-semibold tracking-wide text-white sm:text-[15px]">
                Aether One
              </span>
              <span className="text-center text-[12px] text-white/35 sm:text-[13px]">
                Typical adventure drone
              </span>
            </div>

            {comparison.map((row, i) => (
              <div
                key={row.label}
                className="group grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 border-b border-white/[0.05] px-5 py-4 transition-colors duration-400 last:border-0 hover:bg-white/[0.035] sm:px-7"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                <span className="text-[13px] text-white/60 sm:text-[14px]">{row.label}</span>
                <span className="flex items-center justify-center gap-2 text-center text-[13px] font-medium text-white sm:text-[14px]">
                  <Icon
                    name="check"
                    className="hidden h-3.5 w-3.5 shrink-0 text-ember-400 sm:block"
                    strokeWidth={2.6}
                  />
                  {row.aether}
                </span>
                <span className="text-center text-[12.5px] text-white/32 sm:text-[13.5px]">
                  {row.other}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
