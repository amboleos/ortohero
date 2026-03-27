# 🎨 Design System - Orthero Clone

> **STRICT COMPLIANCE REQUIRED** - All agents must follow this document exactly.

## Brand Identity

### Brand Name
**Orthero** (or your custom brand name)

### Tagline
"The Clearest Way of Changing Your Smile"

---

## Color Palette

### Primary Colors
```css
--primary-50: #E6F2FF;
--primary-100: #B3D9FF;
--primary-200: #80BFFF;
--primary-300: #4DA6FF;
--primary-400: #1A8CFF;
--primary-500: #0072E6;  /* Main Primary */
--primary-600: #0059B3;
--primary-700: #004080;
--primary-800: #00264D;
--primary-900: #000D1A;
```

### Secondary Colors (Teal/Cyan for CTAs)
```css
--secondary-50: #E6FFFA;
--secondary-100: #B3FFED;
--secondary-200: #80FFE0;
--secondary-300: #4DFFD3;
--secondary-400: #1AFFC6;
--secondary-500: #00E6B8;  /* Main Secondary */
--secondary-600: #00B392;
--secondary-700: #00806B;
--secondary-800: #004D41;
--secondary-900: #001A16;
```

### Neutral Colors
```css
--neutral-0: #FFFFFF;
--neutral-50: #F8FAFC;
--neutral-100: #F1F5F9;
--neutral-200: #E2E8F0;
--neutral-300: #CBD5E1;
--neutral-400: #94A3B8;
--neutral-500: #64748B;
--neutral-600: #475569;
--neutral-700: #334155;
--neutral-800: #1E293B;
--neutral-900: #0F172A;
```

### Semantic Colors
```css
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

---

## Typography

### Font Family
```css
/* Headings */
--font-heading: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;

/* Body */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Font Sizes
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights
```css
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

---

## Spacing

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

---

## Border Radius

```css
--radius-none: 0;
--radius-sm: 0.25rem;    /* 4px */
--radius-md: 0.375rem;   /* 6px */
--radius-lg: 0.5rem;     /* 8px */
--radius-xl: 0.75rem;    /* 12px */
--radius-2xl: 1rem;      /* 16px */
--radius-3xl: 1.5rem;    /* 24px */
--radius-full: 9999px;
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

---

## Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Mobile-First Approach
```css
/* Default: Mobile */
/* sm: @media (min-width: 640px) */
/* md: @media (min-width: 768px) */
/* lg: @media (min-width: 1024px) */
/* xl: @media (min-width: 1280px) */
/* 2xl: @media (min-width: 1536px) */
```

---

## Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--primary-500);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  transition: all 0.2s ease;
}
.btn-primary:hover {
  background: var(--primary-600);
  transform: translateY(-1px);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: var(--secondary-500);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
}
```

#### Outline Button
```css
.btn-outline {
  background: transparent;
  border: 2px solid var(--primary-500);
  color: var(--primary-500);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
}
```

### Cards

```css
.card {
  background: var(--neutral-0);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}
.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
```

### Input Fields

```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--neutral-300);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  transition: all 0.2s ease;
}
.input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px var(--primary-100);
}
```

---

## Layout Patterns

### Container
```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}
@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-6);
  }
}
@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-8);
  }
}
```

### Section Spacing
```css
.section {
  padding: var(--space-16) 0;
}
@media (min-width: 768px) {
  .section {
    padding: var(--space-24) 0;
  }
}
```

### Grid System
```css
.grid {
  display: grid;
  gap: var(--space-6);
}
.grid-2 { grid-template-columns: repeat(1, 1fr); }
.grid-3 { grid-template-columns: repeat(1, 1fr); }
.grid-4 { grid-template-columns: repeat(1, 1fr); }

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-4 { grid-template-columns: repeat(4, 1fr); }
}
```

---

## Page Structure

### Header (Navigation)
- Sticky on scroll
- Logo on left
- Navigation links center/right
- CTA button on right
- Mobile hamburger menu

### Hero Section
- Full-width background (gradient or image)
- Large heading (text-5xl to text-7xl)
- Subheading (text-xl)
- Primary CTA button
- Optional secondary button

### Feature Sections
- 2-column layout (image + text) alternating
- Grid of feature cards (3-4 columns)
- Icon + title + description format

### Process/Timeline Sections
- Vertical or horizontal timeline
- Numbered steps
- Icons for each step

### CTA Sections
- Full-width colored background
- Centered text
- Single prominent button

### Footer
- Multi-column layout
- Company info
- Quick links
- Product links
- Contact info
- Social media icons
- Newsletter signup
- Copyright

---

## Animations

### Transitions
```css
--transition-fast: 150ms ease;
--transition-normal: 300ms ease;
--transition-slow: 500ms ease;
```

### Hover Effects
- Buttons: translateY(-2px) + shadow increase
- Cards: translateY(-4px) + shadow increase
- Links: color change

### Scroll Animations
- Fade in on scroll
- Slide up on scroll
- Stagger children animations

---

## Icons

Use Lucide React icons or similar:
- `Menu` - Mobile menu
- `X` - Close
- `ChevronDown` - Dropdowns
- `ArrowRight` - CTAs
- `Check` - Lists
- `Phone` - Contact
- `Mail` - Email
- `MapPin` - Location
- `Facebook` - Social
- `Instagram` - Social
- `Twitter` - Social

---

## Accessibility

- All images must have alt text
- Color contrast ratio minimum 4.5:1
- Focus states on all interactive elements
- Semantic HTML (header, nav, main, section, footer)
- ARIA labels where needed
- Skip to main content link

---

## SEO Requirements

- Meta title and description on each page
- Open Graph tags
- Structured data (JSON-LD)
- Semantic heading hierarchy (h1 -> h2 -> h3)
- Alt text on all images

---

## Performance

- Lazy load images below fold
- Optimize images (WebP format preferred)
- Minimize CSS/JS bundle size
- Use Next.js Image component
- Implement loading skeletons

---

## Agent Instructions

### For Each Page Agent:

1. **READ THIS FILE FIRST** - This is your design bible
2. Use the content from `/pages/<page-name>/content.md`
3. Follow the component patterns exactly
4. Use Tailwind CSS classes that match these design tokens
5. Ensure responsive design (mobile-first)
6. Add proper animations and hover states
7. Include SEO meta tags
8. Test accessibility

### File Naming:
- Pages: `app/<route>/page.tsx`
- Components: `components/<ComponentName>.tsx`
- Styles: Use Tailwind, custom CSS only if necessary

### Import Order:
1. React/Next imports
2. Third-party libraries
3. Components
4. Utilities
5. Types
6. Styles

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Poppins, Inter)
- **Icons:** Lucide React
- **Animations:** Framer Motion (optional)
- **Forms:** React Hook Form + Zod

---

*Last Updated: 2026-03-26*
*Version: 1.0.0*
