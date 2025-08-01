'use client'
  
import Image from 'next/image'
import Link from 'next/link'
import cancun_post from '@/app/destinations/north_america/mexico/cancun/cancun_post.png'
import valladolid_post from '@/app/destinations/north_america/mexico/valladolid/valladolid_post.png'
import feat_dest from '@/app/destinations/feat_dest.png'
import mexico from '@/app/destinations/north_america/mexico/mexico_top.png'
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

export default function MexicoPage() {
  const router = useRouter()
  const posts = [
    {
      title: 'Cancun',
      slug: 'cancun',
      image: cancun_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Valladolid/Tulum',
      slug: 'valladolid',
      image: valladolid_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={mexico}
          alt="Mexico"
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
          Welcome to Mexico! I spent my senior year spring break trip in Cancun, exploring the Yucatan Peninsula.
          One of the highlights of the trip was discovering the cenotes. These hidden, crystal-clear natural swimming pools tucked away in the jungle felt like secret paradises.
          Mexico is an ideal vacation spot for families. There is something for everyone, whether you're looking for relaxing beaches, cultural experiences, or outdoor adventures.
          Visiting Chichén Itzá was a highlight of the trip. 
          As one of the New Seven Wonders of the World, it provides an incredible look into the rich history and architecture of the ancient Mayan civilization.
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
            href={`/destinations/north_america/mexico/${post.slug}`}
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
