'use client'
import { motion } from 'motion/react'
import { 
  XIcon,
  ChevronUp, 
} from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogImage,
  MorphingDialogDescription,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import Image from 'next/image'
import { PlusIcon } from 'lucide-react';
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@/components/motion-primitives/accordion'

import { BorderTrail } from '@/components/motion-primitives/border-trail'

// Define Project type to match your data structure
type Project = {
  name: string
  description: string
  link: string
  video: string
  image: string
  id: string
}

// Define the WorkExperience type
type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  // Add these properties to match your data
  description?: string
  achievements?: string[]
  technologies?: string[]
}

// Define the BlogPost type
type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

// Define the ProjectCard component which uses MorphingDialog
function ProjectCard({ project }: { project: Project }) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <div className="w-full aspect-square overflow-hidden">
          <MorphingDialogImage
            src={project.image}
            alt={project.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className='flex grow flex-row items-end justify-between px-3 py-2'>
          <div className="flex flex-col">
            <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
              {project.name}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-xs text-gray-300 line-clamp-1">
              {project.description.substring(0, 60)}...
            </MorphingDialogSubtitle>
          </div>
          <button
            type='button'
            className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
            aria-label='Open dialog'
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '24px',
          }}
          className="relative max-w-4xl rounded-2xl bg-white p-6 dark:bg-zinc-900 ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              <MorphingDialogImage
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className='p-6'>
              <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                {project.name}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                Research Project
              </MorphingDialogSubtitle>
              <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
              >
                <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                  {project.description}
                </p>
              
              </MorphingDialogDescription>
            </div>
            <div className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md bg-zinc-900 text-white dark:bg-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-600 transition-colors"
              >
                Visit Project
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-3 w-3"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <MorphingDialogClose
            className="absolute top-6 right-6 h-fit w-fit rounded-full bg-white p-1 dark:bg-zinc-800"
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

// Updated Projects Section Component
function ProjectsSection() {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="mb-5 text-2xl font-medium text-zinc-950 dark:text-zinc-50">Selected Projects</h3>
      <div className="flex flex-col items-center gap-6 sm:grid sm:grid-cols-2 sm:items-start">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
}

// New WorkExperience Section with Accordion
function WorkExperienceSection() {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="mb-5 text-2xl font-medium text-zinc-950 dark:text-zinc-50">Selected Work Experience</h3>
      <Accordion 
        className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700 space-y-2"
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        {WORK_EXPERIENCE.map((job) => (
          <div
            key={job.id}
            className="relative overflow-hidden rounded-xl bg-zinc-300/30 dark:bg-zinc-600/30"
          >
            <Spotlight
              className="hidden md:block from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <AccordionItem value={job.id} className="rounded-xl bg-white dark:bg-zinc-950">
              <AccordionTrigger className="relative flex w-full justify-between px-4 py-2 group">
                <div className="flex-1">
                  <h4 className="text-left font-normal text-zinc-950 dark:text-zinc-50">
                    {job.title}
                  </h4>
                  <p className="text-left text-zinc-500 dark:text-zinc-400">
                    {job.company}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 text-right text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </div>
                  <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-2">
                <div className="text-zinc-600 dark:text-zinc-400">
                  <p className="mb-2">{job.description || 'Worked on various projects and responsibilities related to my role.'}</p>
                  
                  {job.achievements && job.achievements.length > 0 && (
                    <div className="mb-2">
                      <h5 className="mb-1 font-medium text-zinc-950 dark:text-zinc-50">Key Achievements:</h5>
                      <ul className="list-inside list-disc space-y-1">
                        {job.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {job.technologies && job.technologies.length > 0 && (
                    <div className="mb-2">
                      <h5 className="mb-1 font-medium text-zinc-950 dark:text-zinc-50">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="rounded-md bg-zinc-100 px-2 py-1 text-xs dark:bg-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-3">
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-zinc-950 hover:underline dark:text-zinc-50"
                    >
                      Visit Website
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-3 w-3"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </motion.section>
  );
}

// Updated Blog Posts Section with simpler card design
function BlogPostsSection() {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="mb-5 text-2xl font-medium text-zinc-950 dark:text-zinc-50"></h3>
      <div className="space-y-4">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.uid}
            className="group relative overflow-hidden rounded-xl border border-zinc-950/10 bg-white p-4 transition-all hover:border-zinc-950/20 dark:border-zinc-50/10 dark:bg-zinc-950 dark:hover:border-zinc-50/20"
          >
          <Spotlight
              className="hidden md:block from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Link href={post.link} className="block">
                  <h4 className="text-lg font-medium text-zinc-950 group-hover:text-zinc-700 dark:text-zinc-50 dark:group-hover:text-zinc-300 transition-colors">
                    {post.title}
                  </h4>
                  <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    {post.description}
                  </p>
                </Link>
              </div>
              <Link href={post.link}>
                <button className="relative ml-4 flex h-8 w-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

// UnderConstructionNotice Component
function UnderConstructionNotice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 rounded-lg border-2 border-amber-500 bg-amber-50 p-4 shadow-md dark:border-amber-600 dark:bg-amber-900/30"
    >
      <div className="flex items-center gap-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-amber-600 dark:text-amber-500"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <div>
          <h2 className="font-bold text-amber-800 dark:text-amber-400">WEBSITE UNDER CONSTRUCTION</h2>
          <p className="text-amber-700 dark:text-amber-300">INFORMATION ON SITE IS CURRENTLY A PLACEHOLDER AND DOES NOT REPRESENT ACTUAL EXPERIENCES</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-10"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        transition={{ duration: 0.3 }}
      >
      <div className="flex-1">            
        <div className="rounded-md border-1 border-[#E1B5B5] bg-white dark:border-[#D4A5A5] dark:bg-zinc-950 p-2">
          <div className='text-zinc-600 dark:text-zinc-400'>
            I'm an engineer, educator, and researcher who loves building things, breaking things, and fixing things. 
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="mt-4 text-zinc-600 dark:text-zinc-400">
          With a Ph.D. in Mechanical Engineering and a background that bridges robotics, control systems, mechatronics, and medical devices, I've led R&D projects from early-stage concepts to testable, real-world prototypes. My journey has spanned industry and academia: I've developed soft and hard robotic systems for medical applications, taught university-level courses in dynamics and machine design, and collaborated on interdisciplinary teams across engineering, healthcare, and data science.
        </div>
      </div>

      {/*<UnderConstructionNotice />*/}
      
      </motion.section>

      <ProjectsSection />

      <WorkExperienceSection />

      {/*<BlogPostsSection />*/}
      
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mb-5 text-2xl font-medium text-zinc-950 dark:text-zinc-50">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline text-zinc-950 dark:text-zinc-50" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          <span className="text-zinc-600 dark:text-zinc-400">Or connect with me on</span>
          {SOCIAL_LINKS.map((link) => (
            <Magnetic key={link.label} springOptions={{ bounce: 0 }} intensity={0.3}>
              <a
                href={link.link}
                className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                {link.label}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Magnetic>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}