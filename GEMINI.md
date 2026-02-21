# Offer Ready — Design Foundation & Agent Prompt

> **ACTIVE_PRESET: A — "Trust & Authority"**
>
> This document is the single source of truth for the Offer Ready website and app design system. Any AI agent making design or code changes to this project MUST read and follow this file.

---

## Role

Act as a World-Class Senior Creative Technologist and Lead Frontend Engineer working on **Offer Ready**. You build high-fidelity, cinematic landing pages and application interfaces. Every page you produce should feel like a digital instrument — every scroll intentional, every animation weighted and professional. Eradicate all generic AI patterns.

**Execution Directive:** "Do not build a website; build a digital instrument. Every scroll should feel intentional, every animation should feel weighted and professional. Eradicate all generic AI patterns."

---

## 1. Brand Identity

All brand details are pre-filled. Do NOT ask discovery questions — build from these facts.

| Field | Value |
|-------|-------|
| **Brand Name** | Offer Ready |
| **One-line Purpose** | Pre-Approval Letters & Loan Estimates. Done in Minutes. |
| **Tagline** | Be Offer Ready. |
| **Target Audience** | Modern loan officers juggling production, partnerships, and real life |
| **Primary CTA (Pre-launch)** | Join the Waitlist |
| **Primary CTA (Post-launch)** | Get Started |
| **Co-founders** | Allison & Kristin |
| **Webhook Endpoint** | `http://www.myOfferReady.com/index.cfm?event=promo` |
| **Twitter Handle** | @OfferReady |

### Value Propositions (3 Pillars)

1. **Save Time** — Create loan estimates and pre-approval letters in minutes on the go. No more late-night fire drills or constant back-and-forth.
2. **Stay in Control** — You set the guardrails. Every letter is branded, compliant, and logged—so nothing goes out without your parameters.
3. **Serve Better** — Give Realtors and clients instant confidence and responsiveness, without being on call 24/7.

### How It Works (3 Steps)

1. **You set the rules** — Define loan limits, purchase price ranges, and expiration dates.
2. **Letters are generated instantly** — Loan estimates and pre-approval letters are created on demand—fully branded and compliant.
3. **Everything stays organized** — Every action is logged with a clear audit trail, so you're always protected.

---

## 2. Aesthetic Presets

Each preset defines a complete design system: palette, typography, image mood, and identity. Only ONE preset is active at a time.

### Preset A — "Trust & Authority" (DEFAULT / ACTIVE)

- **Identity:** Established financial authority meets polished modern platform. Deep indigo conveys trust and depth, steel blue adds professionalism, champagne tan adds warmth and approachability.
- **Palette:**
  - Background: `#FFFFFF` (White)
  - Primary (text & color): `#19154a` (Deep Indigo)
  - Secondary Cool: `#6c8ead` (Steel Blue) — subtle accents, borders, secondary text, icons
  - Secondary Warm: `#d8cfb3` (Champagne Tan) — highlights, badges, warm accent surfaces, hover states
  - Dark Surface: `#0f1220` (Deep Indigo Dark) — for full-width dark sections, footer
  - Muted Text: `#6b7280` — secondary body copy
- **Typography:**
  - Headings: `Lora` (serif, weights 400–700)
  - Body: `Source Sans 3` (sans-serif, weights 300–700)
- **Image Mood:** professional office, confident handshake, clean architecture, warm-toned abstracts, blue-tinted cityscapes
- **Hero line pattern:** "[Product noun] &amp; [Product noun]." (Bold Serif) / "[Speed phrase]." (Accent-colored Bold Serif)

### Preset B — "Modern Fintech"

- **Identity:** Next-gen fintech startup. Same trust foundation but more energetic and cutting-edge. Clean, forward-thinking, approachable.
- **Palette:**
  - Background: `#fafbfc` (Cool White)
  - Primary: `#19154a` (Deep Indigo — same anchor)
  - Secondary Cool: `#4a7aff` (Electric Blue) — brighter, more energetic accent
  - Secondary Warm: `#e8e0d0` (Light Sand) — softer warmth for cards and surfaces
  - Dark Surface: `#0f1220`
  - Muted Text: `#6b7280`
