"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

interface SkillCategory {
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "HTML / CSS", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Databases",
    items: ["Node.js", "REST APIs", "PostgreSQL", "MySQL", "Redis", "Prisma", "BullMQ"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git & GitHub", "Docker", "NextAuth.js", "Jest", "Vitest", "CI/CD"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-10 section-accent">Skills</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-base font-semibold mb-4 text-[#1e3a5f]">{category.title}</h3>
              <ul className="flex flex-col gap-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#1e3a5f]/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
