'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const continents = [
  { name: 'Europe', href: '/destinations/europe' },
  { name: 'North America', href: '/destinations/north-america' },
  { name: 'South America', href: '/destinations/south-america' },
   { name: 'Africa', href: '/destinations/africa' },
  { name: 'Asia', href: '/destinations/asia' },
]

export function ContinentCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 180
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="relative mt-12">
      {/* Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-zinc-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-zinc-700"
      >
        <ChevronLeftIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-200" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-zinc-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-zinc-700"
      >
        <ChevronRightIcon className="w-5 h-5 text-zinc-600 dark:text-zinc-200" />
      </button>

      {/* Scrollable bar */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4 px-12 py-4"
      >
        {continents.map((continent) => (
          <Link
            key={continent.name}
            href={continent.href}
            className="flex-shrink-0 bg-[#7A5E8A] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#674d74] transition whitespace-nowrap"
          >
            {continent.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