- **Typography:**
  - Headings: `Inter` or `DM Sans` (sans-serif, tight tracking)
  - Body: `Inter` (sans-serif)
- **Image Mood:** clean gradients, geometric patterns, minimal tech, abstract data visualization
- **Hero line pattern:** "[Product noun] &amp; [Product noun]." (Bold Sans) / "[Speed phrase]." (Accent-colored Bold Sans)

### Preset C — "Premium Advisor"

- **Identity:** Premium boutique financial advisor. Warmer, more human, editorial quality. Personal touch over corporate feel.
- **Palette:**
  - Background: `#faf8f5` (Warm Cream)
  - Primary: `#2a2535` (Warm Charcoal — tinted toward indigo family)
  - Secondary Cool: `#6b9e82` (Sage Green) — natural, grounded accent
  - Secondary Warm: `#c9a85a` (Warm Gold) — elevated champagne accent
  - Dark Surface: `#1a1520`
  - Muted Text: `#7a7570`
- **Typography:**
  - Headings: `Playfair Display` (serif, italic for drama)
  - Body: `Source Sans 3` (sans-serif)
- **Image Mood:** warm tones, residential neighborhoods, families, trusted advisor, golden hour lighting
- **Hero line pattern:** "[Product noun] &amp; [Product noun]." (Bold Serif Italic) / "[Speed phrase]." (Accent-colored Bold Serif)

---

## 3. Fixed Design System

These rules apply to ALL presets. They define the premium quality baseline.

### Visual Texture

- Implement a global CSS noise overlay using an inline SVG `<feTurbulence>` filter at **0.05 opacity** to eliminate flat digital gradients. Apply as a `::before` pseudo-element on `body` with `pointer-events: none`.
- Use `rounded-xl` (0.75rem) to `rounded-2xl` (1rem) radius system for all containers and cards. No sharp corners.
- Cards get subtle `shadow-sm` base with `hover:shadow-md` transition.

### Micro-Interactions

- All buttons: **"magnetic" feel** with `scale(1.03)` on hover using `cubic-bezier(0.25, 0.46, 0.45, 0.94)` transition.
- Buttons use `overflow-hidden` with a sliding background `<span>` layer for color transitions on hover.
- Links and interactive elements: `translateY(-1px)` lift on hover.
- Focus states: Visible `ring-2 ring-offset-2` using the `--ring` color variable.

### Animation System — GSAP 3 + ScrollTrigger

> **UPGRADE NOTE:** This project is upgrading from CSS transitions + IntersectionObserver to GSAP 3. Install `gsap` and register `ScrollTrigger` before implementing animations.

- Use `gsap.context()` within `useEffect` for ALL animations. Return `ctx.revert()` in the cleanup function.
- Default easing: `power3.out` for entrances, `power2.inOut` for morphs/transitions.
- Stagger values: `0.08` for text elements, `0.15` for cards/containers.
- Scroll-triggered entrance: `y: 40 → 0`, `opacity: 0 → 1`, `duration: 0.8`.
- Philosophy/manifesto section: Use word-by-word or line-by-line reveal with ScrollTrigger.
- The existing `useScrollAnimation` hook (`src/hooks/useScrollAnimation.tsx`) should be replaced or upgraded to use GSAP internally.

```tsx
// GSAP animation pattern for React components
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(".animate-element", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".section-container",
        start: "top 80%",
      },
    });
  }, containerRef);
  return () => ctx.revert();
}, []);
```

### Spacing & Layout

- Section padding: `py-20 md:py-28`
- Container: `container mx-auto px-4` (max-width: 1400px at 2xl, centered, 2rem padding)
- Grid gaps: `gap-8` for 3-column grids, `gap-10` for 2-column grids
- Max-widths: `max-w-4xl` (main content), `max-w-3xl` (text blocks), `max-w-2xl` (descriptions)

---

## 4. Component Architecture

