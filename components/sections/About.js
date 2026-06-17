"use client";
// components/sections/About.js
// Personal story, interests, and ambitions. Feels human, not just a resume dump.

import { useEffect, useRef, useState } from "react";

// Quick stats shown in the about section
const stats = [
  { value: "1+", label: "Years Building" },
  { value: "2+", label: "Real Projects" },
  { value: "5+", label: "Technologies" },
  { value: "∞", label: "Drive to Learn" },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  // Fade in when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="orb w-[350px] h-[350px] bg-indigo-700 top-[-5%] right-[-10%]" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="text-indigo-400 font-mono text-sm mb-3">// about me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The story so far
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — personal narrative */}
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              I&apos;m <span className="text-white font-semibold">Subhanshu Upadhyay</span>,
              a Computer Science undergraduate at IET Agra, chasing one goal: build things
              that actually work in the real world.
            </p>
            <p>
              My journey into tech started with curiosity — I wanted to understand how web
              applications work behind the scenes. That curiosity turned into late-night
              coding sessions, YouTube tutorials, and eventually, actual{" "}
              <span className="text-indigo-300">deployed projects</span> solving real problems.
            </p>
            <p>
              I built a{" "}
              <span className="text-indigo-300">YouTube video downloader SaaS</span> with
              Razorpay payments and FFmpeg integration, and a scalable{" "}
              <span className="text-indigo-300">YouTube comment automation tool</span> for
              brand PR campaigns — both entirely self-taught, built from scratch.
            </p>
            <p>
              Outside of code, I work as a freelance video editor and thumbnail designer —
              which sharpened my eye for design, visual storytelling, and what actually
              gets people to click. That creative perspective bleeds into every UI I build.
            </p>
            <p>
              I&apos;m not chasing the most impressive résumé. I&apos;m chasing{" "}
              <span className="text-white font-medium">real skill</span>. The kind that
              comes from building broken things, fixing them, and building better ones.
            </p>

            {/* Mini fact chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Python Enthusiast", "Self-Taught", "Automation Nerd", "Freelancer", "CS Student"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stats + quick info */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-5 text-center hover-glow"
                >
                  <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick info card */}
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="text-white font-semibold text-sm mb-3">Quick Info</h3>
              {[
                { icon: "🎓", label: "Degree", value: "B.E. Computer Science, IET Agra (2025–2029)" },
                { icon: "📍", label: "Location", value: "Agra, Uttar Pradesh, India" },
                { icon: "💼", label: "Seeking", value: "Web Dev / SWE Intern Roles" },
                { icon: "🌐", label: "Languages", value: "English, Hindi" },
                { icon: "⚡", label: "Available", value: "Remote & On-site Internships" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <span className="text-slate-500 text-xs block">{item.label}</span>
                    <span className="text-slate-300 text-sm">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
