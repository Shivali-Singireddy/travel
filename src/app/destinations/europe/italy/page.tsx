import Image from 'next/image'
import Link from 'next/link'
import venice_post from '@/app/destinations/europe/italy/venice/venice_post.png'
import rome_post from '@/app/destinations/europe/italy/rome/rome_post.png'
import florence_post from '@/app/destinations/europe/italy/florence/florence_post.png'
import italy_post from '@/app/destinations/europe/italy/northern_italy/italy_post.png'


export default function Italy_Page() {
  const posts = [
    {
      title: 'Venice',
      slug: 'venice',
      image: venice_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Ireland',
      slug: 'rome',
      image: rome_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Florence',
      slug: 'florence',
      image: florence_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Italy: Milan, Lake Como, Verona, and Bologna',
      slug: 'northern_italy',
      image: italy_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-900">Explore the Italy</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/destinations/europe/italy/${post.slug}`}
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
