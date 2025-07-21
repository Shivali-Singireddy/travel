import Image from 'next/image'
import paris_post from '@/app/destinations/europe/paris/paris_post.png'

export default function ParisPostPage() {
  return (
    <div className="relative w-full min-h-screen bg-white border border-[#e0e0e0] mx-auto flex flex-col items-center px-4 py-8 max-w-screen-xl">
      <div className="w-full max-w-[1000px] border border-gray-300 overflow-hidden">
        <Image
          src={paris_post}
          alt="Paris Post"
          width={1000}           // specify natural width for optimization
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  )
}
