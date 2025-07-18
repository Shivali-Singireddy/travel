import Image from 'next/image'
import salvador_post from '@/app/destinations/south_america/brazil/salvador/salvador_post.png'

export default function SalvadorPostPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#FAF5EF] border border-[#e0e0e0] mx-auto flex flex-col items-center px-4 py-8 max-w-screen-xl">
      <div className="relative w-full" style={{ aspectRatio: '3 / 4', maxWidth: 600 }}>
        {/* Outline around image */}
        <div
          className="absolute top-[-10px] left-[-10px] border border-black pointer-events-none"
          style={{
            width: 'calc(100% + 20px)',
            height: 'calc(100% + 20px)',
          }}
        />

        {/* Image itself */}
        <Image
          src={salvador_post}
          alt="Salvador Post"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  )
}