All sections are listed in exact order. Adapt content and colors to the active preset, but NEVER change section structure or order without explicit approval.

### A. NAVBAR — Sticky Top Bar

```
Position: sticky top-0 z-50
Background: bg-background/95 backdrop-blur (with supports-[backdrop-filter]:bg-background/60)
Border: border-b
```

**Contents:**
- **Left:** Offer Ready logo (`src/assets/offer-ready-logo.png`, max-w-[120px] mobile / max-w-[150px] desktop)
- **Right:** Resources dropdown (Demo Video link with Play icon), Log In button (outline variant with LogIn icon), CTA button
- **Mobile:** Collapse to minimal — logo + hamburger or simplified nav

**Morphing behavior (optional upgrade):** Transparent with light text at hero top → solid with backdrop-blur after scrolling past hero. Use GSAP ScrollTrigger or IntersectionObserver.

### B. HERO SECTION — The Opening Shot

```
Background: bg-gradient-to-b from-[secondary-cool]/10 to-background
Height: auto (py-12 md:py-20), NOT forced 100dvh
Layout: Centered text, container width
```

**Content stack (top to bottom):**
1. Large logo (max-w-[200px] mobile → max-w-[320px] desktop)
2. H1: `"Pre-Approval Letters & Loan Estimates."` + line break + `"Done in Minutes."` (accent-colored)
3. Subtitle: `"Built for loan officers who want their time back."`
4. Supporting copy: `"Offer Ready is a modern platform that helps loan officers generate compliant loan estimates and pre-approval letters on the go—while staying fully in control."`
5. Value callout box (secondary bg, rounded-lg, px-6 py-4): `"Your Realtors move faster. Your clients feel confident. You get your evenings back."`
6. CTA button: `"Join the Waitlist"` (size lg, px-10 py-6, text-lg)

**Animation:** GSAP staggered fade-up (y: 40 → 0, opacity: 0 → 1, stagger: 0.08) for all elements.

### C. WHY OFFER READY — Value Proposition Cards

```
Section: py-20 md:py-28
Heading: "Why Offer Ready" (centered, font-heading)
Grid: mt-12 grid gap-8 md:grid-cols-3
```

**Three cards** — clean icon + heading + description format:

| Card | Icon | Heading | Description |
|------|------|---------|-------------|
| 1 | Clock (Lucide) | Save Time | Create loan estimates and pre-approval letters in minutes on the go. No more late-night fire drills or constant back-and-forth. |
| 2 | Shield (Lucide) | Stay in Control | You set the guardrails. Every letter is branded, compliant, and logged—so nothing goes out without your parameters. |
| 3 | Star (Lucide) | Serve Better | Give Realtors and clients instant confidence and responsiveness, without being on call 24/7. |

**Card styling:** `rounded-xl border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md h-full`
**Icon container:** `mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10` with `h-7 w-7 text-accent` icons

### D. BUILT FOR MODERN LOAN OFFICER — The Manifesto

```
Background: bg-primary (full-width dark section)
Text: text-primary-foreground
Section: py-20 md:py-28
```

**Content:**
- H2: `"Built for the Modern Loan Officer"`
- Paragraph 1 (text-primary-foreground/90): `"Offer Ready is designed for loan officers who are juggling production, partnerships, and real life—and want smarter systems that work as hard as they do."`
- Paragraph 2 (text-primary-foreground/80): `"Whether you're a top producer, team leader, or growing your business while raising a family, Offer Ready helps you scale your impact without sacrificing your time."`
- CTA button: `"Join the Waitlist"` (secondary variant)

**Animation:** GSAP word-by-word or line-by-line fade-up reveal triggered by ScrollTrigger.

### E. HOW IT WORKS — Process Steps

```
Section: py-20 md:py-28
Heading: "How It Works" (centered)
```

**Two parts:**
1. **Screenshot Carousel** (`src/components/ScreenshotCarousel.tsx`)
   - 3 slides showing app screenshots from `src/assets/`
   - Auto-advance every 5 seconds, pauses on hover
   - Arrow navigation + dot indicators
   - Container: `rounded-xl bg-card shadow-2xl` with 16:9 aspect ratio

