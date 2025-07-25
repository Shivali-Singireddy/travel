'use client'

import Image from 'next/image'
import Link from 'next/link'
import paris_post from '@/app/destinations/europe/paris/paris_post.png'
import london_post from '@/app/destinations/europe/london/london_post.png'
import switzerland_post from '@/app/destinations/europe/switzerland/switzerland_post.png'
import barcelona_post from '@/app/destinations/europe/barcelona/barcelona_post.png'
import algarve_post from '@/app/destinations/europe/algarve/algarve_post.png'
import amsterdam_post from '@/app/destinations/europe/amsterdam/amsterdam_post.png'
import czech_post from '@/app/destinations/europe/czech_republic/czech_post.png'
import brussels_post from '@/app/destinations/europe/brussels/brussels_post.png'
import madeira_post from '@/app/destinations/europe/madeira/madeira_post.png'
import santorini_post from '@/app/destinations/europe/santorini/santorini_post.png'
import { useRouter } from 'next/navigation'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

import italy from '@/app/destinations/europe/italy.png'
import united_kingdom from '@/app/destinations/europe/united_kingdom.png'


export default function EuropePage() {
  const router = useRouter()
  const regions = [
    {
      title: 'Italy',
      slug: 'italy',
      image: italy,
    },
    {
      title: 'United Kingdom',
      slug: 'united_kingdom',
      image: united_kingdom,
    },
  ]

  const destinations = [
    {
      title: 'Madeira',
      slug: 'madeira',
      image: madeira_post,
      description: 'Explore the Road to Hana and Haleakalā.',
    },
    {
      title: 'Santorini with Athens pitstop',
      slug: 'santorini',
      image: santorini_post,
      description: 'Hike lush valleys and scenic coastal trails.',
    },
    {
      title: 'Czech Republic',
      slug: 'czech_republic',
      image: czech_post,
      description: 'Hike lush valleys and scenic coastal trails.',
    },
    {
      title: 'Barcelona',
      slug: 'barcelona',
      image: barcelona_post,
      description: 'Hike lush valleys and scenic coastal trails.',
    },
    {
      title: 'Paris',
      slug: 'paris',
      image: paris_post,
      description: 'Explore the Road to Hana and Haleakalā.',
    },
    {
      title: 'Algarve',
      slug: 'algarve',
      image: algarve_post,
      description: 'Hike lush valleys and scenic coastal trails.',
    },
    {
      title: 'Amsterdam',
      slug: 'amsterdam',
      image: amsterdam_post,
      description: 'Hike lush valleys and scenic coastal trails.',
    },
    {
      title: 'Switzerland',
      slug: 'switzerland',
      image: switzerland_post,
      description: 'Hike lush valleys and scenic coastal trails.',
    },
    {
      title: 'Brussels',
      slug: 'brussels',
      image: brussels_post,
      description: 'Hike lush valleys and scenic coastal trails.',
    },
  ]

  return (
   <div className="w-full min-h-screen bg-white px-6 py-10 max-w-screen-xl mx-auto">
    <div className="mb-4">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Go back"
        className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-zinc-900/5 shadow-zinc-800/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:hover:border-zinc-700 dark:hover:ring-white/20"
      >
        <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
      </button>
    </div>
  
    {/* Page Title Centered */}
    <h1 className="text-3xl font-bold mb-8 text-center text-purple-900 dark:text-purple-200">
      Explore Europe
    </h1>

      {/* Region-Level Buttons (Simple Style) */}
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">Top Regions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {regions.map((region) => (
          <Link
            key={region.slug}
            href={`/destinations/europe/${region.slug}`}
            className="block border border-gray-300 overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-75">
              <Image
                src={region.image}
                alt={region.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Destination-Level Buttons (Detailed Style) */}
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">Featured Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <Link
            key={dest.slug}
            href={`/destinations/europe/${dest.slug}`}
            className="block border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-64">
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4 bg-white text-center">
              <h2 className="text-xl font-semibold text-purple-800 mb-2">{dest.title}</h2>
              <p className="text-gray-700 text-sm">{dest.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
