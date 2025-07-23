'use client'
import { useRef } from 'react'
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
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ContinentCarousel() {
  const [startIndex, setStartIndex] = useState(0)

  const visibleCount = 3
  const endIndex = startIndex + visibleCount

  const canGoPrev = startIndex > 0
  const canGoNext = endIndex < continents.length

  function prev() {
    if (canGoPrev) setStartIndex(startIndex - 1)
  }

  function next() {
    if (canGoNext) setStartIndex(startIndex + 1)
  }

  return (
    <div className="relative w-full mx-auto max-w-7xl flex items-center">
      {/* Left Arrow */}
      <button
        onClick={prev}
        disabled={!canGoPrev}
        aria-label="Previous continents"
        className={`p-3 text-2xl font-bold transition ${
          canGoPrev ? 'text-[#7A5E8A]' : 'text-gray-300 cursor-not-allowed'
        }`}
      >
        ‹
      </button>

      {/* Continent Cards */}
      <div className="flex overflow-hidden flex-grow gap-6 px-4">
        {continents.slice(startIndex, endIndex).map(({ name, href, image }) => (
          <Link
            key={name}
            href={href}
            className="flex flex-col items-center border border-zinc-300 dark:border-zinc-600 rounded-lg bg-[#FAF5EF] dark:bg-zinc-800 p-4 cursor-pointer hover:shadow-lg hover:border-[#7A5E8A] transition-all"
          >
            <Image
              src={image}
              alt={name}
              width={140}
              height={140}
              className="object-cover rounded-md"
            />
            <span className="mt-3 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
              {name}
            </span>
          </Link>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        disabled={!canGoNext}
        aria-label="Next continents"
        className={`p-3 text-2xl font-bold transition ${
          canGoNext ? 'text-[#7A5E8A]' : 'text-gray-300 cursor-not-allowed'
        }`}
      >
        ›
      </button>
    </div>
  )
}

export default ContinentCarousel


