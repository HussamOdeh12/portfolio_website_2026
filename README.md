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

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

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

## Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

1. Connect your Git repository to Netlify
2. Build command: `npm run build`
3. Output directory: `.next`
4. Publish directory: `public`

## Customization

Edit `src/lib/data/resume.ts` to update all content — personal info, experience, projects, skills, education, certifications, and social links.

## Placeholder Assets

- **Resume PDF:** Replace `https://flowcv.com/resume/dok2182n94` with the actual resume
- **Profile Image:** The hero section shows an initials avatar — replace with a real image in the About section
- **Project Screenshots:** Project cards use gradient placeholders — update with actual screenshots

## Environment Variables

No required environment variables for the basic portfolio. Add your own for contact form backend integration.
