"use client";

import dynamic from "next/dynamic";

const DotGrid = dynamic(() => import("@/components/DotGrid"), {
  ssr: false,
});

export default function DotGridBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#E8DED0]">
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#C8B8A3"
        activeColor="#8F7A6A"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}
