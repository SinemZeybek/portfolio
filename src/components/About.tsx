"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2 section-accent">About Me</h2>
          <p className="text-lg font-medium text-foreground/80 mb-10">Sinem Zeybek Peltokangas</p>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Photo */}
            <div className="shrink-0">
              <div className="w-48 h-48 rounded-2xl overflow-hidden bg-surface border-2 border-slate-200">
                <Image
                  src="/profile.jpg"
                  alt="Sinem Zeybek Peltokangas"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p className="text-muted text-lg leading-relaxed mb-4">
                I recently graduated with a BSc in Software Engineering from the
                University of Europe for Applied Sciences in Berlin. During my
                studies and internships, I&apos;ve built full-stack web applications
                using React, Next.js and Node.js — from AI-powered SaaS products
                to backend systems with Docker and CI/CD pipelines.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-4">
                I interned at <strong>Ghospy</strong>, where I developed full-stack
                applications with Next.js and built an AI chat system with OpenAI
                and Redis, and at <strong>Virasoft</strong>, where I worked with the
                backend team using Python and contributed to daily engineering tasks.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                I enjoy turning complex problems into clean, working software.
                I&apos;m looking for an entry-level role where I can contribute,
                grow and keep learning alongside a great team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
