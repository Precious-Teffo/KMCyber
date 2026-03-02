# KMCyber
KMCyber is a free digital safety training initiative aimed at protecting everyday South Africans from online threats. The program targets ordinary people — not IT professionals — because most cybercrime is directed at everyday users who have little to no security awareness.

The website delivers a complete 1-day workshop curriculum across 6 interactive modules, covering everything from spotting phishing emails to recovering from a hack.

Website Overview
The site is a single-file HTML application (cybersmart.html) that requires no server, no database, and no build tools. It runs entirely in the browser.
Key capabilities:

Interactive 6-module training curriculum with expandable lessons
Real-world South African scam examples throughout
Live quizzes at the end of each module with instant feedback
Interactive Emergency Cyber Checklist (click to tick off items)
Fully responsive — works on mobile, tablet, and desktop
Zero dependencies — no frameworks, no npm, no CDN libraries required


Project Structure
kmcyber/
├── cybersmart.html       # Main website (single file — entire site)
├── README.md             # This file
├── og-image.jpg          # Social share image (1200×630px) — ADD THIS
└── logo.png              # Brand logo for Google structured data — ADD THIS

Note: The entire website lives in one HTML file. CSS and JavaScript are embedded inline for maximum portability.


Features
🎓 Training Content

6 fully written modules with 3 lessons each (18 lessons total)
Expandable accordion-style lessons — click to open/close
Real phishing examples, scam scripts, and step-by-step guides
Colour-coded content blocks:

🟢 Blue tip boxes — actionable advice
🔴 Red warning boxes — danger alerts
🔵 Example boxes — real-world scenarios



🎯 Interactive Quizzes

One quiz question per module (6 total)
Click an answer for instant right/wrong feedback
Each quiz is locked after answering to prevent changes
Explanatory feedback message on every answer

✅ Emergency Checklist

Two interactive checklists: Daily Protection and If I've Been Hacked
Click any checkbox or label to tick/untick
Checked items are visually struck through
8 items per checklist (16 total)

📱 Responsive Design

Full navigation on desktop
Mobile-friendly layout (nav collapses on small screens)
All grids reflow to single-column on mobile

🔍 SEO Ready

Full meta tag suite (title, description, keywords, canonical)
Open Graph tags for Facebook/WhatsApp/LinkedIn sharing
Twitter/X Card tags
South Africa geo targeting
JSON-LD structured data (EducationalOrganization schema)


Training Modules
#ModuleDurationKey Topics1Understanding Online Threats45 minPhishing, WhatsApp scams, fake jobs, romance scams2Password & Account Protection45 minStrong passwords, MFA, Google Authenticator, 2FA setup3Phone & Laptop Protection45 minSoftware updates, app stores, screen locks, device settings4Protecting Your Money Online45 minBanking safety, OTP protection, SIM swap, investment fraud5Social Media & Privacy30 minFacebook privacy settings, LinkedIn, TikTok, identity theft6What To Do If You're Hacked30 min6-step emergency plan, bank contacts, device scanning
Total workshop duration: ~4.5 hours (half day) with breaks, or a full day with activities and Q&A.

SEO Configuration
The following SEO elements are pre-configured in the <head> of cybersmart.html:
Meta Tags
html<title>KMCyber — Digital Protection Training for Everyday People | South Africa</title>
<meta name="description" content="...">
<meta name="keywords" content="cybersecurity training South Africa, ...">
<meta name="author" content="KMCyber">
<link rel="canonical" href="https://www.kmcyber.co.za/">
Open Graph (Social Sharing)
Controls how the page appears when shared on Facebook, WhatsApp, and LinkedIn.
html<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://www.kmcyber.co.za/og-image.jpg">
Structured Data (JSON-LD)
Tells Google this is an EducationalOrganization offering a free workshop. This can earn rich results in search.
⚠️ Before Going Live — Update These
ItemCurrent ValueWhat to Change ToCanonical URLhttps://www.kmcyber.co.za/Your actual domainOG Image URLhttps://www.kmcyber.co.za/og-image.jpgYour actual hosted imageLogo URLhttps://www.kmcyber.co.za/logo.pngYour actual hosted logoEmailhello@kmcyber.co.zaYour real email addressPhone+27 (0)00 000 0000Your real phone number

