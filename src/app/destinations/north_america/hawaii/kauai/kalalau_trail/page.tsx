import Image from 'next/image'
import kalalau_post from '@/app/destinations/north_america/hawaii/kauai/kalalau_post.png'

export default function KalalauPostPage() {
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
          src={kalalau_post}
          alt="Kalalau Post"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  )
}
