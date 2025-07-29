import Image from 'next/image'
import Link from 'next/link'
import top_regions from '@/app/destinations/top_regions.png'
import feat_dest from '@/app/destinations/feat_dest.png'
import asia from '@/app/destinations/asia_top.png'
import turkey from '@/app/destinations/asia/turkey.png'
import cappadocia_post from '@/app/destinations/asia/turkey/cappadocia/cappadocia_post.png'
import istanbul_post from '@/app/destinations/asia/turkey/istanbul/istanbul_post.png'



export default function SouthAmericaPage() {
  const posts = [
    {
      title: 'Turkey',
      slug: 'turkey',
      image: turkey,
    },
  ]
  const destinations = [
    {
      title: 'Cappadocia',
      slug: 'turkey/cappadocia',
      image: cappadocia_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Istanbul',
      slug: 'turkey/istanbul',
      image: istanbul_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={asia}
          alt="Asia"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="w-full flex flex-col items-center mt10 mb-0">
        <p className="w-1/2 mt-2 text-center text-[#4B0082] text-base font-spectrum">
          Welcome to Asia!
          My family is originally from India, so it was the first major destination we traveled to while I was growing up. 
          The warmth and richness of Asian cultures are truly unmatched, and I feel fortunate to have a second home in this part of the world.
          So far, I’ve only shared tips from my recent trip to Turkey, but I look forward to writing about my experiences in India soon. 
          One of the highlights of my time in Turkey was Cappadocia. Watching the sunrise from a hot air balloon felt like stepping into a fairytale.
        </p>
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
            href={`/destinations/asia/${post.slug}`}
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
            href={`/destinations/asia/${dest.slug}`}
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
