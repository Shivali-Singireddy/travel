import Image from 'next/image'
import Link from 'next/link'
import california from '@/app/destinations/north_america/california.jpg'
import hawaii from '@/app/destinations/north_america/hawaii.png'
import mexico from '@/app/destinations/north_america/mexico.png'


export default function NorthAmericaPage() {
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

  return (
    <div className="w-full min-h-screen bg-white px-6 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-900">Explore North America</h1>

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
    </div>
  )
}
