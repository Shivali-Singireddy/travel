import Image from 'next/image'
import Link from 'next/link'
import california from '@/app/destinations/north_america/california.jpg'
import hawaii from '@/app/destinations/north_america/hawaii.png'


export default function NorthAmericaPage() {
  const regions = [
    {
      title: 'Hawaii',
      slug: 'hawaii',
      image: hawaii,
    },
    {
      title: 'California',
      slug: 'california',
      image: california,
    },
  ]

  const destinations = [
    {
      title: 'Cancun',
      slug: 'cancun',
      image: cancun_post,
      description: 'Explore the Road to Hana and Haleakalā.',
    },
  ]

  return (
    <div className="w-full min-h-screen bg-white px-6 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-900">Explore Europe</h1>

      {/* Region-Level Buttons (Simple Style) */}
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">Top Regions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {regions.map((region) => (
          <Link
            key={region.slug}
            href={`/destinations/north_america/${region.slug}`}
            className="block border border-gray-300 overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-75">
              <Image
                src={region.image}
                alt={region.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Destination-Level Buttons (Detailed Style) */}
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">Featured Destinations</h2>
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
