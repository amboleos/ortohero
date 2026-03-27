# Orthero Homepage Exact Clone - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the Orthero homepage to be an exact visual and structural clone of www.ortheroaligner.com

**Architecture:** Update existing React/Next.js components to match original site's navigation structure, footer links, and section layouts. Use Tailwind CSS for styling with existing design tokens.

**Tech Stack:** Next.js 14, React, Tailwind CSS, Lucide Icons, TypeScript

---

## Files to Modify

| File | Change Type | Description |
|------|-------------|-------------|
| `components/layout/Header.tsx` | Modify | Add mega-menu with 4 category cards + language selector |
| `components/layout/Footer.tsx` | Modify | Update to 4-column layout with correct links |
| `app/page.tsx` | Verify | Ensure NewsletterSection props are correct |

**Note:** `/treatment-packages` and `/faqs` pages are linked but out of scope (will 404 until created separately).

---

## Task 1: Update Header Navigation Structure

**Files:**
- Modify: `components/layout/Header.tsx`

**Goal:** Match original site's navigation with mega-menu + language selector

- [ ] **Step 1: Replace Header.tsx with complete implementation**

Replace `components/layout/Header.tsx` with:

```typescript
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Container } from './Container';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Orthero', href: '/about' },
  { name: 'Treatment Process', href: '/treatment-process' },
  { name: 'Advantages', href: '/advantages' },
  { name: 'Differences', href: '/differences' },
  { name: 'Treatable Cases', href: '/treatable-cases' },
  { name: 'Treatment Packages', href: '/treatment-packages' },
  { name: 'Aligner Material', href: '/aligner-material' },
  { name: 'CBCT Integration', href: '/cbct-integration' },
  { name: 'News and Media', href: '/news-media' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact Us', href: '/contact' },
];

const menuCategories = [
  {
    name: 'Best Features',
    subtitle: '',
    href: '/advantages',
    icon: 'https://ortheroaligner.com/wp-content/uploads/2024/08/Orthero_Smiley_Purple.svg',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Treatable Cases',
    subtitle: 'Maloclussions',
    href: '/treatable-cases',
    icon: 'https://ortheroaligner.com/wp-content/uploads/2024/08/Orthero_Smiley_Blue.svg',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Orthero Differences',
    subtitle: 'Technology',
    href: '/differences',
    icon: 'https://ortheroaligner.com/wp-content/uploads/2024/08/Orthero_Smiley_Purple.svg',
    bgColor: 'bg-purple-50',
  },
  {
    name: 'Orthero Advantages',
    subtitle: 'Benefits',
    href: '/advantages',
    icon: 'https://ortheroaligner.com/wp-content/uploads/2024/08/Orthero_Smiley_Purple.svg',
    bgColor: 'bg-purple-50',
  },
];

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'ES', name: 'Español' },
  { code: 'TR', name: 'Türkçe' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="https://ortheroaligner.com/wp-content/uploads/2024/08/Orthero-logo-1024x341-1.png"
              alt="Orthero"
              width={140}
              height={47}
              className={cn(
                'h-10 w-auto transition-all duration-300',
                !scrolled && 'brightness-0 invert'
              )}
              priority
            />
          </Link>

          {/* Desktop: Menu Button + Language + Log In */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200',
                scrolled
                  ? 'text-neutral-700 hover:text-[#330388]'
                  : 'text-white/90 hover:text-white'
              )}
            >
              <span className="text-sm font-medium">MENU</span>
              {isOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={cn(
                  'flex items-center gap-1 px-2 py-1 text-sm font-medium transition-colors',
                  scrolled
                    ? 'text-neutral-700 hover:text-[#330388]'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {currentLang}
                <ChevronDown className={cn('w-3 h-3 transition-transform', langOpen && 'rotate-180')} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangOpen(false);
                      }}
                      className={cn(
                        'block w-full px-4 py-2 text-left text-sm hover:bg-[#330388]/10',
                        currentLang === lang.code && 'text-[#BB1AA0] font-medium'
                      )}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Log In Button */}
            <Link
              href="https://dr.orthero.com.tr/new/main-panel"
              className={cn(
                'px-5 py-2 rounded-full font-medium transition-all duration-200',
                scrolled
                  ? 'bg-[#BB1AA0] text-white hover:bg-[#330388]'
                  : 'bg-[#F0F7FF] text-[#330388] hover:bg-white'
              )}
            >
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200',
              scrolled
                ? 'text-neutral-700 hover:bg-neutral-100'
                : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            <span className="text-sm font-medium">MENU</span>
            {isOpen ? <X className="w-5 h-5" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mega Menu Dropdown */}
        <div
          className={cn(
            'lg:overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-[800px] mt-4' : 'max-h-0'
          )}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8">
            {/* Category Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6 lg:mb-0">
              {menuCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'p-4 rounded-xl flex flex-col items-center text-center hover:shadow-md transition-all duration-200',
                    category.bgColor
                  )}
                >
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                  <span className="font-semibold text-sm text-[#330388]">
                    {category.name}
                  </span>
                  {category.subtitle && (
                    <span className="text-xs text-gray-500">{category.subtitle}</span>
                  )}
                </Link>
              ))}
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-700 hover:text-[#330388] hover:bg-[#330388]/5 px-3 py-2 rounded-lg transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
```

