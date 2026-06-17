"use client";
// components/sections/Hero.js
// The first thing visitors see. Strong intro, headline, social links, and CTAs.
// Includes floating background orbs and subtle CSS animations.

import { useState, useEffect } from "react";

// Typing effect cycles through these roles
const roles = [
  "Web Developer",
  "Python Engineer",
  "Backend Builder",
  "SaaS Developer",
  "Problem Solver",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 60 : 110;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        // Pause at full word, then start deleting
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background decorative orbs */}
      <div className="orb w-[500px] h-[500px] bg-indigo-600 top-[-10%] left-[-10%]" />
      <div className="orb w-[400px] h-[400px] bg-cyan-500 bottom-[-5%] right-[-5%]" />
      <div className="orb w-[300px] h-[300px] bg-violet-600 top-[40%] right-[20%]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070B14]/50 to-[#070B14]" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-indigo-300 font-mono mb-8"
          style={{ animation: "slideUp 0.5s ease-out forwards" }}
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Open to Internships & Freelance Work
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4"
          style={{ animation: "slideUp 0.6s ease-out 0.1s both" }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Subhanshu</span>
        </h1>

        {/* Typing role */}
        <div
          className="text-2xl md:text-3xl font-mono font-semibold text-slate-300 mb-6 h-10 flex items-center justify-center"
          style={{ animation: "slideUp 0.6s ease-out 0.2s both" }}
        >
          <span className="text-indigo-400">&lt;</span>
          <span className="text-white mx-1 cursor-blink">{displayText}</span>
          <span className="text-indigo-400">/&gt;</span>
        </div>

        {/* Short pitch */}
        <p
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "slideUp 0.6s ease-out 0.3s both" }}
        >
          CS undergraduate building real-world systems with{" "}
          <span className="text-indigo-300 font-medium">Python</span>,{" "}
          <span className="text-indigo-300 font-medium">Flask</span>, and{" "}
          <span className="text-indigo-300 font-medium">automation</span>.
          Turning ideas into functional products — learning every day.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          style={{ animation: "slideUp 0.6s ease-out 0.4s both" }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            Let&apos;s Talk →
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl glass border border-indigo-500/20 text-slate-200 font-semibold text-sm hover:border-indigo-400/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
          >
            View Projects
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-5"
          style={{ animation: "slideUp 0.6s ease-out 0.5s both" }}
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/subhuism"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors text-sm font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="hidden sm:block">LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="mailto:upadhyaylogical@gmail.com"
            className="group flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors text-sm font-medium"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:block">Email</span>
          </a>

          <span className="text-slate-700">|</span>

          {/* Location badge */}
          <span className="flex items-center gap-1.5 text-slate-500 text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Agra, India
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
