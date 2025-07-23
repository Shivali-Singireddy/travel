'use client'

import React, { useState, useRef, useEffect } from 'react'
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

const VISIBLE_COUNT = 2
const SLIDE_COUNT = 1

function ContinentCarousel() {
  const [startIndex, setStartIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Prepare extended list for seamless loop by adding clones at the start and end
  const extendedContinents = [
    ...continents.slice(-VISIBLE_COUNT),
    ...continents,
    ...continents.slice(0, VISIBLE_COUNT),
  ]

  // Position index relative to extendedContinents
  const [position, setPosition] = useState(VISIBLE_COUNT) // start at first real continent

  // Width per item (calculated dynamically)
  const [itemWidth, setItemWidth] = useState(0)

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setItemWidth(containerRef.current.clientWidth / VISIBLE_COUNT)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    container.style.transition = isAnimating ? 'transform 0.5s ease' : 'none'
    container.style.transform = `translateX(-${position * itemWidth}px)`
  }, [position, itemWidth, isAnimating])

  function handleTransitionEnd() {
    setIsAnimating(false)
    if (position === 0) {
      setPosition(continents.length)
      if (containerRef.current) {
        containerRef.current.style.transition = 'none'
        containerRef.current.style.transform = `translateX(-${continents.length * itemWidth}px)`
      }
    } else if (position === continents.length + VISIBLE_COUNT) {
      setPosition(VISIBLE_COUNT)
      if (containerRef.current) {
        containerRef.current.style.transition = 'none'
        containerRef.current.style.transform = `translateX(-${VISIBLE_COUNT * itemWidth}px)`
      }
    }
  }

  function next() {
    if (isAnimating) return
    setIsAnimating(true)
    setPosition((pos) => pos + SLIDE_COUNT)
  }

  function prev() {
    if (isAnimating) return
    setIsAnimating(true)
    setPosition((pos) => pos - SLIDE_COUNT)
  }

  return (
    <section
      aria-label="Destinations"
      className="max-w-screen-xl mx-auto px-6 py-8 select-none rounded-lg border-4 border-[#7A5E8A] relative"
      style={{
        backgroundColor: '#d2b48c', // tan background
        backgroundImage: `repeating-linear-gradient(
          45deg,
          rgba(255 255 255 / 0.1) 0,
          rgba(255 255 255 / 0.1) 10px,
          transparent 10px,
          transparent 20px
        )`,
      }}
    >
      {/* Label */}
      <h2
        className="text-3xl font-semibold text-[#7A5E8A] mb-6 text-center tracking-wide select-text"
        style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}
      >
        Destinations
      </h2>

      <div className="flex items-center justify-center w-full">
        {/* Prev Button */}
        <button
          onClick={prev}
          aria-label="Previous continents"
          disabled={isAnimating}
          className="flex items-center justify-center p-4 mx-2 bg-[#7A5E8A] text-white rounded-lg hover:bg-[#6a4f76] transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          style={{ minWidth: 64, minHeight: 64 }}
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>

        {/* Carousel viewport */}
        <div className="overflow-hidden flex-grow" style={{ width: '70%' }}>
          {/* Sliding container */}
          <div
            ref={containerRef}
            className="flex"
            onTransitionEnd={handleTransitionEnd}
            style={{ willChange: 'transform' }}
          >
            {extendedContinents.map(({ name, href, image }, idx) => (
              <Link
                key={`${name}-${idx}`}
                href={href}
                className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer mx-2"
                style={{ width: itemWidth || '50vw', minWidth: 0 }}
              >
                <Image
                  src={image}
                  alt={name}
                  width={400}
                  height={250}
                  className="object-cover w-full h-full"
                  priority={idx >= VISIBLE_COUNT && idx < continents.length + VISIBLE_COUNT}
                  draggable={false}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          aria-label="Next continents"
          disabled={isAnimating}
          className="flex items-center justify-center p-4 mx-2 bg-[#7A5E8A] text-white rounded-lg hover:bg-[#6a4f76] transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          style={{ minWidth: 64, minHeight: 64 }}
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}

export default ContinentCarousel
