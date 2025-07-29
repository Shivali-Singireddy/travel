import Image from 'next/image'
import Link from 'next/link'
import san_diego_post from '@/app/destinations/north_america/california/san_diego/san_diego_post.png'
import north_america from '@/app/destinations/north_america.png'
import south_america from '@/app/destinations/south_america.png'
import europe from '@/app/destinations/europe.png'
import asia from '@/app/destinations/asia.png'
import destinations_banner from '@/app/destinations/destinations.png' // <-- Assuming this is your top image


export default function DestinationsPage() {
  const posts = [
    {
      title: 'Europe',
      slug: 'europe',
      image: europe,
    },
    {
      title: 'South America',
      slug: 'south_america',
      image: south_america,
    },
    {
      title: 'North America',
      slug: 'north_america',
      image: north_america,
    },
    {
      title: 'Africa',
      slug: 'africa',
      image: san_diego_post,
    },
    {
      title: 'Asia',
      slug: 'asia',
      image: asia,
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={destinations_banner}
          alt="Destinations Banner"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Centered Text Section */}
      <div className="w-full flex flex-col items-center mt-6 mb-6">
        <p className="w-1/2 mt-2 text-center text-[#4B0082] text-base font-spectrum">
          Welcome to my destinations homepage! Here you can find my thoughts on all of my travels.
          This page is organized first by continents followed by some of my favorite featured destinations.
          If you are looking for an article regarding a specific city, you can find it by clicking on the continent which it belongs to.
          This will then redirect you to different subareas within the continent.
          You can then choose the subregion which will lead you to all of my posts for cities within that area.
          Have fun browsing!
        </div>
        <h2 className="text-4xl font-bold text-[#4B0082] font-spectrum text-center">Continents</h2>     
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/destinations/${post.slug}`}
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
    </div>
  )
}
