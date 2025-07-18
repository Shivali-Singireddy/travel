// components/RotatingImages.tsx

'use client'

import Image, { type StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

export function RotatingImages({
  images,
  interval = 3000,
  width = 300,
  height = 300,
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
      style={{ width, height }}
    >
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img}
          alt={`Rotating Image ${i}`}
          width={width}
          height={height}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            objectPosition:
              img.src.includes('books') ? 'center 50%' : 'center', // Move books image down
          }}
        />
      ))}
    </div>
  )
}
