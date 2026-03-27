# Orthero Homepage Clone - Design Specification

**Date:** 2026-03-27
**Status:** Approved
**Target:** www.ortheroaligner.com homepage exact clone

## Overview

This specification defines the exact clone of the Orthero clear aligner homepage. The current implementation is close but requires updates to match the original site exactly.

## Design Tokens

### Color Palette

| Role | Color Code | Usage |
|------|------------|-------|
| Primary | `#330388` | Headings, primary buttons, links |
| Accent | `#BB1AA0` | CTAs, highlights, gradients |
| Light Background | `#F0F7FF` | Section backgrounds |
| Footer Background | `#23282D` | Footer dark theme |
| White | `#FFFFFF` | Cards, buttons |
| Text Primary | `#1F2937` | Body text |
| Text Secondary | `#6B7280` | Secondary text |

### Typography

- **Font Family:** Poppins (headings), Inter (body)
- **H1:** 48px-56px, bold
- **H2:** 36px-48px, bold
- **H3:** 24px, semibold
- **H5:** 16px, semibold (feature card titles)
- **Body:** 16px, regular

## Page Structure

### 1. Header Component

**Navigation Structure (Mobile Menu / Dropdown):**

Main navigation items displayed in mega-menu dropdown:
- **Best Features** (category)
- **Treatable Cases** (Maloclussions)
- **Orthero Differences** (Technology)
- **Orthero Advantages** (Benefits)

**Full Menu Links:**
- Home
- About Orthero
- Treatment Process
- Advantages
- Differences
- Treatable Cases
- Treatment Packages
- Aligner Material
- CBCT Integration
- News and Media
- FAQs
- Contact Us

**Header Elements:**
- Logo (left): Orthero logo image
- Menu button (mobile): "MENU" text + hamburger icon
- Log In button (right): Links to https://dr.orthero.com.tr/new/main-panel
- Language selector: "en" dropdown

### 2. Hero Slider

**Slides:**
1. Image: `orthero_global_homepage_hero_banner-1-scaled.webp`
2. Image: `orthero_global_homepage_hero_banner-scaled.webp`

**Content (same for both slides):**
- Title: "The Clearest Way of Changing Your Smile"
- Subtitle: "Orthero clear aligners are nearly invisible, removable, and comfortable aligners used and trusted by dentists in straightening teeth."
- Primary CTA: "Learn More" → /about
- Secondary CTA: "Log In" → https://dr.orthero.com.tr/new/main-panel

**Styling:**
- Gradient overlay: `from-[#330388]/92 via-[#330388]/82 to-[#BB1AA0]/72`
- White text
- Slider dots at bottom

### 3. Stats Bar

**Statistics:**
| Value | Label |
|-------|-------|
| 10 | Years (Orthero Smiles) |
| 60,000+ | Cases |
| 4 M+ | Aligners |
| 20+ | Countries |
| 120+ | Employees |

**Styling:**
- Background: gradient `from-[#330388] to-[#BB1AA0]`
- White text
- Animated counter on scroll

### 4. Advanced Digital Orthodontics Section

**Layout:** 2-column (text left, image right)

**Content:**
- H2: "Advanced Digital Orthodontics"
- Text 1: "Orthero leverages advanced 3D scanning and design technology..."
- CTA 1: "Learn More" → /advantages
- Text 2: "With a commitment to excellence and precision..."
- CTA 2: "Learn More" → /advantages

**Image:** `orthero_global_image_1-scaled.webp`

### 5. Discover the Clear Advantage Section

**Background:** `#F0F7FF`

**Layout:** Centered title + 2x2 grid of cards

**Cards:**
1. **Invisible & Discreet** - Eye icon
2. **Effective & Efficient** - Zap icon
3. **Customized for You** - Sparkles icon
4. **Comfortable & Removable** - RefreshCw icon

**Card Design:**
- White background
- Icon in purple circle
- H5 title
- Description text
- Hover: lift effect

### 6. Different Problems, One Solution Section

**Layout:** 2-column (text left, grid right)

**Content:**
- H2: "Different Problems, One Solution"
- Description text
- Image: `orthero_global_3d_aligners.webp`
- CTA: "See More" → /treatable-cases

**Malocclusion Grid (4x2):**
- Crowding
- Overbite
- Open Bite
- Spacing
- Crossbite
- Deep Bite
- Underbite
- Kids

### 7. Engineered for Success Section

**Background:** `#F0F7FF`

**Layout:** 2-column (image left, text right)

**Content:**
- H2: "Engineered for Success"
- Subtitle: "Expertise, Technology, and Cutting-Edge Products."
- Description paragraphs
- CTA: "Discover More" → /treatment-process

### 8. The Clear Difference Section

**Layout:** 2-column (text left, image right)

**Content:**
- H2: "The Clear Difference"
- Description
- CTA: "See the Difference" → /differences

**Image:** `orthero_global_the_clear_difference-1-scaled.webp`

### 9. News and Media Section

**Background:** `#F0F7FF`

**Layout:** Title + "See More" link + 3-column card grid

**News Cards:**
- Image + Title + "Read More" button
- Links to external blog posts

### 10. CTA Section

**Background:** gradient `from-[#330388] to-[#BB1AA0]`

**Content:**
- H2: "Learn more how Orthero can change your smile."
- Buttons: "Contact Us" + "Advantages"

### 11. Newsletter Section

**Content:**
- Logo
- H2: "The Clearest Way of Changing Your Smile"
- Subtitle: "Subscribe to our newsletter"
- Email input + Subscribe button

### 12. Footer

**Background:** `#23282D`

**Columns:**
1. **Company:** Home, About Orthero, Treatment Packages, News and Media, FAQs, Contact Us
2. **Product:** Treatable Cases, Treatment Process, Aligner Material, Advantages, Differences, CBCT Integration
3. **Contact:** info@orthero.com, Privacy Policy link
4. **Connect:** Social icons (Facebook, Instagram) + Language selector

**Bottom Bar:**
- "COPYRIGHT © 2024 Orthero"
- "Designed + Developed by NEXELO"

## Files to Update

1. `components/layout/Header.tsx` - Update navigation structure
2. `components/layout/Footer.tsx` - Update links and structure
3. `app/page.tsx` - Verify all sections match original
4. `components/sections/HeroSlider.tsx` - Verify styling
5. `components/sections/HomeStatsBar.tsx` - Verify stats

## Success Criteria

- [ ] Header navigation matches original dropdown structure
- [ ] All 12 sections present and styled correctly
- [ ] Footer links match original site
- [ ] Colors match exactly
- [ ] Responsive design works on all breakpoints
- [ ] All images load from original CDN
- [ ] Animations and hover effects match

## Implementation Notes

- Use existing components where possible
- Keep Tailwind CSS styling
- Maintain accessibility features
- Test on mobile and desktop viewports
