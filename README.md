# KMCyber — Digital Protection for Everyday People

> Free cybersecurity awareness training for everyday South Africans.  
> No tech jargon. No registration. Just real skills that save you from scams.

---

## 📁 Project Files

```
kmcyber/
├── index.html      — All page content and structure
├── styles.css      — All styling, colours, layout, animations
├── script.js       — All interactivity (tabs, accordion, quizzes, form)
├── og-image.jpg    — Social share image 1200×630px  ← ADD THIS
├── logo.png        — Brand logo for Google           ← ADD THIS
└── README.md       — This file
```

> All three files must be in the **same folder** for the site to work correctly.

---

## 🚀 Quick Start

### View locally
1. Download all three files into one folder
2. Double-click `index.html` to open in your browser
3. The site works fully offline (Google Fonts require internet on first load)

### Deploy online
Upload all three files to any web host. See [Deployment](#deployment) for step-by-step guides.

---

## 📋 Table of Contents

1. [About KMCyber](#about-kmcyber)
2. [Features](#features)
3. [Training Modules](#training-modules)
4. [Contact Form Setup (Formspree)](#contact-form-setup-formspree)
5. [SEO Configuration](#seo-configuration)
6. [Branding & Design](#branding--design)
7. [Customisation Guide](#customisation-guide)
8. [Deployment](#deployment)
9. [Pre-Launch Checklist](#pre-launch-checklist)
10. [File Reference](#file-reference)

---

## About KMCyber

**KMCyber** is a free digital safety training initiative protecting everyday South Africans from online threats. The program targets ordinary people — not IT professionals — because most cybercrime is directed at everyday users who lack security awareness.

The website delivers a complete workshop curriculum across **6 interactive modules**, with real South African scam examples, live quizzes, and a contact form for booking sessions.

**Who it's for:**
- Community centres and neighbourhood residents
- Churches, mosques, and religious congregations
- Schools, colleges, and universities
- Small businesses and their staff
- Corporate teams and organisations
- Anyone who wants to be safer online

---

## Features

### 🎓 Interactive Training Curriculum
- **6 modules** with **3 lessons each** (18 lessons total)
- Expandable accordion lessons — click to open and close
- Real South African phishing examples, WhatsApp scam scripts, and banking fraud cases
- Colour-coded content blocks:
  - 🔵 **Blue tip boxes** — actionable advice
  - 🔴 **Red warning boxes** — danger alerts
  - 🟦 **Example boxes** — real-world scam scenarios
  - 🔢 **Numbered step lists** — clear how-to instructions

### 🎯 Interactive Quizzes
- One quiz per module (6 total)
- Instant correct/wrong feedback on click
- Quiz locks after answering — no changing answers
- Explanatory message shown for every answer

### ✅ Emergency Cyber Checklist
- **Daily Protection** checklist — 8 preventative habits
- **If I've Been Hacked** checklist — 8 emergency steps
- Click any checkbox or label to tick/untick
- Ticked items are visually struck through

### 📬 Contact Form
- Powered by **Formspree** (free, no backend required)
- Fields: First Name, Last Name, Email, Phone, Session Type, Message
- Dropdown to select workshop type (Community, Church, School, Business, Corporate, Zoom, General)
- Loading state during submission, success message on completion, error fallback with direct email link
- Honeypot spam protection built in
- Submissions arrive directly at **infor@kmcyber.co.za**

### 📱 Fully Responsive
- Works on mobile, tablet, and desktop
- Navigation collapses on small screens
- All grid layouts reflow to single column on mobile

### 🔍 SEO Ready
- Full meta tag suite (title, description, keywords, canonical URL)
- Open Graph tags for Facebook, WhatsApp, and LinkedIn sharing previews
- Twitter/X Card tags
- South Africa geo targeting (`ZA`, Johannesburg)
- JSON-LD structured data (`EducationalOrganization` schema for Google)

---

## Training Modules

| # | Module | Duration | Topics Covered |
|---|--------|----------|----------------|
| 1 | Understanding Online Threats | 45 min | Phishing, WhatsApp scams, fake job offers, romance scams, investment fraud |
| 2 | Password & Account Protection | 45 min | Strong passwords, MFA, Google Authenticator, 2FA on Facebook |
| 3 | Phone & Laptop Protection | 45 min | Software updates, app stores, screen locks, iPhone/Android/Windows settings |
| 4 | Protecting Your Money Online | 45 min | Banking safety, OTP fraud, SIM swap, ATM skimming, fake investments |
| 5 | Social Media & Privacy | 30 min | Facebook/LinkedIn/TikTok privacy settings, identity theft prevention |
| 6 | What To Do If You're Hacked | 30 min | 6-step emergency plan, bank fraud contacts, device scanning, reporting |

**Total workshop time:** ~4.5 hours with short breaks, or a full day with group activities and Q&A.

---

## Contact Form Setup (Formspree)

The contact form uses **Formspree** — a free form-handling service that sends submissions directly to your email inbox. No server, no backend, no code changes beyond one line.

### Step 1 — Create a Formspree account
1. Go to [formspree.io](https://formspree.io)
2. Click **Get Started** and create a free account
3. Click **+ New Form**
4. Set the destination email to **infor@kmcyber.co.za**
5. Copy your **Form ID** — it looks like: `xpwzabcd`

### Step 2 — Add your Form ID to index.html
Open `index.html` and find this line (around line 906):

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm">
```

Replace `YOUR_FORM_ID` with your actual ID:

```html
<form action="https://formspree.io/f/xpwzabcd" method="POST" id="contactForm">
```

### Step 3 — Verify it works
1. Open the site and submit the contact form
2. Check **infor@kmcyber.co.za** for the submission
3. Formspree will send a one-time confirmation email to verify your address

### What Gets Sent to Your Inbox

| Form Field | Formspree Field Name |
|------------|---------------------|
| First Name | `first_name` |
| Last Name | `last_name` |
| Email Address | `email` |
| Phone Number | `phone` |
| Session Type | `session_type` |
| Message | `message` |

### Formspree Plan Limits

| Plan | Price | Submissions/Month |
|------|-------|-------------------|
| Free | R0 | 50 |
| Gold | ~R190/month | 1,000 + auto-replies |
| Platinum | ~R750/month | Unlimited + integrations |

---

## SEO Configuration

All SEO is pre-configured in the `<head>` of `index.html`. Update the placeholder values before going live.

### What's Included

```html
<!-- Page title and description -->
<title>KMCyber — Digital Protection Training for Everyday People | South Africa</title>
<meta name="description" content="...">
<meta name="keywords" content="cybersecurity training South Africa, ...">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.kmcyber.co.za/">

<!-- Social sharing (Facebook, WhatsApp, LinkedIn) -->
<meta property="og:title" content="...">
<meta property="og:image" content="https://www.kmcyber.co.za/og-image.jpg">

<!-- Twitter / X Card -->
<meta name="twitter:card" content="summary_large_image">

<!-- South Africa geo targeting -->
<meta name="geo.region" content="ZA">

<!-- Google structured data -->
<script type="application/ld+json">{ "@type": "EducationalOrganization" ... }</script>
```

### Items to Update Before Going Live

| Item | File | What to Change |
|------|------|----------------|
| Domain URLs | `index.html` `<head>` | Replace `kmcyber.co.za` with your live domain |
| OG Image | `index.html` `<head>` | Upload `og-image.jpg` and update URL |
| Logo URL | JSON-LD in `<head>` | Upload `logo.png` and update URL |
| Phone number | `index.html` body | Replace `+27 (0)00 000 0000` |
| Formspree ID | `index.html` ~line 906 | Replace `YOUR_FORM_ID` |

---

## Branding & Design

### Colour Palette

| Role | Hex | Used For |
|------|-----|----------|
| Primary Blue | `#1565c0` | Buttons, accents, links, highlights |
| Deep Blue | `#0d47a1` | Gradient darks, hover states |
| Light Blue Tint | `#f0f6ff` | Alternate section backgrounds |
| Card Blue | `#e8f1ff` | Module sidebar, card highlights |
| White | `#ffffff` | Page background, cards |
| Dark Text | `#0d1b2a` | Headings, primary body |
| Muted Text | `#4a6080` | Descriptions, labels, secondary text |

To change the brand colour, edit these variables at the top of `styles.css`:

```css
:root {
  --teal:  #1565c0;   /* Primary blue */
  --teal2: #0d47a1;   /* Darker shade */
  --navy2: #f0f6ff;   /* Light backgrounds */
  --navy3: #ddeeff;   /* Extra light tint */
}
```

### Typography

| Font | Used For | Weights |
|------|----------|---------|
| Playfair Display | All headings and titles | 700, 800, 900 |
| Plus Jakarta Sans | Body text, UI, buttons | 300, 400, 500, 600, 700 |

Loaded via Google Fonts in `index.html`. No installation required.

---

## Customisation Guide

### Update Contact Details
Find and replace in `index.html`:
```
infor@kmcyber.co.za    →  your email
+27 (0)00 000 0000     →  your phone number
```

### Add a Lesson to a Module
Inside any `.lessons` div in `index.html`:

```html
<div class="lesson">
  <div class="lesson-header" onclick="toggleLesson(this.closest('.lesson'))" style="cursor:pointer">
    <div class="lesson-header-left">
      <div class="lesson-num">4</div>
      <div class="lesson-title">Your lesson title</div>
    </div>
    <div class="lesson-toggle">▼</div>
  </div>
  <div class="lesson-body">
    <p>Your lesson content goes here.</p>
  </div>
</div>
```

### Content Block Snippets

**Tip box:**
```html
<div class="tip-box">
  <span class="tip-icon">💡</span>
  <span class="tip-text">Your tip here.</span>
</div>
```

**Warning box:**
```html
<div class="warn-box">
  <span>⚠️</span>
  <span class="warn-text">Your warning here.</span>
</div>
```

**Example box:**
```html
<div class="example-box">
  <div class="example-label">Real Example</div>
  <p>Your example scenario here.</p>
</div>
```

**Numbered steps:**
```html
<ul class="steps-list">
  <li>Step one</li>
  <li>Step two</li>
  <li>Step three</li>
</ul>
```

### Add a Quiz Question
Inside any `.quiz-section`:

```html
<div class="quiz-q" id="q6">
  <p class="quiz-question">Your question here?</p>
  <div class="quiz-options">
    <button class="quiz-opt" onclick="answer(this,'wrong','q6')">Wrong answer</button>
    <button class="quiz-opt" onclick="answer(this,'correct','q6')">Correct answer</button>
    <button class="quiz-opt" onclick="answer(this,'wrong','q6')">Wrong answer</button>
  </div>
  <div class="quiz-feedback" id="fb6"></div>
</div>
```

> The `id` on `.quiz-q` and the third `answer()` parameter must match (e.g. `q6`).  
> The feedback `div` id must be `fb` + the same number (e.g. `fb6`).

---

## Deployment

### Netlify — Recommended (Free)
1. Go to [netlify.com](https://netlify.com) → sign up free
2. Drag your project folder onto the **Deploy** area
3. Site goes live instantly at a `netlify.app` URL
4. Add a custom domain: Site Settings → Domain Management

### GitHub Pages (Free)
1. Create a repo at [github.com](https://github.com)
2. Upload `index.html`, `styles.css`, `script.js`
3. Settings → Pages → Source: main branch
4. Live at `https://yourusername.github.io/kmcyber`

### cPanel / Shared Hosting(Trusthost)
1. Log in → File Manager → `public_html/`
2. Upload all three files
3. Visit your domain — done


---

## Pre-Launch Checklist


### Assets
- [ ] Create and upload `og-image.jpg` (1200×630px — social share preview)
- [ ] Create and upload `logo.png` (square, min 200×200px — Google structured data)

### Testing
- [ ] All 6 module tabs switch correctly
- [ ] All 18 lesson accordions open and close
- [ ] All 6 quiz questions work and show feedback
- [ ] Contact form submits and email arrives at inbox
- [ ] All 16 checklist items tick and untick
- [ ] Site looks correct on mobile screen
- [ ] Site looks correct on Safari browser

### After Launch
- [ ] Submit to [Google Search Console](https://search.google.com/search-console)
- [ ] Share the link on WhatsApp, Facebook, and LinkedIn
- [ ] Test the social share preview using [opengraph.xyz](https://www.opengraph.xyz)

---

## File Reference

### index.html — Page Structure
Contains all visible content. Links to `styles.css` and `script.js`. Sections included:
- `<head>` — SEO meta tags, Open Graph, JSON-LD, Google Fonts, CSS link
- Nav bar with smooth-scroll links
- Hero with headline, lead text, and stats
- Why KMCyber (6 benefit cards)
- Online Threats (6 threat cards with tip callouts)
- Training Modules (6 tabbed panels, 18 accordion lessons, 6 quizzes)
- Emergency Cyber Checklist (2 interactive lists, 16 items)
- Free Access (4 info cards)
- Where We Train (6 venue cards)
- Contact Us (Formspree form + contact details)
- Footer with program links, training-for links, and contact info
- `<script src="script.js">` at bottom of body

### styles.css — All Visual Styling
607 lines covering:
- CSS custom properties (colour and font variables)
- Reset and base body styles
- Navigation (fixed, blur backdrop, scroll shrink)
- Hero layout, grid background, badge, stat counters
- Section layouts and eyebrow labels
- Why / benefit cards
- Threat cards with hover effects
- Module tab buttons and panel switching
- Module sidebar and main content layout
- Lesson accordion with open/close animation
- Tip, warning, and example content boxes
- Numbered steps list
- Quiz option buttons with correct/wrong states
- Checklist cards with interactive tick boxes
- Free Access and venue cards
- Contact section with form card
- Form inputs, select, textarea with focus states
- Submit button with loading/disabled states
- Success and error message styles
- Footer layout with links
- Responsive breakpoints at 1024px, 900px, 768px, 600px

### script.js — All Interactivity
60 lines containing:
- `switchTab(index)` — activates correct module tab and panel
- `toggleLesson(el)` — opens clicked lesson, closes siblings
- `answer(btn, result, qid)` — marks quiz answer, shows feedback, locks options
- `toggleCheck(el)` — toggles checklist item checked state
- Scroll listener — shrinks nav padding after 40px scroll
- Formspree async submit handler — fetch POST, success/error UI states

---

## Contact

| | |
|-|-|
| **Email** | infor@kmcyber.co.za |
| **Location** | Johannesburg, South Africa |
| **Sessions** | Nationwide — in-person and Zoom |

---

*© 2026 KMCyber. All rights reserved.*  
*Protecting everyday South Africans in the digital world.*
