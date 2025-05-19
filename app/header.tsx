'use client'
import { TextLoop } from '@/components/motion-primitives/text-loop'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeftIcon, MailIcon } from 'lucide-react'

function ReturnToPortfolioButton() {
  return (
    <Link 
      href="/"
      className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors text-zinc-700 dark:text-zinc-300 text-sm font-medium"
    >
      <ArrowLeftIcon className="h-4 w-4" />
      Return to Portfolio
    </Link>
  )
}

function EmailButton() {
  return (
    <a
      href="mailto:orla.gotthelf@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors text-zinc-700 dark:text-zinc-300 text-sm font-medium"
    >
      <MailIcon className="h-4 w-4" />
      Contact Me
    </a>
  )
}

export function Header() {
  const pathname = usePathname()
  const isBlogPage = pathname.startsWith('/blog')

  return (
    <header className="mb-4 flex items-start justify-between">
      <div className="flex-1 min-w-0">
        <Link href="/" className="text-3xl font-medium text-black dark:text-white">
          Orla Gotthelf
        </Link>
        
        {!isBlogPage && (
          <div className="min-w-0">
            <TextLoop 
              className="text-3xl font-medium text-black dark:text-white block min-h-[2.25rem]"
              interval={4}  // Increase from default 2 to 4 seconds
              transition={{ duration: 0.8 }}  // Increase from 0.3 to 0.8 seconds
              >
              <span>Mechanical Engineer</span>
              <span>Roboticist</span>
              <span>Mechatronics Specialist</span>
              <span>Python Coder</span>
              <span>Controls Systems Expert</span>
            </TextLoop>
          </div>
        )}
      </div>

      <div className="flex-shrink-0 ml-4">
        {isBlogPage ? (
          <ReturnToPortfolioButton />
        ) : (
          <EmailButton />
        )}
      </div>
    </header>
  )
}