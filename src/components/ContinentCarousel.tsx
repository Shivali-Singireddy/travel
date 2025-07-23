'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import africaImg from '@/images/destinations/africa.png'
import asiaImg from '@/images/destinations/asia.png'
import europeImg from '@/images/destinations/europe.png'
import northAmericaImg from '@/images/destinations/north-america.png'
import southAmericaImg from '@/images/destinations/south-america.png'


const continents = [
  { name: 'Europe', href: '/destinations/europe', image: europeImg },
  { name: 'North America', href: '/destinations/north-america', image: northAmericaImg },
  { name: 'South America', href: '/destinations/south-america', image: southAmericaImg },
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
    <div className="relative w-full max-w-xl mx-auto flex items-center">
      {/* Left Arrow */}
      <button
        onClick={prev}
        disabled={!canGoPrev}
        aria-label="Previous continents"
        className={`p-2 ${canGoPrev ? 'text-teal-600' : 'text-gray-300 cursor-not-allowed'}`}
      >
        ‹
      </button>

      {/* Continent Cards */}
      <div className="flex overflow-hidden flex-grow gap-4">
        {continents.slice(startIndex, endIndex).map(({ name, href, image }) => (
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
        className={`p-2 ${canGoNext ? 'text-teal-600' : 'text-gray-300 cursor-not-allowed'}`}
      >
        ›
      </button>
    </div>
  )
}
