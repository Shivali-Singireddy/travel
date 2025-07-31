import Image from 'next/image'
import Link from 'next/link'
import cusco_post from '@/app/destinations/south_america/peru/cusco/cusco_post.png'
import salkantay_post from '@/app/destinations/south_america/peru/cusco/salkantay_trail/salkantay_post.png'
import peru_post from '@/app/destinations/south_america/peru/peru_overall/peru_post.png'
import feat_dest from '@/app/destinations/feat_dest.png'
import peru from '@/app/destinations/south_america/peru/peru_top.png'

export default function PeruPage() {
  const posts = [
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
      title: 'Peru: Huacachina, Millipu, Lima, Ballestic Islands',
      slug: 'peru_overall',
      image: peru_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={peru}
          alt="Peru"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

       <div className="w-full flex flex-col items-center mt10 mb-0">
        <p className="w-1/2 mt-2 text-center text-[#4B0082] text-base font-spectrum">
          Welcome to Peru! I spent three incredible weeks traveling around Peru. 
          I explored on my own during the first week and then continued the journey with my family in the second.
          Peru is incredibly welcoming to backpackers and solo travelers, especially in Cusco, which serves as a hub for most tours and excursions. 
          You can book many experiences directly from Cusco, although it’s important to plan ahead for Machu Picchu. 
          I recommend booking Machu Picchu tours or treks at least three months in advance, as spots fill up quickly. 
          One of the most fascinating things about Peru is its diverse climate. 
          The country is home to 28 of the world's 32 recognized climate zones, making it a dream destination for nature lovers. 
          From mountains and deserts to jungles and coastlines, the variety is simply breathtaking.
          The culture is rich and vibrant, and the people I met along the way were incredibly warm and kind. Peru is a place that truly stays with you.
          
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
