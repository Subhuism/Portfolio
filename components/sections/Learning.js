"use client";
// components/sections/Learning.js
// What Subhanshu is currently exploring, improving, and aiming toward.
// Shows genuine growth mindset — not just a static skills list.

import { useEffect, useRef, useState } from "react";

const currentlyLearning = [
  {
    tech: "React & Next.js",
    icon: "⚛️",
    description: "Deepening knowledge of the React ecosystem — hooks, state management, SSR, and App Router patterns.",
    progress: 55,
    color: "bg-cyan-400",
  },
  {
    tech: "Advanced Python",
    icon: "🐍",
    description: "Exploring async patterns, API design with FastAPI, and writing cleaner, more Pythonic code.",
    progress: 65,
    color: "bg-yellow-400",
  },
  {
    tech: "System Design Basics",
    icon: "🏗️",
    description: "Understanding how real systems scale — databases, caching, and API architecture patterns.",
    progress: 30,
    color: "bg-indigo-400",
  },
  {
    tech: "Git & Version Control",
    icon: "🔀",
    description: "Moving beyond basic commits — branching strategies, PRs, and proper collaborative workflows.",
    progress: 50,
    color: "bg-orange-400",
  },
];

const futureGoals = [
  { goal: "Land a software engineering internship", icon: "💼" },
  { goal: "Build and launch a micro-SaaS product", icon: "🚀" },
  { goal: "Contribute to an open source project", icon: "🌱" },
  { goal: "Learn DSA for technical interviews", icon: "📊" },
  { goal: "Explore cloud deployment (AWS / Vercel)", icon: "☁️" },
];

export default function Learning() {
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
    <section id="learning" className="py-24 md:py-32 bg-[#0A0F1E] relative overflow-hidden">
      <div className="orb w-[300px] h-[300px] bg-emerald-700 bottom-[-5%] right-[-5%]" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="text-indigo-400 font-mono text-sm mb-3">// currently learning</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Always in motion
          </h2>
          <p className="text-slate-400 max-w-xl">
            Learning isn&apos;t a phase — it&apos;s the whole point. Here&apos;s what I&apos;m actively working on right now.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — learning progress cards */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-sm mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              Active Learning
            </h3>
            {currentlyLearning.map((item, i) => (
              <div
                key={item.tech}
                className="glass rounded-xl p-5 hover-glow"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white font-semibold text-sm">{item.tech}</span>
                  </div>
                  <span className="text-slate-500 text-xs font-mono">{item.progress}%</span>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{item.description}</p>

                {/* Progress bar */}
                <div className="h-1 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                    style={{ width: visible ? `${item.progress}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right — future goals */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              Goals on the Horizon
            </h3>

            <div className="space-y-3 mb-10">
              {futureGoals.map((item, i) => (
                <div
                  key={item.goal}
                  className="glass rounded-xl p-4 flex items-center gap-4 hover-glow group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                    {item.goal}
                  </span>
                  <span className="ml-auto text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                    →
                  </span>
                </div>
              ))}
            </div>

            {/* Mindset quote card */}
            <div className="glass rounded-xl p-6 border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-transparent">
              <div className="text-indigo-400 text-3xl mb-3 font-serif">&ldquo;</div>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                The best developers aren&apos;t the ones who know everything —
                they&apos;re the ones who know how to learn anything.
              </p>
              <p className="text-slate-600 text-xs mt-3 font-mono">— a principle I live by</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
