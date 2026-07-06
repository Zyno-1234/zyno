"use client";

import Hero from "@/components/ar/Hero";
import Scene from "@/components/ar/Scene";

export default function ARPage() {
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top,#0f172a,#020617 60%,#000)",
      }}
    >
      <Scene />

      <Hero />
    </main>
  );
}