Branding & Design
Colour Palette
RoleHexUsagePrimary Blue#1565c0Buttons, accents, highlights, linksDeep Blue#0d47a1Button gradients, hover statesLight Blue Tint#f0f6ffSection backgroundsCard Blue#e8f1ffModule sidebar, card backgroundsWhite#ffffffMain background, cardsDark Text#0d1b2aHeadings, body textMuted Text#4a6080Subtext, descriptions
Typography
FontRoleSourcePlayfair DisplayHeadings, section titlesGoogle FontsPlus Jakarta SansBody text, UI elementsGoogle Fonts
Logo
The logo renders as text: KM + <span>Cyber</span> (the word "Cyber" is styled in blue). There is currently no image logo — to add one, replace the 🛡️ emoji with an <img> tag in both the nav and footer logo divs.

Customisation Guide
Change Contact Details
Search for and replace in cybersmart.html:
hello@kmcyber.co.za      → your email
+27 (0)00 000 0000       → your phone number
Add/Edit a Module Lesson
Each lesson follows this structure inside a .module-panel:
html<div class="lesson" onclick="toggleLesson(this)">
  <div class="lesson-header">
    <div class="lesson-header-left">
      <div class="lesson-num">1</div>
      <div class="lesson-title">Your lesson title</div>
    </div>
    <div class="lesson-toggle">▼</div>
  </div>
  <div class="lesson-body">
    <p>Your lesson content here.</p>
    <!-- Optional: tip-box, warn-box, example-box, steps-list -->
  </div>
</div>
Add a Tip Box
html<div class="tip-box">
  <span class="tip-icon">💡</span>
  <span class="tip-text">Your tip text here.</span>
</div>
Add a Warning Box
html<div class="warn-box">
  <span>⚠️</span>
  <span class="warn-text">Your warning text here.</span>
</div>
Add a Quiz Question
Append inside the .quiz-section of any module panel:
html<div class="quiz-q" id="q6">
  <p class="quiz-question">Your question here?</p>
  <div class="quiz-options">
    <button class="quiz-opt" onclick="answer(this,'wrong','q6')">Wrong answer</button>
    <button class="quiz-opt" onclick="answer(this,'correct','q6')">Correct answer</button>
    <button class="quiz-opt" onclick="answer(this,'wrong','q6')">Wrong answer</button>
  </div>
  <div class="quiz-feedback" id="fb6"></div>
</div>

Important: The id on .quiz-q must match the number in onclick="answer(this,'...','q6')", and the feedback id must be fb + that number.


Deployment
Option 1: Static File Hosting (Recommended)
Upload cybersmart.html (rename to index.html) to any static host:

Netlify — drag and drop the file at netlify.com/drop
GitHub Pages — push to a repo, enable Pages in settings
Vercel — vercel deploy
cPanel / Shared Hosting — upload via File Manager to public_html/

Option 2: Local / Offline Use
Double-click cybersmart.html to open it in any browser. The site works fully offline (fonts require internet on first load).
Custom Domain Setup

Purchase kmcyber.co.za from a registrar (e.g. Afrihost, Hetzner, or co.za)
Point your domain's DNS to your hosting provider
Update all URL references in the SEO meta tags to your live domain
Upload og-image.jpg (1200×630px) and logo.png to your server root

Recommended Pre-launch Checklist

 Replace placeholder email and phone number
 Upload og-image.jpg (1200×630px — used for social sharing previews)
 Upload logo.png (used by Google structured data)
 Update all https://www.kmcyber.co.za URLs to your real domain
 Test on mobile (Chrome DevTools → Toggle Device Toolbar)
 Submit URL to Google Search Console
 Submit sitemap at https://search.google.com/search-console


Contact & Booking
To arrange a free workshop, contact KMCyber:

Email: infor@kmcyber.co.za
Location: Johannesburg, South Africa
Availability: Nationwide in-person and Zoom sessions

Workshop Formats Available
FormatBest ForCommunity CentreNeighbourhood residents, 20–50 peopleChurch / MosqueCongregation members, all agesSchool / CollegeStudents, teachers, parentsSmall BusinessStaff awareness training, up to 30 peopleCorporateFull-day team training, any size, customisedOnline (Zoom)Remote groups, organisations anywhere in SA

Built and maintained by KMSolution. © 2026 KMCyber. All rights reserved.
