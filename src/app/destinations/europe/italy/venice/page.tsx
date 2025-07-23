import Image from 'next/image'
import venice_post from '@/app/destinations/europe/italy/venice/venice_post.png'

export default function VenicePostPage() {
  return (
    <div className="relative w-full min-h-screen bg-white border border-[#e0e0e0] mx-auto flex flex-col items-center px-4 py-8 max-w-screen-xl">
      <div className="w-full max-w-[1000px] border border-gray-300 overflow-hidden">
        <Image
          src={venice_post}
          alt="Venice Post"
          width={1000}           // specify natural width for optimization
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  )
}
