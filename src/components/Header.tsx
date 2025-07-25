'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import avatarImage from '@/images/avatar.jpg'
import { Transition } from '@headlessui/react'
import headerImage from '@/images/heading.jpg'
import headerhomeImage from '@/images/heading_home.jpg'

import { InstagramIcon, LinkedInIcon } from '@/components/SocialIcons'
import { useRouter } from 'next/router';

type DropdownNavItemProps = {
  label: string
  href: string
  items: {
    label: string
    href: string
    subItems?: {
      label: string
      href: string
    }[]
  }[]
}

function SocialLinkIcon({
  href,
  icon: Icon,
  className,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  className?: string
}) {
  return (
    <Link href={href} className={clsx(className, 'group')}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-teal-500" />
    </Link>
  )
}


function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  )
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            <MobileNavItem href="/destinations">Destinations</MobileNavItem>
            <MobileNavItem href="/blog">Personal Blog</MobileNavItem>
            <MobileNavItem href="/about">About</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}

export function DropdownNavItem({ label, items }: DropdownNavItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="/destinations"
        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
      >
        {label}
      </Link>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <ul className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10 z-50">
          {items.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700"
              >
                {item.label}
              </Link>
        
              {item.subItems && (
                <ul className="absolute left-full top-0 ml-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10 hidden group-hover:block">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.href}>
                      <Link
                        href={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Transition>
    </li>
  )
}


function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props} className="w-full">
      <ul className="mx-auto flex max-w-2xl justify-between items-center px-4 text-base font-semibold text-purple-900 dark:text-purple-200">
        <NavItem href="/">Home</NavItem>
        <DropdownNavItem
          label="Destinations"
          href="/desintations"
          items={[
            {
              label: 'Europe',
              href: '/destinations/europe',
              subItems: [
                { label: 'Italy', href: '/destinations/europe/italy' },
                { label: 'United Kingdom', href: '/destinations/europe/united_kingdom' },
                { label: 'Madeira', href: '/destinations/europe/madeira' },
                { label: 'Czech Republic', href: '/destinations/europe/czech_republic' },
                { label: 'Santorini', href: '/destinations/europe/santorini' },
                { label: 'Barcelona', href: '/destinations/europe/barcelona' },
                { label: 'Paris', href: '/destinations/europe/paris' },
                { label: 'Algarve', href: '/destinations/europe/algarve' },
                { label: 'Amsterdam', href: '/destinations/europe/amsterdam' },
                { label: 'Switzerland', href: '/destinations/europe/switzerland' },
                { label: 'Brussels', href: '/destinations/europe/brussels' },
              ],
            },
            {
              label: 'North America',
              href: '/destinations/north_america',
              subItems: [
                { label: 'Hawaii', href: '/destinations/north_america/hawaii' },
                { label: 'Mexico', href: '/destinations/north_america/mexico' },
                { label: 'California', href: '/destinations/north_america/california' },
              ],
            },
            {
              label: 'South America',
              href: '/destinations/south_america',
              subItems: [
                { label: 'Brazil', href: '/destinations/south_america/brazil' },
                { label: 'Peru', href: '/destinations/south_america/peru' },              
              ],
            },
            {
              label: 'Africa',
              href: '/destinations/africa',
              subItems: [
                { label: 'Morocco', href: '/destinations/africa/morocco' },
              ],
            },
            {
              label: 'Asia',
              href: '/destinations/asia',
              subItems: [
                { label: 'Turkey', href: '/destinations/asia/turkey' },
              ],
            },
          ]}
        />

        <NavItem href="/blog">Personal Blog</NavItem>
        <NavItem href="/about">About</NavItem>
      </ul>
    </nav>
  )
}

function clamp(number: number, a: number, b: number) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10',
      )}
      {...props}
    />
  )
}

function Avatar({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  large?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9',
        )}
        priority
      />
    </Link>
  )
}

export function Header() {
  let isHomePage = usePathname() === '/'

  let headerRef = useRef<React.ElementRef<'div'>>(null)
  let avatarRef = useRef<React.ElementRef<'div'>>(null)
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return
      }

      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      // if (!isHomePage) {
      //   return
      // }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`,
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return  (
    <>
      {isHomePage ? (
        // Homepage Header (large image centered)
        <header ref={headerRef} className="sticky top-0 z-50 bg-white dark:bg-zinc-800">
          <div className="bg-white dark:bg-zinc-800 px-6 py-4 custom-dotted-border">
            <div className="mx-auto max-w-screen-xl flex items-center justify-between">
              <div className="flex-1 flex justify-center">
                <Image
                  src={headerhomeImage}
                  alt="Header"
                  className="h-32 w-auto object-contain dark:bg-zinc-800"
                  priority
                />
              </div>
            </div>
          </div>
        
          <div className="top-0 z-50 bg-purple-100 dark:bg-purple-900 px-6 py-4 shadow-md">
            <div className="mx-auto max-w-screen-xl flex items-center justify-between">
              {/* Left: Avatar */}
              <div className="hidden md:block">
                <AvatarContainer>
                  <Avatar />
                </AvatarContainer>
              </div>
        
              <div className="hidden md:flex flex-1 justify-center">
                <DesktopNavigation />
              </div>
        
              <div className="flex items-center gap-4">
                <SocialLinkIcon href="https://www.instagram.com/shivalisingireddy/" icon={InstagramIcon} />
                <SocialLinkIcon href="https://www.linkedin.com/in/shivalisingireddy" icon={LinkedInIcon} />
              </div>
        
              <div className="md:hidden flex justify-between w-full">
                <MobileNavigation className="pointer-events-auto" />
                <div className="flex items-center gap-4">
                  <SocialLinkIcon href="https://www.instagram.com/shivalisingireddy/" icon={InstagramIcon} />
                  <SocialLinkIcon href="https://www.linkedin.com/in/shivalisingireddy" icon={LinkedInIcon} />
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        // All Other Pages Header
        <header
          ref={headerRef}
          className="sticky top-0 z-50 bg-purple-100 dark:bg-purple-900 shadow-md"
        >
          <div className="mx-auto max-w-screen-xl flex items-center justify-between px-6 py-3">
            
            {/* Left: Header Image */}
            <div className="flex-shrink-0 mr-26">
              <Image
                src={headerImage}
                alt="Header"
                className="h-16 w-auto object-contain"
                priority
              />
            </div>
  
            {/* Center: Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <DesktopNavigation />
            </div>
  
            {/* Right: Social Icons + Avatar */}
            <div className="flex items-center gap-3">
              <SocialLinkIcon
                href="https://www.instagram.com/shivalisingireddy/"
                icon={InstagramIcon}
              />
              <SocialLinkIcon
                href="https://www.linkedin.com/in/shivalisingireddy"
                icon={LinkedInIcon}
              />
              <div className="hidden md:block">
                <AvatarContainer>
                  <Avatar />
                </AvatarContainer>
              </div>
            </div>
  
            {/* Mobile Nav */}
            <div className="md:hidden flex flex-1 justify-end">
              <MobileNavigation className="pointer-events-auto" />
            </div>
          </div>
        </header>
      )}

    </>
  )
}
