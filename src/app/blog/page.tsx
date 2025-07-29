// import { type Metadata } from 'next'

// import { Card } from '@/components/Card'
// import { SimpleLayout } from '@/components/SimpleLayout'
// import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
// import { formatDate } from '@/lib/formatDate'

// function Article({ article }: { article: ArticleWithSlug }) {
//   return (
//     <article className="md:grid md:grid-cols-4 md:items-baseline">
//       <Card className="md:col-span-3">
//         <Card.Title href={`/blog/${article.slug}`}>
//           {article.title}
//         </Card.Title>
//         <Card.Eyebrow
//           as="time"
//           dateTime={article.date}
//           className="md:hidden"
//           decorate
//         >
//           {formatDate(article.date)}
//         </Card.Eyebrow>
//         <Card.Description>{article.description}</Card.Description>
//         <Card.Cta>Read article</Card.Cta>
//       </Card>
//       <Card.Eyebrow
//         as="time"
//         dateTime={article.date}
//         className="mt-1 max-md:hidden"
//       >
//         {formatDate(article.date)}
//       </Card.Eyebrow>
//     </article>
//   )
// }

// export const metadata: Metadata = {
//   title: 'Personal Blog',
//   description:
//     'All of my non travel related stories',
// }

// export default async function BlogIndex() {
//   let articles = await getAllArticles()

//   return (
//     <SimpleLayout
//       title="Taking life one weekend at a time."
//       intro="All of my non travel related stories"
//     >
//       <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
//         <div className="flex max-w-3xl flex-col space-y-16">
//           {articles.map((article) => (
//             <Article key={article.slug} article={article} />
//           ))}
//         </div>
//       </div>
//     </SimpleLayout>
//   )
// }

// app/blog/page.tsx (or equivalent)
// app/blog/page.tsx
import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Spectral } from 'next/font/google'

const spectral = Spectral({ subsets: ['latin'], weight: ['700'] })

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`} className={spectral.className}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} className="md:hidden" decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow as="time" dateTime={article.date} className="mt-1 max-md:hidden">
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Personal Blog',
  description: 'All of my non-travel related stories',
}

export default async function BlogIndex() {
  const articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Taking life one weekend at a time."
      intro="All of my non-travel related stories"
    >
      {/* Hero intro block */}
      <div className="relative w-full h-[240px] bg-[#FAF5EF] mb-10 flex items-center justify-center overflow-visible">
        <h1 className="text-center text-4xl font-extrabold text-purple-900">
          Stories & Musings
        </h1>
        {/* Optional: tape or rotated elements */}
      </div>

      {/* Purple accent line */}
      <div className="w-full flex justify-center mb-8">
        <hr className="border-t-2 border-[#7A5E8A] w-full max-w-3xl opacity-90" />
      </div>

      {/* Articles grid */}
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex flex-col space-y-16 max-w-3xl mx-auto">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
