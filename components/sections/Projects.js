"use client";
// components/sections/Projects.js
// Compact project cards. Projects aren't the hero of this portfolio —
// they're proof of capability. Keep it clean and story-focused.

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "YouTube Video Downloader & Trimming Platform",
    period: "Jan 2023 – Jun 2023",
    description:
      "A full SaaS web app for downloading YouTube videos with quality selection. Includes server-side video trimming via FFmpeg before download, and Razorpay payment gateway integration for premium access.",
    tags: ["Python", "Flask", "FFmpeg", "yt-dlp", "Razorpay", "HTML/CSS"],
    highlights: [
      "Razorpay payment integration",
      "FFmpeg server-side trimming",
      "SaaS architecture",
    ],
    icon: "📥",
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20",
  },
  {
    title: "YouTube Comment Automation Tool",
    period: "Jan 2023 – Jun 2023",
    description:
      "A scalable automation system for posting human-like comments on YouTube using multi-account logic, randomized delays, and text variation. Designed for brand visibility and digital PR campaigns.",
    tags: ["Python", "Telethon", "Automation", "Multi-account logic"],
    highlights: [
      "Multi-account orchestration",
      "Human-pattern simulation",
      "Delivered for freelance client",
    ],
    icon: "🤖",
    gradient: "from-violet-500/10 to-indigo-500/10",
    border: "border-violet-500/20",
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="orb w-[300px] h-[300px] bg-indigo-700 top-[10%] left-[-5%]" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="text-indigo-400 font-mono text-sm mb-3">// projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Things I&apos;ve built
          </h2>
          <p className="text-slate-400 max-w-xl">
            Not a portfolio padded with tutorial projects. These are real systems I designed,
            built, and delivered — with actual users and paying customers in mind.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass rounded-2xl p-7 hover-glow border ${project.border} bg-gradient-to-br ${project.gradient} flex flex-col`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">{project.title}</h3>
                    <span className="text-slate-500 text-xs font-mono">{project.period}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-5 space-y-1.5">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-slate-300 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Honest note at the bottom */}
        <div className="glass rounded-xl p-6 text-center border border-indigo-500/15">
          <p className="text-slate-400 text-sm">
            📌 More projects are in progress. Follow my journey on{" "}
            <a
              href="https://www.linkedin.com/in/subhuism"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
            >
              LinkedIn
            </a>{" "}
            for updates.
          </p>
        </div>
      </div>
    </section>
  );
}
