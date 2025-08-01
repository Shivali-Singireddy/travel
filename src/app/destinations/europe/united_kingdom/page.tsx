import Image from 'next/image'
import Link from 'next/link'
import london_post from '@/app/destinations/europe/united_kingdom/london/london_post.png'
import ireland_post from '@/app/destinations/europe/united_kingdom/ireland/ireland_post.png'
import scotland_post from '@/app/destinations/europe/united_kingdom/scotland/scotland_post.png'
import feat_dest from '@/app/destinations/feat_dest.png'
import uk_top from '@/app/destinations/europe/united_kingdom/uk_top.png'

export default function United_Kingdom_Page() {
  const posts = [
    {
      title: 'London',
      slug: 'london',
      image: london_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Ireland',
      slug: 'ireland',
      image: ireland_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Scotland',
      slug: 'scotland',
      image: scotland_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
      <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
        
        {/* Top Banner Image */}
        <div className="relative w-full h-90">
          <Image
            src={uk_top}
            alt="United Kingdom"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

       <div className="w-full flex flex-col items-center mt10 mb-0">
        <p className="w-1/2 mt-2 text-center text-[#4B0082] text-base font-spectrum">
          Welcome to the UK! 
          I spent three months in England doing a company internship, which gave me the chance to experience daily life and explore the country’s rich history and landscapes. 
          The culture is relaxed and easygoing, making it a great place to travel at your own pace.
          If you visit the Scottish Highlands, you might even catch a glimpse of the legendary Loch Ness Monster, Nessie. 
          One of the most breathtaking sights I saw was Eilean Donan Castle. 
          With its dramatic location and partially ruined medieval look, it felt like something out of a storybook.
          While in Ireland, a highlight was a day trip from Belfast to the Giant’s Causeway. 
          Formed by ancient lava flows, its unique hexagonal rock formations make it truly one of a kind.
          Both Ireland and Scotland get plenty of rain, even in summer, so be sure to pack a good waterproof jacket.
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
            href={`/destinations/europe/united_kingdom/${post.slug}`}
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
