import Image from 'next/image'
import Link from 'next/link'
import manaus_post from '@/app/destinations/south_america/brazil/manaus/manaus_post.png'
import rio_post from '@/app/destinations/south_america/brazil/rio_de_janeiro/rio_post.png'
import salvador_post from '@/app/destinations/south_america/brazil/salvador/salvador_post.png'
import sao_paolo_post from '@/app/destinations/south_america/brazil/sao_paolo/sao_paolo_post.png'


export default function BrazilPage() {
  const posts = [
    {
      title: 'Rio',
      slug: 'rio',
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
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-900">Explore Brazil</h1>

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
