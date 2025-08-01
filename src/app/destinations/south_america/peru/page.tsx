'use client'

import Image from 'next/image'
import Link from 'next/link'
import cusco_post from '@/app/destinations/south_america/peru/cusco/cusco_post.png'
import salkantay_post from '@/app/destinations/south_america/peru/cusco/salkantay_trail/salkantay_post.png'
import peru_post from '@/app/destinations/south_america/peru/peru_overall/peru_post.png'
import feat_dest from '@/app/destinations/feat_dest.png'
import peru from '@/app/destinations/south_america/peru/peru_top.png'
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

export default function PeruPage() {
  const router = useRouter()
  const posts = [
    {
      title: 'Cusco',
      slug: 'cusco',
      image: cusco_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Salkantay Trail',
      slug: 'cusco/salkantay_trail',
      image: salkantay_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Peru: Huacachina, Millipu, Lima, Ballestic Islands',
      slug: 'peru_overall',
      image: peru_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={peru}
          alt="Peru"
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
          Welcome to Peru! I spent three incredible weeks traveling around Peru and it was by far one of my favorite countries. 
          Peru is incredibly welcoming to backpackers and solo travelers, especially in Cusco, which serves as a hub for most tours and excursions. 
          You can book many experiences directly from Cusco, although it’s important to plan ahead for Machu Picchu. 
          I recommend booking Machu Picchu tours or treks at least three months in advance, as spots fill up quickly. 
          One of the most fascinating things about Peru is its diverse climate. 
          The country is home to 28 of the world's 32 recognized climate zones, making it a dream destination for nature lovers. 
          From mountains and deserts to jungles and coastlines, the variety is simply breathtaking. 
          This means there’s a lot of diversity in nature among the country, so I would pack clothes for both the desert along with clothes for the colder areas with higher altitudes.
        </p>

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
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/destinations/south_america/peru/${post.slug}`}
            className="block border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-64">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4 bg-white text-center">
              <h2 className="text-xl font-semibold text-purple-800 mb-2">{post.title}</h2>
              <p className="text-gray-700 text-sm">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
