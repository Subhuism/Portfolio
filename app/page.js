"use client";
// app/page.js
// This is the single page that contains all sections of the portfolio.
// Each section is a separate component for clean organization.

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Learning from "@/components/sections/Learning";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070B14] overflow-x-hidden">
      {/* Fixed navbar at the top */}
      <Navbar />

      {/* All sections stacked vertically on one page */}
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Learning />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
