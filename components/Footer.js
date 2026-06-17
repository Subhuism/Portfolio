// components/Footer.js
// Clean minimal footer with back-to-top, logo, and copyright.

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <span className="font-mono text-indigo-400 font-semibold tracking-wider">
          &lt;SU /&gt;
        </span>

        {/* Copyright */}
        <p className="text-slate-600 text-sm text-center">
          © {new Date().getFullYear()} Subhanshu Upadhyay. Built with Next.js & Tailwind CSS.
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-400 text-sm transition-colors group"
        >
          Back to top
          <svg
            className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
