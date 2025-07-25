import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hi I am Shivali',
}

export default function About() {
  return (
    <Container className="mt-6 sm:mt-10">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:px-0">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="w-full h-auto rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-purple-800 sm:text-5xl dark:text-purple-300">
            Hi it's Shivali! Welcome to my personal blog :).
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I'm 22 years old and I just graduated with a bachelors degree in both 
              Artificial Intelligence and Business Analytics with a minor in Economics
              from MIT. I will be working fulltime in San Francisco at McKinsey starting
              in September.
              
            </p>
            <p>
              
            </p>
            <p>
              I have spent the past three summer abroad at different internships and universities.
              Not only have I learned about the local cultures in these different areas, 
              but I have been able to do weekend trips and visit nearby places. I often get asked how I 
              sponsor my travel and it is through these opportunities while working a campus job
              during college to have enough to sponsor myself. The most expensive part about travelling
              is the flight and accomodation, and if that is covered for most of your trip, it becomes 
              financially easier.
            </p>
            <p>
              Aside from travelling, I have a few other hobbies which include taekwondo, painting, hiking,
              and dance. Through this personal blog I hope to document some of my experiences with my hobbies
              and provide others with information I have learned. I hope that I can be a resource who is relatable
              and also give my honest perspective on what I have done with my life so far.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/shivalisingireddy/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/shivalisingireddy" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
