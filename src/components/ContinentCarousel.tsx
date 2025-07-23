'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import africaImg from '@/app/destinations/africa/morocco/chefchaouen/chef_post.png'
import asiaImg from '@/app/destinations/asia.png'
import europeImg from '@/app/destinations/europe.png'
import northAmericaImg from '@/app/destinations/north_america.png'
import southAmericaImg from '@/app/destinations/south_america.png'
import Image from 'next/image'
import Link from 'next/link'

const continents = [
  { name: 'Europe', href: '/destinations/europe', image: europeImg },
  { name: 'North America', href: '/destinations/north_america', image: northAmericaImg },
  { name: 'South America', href: '/destinations/south_america', image: southAmericaImg },
  { name: 'Africa', href: '/destinations/africa', image: africaImg },
  { name: 'Asia', href: '/destinations/asia', image: asiaImg },
]

const visibleCount = 3
const itemWidth = 280 // width in px for each item including margin

function ContinentCarousel() {
  const [startIndex, setStartIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // We create an extended array with duplicates of the first items at the end for smooth looping
  // For example: [...continents, first 3 continents again]
  const extendedContinents = [...continents, ...continents.slice(0, visibleCount)]

  // Move carousel forward by 1 item with animation
  function next() {
    if (isAnimating) return // prevent rapid clicks

    setIsAnimating(true)
    setStartIndex((prev) => prev + 1)
  }

  // Handle the transition end to reset startIndex for seamless loop
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function handleTransitionEnd() {
      setIsAnimating(false)
      // If we've moved past the original array length, reset without animation
      if (startIndex >= continents.length) {
        setStartIndex(0)
        container.style.transition = 'none'
        container.style.transform = `translateX(0px)`
        // Force reflow to apply the style immediately
        void container.offsetWidth
        container.style.transition = 'transform 0.5s ease'
      }
    }

    container.addEventListener('transitionend', handleTransitionEnd)
    return () => container.removeEventListener('transitionend', handleTransitionEnd)
  }, [startIndex])

  // Calculate transform X
  const translateX = -startIndex * itemWidth

  return (
    <div className="flex items-center justify-center w-full max-w-[1000px] mx-auto px-4">
      {/* Left Button */}
      <button
        aria-label="Previous continents"
        onClick={() => {
          if (isAnimating) return
          setIsAnimating(true)
          setStartIndex((prev) => (prev - 1 + continents.length) % continents.length)
        }}
        className="p-4 rounded bg-[#7A5E8A] text-white hover:bg-[#5a4365] transition"
        style={{ minWidth: 64 }}
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      {/* Carousel container */}
      <div
        className="overflow-hidden mx-6"
        style={{ width: visibleCount * itemWidth, borderRadius: 8 }}
      >
        <div
          ref={containerRef}
          className="flex"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isAnimating ? 'transform 0.5s ease' : 'none',
            gap: '16px',
          }}
        >
          {extendedContinents.map(({ name, href, image }, idx) => (
            <Link
              key={`${name}-${idx}`}
              href={href}
              className="flex-shrink-0 cursor-pointer rounded-md overflow-hidden shadow-lg"
              style={{ width: itemWidth - 16 }} // minus gap for clean fit
            >
              <Image
                src={image}
                alt={name}
                width={itemWidth - 16}
                height={180}
                className="object-cover w-full h-[180px]"
                unoptimized
                priority={idx < visibleCount} // priority for visible images
              />
              {/* No label here, clean design */}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        aria-label="Next continents"
        onClick={next}
        className="p-4 rounded bg-[#7A5E8A] text-white hover:bg-[#5a4365] transition"
        style={{ minWidth: 64 }}
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  )
}

export default ContinentCarousel
