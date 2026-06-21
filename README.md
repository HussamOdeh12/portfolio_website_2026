# Hussam Odeh — Portfolio Website

A premium, interactive portfolio website built with Next.js 16, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Three.js.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + GSAP
- **3D Graphics:** Three.js + @react-three/fiber + @react-three/drei
- **Icons:** Lucide React + Custom SVG
- **Theme:** next-themes (Dark/Light mode)

## Features

- 3D animated hero with floating geometric shapes and particles
- Interactive skill rings with SVG animated progress indicators
- Scroll-triggered animations throughout
- Dark/Light theme toggle
- Responsive across all devices
- SEO optimized (Open Graph, Twitter Cards, Schema.org, sitemap, robots)
- WCAG accessible
- Custom cursor (desktop)
- Scroll progress indicator
- Magnetic buttons with hover effects
- Typing effect in hero
- Animated counters in About section
- Interactive timeline for experience
- Glassmorphism design with premium gradients


## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with ThemeProvider
│   ├── page.tsx      # Main page (all sections)
│   ├── not-found.tsx # 404 page
│   ├── loading.tsx   # Loading screen
│   ├── globals.css   # Tailwind + design tokens
│   ├── robots.ts     # SEO robots.txt
│   ├── sitemap.ts    # SEO sitemap.xml
│   └── manifest.ts   # PWA manifest
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, About, Skills, Experience, etc.
│   ├── three/        # Three.js 3D components
│   └── shared/       # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/
│   ├── data/         # Resume data (typed)
│   ├── utils.ts      # cn() helper
│   └── constants.ts  # Site config, nav items
└── types/            # TypeScript interfaces
```
