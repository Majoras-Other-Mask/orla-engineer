'use client'
import { TextLoop } from '@/components/motion-primitives/text-loop'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="text-3xl font-medium text-black dark:text-white">
          Orla Gotthelf &nbsp;
        </Link>
        <TextLoop 
          className="text-3xl font-medium text-black dark:text-white"
          interval={4}  // Increase from default 2 to 4 seconds
          transition={{ duration: 0.8 }}  // Increase from 0.3 to 0.8 seconds
          >
          <span> - &nbsp;Mechanical Engineer</span>
          <span> - &nbsp;Roboticist</span>
          <span> - &nbsp;Mechatronics Specialist</span>
          <span> - &nbsp;Python Coder</span>
          <span> - &nbsp;Controls Systems Expert</span>
        </TextLoop >
      </div>
    </header>
  )
}