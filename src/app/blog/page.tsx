import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'
import blog from '@/app/blog/blog_top.png'
import { Spectral } from 'next/font/google'

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>
          <p
            className={`${spectral.className} text-lg md:text-xl font-semibold`}
            style={{ color: '#7A5E8A' }}
          >
            {article.title}
          </p>
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          <span className="text-[0.7rem] md:text-xs">
            {formatDate(article.date)}
          </span>
        </Card.Eyebrow>
        <Card.Description>
          <p className="text-sm md:text-base">
            {article.description}
          </p>
        </Card.Description>
        <Card.Cta>
          <span className="text-xs md:text-sm">Read article</span>
        </Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 max-md:hidden"
      >
        <span className="text-[0.7rem] md:text-xs">
          {formatDate(article.date)}
        </span>
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Personal Blog',
  description:
    'All of my non travel related stories',
}

export default async function BlogIndex() {
  let articles = await getAllArticles()

  return (
    <div className="w-full bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Banner */}
      <div className="relative w-full h-90">
        <Image
          src={blog}
          alt="Personal Blog"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Spacing between banner and articles */}
      <div className="mt-12" />

      {/* Centered content */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl md:border-l md:border-zinc-100 md:pl-8 md:dark:border-zinc-700/40">
          {/* Increased spacing between articles */}
          <div className="flex flex-col space-y-20">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
