# Resume Portfolio Website

A clean, professional, resume-style personal portfolio built with **Next.js**, **Tailwind CSS**, and static JSON data. Designed to look great on screen and print beautifully as a PDF resume.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## How to Customize

### 1. Edit Your Profile Data

All content lives in **`data/profile.json`**. Open it and replace the placeholder values:

| Section | What to change |
|---------|---------------|
| `meta` | Site title, description, URL, OG image |
| `hero` | Your name, title, tagline, summary, initials |
| `contact` | Email, phone, location, social links |
| `experience` | Jobs array — title, company, dates, bullet points, tech |
| `education` | Degrees, institutions, GPA, coursework |
| `projects` | Project cards — title, summary, outcomes, tech, links |
| `skills` | Skill groups with proficiency percentages |
| `topSkills` | 6–10 highlight skills for sidebar badges |
| `languages` | Language proficiency list |
| `certifications` | Certification names |
| `publications` | Title, venue, URL |
| `awards` | Award names |

> **Tip**: Search for `{{PLACEHOLDER}}` to find all values that need replacing.

### 2. Update Footer

Edit `components/Footer.jsx` to set your name and last updated date.

### 3. Add Your Photo (Optional)

Replace the initials avatar in `components/Header.jsx` with an `<Image>` tag pointing to your photo in `public/`.

### 4. QR Code

For the print resume, replace the QR placeholder in `pages/resume.jsx` with an actual QR code (use a library like `qrcode.react` or generate a static SVG).

---

## Generating a PDF Resume

### Option 1: Browser Print (Recommended)

1. Navigate to `http://localhost:3000/resume`
2. Click **"Download as PDF"** (or press `Ctrl+P` / `Cmd+P`)
3. Select "Save as PDF" as the destination
4. The print CSS will automatically format the page for A4 paper

### Option 2: Server-side with Puppeteer

```bash
# Install Puppeteer (one-time)
npm install -D puppeteer

# Start dev server in one terminal
npm run dev

# Generate PDF in another terminal
npm run export-pdf
```

The PDF will be saved to `public/resume.pdf`.

---

## Writing Achievement Bullets (STAR Method)

When filling in your experience bullets, use the **STAR method** (Situation → Task → Action → Result) and include **metrics** where possible.

### ❌ Generic Bullets → ✅ Achievement Bullets

| Before | After |
|--------|-------|
| "Worked on the frontend" | "Architected a React dashboard serving 50K+ daily users, reducing page load time by 40% through SSR and edge caching." |
| "Helped with API development" | "Designed RESTful APIs handling 10K+ requests/day with 99.9% uptime, integrating 3 third-party data sources." |
| "Did code reviews" | "Mentored 4 junior developers through code reviews and pair programming, improving team code quality metrics by 25%." |

---

## Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Next.js and deploy
4. Set your custom domain in Vercel dashboard
5. Update `meta.siteUrl` in `data/profile.json` with your domain

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

---

## Accessibility Checklist

- [x] Skip-to-content link (first focusable element)
- [x] Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`)
- [x] ARIA labels on icons and landmark regions
- [x] Keyboard-tabbable navigation
- [x] Focus-visible rings on interactive elements
- [x] High-contrast text (WCAG AA)
- [x] `role="progressbar"` on skill bars with `aria-valuenow`
- [x] Form labels associated with inputs
- [x] Status messages use `role="alert"`
- [x] Print stylesheet hides interactive elements
- [x] JSON-LD structured data for machine readability

---

## Project Structure

```
├── components/          # React components
│   ├── Layout.jsx       # Skip-to-content wrapper
│   ├── Navigation.jsx   # Sticky nav + mobile menu
│   ├── Header.jsx       # Name, title, summary, CTAs
│   ├── Sidebar.jsx      # Contact, skills, languages, certs
│   ├── ExperienceItem.jsx
│   ├── ExperienceSection.jsx
│   ├── EducationSection.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectsSection.jsx
│   ├── SkillsGrid.jsx
│   ├── ContactForm.jsx
│   ├── AwardsPublications.jsx
│   └── Footer.jsx
├── data/
│   └── profile.json     # ← EDIT THIS FILE with your info
├── pages/
│   ├── _app.jsx         # Global layout + meta tags
│   ├── _document.jsx    # JSON-LD structured data
│   ├── index.jsx        # Main portfolio page
│   ├── resume.jsx       # Print-optimized resume
│   └── api/
│       └── contact.js   # Contact form handler
├── public/              # Static assets
├── scripts/
│   └── export-pdf.js    # Puppeteer PDF generator
├── styles/
│   └── globals.css      # Tailwind + print styles
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run export-pdf` | Generate PDF resume (requires Puppeteer) |

---

## License

MIT
