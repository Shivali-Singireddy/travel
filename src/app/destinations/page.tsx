import Image from 'next/image'
import Link from 'next/link'
import san_diego_post from '@/app/destinations/north_america/california/san_diego/san_diego_post.png'
import north_america from '@/app/destinations/north_america.png'
import south_america from '@/app/destinations/south_america.png'
import europe from '@/app/destinations/europe.png'

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
      image: san_diego_post,
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-900">Explore North America</h1>

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
