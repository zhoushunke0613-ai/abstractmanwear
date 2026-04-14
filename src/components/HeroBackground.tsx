"use client";

import { Canvas } from "@react-three/fiber";
import { ShaderPlane } from "@/components/ui/background-paper-shaders";
import { Suspense } from "react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Suspense fallback={null}>
          <ShaderPlane position={[0, 0, 0]} color1="#e8e4de" color2="#f7f4ef" />
          <ShaderPlane position={[1.5, 0.5, -1]} color1="#d8d4ce" color2="#f0ece4" />
        </Suspense>
      </Canvas>
    </div>
  );
}
