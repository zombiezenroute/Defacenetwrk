"use client";

import Image from "next/image";
import HoverMenu from "../components/HoverMenu";
import MusicPlayer from "../components/MusicPlayer";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Layer 1 - Base background */}
      <Image
        src="/Background.png" // replace with your base background image
        alt="Background Layer 1"
        fill
        style={{ objectFit: "fill", zIndex: 0 }}
        priority
      />

      {/* Layer 2–10 - Additional adjustable layers */}
      {[...Array(9)].map((_, i) => (
        <Image
          key={i}
          src={`/layer${i + 2}.png`} // Example: layer2.png ... layer10.png
          alt={`Layer ${i + 2}`}
          fill
          style={{
            objectFit: "fill",
            opacity: 1, // adjust this (0–1)
            zIndex: i + 1,
            mixBlendMode: "normal", // try "overlay", "screen", "multiply", etc.
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      ))}

      {/* Content overlay */}
      <div className="absolute inset-0 z-50">
        <HoverMenu />
        <MusicPlayer />
      </div>
    </div>
  );
}
