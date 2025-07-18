import Image from 'next/image'
import maui_post from '@/app/destinations/north_america/hawaii/maui/maui_post.png'

export default function MauiPostPage() {
  return (
    <div className="relative w-full h-screen bg-[#FAF5EF] border border-[#e0e0e0] mx-auto flex items-center justify-center">
      <div className="relative w-full max-w-screen-xl h-auto" style={{ aspectRatio: '3 / 4' }}>
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
          src={maui_post}
          alt="Maui Post"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  )
}
