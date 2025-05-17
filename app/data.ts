type Project = {
  name: string
  description: string
  link: string
  video: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'I wrote a thesis',
    description: 'I looked at how gender identity affected performance evaluations of surgical scars.',
    link: 'https://www.proquest.com/docview/3180533619/abstract/496A7B59ED964F77PQ/1?accountid=14586&sourcetype=Dissertations%20&%20Theses',
    video:'',
    image: '/placeholder.png',
    id: 'project1',
  },
  {
    name: 'Measuring Muscle Force',
    description:
      'A publication discussing a video game based system for measuring muscle force. Note, published under M. Gotthelf',
    link: 'https://jneuroengrehab.biomedcentral.com/articles/10.1186/s12984-021-00908-1',
    video:'',
    image: '/ph2.jpg',
    id: 'project2',
  },
  {
    name: 'A Piano for your Pocket',
    description: 'During 2020 I decided to make a piano.',
    link: 'https://github.com/Majoras-Other-Mask/DIY-Pocket-Piano',
    video:'',
    image: '/placeholder.png',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'University of Wisconsin - River Falls',
    title: 'Lecturer– Physics & Engineering ',
    start: '2024',
    end: 'Present',
    link: 'https://www.uwrf.edu/',
    id: 'work1',
  },
  {
    company: 'Medical Robotics and Devices Lab @ U of M',
    title: 'Research Assistant – Robotics & Data-Driven Medical Technology',
    start: '2018',
    end: '2024',
    link: 'https://mrd.umn.edu/',
    id: 'work2',
  },
  {
    company: 'Hu-Friedy Group',
    title: 'R&D, Manufacturing, and QA Co-Op / Intern | Medical Device Engineering',
    start: '2015',
    end: '2018',
    link: 'https://www.hufriedygroup.com/en',
    id: 'work3',
  },
]

/*
export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
]
  */

export const SOCIAL_LINKS: SocialLink[] = [

  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ogotthelf',
  },
]

export const EMAIL = 'orla.gotthelf@gmail.com'
