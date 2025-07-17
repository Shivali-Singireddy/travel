'use client'

import Image, { type StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

export function RotatingImages({
  images = [/* your image array here */],
  interval = 3000,
  width = 460,
  height = 490,
}: {
  images: StaticImageData[]
  interval?: number
  width?: number
  height?: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div
      className="relative"
      style={{
        width,
        height,
        overflow: 'hidden',
      }}
    >
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img}
          alt={`Rotating Image ${i}`}
          width={width}
          height={height * 1.3} // optional: make image taller to allow cropping
          className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  )
}
