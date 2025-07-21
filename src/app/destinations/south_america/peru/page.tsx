import Image from 'next/image'
import Link from 'next/link'
import cusco_post from '@/app/destinations/south_america/peru/cusco/cusco_post.png'
import salkantay_post from '@/app/destinations/south_america/peru/cusco/salkantay_trail/salkantay_post.png'
import peru_post from '@/app/destinations/south_america/brazil/salvador/salvador_post.png'

export default function BrazilPage() {
  const posts = [
    {
      title: 'Cusco',
      slug: 'cusco',
      image: cusco_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Salkantay Trail',
      slug: 'salkantay_trail',
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
    <div className="w-full min-h-screen bg-white px-6 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-900">Explore Peru</h1>

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
