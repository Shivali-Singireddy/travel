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

const VISIBLE_COUNT = 2
const TRANSITION_DURATION_MS = 400

function ContinentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isTransitioning = useRef(false)

  // Duplicate items for seamless looping
  const extendedContinents = [...continents, ...continents.slice(0, VISIBLE_COUNT)]

  const slideWidthPercent = 100 / VISIBLE_COUNT

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function handleTransitionEnd() {
      isTransitioning.current = false
      // If we've reached the duplicated last slide, reset to start instantly without transition
      if (currentIndex >= continents.length) {
        container.style.transition = 'none'
        setCurrentIndex(0)
        container.style.transform = `translateX(0%)`

        // Force reflow to apply styles immediately
        void container.offsetWidth
        container.style.transition = `transform ${TRANSITION_DURATION_MS}ms ease`
      }
    }

    container.addEventListener('transitionend', handleTransitionEnd)
    return () => container.removeEventListener('transitionend', handleTransitionEnd)
  }, [currentIndex])

  function next() {
    if (isTransitioning.current) return
    isTransitioning.current = true
    setCurrentIndex((prev) => prev + 1)
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${(currentIndex + 1) * slideWidthPercent}%)`
    }
  }

  function prev() {
    if (isTransitioning.current) return
    isTransitioning.current = true

    const container = containerRef.current
    if (!container) return

    if (currentIndex === 0) {
      // Jump to duplicated slides at the end instantly without transition
      container.style.transition = 'none'
      setCurrentIndex(continents.length)
      container.style.transform = `translateX(-${continents.length * slideWidthPercent}%)`
      // Force reflow
      void container.offsetWidth
      container.style.transition = `transform ${TRANSITION_DURATION_MS}ms ease`

      // Now move back one slide after reflow
      setTimeout(() => {
        setCurrentIndex(continents.length - 1)
        container.style.transform = `translateX(-${(continents.length - 1) * slideWidthPercent}%)`
      }, 20)
    } else {
      setCurrentIndex((prev) => prev - 1)
      container.style.transform = `translateX(-${(currentIndex - 1) * slideWidthPercent}%)`
    }
  }

  // Sync transform whenever currentIndex changes (for initial render or setIndex calls)
  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.style.transition = `transform ${TRANSITION_DURATION_MS}ms ease`
      container.style.transform = `translateX(-${currentIndex * slideWidthPercent}%)`
    }
  }, [currentIndex])

  return (
    <div
      className="relative max-w-screen-xl mx-auto select-none px-4 py-8"
      style={{
        backgroundColor: '#d2b48c', // tan color
        backgroundImage: `repeating-linear-gradient(
          45deg,
          rgba(255 255 255 / 0.1) 0,
          rgba(255 255 255 / 0.1) 10px,
          transparent 10px,
          transparent 20px
        )`,
        backgroundSize: '20px 20px',
        borderRadius: '12px',
      }}
    >
      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous continents"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded bg-[#7A5E8A] p-3 text-white shadow-lg hover:bg-[#6a4e75] focus:outline-none focus:ring-2 focus:ring-[#7A5E8A]"
        style={{ width: 60, height: 60 }}
      >
        <ChevronLeftIcon className="h-8 w-8" />
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex"
          style={{
            width: `${(extendedContinents.length * 100) / VISIBLE_COUNT}%`,
          }}
        >
          {extendedContinents.map(({ name, href, image }, idx) => (
            <Link
              key={`${name}-${idx}`}
              href={href}
              className="flex-shrink-0 rounded-md shadow-md overflow-hidden mx-2 cursor-pointer"
              style={{
                width: `${100 / extendedContinents.length}%`,
                maxWidth: '50%', // ensures two items visible
              }}
            >
              <Image
                src={image}
                alt={name}
                width={600}
                height={400}
                className="object-cover rounded-md"
                draggable={false}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next continents"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-[#7A5E8A] p-3 text-white shadow-lg hover:bg-[#6a4e75] focus:outline-none focus:ring-2 focus:ring-[#7A5E8A]"
        style={{ width: 60, height: 60 }}
      >
        <ChevronRightIcon className="h-8 w-8" />
      </button>
    </div>
  )
}

export default ContinentCarousel
