import Image from 'next/image'
import ireland_post from '@/app/destinations/europe/united_kingdom/ireland/ireland_post.png'

export default function LondonPostPage() {
  return (
    <div className="relative w-full min-h-screen bg-white border border-[#e0e0e0] mx-auto flex flex-col items-center px-4 py-8 max-w-screen-xl">
      <div className="w-full max-w-[1000px] border border-gray-300 overflow-hidden">
        <Image
          src={ireland_post}
          alt="Ireland Post"
          width={1000}           // specify natural width for optimization
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  )
}
