'use client'

import Image from 'next/image'
import Link from 'next/link'
import aboutBoardImage from '@/images/about_horizontal.png'
import portraitImage from '@/images/portrait.jpg'
import { Spectral } from 'next/font/google'

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

export default function MiniAbout() {
  return (
    <div className="w-full bg-[#FAF5EF] py-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 px-6">
        
        {/* Left Side: Text + Bottom Image */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className={`text-4xl font-extrabold text-[#7A5E8A] mb-6 ${spectral.className}`}>
              A Little About Me
            </h2>
            <p className="text-lg text-zinc-800 mb-6">
              I grew up in a small town in Indiana with a childhood full of outdoor adventures. 
              At MIT, I double-majored in Business Analytics and Artificial Intelligence, and minored in Economics. 
              I’ve completed international internships through MIT’s MISTI program, which helped me explore new cultures while working abroad. 
              Besides academics and travel, I enjoy taekwondo, painting, hiking, and dance. Soon, I’ll start as a business analyst at McKinsey in San Francisco, eager for new professional and personal experiences.
            </p>
            <Link
              href="/about"
              className="inline-block bg-[#7A5E8A] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#6b4f7c] transition"
            >
              See more →
            </Link>
          </div>

          {/* Bottom image under text (not rounded) */}
          <div className="mt-10 hidden lg:block">
            <Image
              src={aboutBoardImage}
              alt="Travel board"
              className="w-full h-auto shadow-lg"
            />
          </div>
        </div>

        {/* Right Side: Portrait only */}
        <div className="flex justify-center items-start">
          <div className="w-full max-w-xs">
            <Image
              src={portraitImage}
              alt="Portrait"
              className="w-full h-auto rounded-xl rotate-2 shadow-lg"
            />
          </div>
        </div>

        {/* On small screens: bottom image shown below all content (not rounded) */}
        <div className="lg:hidden mt-10 px-6">
          <Image
            src={aboutBoardImage}
            alt="Travel board"
            className="w-full h-auto shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
