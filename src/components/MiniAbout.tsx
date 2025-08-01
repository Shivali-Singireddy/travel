// components/MiniAbout.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import aboutBoardImage from '@/images/about_board.png'
import portraitImage from '@/images/portrait.jpg'
import { Spectral } from 'next/font/google'

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

export default function MiniAbout() {
  return (
    <div className="w-full bg-[#FAF5EF] py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className={`text-4xl font-extrabold text-[#7A5E8A] mb-6 ${spectral.className}`}>
            A Little About Me
          </h2>
          <p className="text-lg text-zinc-800 mb-6">
            Hi, I’m Shivali! I grew up in a small town in Indiana and since starting college at MIT, I have been travelling to different parts of the world during my breaks. 
            From my experiences during college to international internships, I’ve built this blog to share my travel, hobbies, and reflections. 
            Whether it’s taekwondo, hiking, or painting — I document it all here.
          </p>
          <Link
            href="/about"
            className="inline-block bg-[#7A5E8A] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#6b4f7c] transition"
          >
            See more →
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex flex-col gap-6 items-center">
          <div className="w-full max-w-xs">
            <Image
              src={portraitImage}
              alt="Portrait"
              className="w-full h-auto rounded-xl rotate-2 shadow-lg"
            />
          </div>
          <div className="w-full max-w-xs">
            <Image
              src={aboutBoardImage}
              alt="Travel board"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
