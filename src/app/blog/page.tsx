import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'
import blog from '@/app/blog/blog_top.png'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-start">
      <Card className="md:col-span-3 p-6">
        <Card.Title
          href={`/blog/${article.slug}`}
          className={`${spectralBold.className} text-3xl leading-tight mb-2 text-purple-800 hover:text-teal-600 transition`}
        >
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden text-lg text-zinc-700 dark:text-zinc-400 mb-4"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
          {article.description}
        </Card.Description>
        <Card.Cta className="text-lg">Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-3 text-base text-zinc-600 dark:text-zinc-400 md:mt-0 text-right"
      >
        {formatDate(article.date)}
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