2. **3-step grid** below carousel (`mt-8 max-w-4xl grid gap-8 md:grid-cols-3`)
   - Step numbers in `h-16 w-16 rounded-full bg-primary` circles
   - Icons: Settings, FileText, ClipboardList (Lucide)
   - Step titles and descriptions (see How It Works in Brand Identity above)

### F. WHY WE BUILT OFFER READY — Founder Stories

```
Section: py-20 md:py-28
Heading: "Why We Built Offer Ready" (centered)
Grid: mt-12 grid gap-10 md:grid-cols-2 max-w-4xl mx-auto
```

**Two founder cards:**
- **Allison** — Avatar: `h-12 w-12 rounded-full bg-primary text-primary-foreground` with "A"
- **Kristin** — Avatar: `h-12 w-12 rounded-full bg-accent text-white` with "K"
- Cards: `rounded-xl border bg-card p-8 shadow-sm h-full`
- Each has: avatar circle, name, "Co-Founder" subtitle, personal story paragraph

> **NOTE:** Founder stories are currently placeholder text. Do NOT fabricate content — leave placeholders until the founders provide real copy.

### G. TESTIMONIALS — Social Proof

```
Section: bg-secondary py-20 md:py-28 (id="resources")
Heading: "What People Are Saying" (centered)
Grid: mt-12 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto
```

**Three testimonial cards:**
- Quote icon: `h-8 w-8 text-accent/40 mb-4`
- Italic quote text
- Attribution: `"— First Last"` + role/company
- Target roles: Loan Officer, Realtor, Branch Manager

> **NOTE:** Testimonials are currently placeholders. Do NOT fabricate real-sounding testimonials — keep the placeholder format until real quotes are provided.

### H. COMING SOON CTA — Conversion Section

```
Section: py-20 md:py-28
Heading: "Coming Soon" (centered)
```

**Content:**
- Subtext: `"We're launching soon and inviting a limited number of loan officers to join our founding group."`
- Benefits card (`max-w-md rounded-xl border bg-card p-8 shadow-sm`):
  - Label: `"Join the waitlist to receive:"`
  - Checklist items (CheckCircle icon, text-accent):
    - Early access to the platform
    - Founder pricing
    - Product updates and launch details
  - CTA button: `"Get Early Access"` (size lg, w-full)
  - Opens WaitlistModal on click

### I. FOOTER

```
Border: border-t
Background: bg-background
Padding: py-8
```

**Content (centered):**
- Offer Ready logo (max-w-[180px] mobile → max-w-[220px] desktop)
- Tagline: `"Be Offer Ready."` (text-2xl font-bold text-primary font-heading)
- Copyright: `"© {year} Offer Ready. All rights reserved."`

**Optional upgrade:** Deep dark background (`rounded-t-[2rem]`), grid layout with nav columns, "System Operational" status indicator with pulsing green dot.

### J. WAITLIST MODAL

```
Component: src/components/WaitlistModal.tsx
Dialog: sm:max-w-md
```

**Form fields:**
| Field | Type | Placeholder | Validation |
|-------|------|-------------|------------|
| Full Name | text | Jane Smith | Required, non-empty |
| Email | email | jane@example.com | Required, email regex |
| Phone Number | tel | (555) 123-4567 | Required, 10+ digit pattern |

**States:**
- **Form view:** Title "Join the Waitlist", subtitle about early access + founder pricing, 3 fields, "Get Early Access" submit button
- **Success view:** CheckCircle icon (h-10 w-10 text-accent), "You're on the list!" title, confirmation message, "Done" button
- **Error states:** `border-destructive` on invalid fields, `text-sm text-destructive` error messages

**Submission:** POST to webhook endpoint (see Brand Identity table). Uses `mode: "no-cors"`. Form resets on modal close (300ms delay for animation).

---

## 5. Content Bank

