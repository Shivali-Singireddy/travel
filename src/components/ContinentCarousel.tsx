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
    <div className="w-full bg-[#FAF5EF] py-20 px-4 flex items-center justify-center">
      <div className="max-w-screen-2xl w-full flex items-center justify-between gap-12">
        {/* Left Arrow */}
        <button
          onClick={prev}
          aria-label="Previous continents"
          className="p-6 text-[#7A5E8A] hover:text-[#5e4568] transition"
        >
          <ChevronLeftIcon className="h-16 w-16" />
        </button>

        {/* Carousel Items */}
        <div className="flex gap-12 overflow-hidden justify-center flex-1">
          {getVisibleContinents().map(({ name, href, image }) => (
            <Link
              key={name}
              href={href}
              className="block rounded-xl shadow-xl hover:shadow-2xl transition-shadow border border-[#7A5E8A]"
              style={{ width: 500, height: 350 }}
            >
              <Image
                src={image}
                alt={name}
                width={500}
                height={350}
                className="object-cover w-full h-full rounded-xl"
                priority
              />
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next continents"
          className="p-6 text-[#7A5E8A] hover:text-[#5e4568] transition"
        >
          <ChevronRightIcon className="h-16 w-16" />
        </button>
      </div>
    </div>
  )
}

export default ContinentCarousel
