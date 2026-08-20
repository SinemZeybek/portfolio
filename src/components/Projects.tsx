"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const cardAccents = [
  "from-[#0f2847] to-[#1e3a5f]",
  "from-[#1e3a5f] to-slate-500",
  "from-slate-600 to-[#0f2847]",
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);
  const accent = cardAccents[index % cardAccents.length];

  return (
    <article
      ref={ref}
      className={`group relative bg-card rounded-xl overflow-hidden card-glow hover:-translate-y-1 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient top bar */}
      <div className={`h-1 bg-gradient-to-r ${accent}`} />

      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

      <div className="p-8 relative">
        {/* Large faded number */}
        <span className="absolute top-6 right-8 text-6xl font-bold text-foreground/[0.03] leading-none select-none">
          {project.number}
        </span>

        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-semibold bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
            {project.number}
          </span>
          <span className="text-xs font-medium text-muted bg-surface px-2.5 py-1 rounded-full">
            {project.role}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-[#1e3a5f] transition-colors">
          {project.name}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs font-medium text-foreground/70 bg-surface border border-border/50 px-3 py-1.5 rounded-md"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs font-medium text-muted bg-surface border border-border/50 px-3 py-1.5 rounded-md">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Action links */}
        <div className="flex gap-4 pt-4 border-t border-border/50">
          <Link
            href={`/projects/${project.slug}`}
            className={`text-sm font-semibold bg-gradient-to-r ${accent} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
          >
            Read More &rarr;
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {project.liveLabel ?? "Live Demo"} &rarr;
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight mb-4 section-accent">Projects</h2>
        <p className="text-muted text-lg mb-12">
          A selection of things I&apos;ve built and contributed to.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
