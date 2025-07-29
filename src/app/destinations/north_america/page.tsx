import Image from 'next/image'
import Link from 'next/link'
import california from '@/app/destinations/north_america/california.jpg'
import hawaii from '@/app/destinations/north_america/hawaii.png'
import mexico from '@/app/destinations/north_america/mexico.png'
import north_america from '@/app/destinations/north_america/north_america_top.png'
import top_regions from '@/app/destinations/top_regions.png'



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
        <div className="relative w-full flex justify-center my-4">
          <div className="w-full">
            <hr className="border-t-2 bg-[#7A5E8A] opacity-90" />
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
    </div>
  )
}