- [ ] **Step 2: Commit Header changes**

```bash
git add components/layout/Header.tsx
git commit -m "feat(header): add mega-menu with category cards, full navigation, and language selector"
```

---

## Task 2: Update Footer Structure

**Files:**
- Modify: `components/layout/Footer.tsx`

**Goal:** Match original site's 4-column footer with correct links

- [ ] **Step 1: Replace Footer.tsx with complete implementation**

Replace `components/layout/Footer.tsx` with:

```typescript
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Home', href: '/' },
    { name: 'About Orthero', href: '/about' },
    { name: 'Treatment Packages', href: '/treatment-packages' },
    { name: 'News and Media', href: '/news-media' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact Us', href: '/contact' },
  ],
  product: [
    { name: 'Treatable Cases', href: '/treatable-cases' },
    { name: 'Treatment Process', href: '/treatment-process' },
    { name: 'Aligner Material', href: '/aligner-material' },
    { name: 'Advantages', href: '/advantages' },
    { name: 'Differences', href: '/differences' },
    { name: 'CBCT Integration', href: '/cbct-integration' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#23282D] text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@orthero.com"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    info@orthero.com
                  </a>
                </li>
                <li className="pt-2">
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="flex items-center gap-3 mb-4">
                <a
                  href="https://www.facebook.com/ortheroaligner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#BB1AA0] hover:text-white transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/ortheroaligner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#BB1AA0] hover:text-white transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              {/* Language Selector */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <button className="hover:text-white transition-colors">ES</button>
                <span>|</span>
                <button className="text-white font-medium">EN</button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">COPYRIGHT © 2024 Orthero</p>
            <a
              href="https://nexelo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Designed + Developed by NEXELO
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit Footer changes**

```bash
git add components/layout/Footer.tsx
git commit -m "feat(footer): update to 4-column layout with correct links and social icons"
```

---

## Task 3: Verify NewsletterSection Props in Homepage

**Files:**
- Verify: `app/page.tsx`

**Goal:** Ensure NewsletterSection receives correct props

- [ ] **Step 1: Check current NewsletterSection usage**

Read `app/page.tsx` and verify NewsletterSection props:

Expected:
```tsx
<NewsletterSection
  variant="gradient"
  title="The Clearest Way of Changing Your Smile"
  description="Subscribe to our newsletter"
  emailPlaceholder="Email"
/>
```

- [ ] **Step 2: Fix if needed (only if props don't match)**

If props are different, update to match expected values above.

- [ ] **Step 3: Commit if changes were made**

```bash
git add app/page.tsx
git commit -m "fix(newsletter): update props to match original site"
```

---

## Task 4: Verify Homepage Stats

**Files:**
- Verify: `components/sections/HomeStatsBar.tsx`

**Goal:** Ensure stats match original site

- [ ] **Step 1: Verify stats values are correct**

Expected stats:
- Orthero Smiles: 10 Years
- Cases: 60,000+
- Aligners: 4 M+
- Countries: 20+
- Employees: 120+

Current implementation already has these values. **No changes needed.**

---

## Task 5: Final Verification

**Goal:** Ensure complete visual match with original site

- [ ] **Step 1: Run development server**

```bash
npm run dev
```

- [ ] **Step 2: Visual comparison**

Open both sites side by side:
- Original: https://www.ortheroaligner.com
- Clone: http://localhost:3000

Check:
- [ ] Header mega-menu opens with 4 category cards
- [ ] Header has language selector
- [ ] Footer has 4 columns with correct links
- [ ] Footer has Facebook + Instagram icons
- [ ] Footer has NEXELO credit

- [ ] **Step 3: Test responsive design**

Test at breakpoints: 375px (mobile), 768px (tablet), 1280px (desktop)

- [ ] **Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "feat: complete Orthero homepage exact clone"
```

---

## Success Criteria

- [ ] Header mega-menu with 4 category cards (Best Features, Treatable Cases, Orthero Differences, Orthero Advantages)
- [ ] Header has all 12 navigation links
- [ ] Header has language selector (EN, ES, TR)
- [ ] Footer has 4 columns (Company, Product, Contact, Connect)
- [ ] Footer has Facebook and Instagram social icons
- [ ] Footer language selector shows ES | EN
- [ ] Footer has "Designed + Developed by NEXELO" link
- [ ] Newsletter section has correct title and placeholder
- [ ] All sections present and styled correctly

## Out of Scope

- `/treatment-packages` page creation
- `/faqs` page creation
- Backend newsletter subscription functionality
- Actual language switching logic
