import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import aboutBoardImage from '@/images/about_board.png'
import about_me from '@/app/about/about_top.png'


import { Container } from '@/components/Container'
import {
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

import { Spectral } from 'next/font/google'

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

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

export const metadata: Metadata = {
  title: 'About',
  description: 'Hi I am Shivali',
}

export default function About() {
  return (
    <div className="w-full min-h-screen bg-white px-6 pt-0 pb-10 max-w-screen-xl mx-auto">
      
      {/* Top Banner Image */}
      <div className="relative w-full h-70">
        <Image
          src={about_me}
          alt="About Me"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Container className="mt-6 sm:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] lg:gap-x-2 gap-y-16">
          {/* Left side: all text */}
          <div className="lg:pr-8">
{/*             <h1 className={`${spectral.className} text-4xl font-extrabold tracking-tight text-purple-900 sm:text-5xl dark:text-purple-200 mb-6`}>
              A little about my story …
            </h1> */}
            <div className="space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hi I'm Shivali, and this website is a way for me to share some of my adventures with you guys!
              </p>
              
              <p>
                I grew up in a small town in Indiana where a key part of my childhood was spent outdoors.
                I remember as children there wasn't much to do in the town, so we would use our imagination 
                whether it be running around pretending to be fairies with our handmade flower necklaces 
                or using tree branches and sticks as wands to perform a magic show for our parents. 
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
                This diversity in my academic course load has helped me obtain the multiple diverse internships these past summers.
                A question I often get asked is how I have the budget for my travels. 
                At MIT, we have an international office called MISTI, 
                and they have programs for multiple different countries where your program coordinator helps you find research opportunities and internships. 
                If you are accepted by a company or university after interviewing them, they will pay for your flight to the country, 
                your accomadation throughout your stay, and give you a weekly allowance for food and transportation.    
              </p>
              
              <p>
                The most expensive part about travelling is the flight and accomodation, and if that is covered for most of your trip, it becomes financially easier.
                The way I travel is by participating in these programs and doing weekend trips to visit nearby places 
                (This is where I got the inspiration for the name of my website Weekends with Shivali).
                I also worked a job on campus during the school year to help sponsor my side trips.
                I have spent the past three summers and Januaries abroad at different internships and universities.
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
                Thank you all for joining me in my journey, and I hope the content I provide is helpful to you in your adventures!
              </p>
            </div>
          </div>
  
          {/* Right side: images and social links */}
          <div className="flex flex-col items-start lg:pl-8">
            <div className="max-w-xs px-2.5 lg:px-0">
              <Image
                src={portraitImage}
                alt="Portrait"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="w-full h-auto rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
  
            <ul role="list" className="mt-8">
              <SocialLink href="https://www.instagram.com/shivalisingireddy/" icon={InstagramIcon}>
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/shivalisingireddy" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
            </ul>
  
            <div className="mt-10 max-w-xl px-2.5 lg:px-0">
              <Image
                src={aboutBoardImage}
                alt="Travel board"
                sizes="(min-width: 1024px) 44rem, 36rem"
                className="w-full h-auto bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
