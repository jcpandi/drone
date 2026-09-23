/** Fixed ambient background: aurora fields, terrain grid, vignette and film grain. */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#131a33_0%,#080a14_45%,#04050a_100%)]" />

      {/* Aurora fields */}
      <div className="absolute -top-[22vh] left-[8%] h-[62vh] w-[62vh] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.30),transparent_65%)] blur-[90px] animate-drift" />
      <div className="absolute top-[14vh] right-[2%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.28),transparent_65%)] blur-[110px] animate-drift-rev" />
      <div className="absolute bottom-[-18vh] left-[26%] h-[56vh] w-[80vh] rounded-full bg-[radial-gradient(circle,rgba(255,120,73,0.20),transparent_68%)] blur-[120px] animate-drift" />

      {/* Terrain grid */}
      <div className="grid-lines absolute inset-x-0 top-0 h-[190vh] opacity-70 [mask-image:radial-gradient(120%_70%_at_50%_0%,#000_10%,transparent_75%)]" />

      {/* Horizon line */}
      <div className="absolute left-1/2 top-[64vh] h-px w-[140%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(110,231,249,0.35),rgba(167,139,250,0.28),transparent)] blur-[0.5px]" />

      {/* Vignette + grain */}
      <div className="absolute inset-0 bg-[radial-gradient(110%_75%_at_50%_45%,transparent_40%,rgba(2,3,8,0.85)_100%)]" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