Pre-approved copy. Agents MUST use these exact strings — do not fabricate or rephrase marketing copy.

### Headlines
- `"Pre-Approval Letters & Loan Estimates. Done in Minutes."`
- `"Built for loan officers who want their time back."`
- `"Why Offer Ready"`
- `"Built for the Modern Loan Officer"`
- `"How It Works"`
- `"Why We Built Offer Ready"`
- `"What People Are Saying"`
- `"Coming Soon"`
- `"Be Offer Ready."`

### Body Copy
- `"Offer Ready is a modern platform that helps loan officers generate compliant loan estimates and pre-approval letters on the go—while staying fully in control."`
- `"Your Realtors move faster. Your clients feel confident. You get your evenings back."`
- `"Offer Ready is designed for loan officers who are juggling production, partnerships, and real life—and want smarter systems that work as hard as they do."`
- `"Whether you're a top producer, team leader, or growing your business while raising a family, Offer Ready helps you scale your impact without sacrificing your time."`
- `"We're launching soon and inviting a limited number of loan officers to join our founding group."`

### CTA Labels
- `"Join the Waitlist"` (primary CTA, pre-launch)
- `"Get Early Access"` (secondary CTA / form submit)
- `"Get Started"` (post-launch CTA, not yet active)

### Modal Copy
- Title: `"Join the Waitlist"`
- Description: `"Be among the first to experience Offer Ready. Get early access and exclusive founder pricing."`
- Success title: `"You're on the list!"`
- Success description: `"Thanks for joining our waitlist. We'll be in touch soon with early access details and founder pricing."`

### Waitlist Benefits
- `"Early access to the platform"`
- `"Founder pricing"`
- `"Product updates and launch details"`

### SEO
- Title: `"Offer Ready - Pre-Approval Letters & Loan Estimates in Minutes"`
- Description: `"Offer Ready helps loan officers generate compliant pre-approval letters and loan estimates in minutes. Built for modern loan officers who want their time back."`
- OG Description: `"Built for loan officers who want their time back. Generate compliant documents on the go."`

---

## 6. Technical Constraints

### Stack
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3.1 | UI framework |
| TypeScript | — | Type safety |
| Vite | — | Build tool & dev server |
| Tailwind CSS | 3.4.17 | Utility-first styling |
| GSAP 3 | Latest | Animations & ScrollTrigger (upgrade) |
| shadcn/ui | — | Component library (Button, Dialog, Input, Label) |
| Radix UI | — | Accessible primitives (under shadcn) |
| Lucide React | — | Icon library |
| tailwindcss-animate | — | Tailwind animation plugin |

### Fonts (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Critical File Paths
```
src/pages/Index.tsx           — Main landing page (all sections)
src/components/WaitlistModal.tsx  — Waitlist signup form
src/components/ScreenshotCarousel.tsx — How It Works carousel
src/components/ui/            — shadcn components (button, dialog, input, label)
src/hooks/useScrollAnimation.tsx  — Scroll animation hook (to be upgraded to GSAP)
src/assets/offer-ready-logo.png   — Brand logo
src/assets/step-1-manage-rates.png — Screenshot: set rules
src/assets/step-2-approval-letter.png — Screenshot: generated letter
src/assets/step-3-organized.png   — Screenshot: audit trail
src/index.css                 — CSS variables & Tailwind directives
tailwind.config.ts            — Design tokens & theme config
index.html                    — Font loading, meta tags, SEO
```

### Responsive Breakpoints
- Mobile-first design
- Stack all grids vertically on mobile
- Reduce hero font sizes on small screens
- Collapse navbar into minimal version on mobile
- Logo sizes: responsive from mobile to desktop (see component specs)

---

## 7. Agent Rules

### DO
- Use existing shadcn/ui components (`Button`, `Dialog`, `Input`, `Label`)
- Follow the active preset's design tokens exactly
- Use GSAP + ScrollTrigger for all scroll-driven and entrance animations
- Preserve the waitlist submission logic and webhook endpoint
- Keep all copy from the Content Bank verbatim
- Maintain the section order defined in Component Architecture
- Use Lucide React for all icons
- Test responsiveness at mobile, tablet, and desktop breakpoints

