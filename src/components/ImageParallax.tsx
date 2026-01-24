import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  maxScale?: number;
  scrollZoom?: number;
};

export default function ImageParallax({
  src,
  alt = "",
  className = "",
  maxScale = 1.035, // reduced hover zoom
  scrollZoom = 0.035, // subtle dolly
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const raf = useRef<number | null>(null);

  const state = useRef({
    x: 0,
    y: 0,
    s: 1,

    tx: 0,
    ty: 0,
    ts: 1,

    vx: 0,
    vy: 0,

    scrollTarget: 0,
  });

  useEffect(() => {
    const el = containerRef.current;
    const img = imgRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion: disable interactive parallax if user requests reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      if (img) img.style.transform = "scale(1)";
      return;
    }

    const strengthX = 28; // reduced parallax
    const strengthY = 12;
    const friction = 0.965; // longer motion tail
    const ease = 0.02; // slower reaction

    const onMouseMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top) / r.height - 0.5;

      state.current.tx = mx * strengthX;
      state.current.ty = my * strengthY;
      start();
    };

    const onEnter = () => {
      state.current.ts = 1 + state.current.scrollTarget + (maxScale - 1);
      start();
    };

    const onLeave = () => {
      state.current.tx = 0;
      state.current.ty = 0;
      state.current.ts = 1 + state.current.scrollTarget;
      start();
    };

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = 1 - Math.min(Math.max(r.top / vh, 0), 1);
      state.current.scrollTarget = progress * scrollZoom;
      state.current.ts = 1 + state.current.scrollTarget;
      start();
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    function start() {
      if (raf.current) return;
      raf.current = requestAnimationFrame(loop);
    }

    function loop() {
      const img = imgRef.current;
      if (!img) return;

      const st = state.current;

      st.vx += (st.tx - st.x) * ease;
      st.vy += (st.ty - st.y) * ease;
      st.vx *= friction;
      st.vy *= friction;

      st.x += st.vx;
      st.y += st.vy;

      st.s += (st.ts - st.s) * 0.03;

      img.style.transform = `
        translate3d(${st.x.toFixed(2)}px, ${st.y.toFixed(2)}px, 0)
        scale(${st.s.toFixed(4)})
      `;

      if (
        Math.abs(st.vx) + Math.abs(st.vy) > 0.005 ||
        Math.abs(st.ts - st.s) > 0.0008
      ) {
        raf.current = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(raf.current!);
        raf.current = null;
      }
    }

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [maxScale, scrollZoom]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        draggable={false}
        style={{
          filter: "contrast(1.08) brightness(0.95)",
        }}
      />
    </div>
  );
}
