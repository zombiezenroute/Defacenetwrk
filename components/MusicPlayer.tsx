"use client";

import { useState, useRef, useEffect } from "react";

interface Song {
  src: string;
  title: string;
  albumCover: string;
}

export default function MusicPlayer() {
  const songs: Song[] = [
    { src: "/dim.mp3", title: "Dearest, I'm So Sorry", albumCover: "/pmb.jpg" },
    { src: "/Kilos.mp3", title: "Kilos", albumCover: "/Kilos.jpg" },
    { src: "/FNF.mp3", title: "Flexin' N Finesse", albumCover: "/LilJay.jpg" },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.5); // default volume 50%
  const audioRef = useRef<HTMLAudioElement>(null);

  // Optional: autoplay after user interaction
  useEffect(() => {
    const handleClick = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener("click", handleClick);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const playSong = (index: number) => {
    setCurrentSongIndex(index);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        audioRef.current.volume = volume; // maintain current volume
      }
    }, 100);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const song = songs[currentSongIndex];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-50">
      {/* Playlist icons */}
      <div className="flex gap-4 px-2">
        {songs.map((s, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer p-2 rounded 
                        ${index === currentSongIndex ? "bg-white/20" : "bg-white/10"} 
                        hover:bg-white/30 transition`}
            onClick={() => playSong(index)}
          >
            <img
              src={s.albumCover}
              className="w-12 h-12 rounded-md"
              alt={s.title}
            />
          </div>
        ))}
      </div>

      {/* Volume Slider */}
      <div className="flex flex-col items-center w-48">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-2 rounded-lg bg-gray-300 accent-blue-500"
        />
        <span className="text-white text-sm mt-1">
          Volume: {Math.round(volume * 100)}%
        </span>
      </div>

      <audio src={song.src} ref={audioRef} autoPlay loop />
    </div>
  );
}
