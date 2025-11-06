"use client"
import Image from "next/image"

export default function LayeredBackground() {
  // Each layer is a separate image
  const layers = [
    { src: "/speakerbounce.gif", z: 1, opacity: 1 },
    { src: "/layer2.png", z: 2, opacity: 0.9 },
    { src: "/layer3.png", z: 3, opacity: 0.8 },
    { src: "/layer4.png", z: 4, opacity: 0.7 },
    { src: "/layer5.png", z: 5, opacity: 0.6 },
    { src: "/layer6.png", z: 6, opacity: 0.5 },
    { src: "/layer7.png", z: 7, opacity: 0.4 },
    { src: "/layer8.png", z: 8, opacity: 0.3 },
    { src: "/layer9.png", z: 9, opacity: 0.2 },
    { src: "/layer10.png", z: 10, opacity: 0.1 },
  ]

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden">
      {layers.map((layer, index) => (
        <Image
          key={index}
          src={layer.src}
          alt={`Layer ${index + 1}`}
          fill
          priority
          style={{
            objectFit: "cover",
            zIndex: layer.z,
            opacity: layer.opacity,
            position: "absolute",
          }}
        />
      ))}
    </div>
  )
}
