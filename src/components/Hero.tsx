export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-[120px] pb-20 relative overflow-hidden bg-gradient-to-br from-[#050a14] via-[#0a1628] to-[#0c1a2e]">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Metallic shimmer sweep */}
      <div className="hero-shimmer" />

      {/* Subtle grid for depth */}
      <div className="hero-grid" />

      {/* Bottom fade into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="text-slate-400 font-medium text-lg mb-2 animate-fade-in-up">
            Hi, I&apos;m
          </p>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none mb-3 animate-fade-in-up animation-delay-100">
            <span className="text-white">Sinem</span>{" "}
            <span className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text text-transparent">Zeybek</span>
            <br />
            <span className="bg-gradient-to-r from-slate-400 via-slate-300 to-slate-500 bg-clip-text text-transparent">Peltokangas</span>
          </h1>
          <h2 className="text-2xl font-medium text-slate-300 mb-6 animate-fade-in-up animation-delay-200">
            Software Engineer &middot; Tampere, Finland
          </h2>
          <p className="text-lg text-slate-300/80 leading-relaxed mb-9 max-w-lg animate-fade-in-up animation-delay-300">
            Software Engineering graduate with hands-on experience building
            full-stack web applications and AI-powered systems. Looking for my
            first role as a Software Engineer or Full-Stack Developer.
          </p>
          <div className="flex gap-4 items-center flex-wrap animate-fade-in-up animation-delay-400">
            <a
              href="#projects"
              className="inline-block px-7 py-3 bg-gradient-to-r from-[#0f2847] to-[#1e3a5f] text-white rounded-lg font-medium text-sm hover:from-[#1e3a5f] hover:to-[#2a4a6f] hover:shadow-[0_0_24px_rgba(30,58,95,0.4)] transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-7 py-3 border border-slate-600/40 text-slate-300 rounded-lg font-medium text-sm hover:border-slate-400/50 hover:text-white transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
