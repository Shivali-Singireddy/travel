import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'
import blog from '@/app/blog/blog_top.png'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>
          <p className="text-2xl md:text-3xl font-semibold">
            {article.title}
          </p>
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          <span className="text-sm md:text-base">
            {formatDate(article.date)}
          </span>
        </Card.Eyebrow>
        <Card.Description>
          <p className="text-lg md:text-xl">
            {article.description}
          </p>
        </Card.Description>
        <Card.Cta>
          <span className="text-base md:text-lg">Read article</span>
        </Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 max-md:hidden"
      >
        <span className="text-sm md:text-base">
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
