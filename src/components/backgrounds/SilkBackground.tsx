"use client";

import Silk from "@/components/Silk";

interface SilkBackgroundProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

export default function SilkBackground({
  speed = 2,
  scale = 1.3,
  color = "#2a2d30",
  noiseIntensity = 0.6,
  rotation = 0.15,
}: SilkBackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10 bg-[#131517]">
      <Silk
        speed={speed}
        scale={scale}
        color={color}
        noiseIntensity={noiseIntensity}
        rotation={rotation}
      />
    </div>
  );
}
