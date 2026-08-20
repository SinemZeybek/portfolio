import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const project = getProjectBySlug(slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.name} | Sinem Zeybek Peltokangas`,
      description: project.description,
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 flex items-center h-[72px]">
          <Link
            href="/#projects"
            className="text-sm font-medium text-muted hover:text-[#1e3a5f] transition-colors"
          >
            &larr; Back to projects
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Title area */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm font-semibold text-[#1e3a5f]/50">
            {project.number}
          </span>
          <span className="text-xs font-medium text-muted bg-surface px-3 py-1 rounded-full">
            {project.role}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-2">
          {project.name}
        </h1>
        <p className="text-xl text-muted mb-8">{project.tagline}</p>

        {/* Links */}
        <div className="flex gap-4 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 btn-gradient text-white rounded-lg font-medium text-sm"
            >
              View on GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 border border-border rounded-lg font-medium text-sm hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition-colors"
            >
              {project.liveLabel ?? "Live Demo"}
            </a>
          )}
        </div>

        {/* Details */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            About this project
          </h2>
          <div className="flex flex-col gap-4">
            {project.details.map((paragraph, i) => (
              <p key={i} className="text-muted text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-sm font-medium text-muted bg-surface px-4 py-2 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.screenshots.length > 0 && (
          <p className="mb-8 text-sm text-subtle">
            See the screenshots below for a closer look at the features.
          </p>
        )}

        {/* Screenshots */}
        {project.screenshots.length > 0 && (() => {
          const mobileShots = project.screenshots.filter(s => s.mobile);
          const desktopShots = project.screenshots.filter(s => !s.mobile);
          return (
            <div className="mb-16 flex flex-col gap-10">
              {/* Mobile screenshots: 2-up grid */}
              {mobileShots.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {mobileShots.map((screenshot, i) => (
                    <figure key={i} className="flex flex-col">
                      <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
                        <Image
                          src={screenshot.src as string}
                          alt={screenshot.caption}
                          width={320}
                          height={0}
                          className="w-full h-auto block"
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                      </div>
                      <figcaption className="mt-2 text-xs text-muted text-center leading-snug">
                        {screenshot.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
              {/* Desktop/web screenshots: full width */}
              {desktopShots.map((screenshot, i) => (
                <figure key={i}>
                  {Array.isArray(screenshot.src) ? (
                    <div className="mx-auto max-w-5xl rounded-xl border border-border overflow-hidden shadow-sm">
                      {screenshot.src.map((src, j) => (
                        <div key={j}>
                          {j > 0 && <div className="border-t border-border" />}
                          <Image
                            src={src}
                            alt={`${screenshot.caption} (${j + 1})`}
                            width={900}
                            height={0}
                            className="w-full h-auto block"
                            sizes="(max-width: 896px) 100vw, 896px"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mx-auto max-w-5xl rounded-xl border border-border overflow-hidden shadow-sm">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.caption}
                        width={900}
                        height={0}
                        className="w-full h-auto block"
                        sizes="(max-width: 896px) 100vw, 896px"
                      />
                    </div>
                  )}
                  <figcaption className="mt-3 text-sm text-muted text-center">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          );
        })()}

        {/* Nav to other projects */}
        <div className="mt-20 pt-10 border-t border-border">
          <h3 className="text-lg font-semibold mb-6">Other Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group block p-6 bg-card border border-border rounded-xl card-glow hover:-translate-y-1"
                >
                  <span className="text-xs font-semibold text-subtle/60">
                    {p.number}
                  </span>
                  <h4 className="text-lg font-semibold mt-1">{p.name}</h4>
                  <p className="text-sm text-muted mt-1">{p.tagline}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
