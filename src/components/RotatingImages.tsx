'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import machupichu from '@/images/photos/machupichu.jpg'
import horse from '@/images/photos/horse.jpg'

const images = [machupichu, horse]

export function RotatingImages({ width = 250, height = 250 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ position: 'relative', width, height }}>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img}
          alt={`Image ${i + 1}`}
          width={width}
          height={height}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'opacity 0.8s ease-in-out',
            opacity: i === index ? 1 : 0,
            objectFit: 'cover',
          }}
          priority={i === index} // optional for best performance
        />
      ))}
    </div>
  )
}
