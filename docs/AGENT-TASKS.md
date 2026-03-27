# Agent Task Assignments

## Overview
Build a Next.js website clone of ortheroaligner.com using multiple agents.
Each agent builds one page following the strict design system.

## Pre-requisites (Build First)
1. Initialize Next.js project with Tailwind CSS
2. Create shared layout components (Header, Footer)
3. Create shared UI components (Button, Card, Input)
4. Set up Google Fonts (Poppins, Inter)

## Page Agents

### Agent 1: Home Page
- **Route:** `/`
- **Content:** `pages/home/content.md`
- **Priority:** HIGH (defines site structure)
- **Sections:**
  - Hero with CTA
  - Features grid (5 items)
  - Expertise section
  - Technology preview
  - News preview
  - Newsletter signup

### Agent 2: About Page
- **Route:** `/about`
- **Content:** `pages/about/content.md`
- **Priority:** MEDIUM
- **Sections:**
  - Hero
  - Company story
  - Stats (60K+ customers, 20+ countries, 10+ years)

### Agent 3: Treatment Process Page
- **Route:** `/treatment-process`
- **Content:** `pages/treatment-process/content.md`
- **Priority:** HIGH
- **Sections:**
  - Hero
  - 5-step timeline/process
  - Coming soon feature (mobile app)
  - Herotain retainers section

### Agent 4: Advantages Page
- **Route:** `/advantages`
- **Content:** `pages/advantages/content.md`
- **Priority:** MEDIUM
- **Sections:**
  - Hero
  - 9 advantage cards in grid

### Agent 5: Differences Page
- **Route:** `/differences`
- **Content:** `pages/differences/content.md`
- **Priority:** MEDIUM
- **Sections:**
  - Hero
  - Key differentiators (3D modeling, CBCT, etc.)

### Agent 6: Treatable Cases Page
- **Route:** `/treatable-cases`
- **Content:** `pages/treatable-cases/content.md`
- **Priority:** MEDIUM
- **Sections:**
  - Hero
  - Treatable conditions list
  - Technology highlight

### Agent 7: Aligner Material Page
- **Route:** `/aligner-material`
- **Content:** `pages/aligner-material/content.md`
- **Priority:** MEDIUM
- **Sections:**
  - Hero
  - Material specs (PET-G)
  - 3-layer technology
  - Thickness specifications table

### Agent 8: CBCT Integration Page
- **Route:** `/cbct-integration`
- **Content:** `pages/cbct-integration/content.md`
- **Priority:** MEDIUM
- **Sections:**
  - Hero
  - 3 feature sections (teeth axis, mandibular, biomechanics)

### Agent 9: News & Media Page
- **Route:** `/news-media`
- **Content:** `pages/news-media/content.md`
- **Priority:** LOW
- **Sections:**
  - Hero
  - Blog article grid/list

### Agent 10: Contact Page
- **Route:** `/contact`
- **Content:** `pages/contact/content.md`
- **Priority:** HIGH
- **Sections:**
  - Hero
  - Contact form
  - 3 address cards (HQ, Lab, Poland)

### Agent 11: Privacy Policy Page
- **Route:** `/privacy-policy`
- **Content:** `pages/privacy-policy/content.md`
- **Priority:** LOW
- **Sections:**
  - Simple text content
  - Proper typography

## Execution Order

1. **Setup Agent:** Initialize project + shared components
2. **Home Agent:** Build home page (sets patterns)
3. **Contact Agent:** Build contact page
4. **Treatment Process Agent:** Build treatment page
5. **Remaining Agents:** Build in parallel

## Context Management

If context exceeds 70%:
1. Run `/compact` to summarize
2. Continue with next task
3. Reference DESIGN-SYSTEM.md as needed

## Completion Criteria

For each page:
- [ ] Follows DESIGN-SYSTEM.md exactly
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Proper SEO meta tags
- [ ] Accessible (semantic HTML, alt text)
- [ ] Smooth animations
- [ ] Content matches content.md file
