import { useEffect, useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/utils/cn";

const FILM_SRC = "https://videos.pexels.com/video-files/26081680/11929613_1920_1080_60fps.mp4";
const FILM_POSTER =
  "https://images.pexels.com/videos/26081680/4k-drone-4k-drone-video-4k-video-aerial-26081680.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1280";

export function FilmModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!open) {
      videoRef.current?.pause();
      return;
    }
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    void videoRef.current?.play().catch(() => undefined);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Aether One field film"
      className={cn(
        "fixed inset-0 z-[60] flex items-center justify-center p-4 transition-all duration-500 sm:p-8",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-ink-950/85 backdrop-blur-xl"
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative w-full max-w-[1080px] overflow-hidden rounded-[26px] glass-strong p-2 shadow-[0_60px_140px_-50px_rgba(0,0,0,1)] transition-all duration-500",
          open ? "translate-y-0 scale-100" : "translate-y-6 scale-95",
        )}
      >
        <div className="relative overflow-hidden rounded-[20px] bg-black">
          <video
            ref={videoRef}
            src={open ? FILM_SRC : undefined}
            poster={FILM_POSTER}
            controls
            loop
            muted
            playsInline
            preload="none"
            className="aspect-video h-auto w-full"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-3">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ember-400" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/50">
              Aether One · field film · shot autonomously
            </span>
          </div>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/30">
            8K60 · LogM · no operator
          </span>
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close film"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink-950/70 text-white/80 backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:border-white/35 hover:text-white"
        >
          <Icon name="close" className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
