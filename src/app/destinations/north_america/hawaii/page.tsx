import Image from 'next/image'
import Link from 'next/link'
import maui_post from '@/app/destinations/north_america/hawaii/maui/maui_post.png'
import kauai_post from '@/app/destinations/north_america/hawaii/kauai/kauai_post.png'
import kalalau_post from '@/app/destinations/north_america/hawaii/kauai/kalalau_trail/kalalau_post.png'
import big_island_post from '@/app/destinations/north_america/hawaii/big_island/big_island_post.png'
import hawaii from '@/app/destinations/north_america/hawaii/hawaii_top.png'


export default function HawaiiPage() {
  const posts = [
    {
      title: 'Maui',
      slug: 'maui',
      image: maui_post,
      description: '4 Day Itinerary in Maui: Hostels, Hikes & Haleakalā Sunsets',
    },
    {
      title: 'Kauai',
      slug: 'kauai',
      image: kauai_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Kalalau Trail',
      slug: 'kauai/kalalau_trail',
      image: kalalau_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Big Island',
      slug: 'big_island',
      image: big_island_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
     <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={hawaii}
          alt="Hawaii"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/destinations/north_america/hawaii/${post.slug}`}
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
