"use client";
// components/sections/Skills.js
// Grouped skill cards: Frontend, Backend, Tools, and Currently Learning.
// Each card shows a colored dot and the skill name cleanly.

import { useEffect, useRef, useState } from "react";

// All skill categories with their technologies
const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-indigo-500/20 to-violet-500/20",
    border: "border-indigo-500/20",
    dot: "bg-indigo-400",
    skills: ["Python", "Flask", "Java", "C"],
  },
  {
    category: "Libraries & Tools",
    icon: "🔧",
    color: "from-violet-500/20 to-pink-500/20",
    border: "border-violet-500/20",
    dot: "bg-violet-400",
    skills: ["Telethon", "yt-dlp", "FFmpeg", "Razorpay API"],
  },
  {
    category: "Dev Practices",
    icon: "🧠",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400",
    skills: ["Debugging", "Testing", "Problem Solving", "Self Learning", "Logical Thinking"],
  },
];

// Soft skills shown as text badges
const softSkills = [
  "Debugging & Testing",
  "Self-Learning",
  "Problem Solving",
  "Logical Thinking",
  "Freelance Delivery",
  "Design Eye",
];

export default function Skills() {
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
    <section id="skills" className="py-24 md:py-32 bg-[#0A0F1E] relative overflow-hidden">
      {/* Background orb */}
      <div className="orb w-[400px] h-[400px] bg-violet-700 bottom-0 left-[-10%]" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="text-indigo-400 font-mono text-sm mb-3">// skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I work with
          </h2>
          <p className="text-slate-400 max-w-xl">
            Technologies I&apos;ve used to build real products — not just followed tutorials for.
          </p>
        </div>

        {/* Skill group cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`glass rounded-xl p-6 hover-glow border ${group.border} bg-gradient-to-br ${group.color}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{group.icon}</span>
                <h3 className="text-white font-semibold text-sm">{group.category}</h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${group.dot}`} />
                    <span className="text-slate-300 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Core strengths — horizontal chips */}
        <div className="glass rounded-xl p-6">
          <p className="text-slate-500 text-xs font-mono mb-4">CORE STRENGTHS</p>
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium hover:bg-indigo-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
