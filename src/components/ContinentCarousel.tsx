'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

import africaImg from '@/app/destinations/africa/morocco/chefchaouen/chef_post.png'
import asiaImg from '@/app/destinations/asia.png'
import europeImg from '@/app/destinations/europe.png'
import northAmericaImg from '@/app/destinations/north_america.png'
import southAmericaImg from '@/app/destinations/south_america.png'

const continents = [
  { name: 'Europe', href: '/destinations/europe', image: europeImg },
  { name: 'North America', href: '/destinations/north_america', image: northAmericaImg },
  { name: 'South America', href: '/destinations/south_america', image: southAmericaImg },
  { name: 'Africa', href: '/destinations/africa', image: africaImg },
  { name: 'Asia', href: '/destinations/asia', image: asiaImg },
]

const visibleCount = 3
const cardWidth = 340  // card width + gap

export default function ContinentCarousel() {
  const [index, setIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Clone first few for seamless loop
  const extendedContinents = [...continents, ...continents.slice(0, visibleCount)]

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIndex((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setIndex((prev) => prev - 1)
  }

  // Reset index seamlessly after final slide
  useEffect(() => {
    if (index === continents.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        setIndex(0)
        if (wrapperRef.current) {
          wrapperRef.current.style.transition = 'none'
          wrapperRef.current.style.transform = `translateX(0px)`
        }
      }, 500) // Wait for animation
      return () => clearTimeout(timeout)
    }

    if (index === -1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        setIndex(continents.length - 1)
        if (wrapperRef.current) {
          wrapperRef.current.style.transition = 'none'
          wrapperRef.current.style.transform = `translateX(-${(continents.length - 1) * cardWidth}px)`
        }
      }, 500)
      return () => clearTimeout(timeout)
    }

    if (wrapperRef.current) {
      wrapperRef.current.style.transition = 'transform 0.5s ease-in-out'
      wrapperRef.current.style.transform = `translateX(-${index * cardWidth}px)`
    }

    const cleanup = setTimeout(() => setIsTransitioning(false), 500)
    return () => clearTimeout(cleanup)
  }, [index])

  return (
    <div className="w-full max-w-[1800px] mx-auto mt-20 flex items-center justify-center gap-8 px-4">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="w-24 h-24 flex items-center justify-center text-[#7A5E8A] hover:text-[#5e4568] transition rounded-full bg-white shadow-md"
      >
        <ChevronLeftIcon className="h-10 w-10" />
      </button>

      {/* Carousel Window */}
      <div className="relative w-full max-w-[1100px] overflow-hidden">
        <div
          ref={wrapperRef}
          className="flex gap-8"
          style={{
            transform: `translateX(-${index * cardWidth}px)`,
            transition: 'transform 0.5s ease-in-out',
            width: `${extendedContinents.length * cardWidth}px`,
          }}
        >
          {extendedContinents.map(({ name, href, image }, i) => (
            <Link
              key={`${name}-${i}`}
              href={href}
              className="flex-shrink-0 border border-zinc-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md"
              style={{ width: '320px', height: '240px' }}
            >
              <Image
                src={image}
                alt={name}
                width={320}
                height={240}
                className="object-cover w-full h-full"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="w-24 h-24 flex items-center justify-center text-[#7A5E8A] hover:text-[#5e4568] transition rounded-full bg-white shadow-md"
      >
        <ChevronRightIcon className="h-10 w-10" />
      </button>
    </div>
  )
}
