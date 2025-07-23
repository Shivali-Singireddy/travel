'use client'

import React, { useState, useEffect, useRef } from 'react'
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

const VISIBLE_COUNT = 3
const SLIDE_COUNT = 2

function ContinentCarousel() {
  const [startIndex, setStartIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate visible continents including extra clones for looping
  function getVisibleContinents() {
    const result = []
    // Show VISIBLE_COUNT + SLIDE_COUNT items to handle looping seamlessly
    for (let i = 0; i < VISIBLE_COUNT + SLIDE_COUNT; i++) {
      const index = (startIndex + i) % continents.length
      result.push(continents[index])
    }
    return result
  }

  // Move carousel forward by SLIDE_COUNT with animation
  function next() {
    if (isAnimating) return
    setIsAnimating(true)

    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth / (VISIBLE_COUNT + SLIDE_COUNT)

    container.style.transition = 'transform 0.5s ease'
    container.style.transform = `translateX(-${width * SLIDE_COUNT}px)`

    setTimeout(() => {
      container.style.transition = 'none'
      container.style.transform = `translateX(0)`
      setStartIndex((prev) => (prev + SLIDE_COUNT) % continents.length)
      setIsAnimating(false)
    }, 500)
  }

  // Move carousel backward by SLIDE_COUNT with animation
  function prev() {
    if (isAnimating) return
    setIsAnimating(true)

    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth / (VISIBLE_COUNT + SLIDE_COUNT)

    // Set initial transform to left by SLIDE_COUNT items without animation
    container.style.transition = 'none'
    container.style.transform = `translateX(-${width * SLIDE_COUNT}px)`

    // Trigger reflow
    void container.offsetWidth

    // Animate back to 0
    container.style.transition = 'transform 0.5s ease'
    container.style.transform = 'translateX(0)'

    setTimeout(() => {
      setStartIndex((prev) =>
        (prev - SLIDE_COUNT + continents.length) % continents.length
      )
      setIsAnimating(false)
    }, 500)
  }

  const visibleContinents = getVisibleContinents()

  return (
    <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto px-4">
      {/* Prev Button */}
      <button
        onClick={prev}
        aria-label="Previous continents"
        disabled={isAnimating}
        className={`flex items-center justify-center p-4 mx-2 bg-[#7A5E8A] text-white rounded-lg hover:bg-[#6a4f76] transition disabled:opacity-50 disabled:cursor-not-allowed`}
        style={{ minWidth: '64px', minHeight: '64px' }}
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>

      {/* Carousel container */}
      <div
        ref={containerRef}
        className="flex overflow-hidden flex-grow gap-6"
        style={{ width: '80%' }}
      >
        {visibleContinents.map(({ name, href, image }, idx) => (
          <Link
            key={`${name}-${idx}`} // idx needed because duplicates in visibleContinents for looping
            href={href}
            className="flex-shrink-0 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            style={{ width: `calc(100% / ${VISIBLE_COUNT + SLIDE_COUNT})` }}
          >
            <Image
              src={image}
              alt={name}
              width={400}
              height={250}
              className="object-cover w-full h-full"
              priority={idx < VISIBLE_COUNT} // prioritize visible images
            />
          </Link>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={next}
        aria-label="Next continents"
        disabled={isAnimating}
        className={`flex items-center justify-center p-4 mx-2 bg-[#7A5E8A] text-white rounded-lg hover:bg-[#6a4f76] transition disabled:opacity-50 disabled:cursor-not-allowed`}
        style={{ minWidth: '64px', minHeight: '64px' }}
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>
    </div>
  )
}

export default ContinentCarousel
