'use client'

import Image from 'next/image'
import Link from 'next/link'
import manaus_post from '@/app/destinations/south_america/brazil/manaus/manaus_post.png'
import rio_post from '@/app/destinations/south_america/brazil/rio_de_janeiro/rio_post.png'
import salvador_post from '@/app/destinations/south_america/brazil/salvador/salvador_post.png'
import sao_paolo_post from '@/app/destinations/south_america/brazil/sao_paolo/sao_paolo_post.png'
import iguazu_post from '@/app/destinations/south_america/brazil/iguazu_falls/iguazu_post.png'
import feat_dest from '@/app/destinations/feat_dest.png'
import brazil from '@/app/destinations/south_america/brazil/brazil_top.png'
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


export default function BrazilPage() {
  const router = useRouter()
  const posts = [
    {
      title: 'Rio',
      slug: 'rio_de_janeiro',
      image: rio_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Amazon/Manaus',
      slug: 'manaus',
      image: manaus_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Salvador',
      slug: 'salvador',
      image: salvador_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Sao Paolo',
      slug: 'sao_paolo',
      image: sao_paolo_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Iguazu Falls',
      slug: 'iguazu_falls',
      image: iguazu_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={brazil}
          alt="Brazil"
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
          Welcome to Brasil! I spent three unforgettable months based in São Paulo, conducting research during the week and exploring other Brazilian cities on the weekends.
          If you're planning to travel within Brazil, having some knowledge of Portuguese is highly recommended, as English isn't widely spoken in many areas.
          I completely fell in love with the vibrant culture of South America. 
          Whether it was taking forró dance lessons, joining in the festive June parties, or browsing a lively Sunday market in São Paulo, every experience left a lasting impression.
          The warmth and openness of the people made it easy to connect, and I was fortunate to make lifelong friends during my time there.
          My favorite city in Brazil was Rio de Janeiro. With its stunning hikes, beautiful beaches, lively nightlife, world-class museums, and rich cultural heritage, it truly had something for everyone.
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
            href={`/destinations/south_america/brazil/${post.slug}`}
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
