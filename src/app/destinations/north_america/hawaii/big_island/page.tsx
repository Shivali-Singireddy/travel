import Image from 'next/image'
import big_island_post from '@/app/destinations/north_america/hawaii/big_island/big_island_post.png'

export default function BigIslandPostPage() {
  return (
    <div className="relative w-full min-h-screen bg-white border border-[#e0e0e0] mx-auto flex flex-col items-center px-4 py-8 max-w-screen-xl">
      <div className="relative w-full max-w-[1000px]">
        <Image
          src={big_island_post_post}
          alt="Big Island Post"
          width={1000}           // specify natural width for optimization
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  )
}
