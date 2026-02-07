import heroVideo from "@/assets/nova.mp4";

export function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Video layer */}
      <video
        className="absolute inset-0
    w-full
    h-full
    object-cover
    min-h-[100svh]
    sm:min-h-full"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Dark industrial overlay (contrast tuning) */}
      <div
        className="
  absolute inset-0
  bg-gradient-to-b
  from-black/40 via-black/30 to-black/60
  sm:from-black/60 sm:via-black/45 sm:to-black/70
"
      />

      {/* Vignette */}
      <div
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)",
          mixBlendMode: "multiply",
        }}
        className="sm:opacity-100 opacity-70"
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
