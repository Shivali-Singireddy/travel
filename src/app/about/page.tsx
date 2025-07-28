import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import aboutBoardImage from '@/images/about_board.png'


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
          <h1 className="text-4xl font-bold tracking-tight text-purple-900 sm:text-5xl dark:text-purple-200">
            A little about my story ...
          </h1>

          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hi I'm Shivali and this website is a way for me to share some of my adventures with you guys!
            </p>
            
            <p>
              I grew up in a small town in Indiana where a key part of my childhood was spent outdoors.
              I remember as children there wasn't much to do in the town, so we would use our imagination 
              whether it be running around pretending to be fairies with our handmade flower necklaces 
              or using grass wands to perform a magic show for our parents. 
              Growing up in this environment was a blessing and has given me so many fond memories I reflect upon to this day.
              However, as I entered college, it fueled my desire to explore more of the world outside this little bubble that I had grown up in.
            </p>
            
            <p>
              Throughout high school my primary interests lay in Math and Computer Science. I loved having a correct quantifiable solution.
              However, with the COVID-19 pandemic I realized I didn't want to sit in an office or at home and code all day.
              I wanted to interact with people, and so I entered my first year of MIT with the intent to declare a major in Business Analytics as opposed to Computer Science.
              However, my interest in Computer Science still lingered, and I decided to try out a few classes in this department as well.
              Eventually, I ended up majoring in both Business Analytics and Artificial Intelligence.
              And since I was so indecisive with my interests, I also ended up earning a minor in Economics
            </p>

            <p>
              This diversity in my academic course load has helped me obtain the internships I these past summers.
              A question I often get asked is how I have the budget for my travels. 
              At MIT, we have an international office called MISTI, 
              and they have programs for multiple different countries where your program coordinator helps you find research opportunities and internships. 
              If you are accepted by a company or university after interviewing them, they will pay for your flight to the country, 
              your accomadation throughout your stay, and give you a weekly allowance for food and transportation.    
            </p>
            
            <p>
              The most expensive part about travelling is the flight and accomodation, and if that is covered for most of your trip, it becomes financially easier.
              The way I travel is by participating in these programs and doing weekend trips to visit nearby places. 
              I also worked a job on campus during the school year to help sponsor my side trips.
              I have spent the past three summers and the month of January abroad at different internships and universities.
              By living among locals and working with them on a daily basis, not only have I been able to see the most famous parts of a country, but I have also
              learned about the local cultures in these different areas, and made life long friends.
            </p>

            <p>
              Aside from travelling, I have a few other hobbies which include taekwondo, painting, hiking,
              and dance. Through this personal blog I hope to document some of my experiences with my hobbies
              and provide others with information I have learned. I hope that I can be a resource who is relatable
              and also give my honest perspective on what I have done with my life so far.
            </p>
            
            <p>
              As I look towards my future, I will be working full time in San Francisco as a business analyst at McKinsey.
              My hope is to continue doing what I enjoy, and I feel that SF is the perfect place for me to continue growing.
              I hope to keep this website updated with the hikes I plan to do while I am there along with the travels I embark on with my job.
              Thank you all for joining me in my journey, and I hope the content I provide is helpful to you in your adventures as well!
            </p>
            <p>
              
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
          <div className="mt-10 max-w-lg px-2.5 lg:px-0">
            <Image
              src={aboutBoardImage}
              alt="Travel board"
              sizes="(min-width: 1024px) 40rem, 32rem"
              className="w-full h-auto bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
