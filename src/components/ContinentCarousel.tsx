'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

export default function ContinentCarousel() {
  const [startIndex, setStartIndex] = useState(0)

  const getVisibleContinents = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (startIndex + i) % continents.length
      return continents[index]
    })
  }

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % continents.length)
  }

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + continents.length) % continents.length)
  }

  return (
    <div className="relative w-full flex items-center justify-center my-20">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        aria-label="Previous continents"
        className="p-4 text-4xl font-bold text-[#7A5E8A] hover:text-[#5d446a] transition"
      >
        ‹
      </button>

      {/* Carousel */}
      <div className="overflow-hidden w-[90%] max-w-[1600px]">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(-${(100 / visibleCount) * (startIndex % continents.length)}%)`,
          }}
        >
          {getVisibleContinents().map(({ name, href, image }, i) => (
            <Link
              key={`${name}-${i}`}
              href={href}
              className="flex-shrink-0 w-[28vw] max-w-[500px] transition-shadow duration-300 rounded-md hover:shadow-xl border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800"
            >
              <Image
                src={image}
                alt={name}
                width={800}
                height={600}
                className="w-full h-[300px] object-cover rounded-t-md"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        aria-label="Next continents"
        className="p-4 text-4xl font-bold text-[#7A5E8A] hover:text-[#5d446a] transition"
      >
        ›
      </button>
    </div>
  )
}
