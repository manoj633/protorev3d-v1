import heroImg from "@/assets/turbine.jpeg";
import ImageParallax from "@/components/ImageParallax";

export function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
      {/* Image layer (hero perspective) - interactive */}
      <div className="absolute inset-0">
        <ImageParallax
          src={heroImg}
          alt="Precision turbine fixture perspective"
          className="w-full h-full"
          maxScale={1.02}
        />
      </div>

      {/* Dark industrial overlay (tuned for contrast) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70 backdrop-blur-sm pointer-events-none" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
