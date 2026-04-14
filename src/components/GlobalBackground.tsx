"use client";

import { Canvas } from "@react-three/fiber";
import { ShaderPlane, EnergyRing } from "@/components/ui/background-paper-shaders";
import { Suspense } from "react";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Black base */}
      <div className="absolute inset-0 bg-black" />
      {/* Shader canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <ShaderPlane position={[-1.5, 1, 0]} color1="#1a1a1a" color2="#333333" />
          <ShaderPlane position={[1.5, -0.5, -1]} color1="#000000" color2="#1a1a1a" />
          <ShaderPlane position={[0, 0.5, -2]} color1="#333333" color2="#ffffff" />
          <EnergyRing radius={1.5} position={[0, 0, -3]} />
          <EnergyRing radius={0.8} position={[-2, -1, -2]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
