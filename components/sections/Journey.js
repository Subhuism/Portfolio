"use client";
// components/sections/Journey.js
// Timeline of Subhanshu's education and developer milestones.
// Mobile-first: timeline shifts to left-aligned on smaller screens.

import { useEffect, useRef, useState } from "react";

const timelineEvents = [
  {
    year: "2022",
    period: "Apr 2022",
    title: "Senior Secondary Education Begins",
    org: "Shandilya Public School, Varanasi",
    description:
      "Started senior secondary school while quietly beginning to explore computers and programming on the side. The first sparks of interest in how software works.",
    type: "education",
    icon: "📚",
  },
  {
    year: "2023",
    period: "Jan 2023",
    title: "Built First Real Project",
    org: "Self-initiated",
    description:
      "Launched a YouTube Video Downloader & Trimming Platform with quality selection, FFmpeg server-side processing, and Razorpay payment integration. First taste of building something end-to-end.",
    type: "project",
    icon: "🚀",
  },
  {
    year: "2023",
    period: "Jun 2023",
    title: "YouTube Comment Automation Tool",
    org: "Freelance Client Project",
    description:
      "Delivered a scalable automation system using multi-account logic, randomized delays, and text variation — built to support brand visibility and digital PR campaigns.",
    type: "project",
    icon: "⚙️",
  },
  {
    year: "2024",
    period: "May 2024",
    title: "Completed Senior Secondary",
    org: "Shandilya Public School, Varanasi",
    description:
      "Finished schooling with a clear direction: pursue Computer Science and turn the self-taught skills into a real career.",
    type: "education",
    icon: "🎓",
  },
  {
    year: "2025",
    period: "Apr 2025",
    title: "Started Freelancing — Video & Design",
    org: "Rapid Gyan & Shri Sai Extreme Classes",
    description:
      "Took on freelance video editing and thumbnail design work. Developed a strong design sensibility and understood what makes content engaging — skills that directly inform my UI decisions.",
    type: "work",
    icon: "🎨",
  },
  {
    year: "2025",
    period: "Aug 2025",
    title: "Bachelor of Engineering — CS",
    org: "Institute of Engineering & Technology, Agra",
    description:
      "Began formal CS education at IET Agra. Combining classroom theory with hands-on project building, and actively seeking internship opportunities to grow further.",
    type: "education",
    icon: "🏛️",
  },
];

const typeColors = {
  education: { bg: "bg-blue-500/20", border: "border-blue-500/30", text: "text-blue-300", dot: "bg-blue-400" },
  project:   { bg: "bg-indigo-500/20", border: "border-indigo-500/30", text: "text-indigo-300", dot: "bg-indigo-400" },
  work:      { bg: "bg-emerald-500/20", border: "border-emerald-500/30", text: "text-emerald-300", dot: "bg-emerald-400" },
};

export default function Journey() {
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
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-cyan-700 top-[10%] right-[-5%]" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="text-indigo-400 font-mono text-sm mb-3">// my journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The road so far
          </h2>
          <p className="text-slate-400 max-w-xl">
            Not a straight line. A series of curious experiments, late nights, and slow-building momentum.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-10">
          {Object.entries(typeColors).map(([key, val]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${val.dot}`} />
              <span className="text-slate-500 text-xs capitalize">{key}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/30 to-transparent -translate-x-px" />

          <div className="space-y-8">
            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0;
              const colors = typeColors[event.type];

              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} pl-10 md:pl-0`}>
                    <div className={`glass rounded-xl p-5 hover-glow border ${colors.border} inline-block w-full text-left`}>
                      {/* Year badge */}
                      <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold mb-3 ${colors.bg} ${colors.text} border ${colors.border}`}>
                        {event.period}
                      </span>
                      <h3 className="text-white font-semibold text-base mb-1">{event.title}</h3>
                      <p className={`text-xs font-medium mb-3 ${colors.text}`}>{event.org}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Center dot — md screens */}
                  <div className="hidden md:flex absolute left-1/2 top-5 -translate-x-1/2 w-8 h-8 rounded-full glass border border-indigo-500/30 items-center justify-center text-sm z-10">
                    {event.icon}
                  </div>

                  {/* Mobile: left-side icon */}
                  <div className="md:hidden absolute left-0 top-5 w-7 h-7 rounded-full glass border border-indigo-500/30 flex items-center justify-center text-xs z-10">
                    {event.icon}
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
