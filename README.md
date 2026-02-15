# Databricks-Style Personal Website

A single-page personal portfolio site themed as a Databricks notebook. Built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework** -- Next.js 14 (App Router)
- **Language** -- TypeScript
- **Styling** -- Tailwind CSS with CSS custom properties for light/dark themes
- **Icons** -- [Lucide React](https://lucide.dev/)
- **Images** -- Next.js `<Image>` with static assets in `public/images/`

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)

## Getting Started

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd databricks-personal-site

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
databricks-personal-site/
├── app/                  # Next.js App Router (layout, page, globals.css)
├── components/           # React components
│   ├── cells/            # Notebook cell components (AboutCell, TableCell, etc.)
│   ├── HeaderBar.tsx     # Top header bar (Run all, dark toggle, LinkedIn, cluster)
│   ├── Sidebar.tsx       # Left sidebar navigation
│   ├── SectionHeading.tsx
│   ├── NotebookCanvas.tsx
│   ├── AnimateOnScroll.tsx
│   └── Footer.tsx
├── content/              # All editable content (data files)
├── public/images/        # Static images (badges, logos, photos)
├── tailwind.config.ts    # Tailwind theme (Databricks color tokens)
├── next.config.js        # Next.js configuration
└── package.json
```

## Edit Content

All site content lives in TypeScript files under `content/`. Edit these to update the site without touching components:

| File | What it controls |
|------|------------------|
| `about.ts` | Name, subtitle, and summary paragraph in the About section |
| `badges.ts` | Certifications & Badges (name, image path, link) |
| `contact.ts` | Email, location, LinkedIn URL |
| `education.ts` | Education history (degree, university, year, logo) |
| `experience.ts` | Work experience (role, company, period, bullets, logo) |
| `expertise.ts` | Technical expertise areas and proficiency levels |
| `gallery.ts` | Gallery/highlights images and captions |
| `industries.ts` | Industry cards shown in the About section |
| `skills.ts` | Technical skills, certifications table, and awards |

### Add Images

Place image files in `public/images/` and reference them in content files as `/images/yourfile.png`.

## Features

- **Run All animation** -- clicking "Run all" cascades a staggered running/success animation through every notebook cell
- **Dark mode** -- toggle via the header; persists in localStorage and respects system preference
- **Sidebar navigation** -- icon-based left sidebar; becomes a floating action button on mobile
- **Responsive layout** -- fully responsive across desktop, tablet, and mobile
- **LinkedIn button** -- header links directly to your LinkedIn profile
- **Serverless cluster indicator** -- Databricks-style status bar in the header
- **Scroll animations** -- sections fade in as they enter the viewport
- **See performance** -- expandable runtime info on cells (Databricks notebook style)

## Preview Mobile Layout

1. **Chrome or Edge**
   - Open the site, then press **F12** (or **Cmd+Option+I** on Mac) to open DevTools.
   - Press **Cmd+Shift+M** (Mac) or **Ctrl+Shift+M** (Windows/Linux) to toggle **Device Toolbar**.
   - Pick a device (e.g. iPhone 14, Pixel 7) or set a custom size (e.g. **390 x 844**).
   - Refresh if needed; scroll through the page to check all sections.

2. **Safari**
   - **Develop > Enter Responsive Design Mode** (or **Cmd+Option+R**).
   - Choose a device or set width/height.

3. **Real device**
   - On the same Wi-Fi as your machine, run `npm run dev`, then on your phone open `http://<your-computer-ip>:3000`.
   - Find your IP with `ipconfig getifaddr en0` (Mac) or `ipconfig` (Windows).

## Build and Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel

The easiest way to deploy is with [Vercel](https://vercel.com/):

1. Push the repo to GitHub.
2. Import the repo in Vercel.
3. Vercel auto-detects Next.js and deploys. No extra configuration needed.

## Lint

```bash
npm run lint
```

## License

Private project. All rights reserved.
