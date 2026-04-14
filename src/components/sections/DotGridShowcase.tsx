"use client";

import dynamic from "next/dynamic";

const DotGrid = dynamic(() => import("@/components/DotGrid"), {
  ssr: false,
});

export default function DotGridShowcase() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative" style={{ width: "100%", height: "600px" }}>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="text-center max-w-3xl px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
              Interactive
            </p>
            <h2 className="text-4xl lg:text-6xl font-extralight tracking-tight text-white mb-6">
              [Interactive Headline]
            </h2>
            <p className="text-white/60 text-base lg:text-lg leading-relaxed">
              Move your cursor across the grid. Click to create ripples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
