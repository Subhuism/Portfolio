"use client";
// components/sections/Contact.js
// Clean contact section with working form (logs to console by default),
// email link, and social links. Easy to connect to Formspree or EmailJS.

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submit
  // To connect this to a real email service, replace the body of this function
  // with a fetch() call to Formspree (https://formspree.io) or EmailJS.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending (replace with real API call)
    const res = await fetch("https://formspree.io/f/xjgddgor", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (res.ok) {
  alert("Message Sent Successfully");
} else {
  alert("Failed to send message");
}
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0A0F1E] relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-indigo-700 bottom-[-10%] left-[10%]" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-indigo-400 font-mono text-sm mb-3">// contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s build something together
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Whether you have an internship opportunity, a project idea, or just want to say hey —
            my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — contact info */}
          <div className="space-y-6">
            {/* Email card */}
            <a
              href="mailto:upadhyaylogical@gmail.com"
              className="glass rounded-xl p-5 flex items-center gap-4 hover-glow group block"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Email</p>
                <p className="text-slate-200 text-sm group-hover:text-indigo-300 transition-colors">
                  upadhyaylogical@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn card */}
            <a
              href="https://www.linkedin.com/in/subhuism"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-5 flex items-center gap-4 hover-glow group block"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs">LinkedIn</p>
                <p className="text-slate-200 text-sm group-hover:text-blue-300 transition-colors">
                  linkedin.com/in/subhuism
                </p>
              </div>
            </a>

            {/* Phone card */}
            <a
              href="tel:+916386039288"
              className="glass rounded-xl p-5 flex items-center gap-4 hover-glow group block"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs">Phone</p>
                <p className="text-slate-200 text-sm group-hover:text-emerald-300 transition-colors">
                  +91 6386039288
                </p>
              </div>
            </a>

            {/* Availability badge */}
            <div className="glass rounded-xl p-5 border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-300 text-sm font-semibold">Available</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Open to remote and on-site internships, freelance contracts, and project-based work.
              </p>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="glass rounded-2xl p-7 border border-indigo-500/15">
            <h3 className="text-white font-semibold mb-6">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ravi Kumar"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-slate-800 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ravi@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-slate-800 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-slate-400 text-xs font-medium mb-1.5 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Hey Subhanshu, we have an internship opportunity..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-slate-800 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  status === "success"
                    ? "bg-emerald-600 text-white"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/35"
                } disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "✓ Message Sent!"
                  : "Send Message →"}
              </button>

              {/* Helper note */}
              <p className="text-slate-600 text-xs text-center">
                Or email me directly at{" "}
                <a href="mailto:upadhyaylogical@gmail.com" className="text-indigo-400 hover:underline">
                  upadhyaylogical@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
