'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { Spectral } from 'next/font/google'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

// Load Spectral font
const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  const router = useRouter()
  const { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e8f9] shadow-md ring-1 ring-[#d1b3e0] transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-[#7A5E8A] transition group-hover:stroke-[#6a4f76] dark:stroke-zinc-400" />
            </button>
          )}
          <article className={spectral.className}>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#7A5E8A] sm:text-5xl dark:text-[#d9cbe4]">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-zinc-500 dark:text-zinc-400"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-500" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
            </header>

            <Prose className={`mt-8 ${spectral.className} text-zinc-800 dark:text-zinc-200`}>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
