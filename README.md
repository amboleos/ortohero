# Orthero Clone Project

A modern, responsive website clone inspired by ortheroaligner.com - a clear aligner orthodontic company website.

## 🚀 Project Structure

```
orthero-clone/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── treatment-process/ # Treatment Process page
│   ├── advantages/        # Advantages page
│   ├── differences/       # Differences page
│   ├── treatable-cases/   # Treatable Cases page
│   ├── treatment-packages/# Treatment Packages page
│   ├── aligner-material/  # Aligner Material page
│   ├── cbct-integration/  # CBCT Integration page
│   ├── news-media/        # News and Media page
│   ├── contact/           # Contact page
│   ├── privacy-policy/    # Privacy Policy page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── layout/           # Header, Footer, Navigation
│   ├── ui/               # Buttons, Cards, Inputs
│   └── sections/         # Page sections
├── pages/                # Content files (markdown)
│   ├── home/
│   ├── about/
│   ├── treatment-process/
│   ├── advantages/
│   ├── differences/
│   ├── treatable-cases/
│   ├── treatment-packages/
│   ├── aligner-material/
│   ├── cbct-integration/
│   ├── news-media/
│   ├── contact/
│   └── privacy-policy/
├── assets/               # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
├── styles/               # Additional styles
├── docs/                 # Documentation
│   ├── DESIGN-SYSTEM.md  # ⚠️ MUST READ
│   └── SITE-ANALYSIS.md  # Original site analysis
└── README.md             # This file
```

## 📋 Pages to Build

| # | Page | Route | Content File | Status |
|---|------|-------|--------------|--------|
| 1 | Home | `/` | pages/home/content.md | ⏳ |
| 2 | About | `/about` | pages/about/content.md | ⏳ |
| 3 | Treatment Process | `/treatment-process` | pages/treatment-process/content.md | ⏳ |
| 4 | Advantages | `/advantages` | pages/advantages/content.md | ⏳ |
| 5 | Differences | `/differences` | pages/differences/content.md | ⏳ |
| 6 | Treatable Cases | `/treatable-cases` | pages/treatable-cases/content.md | ⏳ |
| 7 | Treatment Packages | `/treatment-packages` | pages/treatment-packages/content.md | ⏳ |
| 8 | Aligner Material | `/aligner-material` | pages/aligner-material/content.md | ⏳ |
| 9 | CBCT Integration | `/cbct-integration` | pages/cbct-integration/content.md | ⏳ |
| 10 | News & Media | `/news-media` | pages/news-media/content.md | ⏳ |
| 11 | Contact | `/contact` | pages/contact/content.md | ⏳ |
| 12 | Privacy Policy | `/privacy-policy` | pages/privacy-policy/content.md | ⏳ |

## 🎨 Design System

**⚠️ CRITICAL:** Read `docs/DESIGN-SYSTEM.md` before writing any code.

All agents must follow the design system strictly:
- Color palette
- Typography
- Spacing
- Components
- Layout patterns

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Poppins, Inter)
- **Icons:** Lucide React
- **Animations:** Framer Motion (optional)
- **Forms:** React Hook Form + Zod

## 📝 Development Workflow

1. Read `docs/DESIGN-SYSTEM.md` first
2. Read your assigned page's content from `pages/<page>/content.md`
3. Build the page following the design system
4. Ensure responsive design (mobile-first)
5. Add proper animations and hover states
6. Include SEO meta tags
7. Test accessibility

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Shared Components

Before building pages, these shared components should be created:

### Layout Components
- `Header` - Navigation header
- `Footer` - Site footer
- `Navigation` - Desktop/mobile nav
- `Container` - Max-width container

### UI Components
- `Button` - Primary, secondary, outline variants
- `Card` - Feature cards
- `Input` - Form inputs
- `IconCard` - Icon + title + description

### Section Components
- `HeroSection` - Page hero
- `FeatureGrid` - Grid of features
- `CTASection` - Call to action
- `NewsletterSection` - Email signup

---

*Project initialized: 2026-03-26*
