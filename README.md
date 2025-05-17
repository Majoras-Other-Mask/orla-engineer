# Personal Website

<img src="/public/cover.jpg" alt="Cover image of my personal website" width="100%" />

This is my personal website built using Next.js 15, React 19, Tailwind CSS v4, and Motion. As a mechanical engineer specializing in robotics and mechatronics, I've designed this site to showcase my projects, experience, and interests in a clean, minimalist manner.

## Technologies Used

- **Framework**: Next.js 15
- **UI**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Motion-Primitives
- **Component Library**: Lucide React for icons
- **Content**: MDX for blog posts
- **Theming**: next-themes for dark/light mode

## Based on the Nim Template

Nim is a free and open-source personal website template built with Next.js 15, React 19, Tailwind CSS v4, and Motion. Designed for developers, designers, and founders, it combines minimalism with delightful animated components powered by [Motion-Primitives](https://motion-primitives.com).

## Deployment

The site is deployed using Vercel which supports Next.js: 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fibelick%2Fnim&env=NEXT_PUBLIC_SITE_URL&project-name=nim&repository-name=nim&redirect-url=https%3A%2F%2Ftwitter.com%2Fibelick&demo-title=Nim&demo-description=Nim%20is%20a%20free%20and%20open-source%20minimal%20personal%20website%20template%20built%20with%20Next.js%2015%2C%20React%2019%2C%20and%20Motion-Primitives.&demo-url=https%3A%2F%2Fnim.vercel.app&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fibelick%2Fnim%2Frefs%2Fheads%2Fmain%2F.github%2Fassets%2Freadme.png&teamSlug=ibelick)


## Connect

Feel free to reach out to me at [orla.gotthelf@gmail.com](mailto:orla.gotthelf@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/ogotthelf).

# Repository Structure

```
.
├── .gitignore                       # Specifies files to be ignored by Git (node_modules, build files, etc.)
├── .prettierrc.json                 # Configuration for Prettier code formatter
├── INSTALLATION.md                  # Instructions for installing and setting up the project
├── README.md                        # Project overview, features, and getting started guide
├── app                              # Main application directory (Next.js App Router)
│   ├── blog                         # Blog related pages
│   │   ├── exploring-the-intersection-of-design-ai-and-design-engineering
│   │   │   └── page.mdx            # Sample blog post as MDX file
│   │   └── layout.tsx              # Layout component for blog posts
│   ├── data.ts                      # Data file containing projects, work experience, and contact info
│   ├── footer.tsx                   # Footer component with theme switcher
│   ├── globals.css                  # Global CSS styles and Tailwind imports
│   ├── header.tsx                   # Header component with your name and title
│   ├── layout.tsx                   # Root layout component that wraps the entire app
│   ├── page.tsx                     # Homepage component with projects, work experience, and contact info
│   └── robots.ts                    # Robots.txt configuration for search engines
├── components                       # Reusable UI components
│   └── ui                           # UI component directory
│       ├── animated-background.tsx  # Animated background component for interactive elements
│       ├── magnetic.tsx             # Magnetic effect component for hoverable elements
│       ├── morphing-dialog.tsx      # Dialog component with morphing animations
│       ├── scroll-progress.tsx      # Scroll progress indicator for blog posts
│       ├── spotlight.tsx            # Spotlight effect component for cards
│       ├── text-effect.tsx          # Text animation effects component
│       ├── text-loop.tsx            # Text looping animation component
│       └── text-morph.tsx           # Text morphing animation component
├── eslint.config.mjs                # ESLint configuration for code linting
├── hooks                            # Custom React hooks
│   └── useClickOutside.tsx          # Hook for detecting clicks outside an element
├── lib                              # Utility functions and constants
│   ├── constants.ts                 # Application constants like website URL
│   └── utils.ts                     # Utility functions including className merging
├── mdx-components.tsx               # MDX component customizations
├── next.config.mjs                  # Next.js configuration file
├── package-lock.json                # NPM package lock file with exact dependency versions
├── package.json                     # Project dependencies and scripts
├── postcss.config.mjs               # PostCSS configuration for processing CSS
├── public                           # Static files served by Next.js
│   ├── cover.jpg                    # Cover image for the website
│   ├── next.svg                     # Next.js logo
│   └── vercel.svg                   # Vercel logo
└── tsconfig.json                    # TypeScript configuration
```

## Key Files Explained

### Configuration Files
- **package.json**: Defines project dependencies and scripts for development, building, and linting
- **tsconfig.json**: TypeScript configuration with paths, compiler options, and included/excluded files
- **next.config.mjs**: Next.js configuration with MDX support
- **.prettierrc.json**: Prettier configuration for code formatting rules
- **postcss.config.mjs**: PostCSS configuration for Tailwind CSS processing

### Core Application Files
- **app/layout.tsx**: Root layout that includes theme provider, fonts, and metadata
- **app/page.tsx**: Main homepage with your information, projects and work experience
- **app/data.ts**: Central data file containing all your personal information, projects, work experience
- **app/header.tsx**: Header component with your name and professional title
- **app/footer.tsx**: Footer component with theme toggle and copyright information

### Styling and UI
- **app/globals.css**: Global styles and Tailwind CSS imports
- **components/ui/**: Directory containing reusable UI components with animations
- **lib/utils.ts**: Utility functions for class name handling with clsx and tailwind-merge

### Blog System
- **app/blog/layout.tsx**: Layout specific to blog posts with scroll progress and URL copy button
- **app/blog/exploring-the-intersection-of-design-ai-and-design-engineering/page.mdx**: Sample blog post
- **mdx-components.tsx**: Custom MDX components for rendering blog content

### Custom Hooks
- **hooks/useClickOutside.tsx**: Custom hook for detecting clicks outside an element (used for dialogs)
