import Image from 'next/image'
import Link from 'next/link'
import brazil from '@/app/destinations/south_america/brazil.png'
import peru from '@/app/destinations/south_america/peru.png'


export default function SouthAmericaPage() {
  const posts = [
    {
      title: 'Brazil',
      slug: 'brazil',
      image: brazil,
    },
    {
      title: 'Peru',
      slug: 'peru',
      image: peru,
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-900">Explore North America</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/destinations/south_america/${post.slug}`}
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