### DON'T
- Don't change fonts without explicit approval from the user
- Don't fabricate testimonial content or founder stories — leave placeholders
- Don't change the section order without explicit approval
- Don't remove or modify the waitlist modal or its submission flow
- Don't use placeholder image URLs — use real Unsplash URLs or existing assets
- Don't add new npm dependencies without noting them in this file
- Don't introduce inline styles when Tailwind classes exist for the same purpose
- Don't use React 19 features — this project uses React 18.3.1

---

## 8. Preset Swap Guide

To switch presets, update these three files:

### Step 1: Update CSS Variables (`src/index.css`)

**Preset A — Trust & Authority (default):**
```css
:root {
  --background: 0 0% 100%;
  --foreground: 243 57% 19%;
  --card: 0 0% 100%;
  --card-foreground: 243 57% 19%;
  --popover: 0 0% 100%;
  --popover-foreground: 243 57% 19%;
  --primary: 243 57% 19%;
  --primary-foreground: 0 0% 100%;
  --secondary: 220 20% 95%;
  --secondary-foreground: 243 57% 19%;
  --muted: 220 20% 96%;
  --muted-foreground: 220 9% 46%;
  --accent: 209 30% 55%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --border: 37 25% 80%;
  --input: 37 25% 80%;
  --ring: 243 57% 19%;
  --radius: 0.75rem;
  --warm: 37 25% 80%;
  --warm-light: 37 30% 92%;
}
```

**Preset B — Modern Fintech:**
```css
:root {
  --background: 210 14% 99%;
  --foreground: 243 57% 19%;
  --primary: 243 57% 19%;
  --primary-foreground: 0 0% 100%;
  --accent: 224 100% 64%;
  --accent-foreground: 0 0% 100%;
  --border: 220 20% 88%;
  --warm: 35 30% 85%;
  /* ... remaining variables follow same structure */
}
```

**Preset C — Premium Advisor:**
```css
:root {
  --background: 30 33% 97%;
  --foreground: 270 15% 18%;
  --primary: 270 15% 18%;
  --primary-foreground: 30 33% 97%;
  --accent: 155 20% 52%;
  --accent-foreground: 0 0% 100%;
  --border: 30 15% 80%;
  --warm: 43 50% 57%;
  /* ... remaining variables follow same structure */
}
```

### Step 2: Update Fonts (`index.html`)

**Preset A (default) — Lora + Source Sans 3:**
```html
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Preset B — Inter + DM Sans:**
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**Preset C — Playfair Display + Source Sans 3:**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Step 3: Update Tailwind Config (`tailwind.config.ts`)

Update the `fontFamily` section to match the selected preset's fonts:

```ts
// Preset A (default)
fontFamily: {
  heading: ['Lora', 'serif'],
  sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
}

// Preset B
fontFamily: {
  heading: ['"DM Sans"', 'sans-serif'],
  sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
}

// Preset C
fontFamily: {
  heading: ['"Playfair Display"', 'serif'],
  sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
}
```

---

## 9. Build & Verification Checklist

When making design changes, verify:

- [ ] All sections render in correct order (A through J)
- [ ] Active preset colors apply correctly across all components
- [ ] Fonts load properly (check Network tab for Google Fonts)
- [ ] GSAP animations fire on scroll (check ScrollTrigger registration)
- [ ] Waitlist modal opens, validates, and submits correctly
- [ ] Screenshot carousel auto-advances and responds to navigation
- [ ] Responsive layout works at 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] No console errors or warnings
- [ ] All Lucide icons render (Clock, Shield, Star, Settings, FileText, ClipboardList, CheckCircle, Quote, ChevronDown, LogIn, Play)
- [ ] Noise overlay is visible but subtle (0.05 opacity)
- [ ] Button hover states feel "magnetic" (scale + easing)
- [ ] No placeholder image URLs — all images are real or from existing assets

### Dev Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
```
