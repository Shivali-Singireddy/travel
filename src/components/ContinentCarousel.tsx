'use client'

import React, { useState } from 'react'
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

export default function ContinentCarousel() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 3

  const next = () => {
    setStartIndex((prev) => (prev + 1) % continents.length)
  }

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + continents.length) % continents.length)
  }

  // Combine visible continents with looping logic
  const getVisibleContinents = () => {
    const result = []
    for (let i = 0; i < continents.length + visibleCount; i++) {
      const index = (startIndex + i) % continents.length
      result.push(continents[index])
    }
    return result
  }

  return (
    <div className="w-full max-w-[1600px] mx-auto mt-20 flex items-center justify-center gap-8 px-4">
      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous continents"
        className="w-24 h-24 flex items-center justify-center text-[#7A5E8A] hover:text-[#5e4568] transition rounded-full bg-white shadow-md"
      >
        <ChevronLeftIcon className="h-10 w-10" />
      </button>

      {/* Carousel Window */}
      <div className="relative w-full max-w-[1100px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-8"
          style={{
            transform: `translateX(-${startIndex * (320 + 32)}px)`,
            width: `${continents.length * (320 + 32)}px`,
          }}
        >
          {getVisibleContinents().map(({ name, href, image }, i) => (
            <Link
              key={`${name}-${i}`}
              href={href}
              className="flex-shrink-0 border border-zinc-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md"
              style={{ width: '320px', height: '220px' }}
            >
              <Image
                src={image}
                alt={name}
                width={320}
                height={220}
                className="object-cover w-full h-full"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next continents"
        className="w-24 h-24 flex items-center justify-center text-[#7A5E8A] hover:text-[#5e4568] transition rounded-full bg-white shadow-md"
      >
        <ChevronRightIcon className="h-10 w-10" />
      </button>
    </div>
  )
}
