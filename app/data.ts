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
  description?: string
  achievements?: string[]
  technologies?: string[]
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
  /*
  {
    name: 'A Piano for your Pocket',
    description: 'During 2020 I decided to make a piano.',
    link: 'https://github.com/Majoras-Other-Mask/DIY-Pocket-Piano',
    video:'',
    image: '/placeholder.png',
    id: 'project3',
  },
  */
  {
    name: 'Soft Robotic Medical Device Control System',
    description: 'Developed adaptive algorithms for controlling soft robots in medical applications, achieving 90%+ positioning accuracy despite nonlinear material deformation.',
    link: '/nonparamjacobian.pdf',
    video: '',
    image: '/soft-robot.jpg',
    id: 'project1',
  },
  {
    name: 'Handheld Delta Robot for Enhanced Motor Control',
    description: 'Engineered a Python-based collaborative robot that provides subtle assistance during precision tasks using computer vision and real-time control.',
    link: 'https://mrd.umn.edu/active-research-projects/shared-control',
    video: '',
    image: '/delta-robot.jpg',
    id: 'project2',
  },
  {
    name: 'Grip Force Device Validation for Muscular Dystrophy Research',
    description: 'Validated a video game-based assessment system for measuring muscle strength in children with muscular dystrophy, achieving 99.7% completion rate across 311 participants.',
    link: 'https://jneuroengrehab.biomedcentral.com/articles/10.1186/s12984-021-00908-1',
    video: '',
    image: '/gameplay.png',
    id: 'project3',
  },
  {
    name: 'Surgical Skill Evaluation Research Project',
    description: 'Managed large-scale research evaluating surgical technical skills through crowdsourcing, coordinating thousands of participants and developing comprehensive databases.',
    link: 'https://www.proquest.com/docview/3180533619/abstract/5F1BC982D644788PQ/1?accountid=14586&sourcetype=Dissertations%20&%20Theses',
    video: '',
    image: '/website.jpg',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
{
    company: 'University of Wisconsin - River Falls',
    title: 'Lecturer – Physics & Engineering',
    start: '2024',
    end: 'Present',
    link: 'https://www.uwrf.edu/',
    id: 'work1',
    description: 'Designed and delivered hands-on engineering curriculum for undergraduate students, focusing on practical applications of physics and engineering principles. Successfully mentored student capstone projects from concept to prototype.',
    achievements: [
      'Enhanced student comprehension of instrumentation and data collection through LabVIEW programming coursework',
      'Led dynamics courses in systems analysis, resulting in improved practical engineering application understanding',
      'Developed comprehensive machine design curriculum covering extrusion, mechanical systems, and manufacturability',
      'Mentored student capstone projects including a solar-powered electrical system that achieved full functionality',
      'Adapted course content based on continuous feedback, achieving measurable improvements in student engagement'
    ],
    technologies: ['LabVIEW', 'MATLAB', 'CAD', 'SolidWorks', 'Teaching & Curriculum Development']
  },
  {
    company: 'University of Minnesota - Twin Cities',
    title: 'Research Assistant – Robotics & Data-Driven Medical Technology',
    start: '2019',
    end: '2024',
    link: 'https://mrd.umn.edu/',
    id: 'work2',
    description: 'Led cutting-edge research in soft robotics and medical device control systems, developing innovative solutions for human-robot collaboration in medical applications. Secured research funding through grant proposals and published peer-reviewed findings.',
    achievements: [
      'Engineered adaptive control algorithms achieving 90%+ accuracy for soft robotic end effectors despite nonlinear material deformation',
      'Published research in Journal of NeuroEngineering and Rehabilitation with 99.7% participant completion rate across 311 subjects',
      'Coordinated recruitment with surgical societies, successfully enrolling thousands of participants for comparative studies',
      'Managed Linux server infrastructure on Google Cloud Platform for large-scale data collection and analysis',
      'Led interdisciplinary collaboration between engineers, statisticians, surgeons, and researchers'
    ],
    technologies: ['Python', 'OpenCV', 'MATLAB', 'Linux', 'Google Cloud Platform', 'R', 'SolidWorks']
  },
  {
    company: 'Hu-Friedy Mfg Co, LLC',
    title: 'R&D, Manufacturing and QA Co-Op | Medical Device Engineering',
    start: '2015',
    end: '2018',
    link: 'https://www.hufriedygroup.com/en',
    id: 'work3',
    description: 'Engineered comprehensive testing protocols and design validation systems for medical devices, ensuring regulatory compliance and product reliability. Led design optimization initiatives and modernization efforts for legacy product lines.',
    achievements: [
      'Developed stress testing and life cycle validation protocols under extreme conditions for medical device reliability',
      'Executed Design of Experiments (DoE) for product families, identifying common failure mechanisms to improve longevity',
      'Designed and fabricated mechanical/electrical test fixtures using Arduino and SolidWorks, improving testing efficiency',
      'Performed 3D scanning of legacy products, utilizing surface modeling to generate accurate 3D models for modernization',
      'Restructured test reporting systems to meet regulatory standards, enhancing cross-team communication and QA practices'
    ],
    technologies: ['SolidWorks', 'Arduino', 'ANSYS', '3D Scanning', 'Statistical Analysis', 'DoE']
  },
]


export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Blog Post Template',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '/blog/blog-post-template',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ogotthelf',
  },
]

export const EMAIL = 'orla.gotthelf@gmail.com'