import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
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
import { RotatingImages } from '@/components/RotatingImages' // client component
import type { StaticImageData } from 'next/image'
import { Spectral } from 'next/font/google'

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '700', '800'], // Use any weights you need
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

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
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
            className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
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
      <div className="mt-10" />

      <div className="relative w-[95%] h-[650px] bg-[#FAF5EF] border border-[#e0e0e0] overflow-visible mx-auto">
        {/* Right Purple Rectangle */}
        <div className="absolute top-0 right-0 h-full w-[50%] bg-[#7A5E8A]" />
      
        {/* Amazon Image (behind purple box, slightly lower and to the right) */}
        <div
          className="absolute -translate-x-1/2 z-10"
          style={{
            top: '50%',
            left: '55%',
            width: '300px',
            height: '300px',
          }}
        >
          <Image
            src={amazon}
            alt="Amazon"
            className="w-full h-full object-cover"
          />
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
            width: 470,       // outline container bigger than image container
            height: 550,
            zIndex: 20,
          }}
        >
          {/* Outline */}
          <div
            style={{
              position: 'absolute',
              top: 40,        // offset upwards
              left: 690,       // offset leftwards
              width: 490,      // slightly bigger width than container (470 + 20 offset total)
              height: 540,     // slightly bigger height (300 + 20)
              border: '1px solid black',
              borderRadius: 0,
              pointerEvents: 'none',  // don't block mouse events
              boxSizing: 'border-box',
            }}
          />
        
          {/* Image container */}
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
            <RotatingImages images={[machupichu, horse, books, maui, kalalau, green_beach]} width={450} height={500} />
          </div>
        </div>

      
        {/* Tape Image (moved slightly right and up) */}
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
              className={`text-white text-center h-full flex flex-col justify-center items-center mt-6 ${spectral.className}`}
              style={{
                transform: 'rotate(5deg)',
              }}
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
        <div
          className="absolute z-40"
          style={{
            top: '-20px',     // move up
            left: '48%',      // move right
            width: 250,
            height: 250,
          }}
        >
          <Image
            src={avatar}
            alt="Avatar"
            width={250}
            height={250}
            className="object-cover w-full h-full"
            style={{ display: 'block' }}
          />
          <div
            className="absolute top-0 left-0 pointer-events-none"
            style={{
              width: '220px',
              height: '220px',
              transform: 'translate(15px, 15px)',
              backgroundColor: 'transparent',
              border: '1px solid #FAF5EF',
            }}
          />
        </div>
      </div>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  )
}
