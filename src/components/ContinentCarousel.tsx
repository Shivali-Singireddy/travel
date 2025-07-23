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

function getVisibleContinents() {
  const result = [];
  for (let i = 0; i < visibleCount; i++) {
    // Use modulo to wrap around
    const index = (startIndex + i) % continents.length;
    result.push(continents[index]);
  }
  return result;
}

function ContinentCarousel() {
  const [startIndex, setStartIndex] = useState(0)

  const visibleCount = 3
  const endIndex = startIndex + visibleCount

  const canGoPrev = startIndex > 0
  const canGoNext = endIndex < continents.length

  function prev() {
    setStartIndex((startIndex - 1 + continents.length) % continents.length);
  }


  function next() {
    setStartIndex((startIndex + 1) % continents.length);
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
      <div className="flex overflow-hidden flex-grow gap-4">
        {getVisibleContinents().map(({ name, href, image }) => (
          <Link
            key={name}
            href={href}
            className="flex flex-col items-center border rounded-md p-2 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <Image src={image} alt={name} width={100} height={100} className="object-cover rounded" />
            <span className="mt-2 text-center font-medium">{name}</span>
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


