'use client'

import Image from 'next/image'
import Link from 'next/link'
import california from '@/app/destinations/north_america/california.jpg'
import hawaii from '@/app/destinations/north_america/hawaii.png'
import mexico from '@/app/destinations/north_america/mexico.png'
import north_america from '@/app/destinations/north_america/north_america_top.png'
import top_regions from '@/app/destinations/top_regions.png'
import feat_dest from '@/app/destinations/feat_dest.png'
import maui_post from '@/app/destinations/north_america/hawaii/maui/maui_post.png'
import kauai_post from '@/app/destinations/north_america/hawaii/kauai/kauai_post.png'
import kalalau_post from '@/app/destinations/north_america/hawaii/kauai/kalalau_trail/kalalau_post.png'
import big_island_post from '@/app/destinations/north_america/hawaii/big_island/big_island_post.png'
import cancun_post from '@/app/destinations/north_america/mexico/cancun/cancun_post.png'
import valladolid_post from '@/app/destinations/north_america/mexico/valladolid/valladolid_post.png'
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

export default function NorthAmericaPage() {
  const router = useRouter()
  const posts = [
    {
      title: 'Hawaii',
      slug: 'hawaii',
      image: hawaii,
    },
    {
      title: 'Mexico',
      slug: 'mexico',
      image: mexico,
    },
    {
      title: 'California',
      slug: 'california',
      image: california,
    },
  ]

  const destinations = [
    {
      title: 'Kalalau Trail',
      slug: 'hawaii/kauai/kalalau_trail',
      image: kalalau_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Maui',
      slug: 'hawaii/maui',
      image: maui_post,
      description: '4 Day Itinerary in Maui: Hostels, Hikes & Haleakalā Sunsets',
    },
    {
      title: 'Cancun',
      slug: 'mexico/cancun',
      image: cancun_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Kauai',
      slug: 'hawaii/kauai',
      image: kauai_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Big Island',
      slug: 'hawaii/big_island',
      image: big_island_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Valladolid/Tulum',
      slug: 'mexico/valladolid',
      image: valladolid_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
     <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={north_america}
          alt="North America"
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
          Welcome to North America! This has been my home for the past 22 years.
          Most of my early adventures here took place during childhood trips with my parents, and while many of those memories aren’t documented on this site just yet, 
          I hope to revisit them and share more once I dig through some old photos.
          Of all the places I’ve explored in North America, Hawaii is by far my favorite. 
          It has it all from its beautiful hikes, waterfalls, mountains, and beaches.
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
            href={`/destinations/north_america/${post.slug}`}
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
            href={`/destinations/north_america/${dest.slug}`}
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
