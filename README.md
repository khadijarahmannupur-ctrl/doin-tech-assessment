# ByteSpace — Modern Online Learning & Creator Platform

A pixel-perfect, responsive web application for **ByteSpace**, built from the Figma design using Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 🚀 Live Demo & Repository

- **Branch**: `feature/landing-page`
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Fontshare Typography (`Satoshi` & `Clash Display`) + Google Fonts (`Poppins`)

---

## 📋 Features & Scope

### 1. Landing Page (Home — `/`)
- **Hero & Header Navigation**:
  - Logo with vector emblem (`ByteSpace` in Clash Display Bold).
  - Smooth-scroll anchor links with active-section highlighting (`#hero`, `#courses`, `#creators`, `#testimonials`).
  - Mobile navbar drawer with animated hamburger toggle.
  - Search input box with Lime accent action button (`#D4FB20`).
  - Vertical & horizontal blueprint grid background lines overlay (`120px` rhythm).
  - Floating interactive preview badges (*UI/UX Design* stats, *55% Learning Progress* radial meter, *Happy Students* 2K+ avatar stack).
  - 3D geometric cone ornaments with floating micro-animations.
- **Partners Ribbon**:
  - Responsive logo banner with interactive grayscale hover transition.
- **Course Directory**:
  - Section heading and description.
  - Interactive category filter tabs (*All Courses*, *Design*, *Development*, *IT & Software*, *Business*, *Marketing*, *Photography*).
  - Multi-column course card grid featuring instructor, category level, rating, lessons count, duration, comments, price, and student enrollment counters.
- **Diverse Learning Paths**:
  - 6 category cards with custom vector icons and hover lift effects (*Design*, *Development*, *IT & Software*, *Business*, *Marketing*, *Photography*).
- **Platform Highlights**:
  - **Part A (Learners Path)**: Metric counters (**12K** Students, **70+** Courses, **16** Creators) + interactive Figma course preview card.
  - **Part B (Creators Platform)**: 4 core creator pillars + live dashboard analytics card (*Total Revenue $120.29*, *Year to Date $1,200.38*, *4.5 Rating*, *2K+ Students*).
- **Creator CTA Banner**:
  - High-contrast Cobalt Blue (`#003BE2`) banner with 3D cone graphics and *"Join as Creator"* action button.
- **Community Testimonials**:
  - Testimonial cards from active learners and creators (*Sarah M.*, *James L.*, *Alex B.*) with avatar images and roles.
- **Footer**:
  - Brand identity, newsletter subscription form with client feedback, category links, legal links (*Privacy Policy*, *Terms of Service*, *Cookies Settings*).

---

### 2. Authentication Pages (Bonus)
- **Login (`/login`)**:
  - Split layout with brand hero visuals, course preview, and white auth card.
  - Client-side validation for email and password.
  - Show/hide password visibility toggle, remember me checkbox, forgot password link, and social login buttons.
- **Sign Up / Register (`/register`)**:
  - Split layout with value proposition checkpoints.
  - Client-side validation: Full Name, Email, Password (min 8 chars), Confirm Password matching, and Terms agreement checkbox.
  - Success state feedback and seamless redirect.

---

### 3. Custom 404 Page (`/_not-found`)
- Custom branded 404 page matching the Figma specification with giant typography watermark, explanatory copy, and *"Go to Homepage"* button.

---

## 🎨 Design Tokens & System

| Token | Value | Description |
|---|---|---|
| `--color-brand-blue` | `#003BE2` | Primary brand cobalt blue |
| `--color-brand-lime` | `#D4FB20` | Vibrant primary accent / button highlight |
| `--color-brand-lime-dark` | `#CBFC01` | High-contrast lime shade |
| `--color-brand-dark` | `#040819` | Deep navy heading color |
| `--color-brand-dark-2` | `#242528` | Primary text color |
| `--color-brand-body` | `#424348` | Secondary body text |
| `--color-brand-muted` | `#4B4C53` | Subtitle & paragraph text |
| `--color-brand-subtle` | `#82868E` | Meta information & input placeholder |
| `--color-brand-light-bg` | `#FAFAFA` | Light section background |
| `--color-brand-light-gray` | `#F5F5F6` | Tag / filter tab background |
| `--color-brand-border` | `#E5E6E8` | Card border & dividers |

### Typography
- **Headings & Display**: `Clash Display` (700) and `Poppins` (500, 600, 700)
- **Body & Controls**: `Satoshi` (400, 500, 700)

---

## 📁 Project Architecture & Folder Structure

```
doin-tech-assessment/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Design tokens, CSS variables, blueprint grids, animations
│   ├── layout.tsx           # Root layout, fonts, metadata, SEO & OpenGraph tags
│   ├── page.tsx             # Complete ByteSpace landing page
│   ├── not-found.tsx        # Custom 404 error page
│   ├── login/
│   │   └── page.tsx         # Login authentication page
│   └── register/
│       └── page.tsx         # Registration / Sign Up page
├── components/
│   ├── sections/            # Page sections (Single-purpose, prop-driven)
│   │   ├── Navbar.tsx       # Sticky navbar with mobile menu & active section detection
│   │   ├── Hero.tsx         # Hero section with search & floating preview cards
│   │   ├── PartnersRibbon.tsx
│   │   ├── CourseDirectory.tsx # Filter tabs + Course grid
│   │   ├── DiverseCategories.tsx
│   │   ├── PlatformHighlights.tsx
│   │   ├── CtaBanner.tsx
│   │   ├── Testimonials.tsx
│   │   └── Footer.tsx
│   └── ui/                  # Reusable atomic UI components
│       ├── Badge.tsx
│       ├── Button.tsx       # Primary, secondary, brand, outline variants
│       ├── Container.tsx    # Responsive centered container
│       ├── CourseCard.tsx   # Reusable course card component
│       ├── Input.tsx        # Accessible input with password toggle & error states
│       ├── Rating.tsx       # Star rating component
│       └── SectionHeading.tsx # Reusable heading with light/dark themes
├── data/
│   └── content.ts           # Typed arrays for courses, categories, metrics, testimonials
├── types/
│   └── index.ts             # TypeScript interfaces for all entities
└── public/
    └── assets/              # SVGs, 3D cones, category icons, course thumbnails, avatars
```

---

## 🛠️ How to Run Locally

### Prerequisites
- Node.js (v18.18+ or v20+)
- npm (or yarn / pnpm / bun)

### Installation & Execution

1. **Clone the repository and checkout branch**:
   ```bash
   git checkout feature/landing-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run production build verification**:
   ```bash
   npm run build
   ```

---

## 📱 Responsive Breakpoints Supported
- **Mobile Small** (`320px` - `375px`): Stacked column layouts, compact typography, animated hamburger drawer.
- **Mobile Large** (`425px`): Fluid cards, touch-friendly touch targets (min 44px).
- **Tablet** (`768px`): 2-column course grid, 3-column category grid.
- **Desktop** (`1024px` - `1280px`): 3-column course grid, 6-column categories, split highlight sections.
- **Wide Desktop** (`1440px+`): Centered 1200px container, blueprint grid backgrounds, floating badge animations.
