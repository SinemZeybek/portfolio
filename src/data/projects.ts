export interface Screenshot {
  src: string | string[];
  caption: string;
  mobile?: boolean;
}

export interface Project {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  details: string[];
  tech: string[];
  screenshots: Screenshot[];
  github?: string;
  live?: string;
  /** Overrides the default "Live Demo" button label, e.g. "Visit Site" for a real production product. */
  liveLabel?: string;
  /** Background image shown in the project card's header on the homepage grid. */
  cardImage?: string;
}

export const projects: Project[] = [
  {
    slug: "thinknpost",
    number: "01",
    name: "ThinkNPost",
    tagline: "Social Media Post Generator",
    description:
      "A full-stack Micro SaaS application that generates social media posts using AI text and image generation.",
    role: "Solo Developer",
    details: [
      "Built a complete SaaS product with secure authentication using NextAuth.js and Google OAuth, supporting both free and premium subscription tiers with Polar.sh payment integration.",
      "Integrated Google Gemini API for AI-powered text and image generation, allowing users to create social media posts for multiple platforms including Twitter, LinkedIn, Instagram, and TikTok.",
      "Designed and implemented a PostgreSQL database with Prisma ORM, featuring models for users, posts, knowledge sources, content ideas, and a weekly content calendar system.",
      "Containerized the application with a multi-stage Docker build (node:20-alpine), orchestrated with Docker Compose including PostgreSQL, Redis, and the Next.js app — with health checks, persistent volumes, and a non-root runtime user.",
      "Added Redis for caching and session management, integrated via Docker Compose with a dedicated service and persistent storage.",
      "Deployed on Vercel with Supabase for database hosting and file storage, with Row-Level Security enabled on all tables. Also configured for Railway deployment as an alternative.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
      "Google Gemini API",
      "Supabase",
      "Docker",
      "Redis",
      "Polar.sh",
    ],
    screenshots: [
      { src: "/screenshots/thinknpost-1.png", caption: "ThinkBank — upload knowledge sources like PDFs and URLs to power AI-generated content ideas" },
      { src: ["/screenshots/thinknpost-5.png", "/screenshots/thinknpost-6.png"], caption: "Twitter post generation — AI creates content and images with A/B variations to compare" },
      { src: ["/screenshots/thinknpost-7.png", "/screenshots/thinknpost-8.png"], caption: "Instagram post generation — platform-specific formatting with AI-generated visuals and hashtags" },
      { src: "/screenshots/thinknpost-9.png", caption: "PostCalendar — weekly content planner with AI-generated post ideas for each day" },
      { src: "/screenshots/thinknpost-10.png", caption: "Dashboard — analytics overview with post stats by platform, content type, and recent activity" },
    ],
    github: "https://github.com/SinemZeybek/micro-saas-thinknpost",
    live: "https://thinknpost.vercel.app",
    cardImage: "/screenshots/thinknpost-1.png",
  },
  {
    slug: "makubook",
    number: "02",
    name: "Makubook",
    tagline: "International Recipe Exchange for Finland",
    description:
      "A bilingual (Finnish/English) web app where immigrants and expats share recipes from their home countries with Finns — filling a gap no existing Finnish recipe platform covers.",
    role: "Solo Developer",
    details: [
      "Designed and built the full-stack app with Next.js and Supabase (PostgreSQL + Auth + Storage), with Row-Level Security enforced on all tables so users can only edit or delete their own content.",
      "Implemented email/password authentication via @supabase/ssr with required email confirmation, plus user profiles that include display name, birthday, and an optional avatar stored in Supabase Storage.",
      "Built a recipe creation flow with an interactive photo cropper (react-easy-crop), structured ingredients, numbered step-by-step instructions, optional tips, country of origin, and meal type tags for discoverability.",
      "Built an editor moderation queue: new recipes stay pending until an editor approves them, with an automatic email notification (Resend) sent to the author on approval.",
      "Designed the search experience around a dedicated /search page with instant-apply filters (country, meal type, language, servings) plus a deferred search bar on the homepage, all state-driven via URL query params so results are shareable and linkable. Falls back to a loosened \"similar recipes\" match when a filtered search returns nothing.",
      "Added comments with 1–5 star ratings and helpful-vote counts, gated to logged-in users and enforced both in the UI and at the database RLS level, sorted by helpfulness with paginated \"show more.\"",
      "Built a mobile-first navigation redesign: a fixed bottom icon bar with active-page indicators on mobile, collapsing the desktop top bar down to just the logo and search on small screens; also added a slidable featured-recipes carousel with edge-aware scroll arrows on the homepage.",
      "Shipped it to production on a real custom domain with domain-based i18n routing (next-intl): makubook.com serves English, makubook.fi serves Finnish, with the language switcher redirecting between the two domains automatically.",
      "Built automatic recipe translation via the DeepL API: any recipe written in the \"other\" language is translated on the fly and cached per recipe/locale in Postgres (so it's a one-time cost, not a re-translation on every view), shown everywhere a recipe appears — detail page, homepage, search, saved, and profile — with a disclaimer banner and a one-click toggle back to the original text.",
      "Added spam protection on the public contact form (honeypot field + IP-based rate limiting) and a dynamic sitemap.xml / robots.txt for search indexing.",
      "Set up Resend as a verified custom SMTP provider for Supabase Auth (replacing Supabase's shared/default mailer, which was hitting bounce-rate limits), and designed a branded HTML email template used across signup confirmation, password reset, and recipe-approval notifications.",
      "Chose Stockholm as the Supabase region for GDPR compliance given the Finnish user base, and wrote a full bilingual Privacy Policy and Terms of Service.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "next-intl (Finnish/English)",
      "DeepL API",
      "Resend",
      "Vercel",
    ],
    screenshots: [
      { src: "/screenshots/makubook1.png", caption: "Homepage — hero banner, filterable search, and the recipe grid" },
      { src: "/screenshots/makubook2.png", caption: "Recipe detail page — structured ingredients, steps, and tips" },
      { src: "/screenshots/makubook3.jpeg", caption: "Mobile homepage — the redesigned bottom navigation bar" },
    ],
    github: "https://github.com/SinemZeybek/makubook",
    live: "https://makubook.com",
    liveLabel: "Visit Site",
    cardImage: "/screenshots/makubook1.png",
  },
  {
    slug: "support-desk",
    number: "03",
    name: "Support Desk",
    tagline: "AI-Powered Ticket System",
    description:
      "An AI-powered support ticket system with OpenAI-integrated chat and per-user Redis chat history.",
    role: "Solo Developer",
    details: [
      "Built an AI-powered chat system integrated with the OpenAI API, featuring per-user conversation history stored in Redis for fast retrieval.",
      "Implemented REST API routes for full CRUD operations on support tickets, with proper error handling and validation.",
      "Set up async job processing with BullMQ for background tasks, improving response times for long-running operations.",
      "Wrote 37 unit and integration tests with Jest, ensuring reliability across the API and chat functionality.",
      "Containerized the entire application with Docker for consistent development and deployment environments.",
    ],
    tech: [
      "Next.js",
      "Tailwind CSS",
      "OpenAI API",
      "Redis",
      "BullMQ",
      "Jest",
      "Docker",
    ],
    screenshots: [],
    github: "https://github.com/SinemZeybek/AI-Powered-Ticket-System",
  },
  {
    slug: "zeybek-hukuk",
    number: "04",
    name: "Zeybek Hukuk Bürosu",
    tagline: "Law Firm Website — Live Client Project",
    description:
      "A production website for a real law firm in İzmit, Turkey — built and delivered for a client and live at zeybekhukuk.com.",
    role: "Freelance Developer",
    details: [
      "Designed and built the full site for Zeybek Hukuk Bürosu, a law firm with 47 years of history and 8+ practice areas including commercial, criminal, family, and medical law.",
      "Used Statamic (a Laravel-based flat-file CMS) so the client can manage content — articles, team profiles, and practice areas — without touching code.",
      "Built a custom Tailwind CSS design that communicates trust and professionalism, with Turkish-language content throughout.",
      "Handled the full delivery pipeline: local development with Laravel Vite, production deployment, and domain configuration at zeybekhukuk.com.",
    ],
    tech: ["Laravel", "Statamic CMS", "PHP", "Tailwind CSS", "Vite"],
    screenshots: [],
    live: "https://zeybekhukuk.com",
  },
  {
    slug: "whimble",
    number: "05",
    name: "Whimble",
    tagline: "Cozy Self-Care Journal & Virtual Pet",
    description:
      "A mobile app where users care for a fantasy pet by logging daily self-care habits — water, sleep, mood, skincare, exercise, and meals.",
    role: "Solo Developer",
    details: [
      "Designed and built a full Flutter app targeting Android and iOS, with a cozy pastel aesthetic using the Quicksand typeface and custom illustrated pet characters.",
      "Created three original fantasy pets — Mossling (plant spirit), Lumifox (light fox), and Cloudpuff (cloud creature) — each with four evolution stages unlocked at 3, 7, and 30-day streaks.",
      "Implemented customisable self-care logging categories (water, sleep, mood, skincare, exercise, meals) with a color-coded monthly calendar view for habit tracking at a glance.",
      "Used Provider for state management and Hive for local persistence, keeping the app fully offline with no backend dependency.",
      "Designed the emotional tone deliberately gently — the pet gets sleepy rather than distressed when days are missed, reducing guilt and encouraging re-engagement.",
    ],
    tech: ["Flutter", "Dart", "Provider", "Hive"],
    screenshots: [
      { src: "/screenshots/00b_pet_selection.png", caption: "Choose Your Companion — pick from Mossling, Lumifox, or Cloudpuff, each with their own personality", mobile: true },
      { src: "/screenshots/01_home.png", caption: "Home screen — your pet's current mood, happiness bar, and today's progress at a glance", mobile: true },
      { src: "/screenshots/02_log.png", caption: "Daily self-care log — track water, sleep, mood, skincare, exercise, and meals, with a mood check-in", mobile: true },
      { src: "/screenshots/04_calendar.png", caption: "Self-Care Calendar — color-coded monthly view showing your habit consistency over time", mobile: true },
    ],
    cardImage: "/screenshots/01_home.png",
  },
  {
    slug: "python-internship",
    number: "06",
    name: "Python Internship Projects",
    tagline: "Backend Development at Virasoft",
    description:
      "A collection of Python projects developed during my internship at Virasoft.",
    role: "Solo Developer",
    details: [
      "Worked with the backend development team at Virasoft, contributing to real-world software engineering tasks using Python.",
      "Gained hands-on experience with backend development practices, code reviews, and collaborative development workflows.",
    ],
    tech: ["Python"],
    screenshots: [],
    github: "https://github.com/SinemZeybek/python-internship-projects",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
