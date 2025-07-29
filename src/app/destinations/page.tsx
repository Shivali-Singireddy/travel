import Image from 'next/image'
import Link from 'next/link'
import san_diego_post from '@/app/destinations/north_america/california/san_diego/san_diego_post.png'
import north_america from '@/app/destinations/north_america.png'
import south_america from '@/app/destinations/south_america.png'
import europe from '@/app/destinations/europe.png'
import asia from '@/app/destinations/asia.png'
import destinations_banner from '@/app/destinations/destinations.png'
import continents_label from '@/app/destinations/continents_label.png'

import madeira_post from '@/app/destinations/europe/madeira/madeira_post.png'
import rio_post from '@/app/destinations/south_america/brazil/rio_de_janeiro/rio_post.png'
import kalalau_post from '@/app/destinations/north_america/hawaii/kauai/kalalau_trail/kalalau_post.png'
import cappadocia_post from '@/app/destinations/asia/turkey/cappadocia/cappadocia_post.png'


export default function DestinationsPage() {
  const posts = [
    {
      title: 'Europe',
      slug: 'europe',
      image: europe,
    },
    {
      title: 'South America',
      slug: 'south_america',
      image: south_america,
    },
    {
      title: 'North America',
      slug: 'north_america',
      image: north_america,
    },
    {
      title: 'Africa',
      slug: 'africa',
      image: san_diego_post,
    },
    {
      title: 'Asia',
      slug: 'asia',
      image: asia,
    },
  ]

  const destinations = [
    {
      title: 'Madeira',
      slug: 'europe/madeira',
      image: madeira_post,
      description: 'Explore the Road to Hana and Haleakalā.',
    },
    {
      title: 'Kalalau Trail',
      slug: 'north_america/hawaii/kauai/kalalau_trail',
      image: kalalau_post,
      description: 'Explore the Road to Hana and Haleakalā.',
    },
    {
      title: 'Rio de Janeiro',
      slug: 'south_america/brazil/rio_de_janeiro',
      image: rio_post,
      description: 'Explore the Road to Hana and Haleakalā.',
    },
    {
      title: 'Cappadocia',
      slug: 'asia/turkey/cappadocia',
      image: cappadocia_post,
      description: 'Explore the Road to Hana and Haleakalā.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-90">
        <Image
          src={destinations_banner}
          alt="Destinations Banner"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Centered Text Section */}
      <div className="w-full flex flex-col items-center mt-0 mb-6">
        <p className="w-1/2 mt-2 text-center text-[#4B0082] text-base font-spectrum">
          Welcome to the homepage for my travels!
          Here you can explore my travel experiences and insights from around the world. 
          This page is organized by continent, followed by a selection of my favorite featured destinations.
          To find articles on specific cities, you can select the relevant continent. 
          You'll then be directed to subregions within that continent, where you can browse all related city posts.
          Enjoy exploring!
        </p>
        <div className="relative mt-4">
          {/* Underline */}
          <span className="absolute inset-x-0 top-1/2 h-1 bg-purple-200 opacity-70 transform -translate-y-1/2"></span>
          {/* Label Image */}
          <Image
            src={continents_label}
            alt="Continents"
            width={400} 
            height={120}
            className="relative z-10"
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/destinations/${post.slug}`}
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

      <div className="w-full flex flex-col items-center mt-0 mb-6">
       <h2 className="mt-4 text-4xl font-bold text-[#4B0082] font-spectrum text-center">Featured Destinations</h2>    
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <Link
            key={dest.slug}
            href={`/destinations/europe/${dest.slug}`}
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
