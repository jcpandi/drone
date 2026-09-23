import { useState } from "react";
import { Backdrop } from "@/components/Backdrop";
import { CursorGlow } from "@/components/CursorGlow";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { FilmModal } from "@/components/FilmModal";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Showcase } from "@/components/Showcase";
import { SocialProof } from "@/components/SocialProof";
import { StickyCTA } from "@/components/StickyCTA";
import { Terrain } from "@/components/Terrain";
import { Testimonials } from "@/components/Testimonials";

export default function App() {
  const [filmOpen, setFilmOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-ink-950 text-white antialiased">
      <Backdrop />
      <CursorGlow />
      <Navbar />

      <main id="main" tabIndex={-1} className="relative outline-none">
        <Hero onPlayFilm={() => setFilmOpen(true)} />
        <SocialProof />
        <Features />
        <Showcase />
        <Gallery />
        <Terrain />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
      <FilmModal open={filmOpen} onClose={() => setFilmOpen(false)} />
    </div>
  );
}
