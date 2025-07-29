import Image from 'next/image'
import Link from 'next/link'
import california from '@/app/destinations/north_america/california.jpg'
import hawaii from '@/app/destinations/north_america/hawaii.png'
import mexico from '@/app/destinations/north_america/mexico.png'
import north_america from '@/app/destinations/north_america/north_america_top.png'
import top_regions from '@/app/destinations/top_regions.png'
import feat_dest from '@/app/destinations/feat_dest.png'
import maui_post from '@/app/destinations/north_america/hawaii/maui/maui_post.png'
import kauai_post from '@/app/destinations/north_america/hawaii/kauai/kauai_post.png'
import kalalau_post from '@/app/destinations/north_america/hawaii/kauai/kalalau_trail/kalalau_post.png'
import big_island_post from '@/app/destinations/north_america/hawaii/big_island/big_island_post.png'
import cancun_post from '@/app/destinations/north_america/mexico/cancun/cancun_post.png'
import valladolid_post from '@/app/destinations/north_america/mexico/valladolid/valladolid_post.png'



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

  const destinations = [
    {
      title: 'Kalalau Trail',
      slug: 'hawaii/kauai/kalalau_trail',
      image: kalalau_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Maui',
      slug: 'hawaii/maui',
      image: maui_post,
      description: '4 Day Itinerary in Maui: Hostels, Hikes & Haleakalā Sunsets',
    },
    {
      title: 'Cancun',
      slug: 'mexico/cancun',
      image: cancun_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Kauai',
      slug: 'hawaii/kauai',
      image: kauai_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Big Island',
      slug: 'hawaii/big_island',
      image: big_island_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Valladolid/Tulum',
      slug: 'mexico/valladolid',
      image: valladolid_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
     <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={north_america}
          alt="North America"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="w-full flex flex-col items-center mt-10 mb-2">
        <div className="relative w-full flex justify-center my-20">
          <div className="w-full">
            <hr className="border-t-2 border-[#7A5E8A] opacity-90" />
          </div>
          <Image
            src={top_regions}
            alt="Top Regions"
            width={500}
            height={120}
            className="absolute top-1/2 transform -translate-y-1/2 z-10"
          />
        </div>      
      </div>

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
       <div className="w-full flex flex-col items-center mt-12 mb-6">
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
        {destinations.map((dest) => (
          <Link
            key={dest.slug}
            href={`/destinations/north_america/${dest.slug}`}
            className="block border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-64">
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4 bg-white text-center">
              <h2 className="text-xl font-semibold text-purple-800 mb-2">{dest.title}</h2>
              <p className="text-gray-700 text-sm">{dest.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
