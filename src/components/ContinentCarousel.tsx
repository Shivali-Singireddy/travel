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

  // Returns visible continents with wrap-around using modulo
  function getVisibleContinents() {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % continents.length
      result.push(continents[index])
    }
    return result
  }

  // Looping previous
  function prev() {
    setStartIndex((startIndex - 1 + continents.length) % continents.length)
  }

  // Looping next
  function next() {
    setStartIndex((startIndex + 1) % continents.length)
  }

  return (
    <div className="relative w-full max-w-full mx-auto flex items-center gap-6 px-4">
      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous continents"
        className="p-3 text-3xl text-[#7A5E8A] hover:text-[#5e4568] transition"
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>

      {/* Continent Cards */}
      <div className="flex overflow-hidden flex-grow gap-6">
        {getVisibleContinents().map(({ name, href, image }) => (
          <Link
            key={name}
            href={href}
            className="flex flex-col items-center border border-[#7A5E8A] rounded-md p-4 cursor-pointer hover:shadow-lg transition-shadow bg-[#FAF5EF]"
          >
            <Image
              src={image}
              alt={name}
              width={150}
              height={150}
              className="object-cover rounded"
            />
            <span className="mt-3 text-center font-semibold text-[#7A5E8A]">{name}</span>
          </Link>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next continents"
        className="p-3 text-3xl text-[#7A5E8A] hover:text-[#5e4568] transition"
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>
    </div>
  )
}

export default ContinentCarousel
