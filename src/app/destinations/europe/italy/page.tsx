import Image from 'next/image'
import Link from 'next/link'
import venice_post from '@/app/destinations/europe/italy/venice/venice_post.png'
import rome_post from '@/app/destinations/europe/italy/rome/rome_post.png'
import florence_post from '@/app/destinations/europe/italy/florence/florence_post.png'
import italy_post from '@/app/destinations/europe/italy/northern_italy/italy_post.png'
import feat_dest from '@/app/destinations/feat_dest.png'
import italy from '@/app/destinations/europe/italy/italy_top.png'


export default function Italy_Page() {
  const posts = [
    {
      title: 'Venice',
      slug: 'venice',
      image: venice_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Rome',
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
      title: 'Italy: Milan, Lake Como, Verona, Bologna',
      slug: 'northern_italy',
      image: italy_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
   <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={italy}
          alt="Italy"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

       <div className="w-full flex flex-col items-center mt10 mb-0">
        <p className="w-1/2 mt-2 text-center text-[#4B0082] text-base font-spectrum">
          Welcome to Italy! I spent a month in Italy teaching high school seniors, which gave me a unique opportunity to connect with local students and immerse myself in Italian life.
          I was based in a small town near Bologna with a host family, which made it easy to explore different cities on the weekends and fully experience the culture.
          The food in Italy is truly next level. Make sure to try local specialties because the right meal can completely elevate your experience.
          Italy is also full of history and has countless museums, making it a fascinating place to visit for anyone interested in culture and the arts.
          My favorite city was Venice. It had always been a dream of mine to visit, and being there in person was every bit as magical as I had imagined.
        </p>

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
