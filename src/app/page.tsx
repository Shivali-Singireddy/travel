import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { RotatingImages } from '@/components/RotatingImages'
import ContinentCarousel from '@/components/ContinentCarousel'

import tape from '@/images/tape.jpg'
import avatar from '@/images/avatar.jpg'
import amazon from '@/images/photos/amazon.jpg'
import machupichu from '@/images/photos/machupichu.jpg'
import horse from '@/images/photos/horse.jpg'
import books from '@/images/photos/books.jpg'
import green_beach from '@/images/photos/green_beach.jpg'
import kalalau from '@/images/photos/kalalau.jpg'
import maui from '@/images/photos/maui.jpg'

import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Spectral } from 'next/font/google'

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex items-center">
        <span className="flex min-w-0 flex-auto p-px">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(var(--spacing-2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
          />
        </span>
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      {/* Most content constrained to 95% width and centered, with Spectral font */}
      <div className={`${spectral.className} w-[95%] mx-auto`}>
        <div className="mt-10" />

        <div className="relative w-full h-[650px] bg-[#FAF5EF] border border-[#e0e0e0] overflow-visible">
          {/* Right Purple Rectangle */}
          <div className="absolute top-0 right-0 h-full w-[50%] bg-[#7A5E8A]" />

          {/* Amazon Image */}
          <div
            className="absolute -translate-x-1/2 z-10"
            style={{ top: '50%', left: '55%', width: '300px', height: '300px' }}
          >
            <Image src={amazon} alt="Amazon" className="w-full h-full object-cover" />
            <div
              className="absolute top-0 left-0 border-2 border-gray-800 pointer-events-none"
              style={{
                width: '300px',
                height: '300px',
                transform: 'translate(-8px, -8px)',
                backgroundColor: 'transparent',
              }}
            />
          </div>

          <div
            style={{
              position: 'relative',
              width: 470,
              height: 550,
              zIndex: 20,
            }}
          >
            {/* Outline */}
            <div
              style={{
                position: 'absolute',
                top: 40,
                left: 690,
                width: 490,
                height: 540,
                border: '1px solid black',
                pointerEvents: 'none',
                boxSizing: 'border-box',
              }}
            />
            {/* Rotating Images container */}
            <div
              style={{
                position: 'absolute',
                top: 60,
                left: 710,
                width: 450,
                height: 500,
                overflow: 'hidden',
                border: '1px solid #D1D5DB',
                boxSizing: 'border-box',
              }}
            >
              <RotatingImages
                images={[machupichu, horse, books, maui, kalalau, green_beach]}
                width={450}
                height={500}
              />
            </div>
          </div>

          {/* Tape Image */}
          <Image
            src={tape}
            alt="Tape"
            width={96}
            height={32}
            className="absolute z-30 w-56"
            style={{
              top: '-65px',
              left: 'calc(5% + 90px)',
              transform: 'rotate(-15deg)',
            }}
          />

          {/* Left Purple Box with Text */}
          <div
            className="absolute top-1/2 left-[5%] z-20"
            style={{ width: '480px', height: '500px', transform: 'translateY(-55%)' }}
          >
            <div
              className="absolute top-0 left-0 bg-[#7A5E8A] p-6"
              style={{
                width: '480px',
                height: '500px',
                transform: 'rotate(-5deg)',
              }}
            >
              <div
                className="text-white text-center h-full flex flex-col justify-center items-center mt-6"
                style={{ transform: 'rotate(5deg)' }}
              >
                <h2 className="text-6xl font-extrabold mb-6">
                  Welcome to Weekends with Shivali
                </h2>
                <p className="text-2xl leading-relaxed max-w-[80%]">
                  Hi, I’m Shivali and welcome to my personal blog! With this blog I hope to
                  primarily share my experiences with travelling and other hobbies!
                </p>
              </div>
            </div>

            {/* Outline */}
            <div
              className="absolute top-0 left-0 border border-black pointer-events-none"
              style={{
                width: '480px',
                height: '500px',
                transform: 'rotate(-5deg) translate(8px, 8px)',
                backgroundColor: 'transparent',
                zIndex: 30,
              }}
            />
          </div>

          {/* Avatar Image */}
          <div
            className="absolute z-40"
            style={{
              top: '-20px',
              left: '48%',
              width: 250,
              height: 250,
            }}
          >
            <Image
              src={avatar}
              alt="Avatar"
              width={250}
              height={250}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Articles Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map(article => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-20">
          <Newsletter />
        </section>
      </div>

      {/* Carousel Full width - Outside of constrained wrapper */}
      <div className="w-screen bg-[#7A5E8A] border-t border-b border-gray-300">
        <div className="max-w-full">
          <ContinentCarousel />
        </div>
      </div>
    </>
  )
}
