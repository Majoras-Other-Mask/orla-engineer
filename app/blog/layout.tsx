'use client'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'



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

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Set a global flag to indicate we're on a blog page
  useEffect(() => {
    if (pathname?.startsWith('/blog')) {
      document.body.setAttribute('data-blog-page', 'true')
    }
    
    return () => {
      document.body.removeAttribute('data-blog-page')
    }
  }, [pathname])
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />

      {/* Top navigation with return button */}
      <main className="prose prose-gray mt-8 pb-4 prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
        {children}
      </main>

      {/* Bottom return button */}
      <div className="mt-4 text-right">
        <ReturnToPortfolioButton />
      </div>
    </>
  )
}