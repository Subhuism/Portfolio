import "./globals.css";

export const metadata = {
  title: "Subhanshu Upadhyay — Web Developer & Python Engineer",
  description:
    "Computer Science undergraduate passionate about web development, backend automation, and Python-based SaaS applications. Building real-world systems one line at a time.",
  keywords: ["Subhanshu Upadhyay", "Web Developer", "Python", "Flask", "Portfolio", "Agra"],
  authors: [{ name: "Subhanshu Upadhyay" }],
  openGraph: {
    title: "Subhanshu Upadhyay — Web Developer",
    description: "Building real-world systems. Seeking Web Dev & SWE Intern roles.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
