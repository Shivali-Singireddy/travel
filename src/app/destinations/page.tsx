import Image from 'next/image'
import Link from 'next/link'
import san_diego_post from '@/app/destinations/north_america/california/san_diego/san_diego_post.png'
import north_america from '@/app/destinations/north_america.png'
import south_america from '@/app/destinations/south_america.png'
import europe from '@/app/destinations/europe.png'
import asia from '@/app/destinations/asia.png'
import destinations_banner from '@/app/destinations/destinations.png' // <-- Assuming this is your top image


export default function NorthAmericaPage() {
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
      <div className="relative w-full h-100">
        <Image
          src={destinations_banner}
          alt="Destinations Banner"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
