'use client'

import Image from 'next/image'
import Link from 'next/link'
import europe from '@/app/destinations/europe/europe_top.png'
import top_regions from '@/app/destinations/top_regions.png'
import feat_dest from '@/app/destinations/feat_dest.png'
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
  const posts = [
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
     <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={europe}
          alt="Europe"
          fill
          style={{ objectFit: 'cover' }}
        />
        {/* Back Button Overlay */}
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
          className="group absolute top-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-zinc-900/5 transition hover:ring-[#4B0082] dark:bg-zinc-800 dark:ring-white/10"
        >
          <ArrowLeftIcon className="h-4 w-4 stroke-[#7A5E8A] group-hover:stroke-[#4B0082]" />
        </button>
      </div>

      <div className="w-full flex flex-col items-center mt10 mb-0">
        <p className="w-1/2 mt-2 text-center text-[#4B0082] text-base font-spectrum">
          Welcome to Europe!
          I spent three months in England completing a company internship, along with a month in Italy teaching final-year high school students. 
          Both experiences gave me the chance to explore many parts of Europe, thanks to the affordability of flights across the continent.
          Europe is full of stunning destinations, making it difficult to choose favorites. 
          However, Madeira, Italy, the Czech Republic, Barcelona, and Iceland each hold a special place in my heart.
          You can learn more about these unique places in my blog posts!
        </p>
        <div className="relative w-full flex justify-center my-20">
          <div className="w-full">
            <hr className="border-t-2 border-[#7A5E8A] opacity-90" />
          </div>
          <Image
            src={top_regions}
            alt="Top Regions"
            width={500}
            height={120}
            className="absolute top-1/2 transform -translate-y-1/2 z-10"
          />
        </div>      
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/destinations/europe/${post.slug}`}
            className="block border border-gray-300 overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-75">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
        ))}
      </div>
       <div className="w-full flex flex-col items-center mt-12 mb-6">
        <div className="relative w-full flex justify-center my-20">
          <div className="w-full">
            <hr className="border-t-2 border-[#7A5E8A] opacity-90" />
          </div>
          <Image
            src={feat_dest}
            alt="Featured Destinations"
            width={700}
            height={200}
            className="absolute top-1/2 transform -translate-y-1/2 z-10"
          />
        </div>      
      </div>
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
