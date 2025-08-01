import Image from 'next/image'
import Link from 'next/link'
import cappadocia_post from '@/app/destinations/asia/turkey/cappadocia/cappadocia_post.png'
import istanbul_post from '@/app/destinations/asia/turkey/istanbul/istanbul_post.png'
import feat_dest from '@/app/destinations/feat_dest.png'
import turkey from '@/app/destinations/asia/turkey/turkey_top.png'

export default function TurkeyPage() {
  const posts = [
    {
      title: 'Cappadocia',
      slug: 'cappadocia',
      image: cappadocia_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
    {
      title: 'Istanbul',
      slug: 'istanbul',
      image: istanbul_post,
      description: '4 day itinerary covering Road to Hana, Haleakala, and Waihee Ridge.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={turkey}
          alt="Turkey"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

       <div className="w-full flex flex-col items-center mt10 mb-0">
        <p className="w-1/2 mt-2 text-center text-[#4B0082] text-base font-spectrum">
          Welcome to Turkey! I spent a week travelling around Cappadocia and Istanbul.
          I absolutely loved Cappadocia and how welcoming everyone in the town was. Cappdocia during sunrise is absolutely magical.
          Cappadocia had the most activities out of all the places I've travelled to, and the activities felt focused on learning as opposed to performing.
          Istanbul is much more fastpaced, and I definately would visit this place with a group of friends. 
          My favorite part of Istanbul was definately Balat Neighborhood, and you could easily spend a whole day here.
          For female travelers, it's a good idea to dress modestly, especially when visiting religious or traditional areas. 
          Covering your legs and avoiding tight-fitting clothing will help you feel more comfortable and respectful of local customs.
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
            href={`/destinations/asia/turkey/${post.slug}`}
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
