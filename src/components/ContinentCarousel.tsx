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

  // Loop-around logic
  const getVisibleContinents = () => {
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % continents.length
      result.push(continents[index])
    }
    return result
  }

  const prev = () => {
    setStartIndex((startIndex - 1 + continents.length) % continents.length)
  }

  const next = () => {
    setStartIndex((startIndex + 1) % continents.length)
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

      {/* Continent Cards */}
      <div className="flex gap-8 flex-grow justify-center overflow-hidden">
        {getVisibleContinents().map(({ name, href, image }) => (
          <Link
            key={name}
            href={href}
            className="flex flex-col items-center rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md border border-zinc-200"
          >
            <Image
              src={image}
              alt={name}
              width={320}
              height={220}
              className="object-cover w-[320px] h-[220px]"
              priority
            />
          </Link>
        ))}
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
