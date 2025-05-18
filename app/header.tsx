'use client'
import { TextLoop } from '@/components/motion-primitives/text-loop'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="text-3xl font-medium text-black dark:text-white">
          Orla Gotthelf
        </Link>
        <div>
          <TextLoop 
            className="text-3xl font-medium text-black dark:text-white"
            interval={4}
            transition={{ duration: 0.8 }}
          >
            <span>Mechanical Engineer</span>
            <span>Roboticist</span>
            <span>Mechatronics Specialist</span>
            <span>Python Coder</span>
            <span>Controls Systems Expert</span>
          </TextLoop>
        </div>
      </div>
    </header>
  )
}