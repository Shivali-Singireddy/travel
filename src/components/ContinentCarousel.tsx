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

function ContinentCarousel() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 3

  function getVisibleContinents() {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % continents.length
      result.push(continents[index])
    }
    return result
  }

  function prev() {
    setStartIndex((startIndex - 1 + continents.length) % continents.length)
  }

  function next() {
    setStartIndex((startIndex + 1) % continents.length)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-center gap-8">
      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous continents"
        className="p-4 text-[#7A5E8A] hover:text-[#5e4568] transition"
      >
        <ChevronLeftIcon className="h-12 w-12" />
      </button>

      {/* Continent Cards */}
      <div className="flex gap-8 overflow-hidden">
        {getVisibleContinents().map(({ name, href, image }) => (
          <Link
            key={name}
            href={href}
            className="block cursor-pointer rounded-md border border-[#7A5E8A] shadow-md hover:shadow-lg transition-shadow"
            style={{ width: 220, height: 220 }}
          >
            <Image
              src={image}
              alt={name}
              width={220}
              height={220}
              className="object-cover rounded-md"
              priority
            />
          </Link>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next continents"
        className="p-4 text-[#7A5E8A] hover:text-[#5e4568] transition"
      >
        <ChevronRightIcon className="h-12 w-12" />
      </button>
    </div>
  )
}

export default ContinentCarousel
