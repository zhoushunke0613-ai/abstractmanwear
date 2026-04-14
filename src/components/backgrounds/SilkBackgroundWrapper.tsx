"use client";

import dynamic from "next/dynamic";

const SilkBackground = dynamic(() => import("./SilkBackground"), {
  ssr: false,
});

export default function SilkBackgroundWrapper() {
  return <SilkBackground />;
}
