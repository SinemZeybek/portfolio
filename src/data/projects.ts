export interface Screenshot {
  src: string | string[];
  caption: string;
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
  },
  {
    slug: "support-desk",
    number: "02",
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
    slug: "python-internship",
    number: "03",
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
