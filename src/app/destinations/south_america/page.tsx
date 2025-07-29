import Image from 'next/image'
import Link from 'next/link'
import south_america from '@/app/destinations/south_america/south_america_top.png'
import top_regions from '@/app/destinations/top_regions.png'
import feat_dest from '@/app/destinations/feat_dest.png'
import brazil from '@/app/destinations/south_america/brazil.png'
import peru from '@/app/destinations/south_america/peru.png'
import manaus_post from '@/app/destinations/south_america/brazil/manaus/manaus_post.png'
import rio_post from '@/app/destinations/south_america/brazil/rio_de_janeiro/rio_post.png'
import sao_paolo_post from '@/app/destinations/south_america/brazil/sao_paolo/sao_paolo_post.png'
import iguazu_post from '@/app/destinations/south_america/brazil/iguazu_falls/iguazu_post.png'
import cusco_post from '@/app/destinations/south_america/peru/cusco/cusco_post.png'
import salkantay_post from '@/app/destinations/south_america/peru/cusco/salkantay_trail/salkantay_post.png'


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
  const destinations = [
    {
      title: 'Rio',
      slug: 'brazil/rio_de_janeiro',
      image: rio_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Amazon/Manaus',
      slug: 'brazil/manaus',
      image: manaus_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Cusco',
      slug: 'cusco',
      image: cusco_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Salkantay Trail',
      slug: 'cusco/salkantay_trail',
      image: salkantay_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    
    {
      title: 'Sao Paolo',
      slug: 'sao_paolo',
      image: sao_paolo_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Iguazu Falls',
      slug: 'iguazu_falls',
      image: iguazu_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={south_america}
          alt="South America"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="w-full flex flex-col items-center mt10 mb-0">
        <p className="w-1/2 mt-2 text-center text-[#4B0082] text-base font-spectrum">
          Welcome to South America!
          I spent about three months based in São Paulo doing research and explored other Brazilian cities on weekends. 
          Afterward, I traveled for two weeks across Peru.
          I absolutely fell in love with the culture of South America, whether it be attending forro dance lessons, attending June parties, or visiting a Sunday market, South America will always have a special place in my heart.
          My favorite cities are Rio de Janeiro and Cusco, both home to one of the seven wonders. 
          Rio offers hikes, beaches, nightlife, museums, and rich culture, while Cusco is the perfect base for nature day trips.
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
            href={`/destinations/south_america/${dest.slug}`}
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
