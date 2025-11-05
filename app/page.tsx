"use client";

import Image from "next/image";
import HoverMenu from "../components/HoverMenu";
import MusicPlayer from "../components/MusicPlayer";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/imagemain.png"
        alt="Homepage background"
        fill
        style={{ objectFit: "fill" }} // keeps image stretched instead of zooming
        priority
      />

      {/* Overlay for content */}
      <div className="absolute inset-0">
        {/* Slide-out menu */}
        <HoverMenu />

        {/* Background music player */}
        <MusicPlayer />
      </div>
    </div>
  );
}
