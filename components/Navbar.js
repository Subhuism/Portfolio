"use client";
// components/Navbar.js
// Fixed sticky navbar. Highlights the active section as you scroll.
// Uses IntersectionObserver to detect which section is in view.

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Learning", href: "#learning" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Change navbar background after scrolling 20px
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // IntersectionObserver to track which section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" } // trigger when section is roughly centered
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll to section
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070B14]/90 backdrop-blur-md border-b border-indigo-500/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo / name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-mono text-indigo-400 font-semibold text-lg tracking-wider hover:text-indigo-300 transition-colors"
        >
          &lt;SU /&gt;
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-indigo-400"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full" />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA button — desktop */}
        <a
          href="mailto:upadhyaylogical@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium hover:bg-indigo-600/30 hover:border-indigo-400/50 transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-slate-300"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1220]/95 backdrop-blur-md border-b border-indigo-500/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-indigo-400 bg-indigo-500/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
