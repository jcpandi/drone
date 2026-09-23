import { Reveal } from "@/components/ui/Reveal";
import { media } from "@/data/content";

const shots = [
  { src: media.canyon, caption: "Fjaðrárgljúfur, IS · 8K60 · 412 m AGL" },
  { src: media.lake, caption: "Lake Wānaka, NZ · TrailLock orbit" },
  { src: media.perth, caption: "Cape Naturaliste, AU · 38 mph gusts" },
  { src: media.mist, caption: "Torres del Paine, CL · LiDAR assist" },
  { src: media.sicily, caption: "Monte Cofano, IT · golden hour" },
  { src: media.heroTerrain, caption: "Hohe Tauern, AT · −16°C cold start" },
  { src: media.cliffs, caption: "Uluwatu, ID · swell-tracking mode" },
  { src: media.fjord, caption: "Lofoten, NO · 52-minute single flight" },
];

export function Gallery() {
  const loop = [...shots, ...shots];

  return (
    <section aria-label="Shot on Aether One" className="relative z-10 py-16 lg:py-20">
      <Reveal className="mx-auto mb-8 w-full max-w-[1240px] px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/35">
              Shot on Aether One
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold text-white">
              Unretouched frames from the pilot community.
            </h2>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
            #flyaether · 214,908 frames
          </span>
        </div>
      </Reveal>

      <div className="marquee mask-fade-x relative overflow-hidden">
        <div className="marquee-track-slow flex w-max gap-4 pr-4">
          {loop.map((shot, i) => (
            <figure
              key={`${shot.caption}-${i}`}
              className="group relative h-[220px] w-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-[280px] sm:w-[420px]"
            >
              <img
                src={shot.src}
                alt={shot.caption}
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-all duration-[1.4s] ease-out group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(4,5,10,0.92))]" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-1.5 p-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/60 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {shot.caption}
              </figcaption>
              <span className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full bg-ice-400 opacity-0 shadow-[0_0_10px_2px_rgba(110,231,249,0.6)] transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
