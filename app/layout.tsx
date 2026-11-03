import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F8F7F4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Harsh Palkrutwar — Computer Engineering | Full-Stack & AI/ML",
  description:
    "Personal portfolio of Harsh Palkrutwar, a Computer Engineering undergraduate at I²IT Pune focused on Full-Stack Development, AI/ML, backend engineering, and cloud technologies.",
  metadataBase: new URL("https://harshp-16.github.io/Portfolio-website"),
  keywords: [
    "Harsh Palkrutwar",
    "Computer Engineering",
    "I²IT Pune",
    "Full-Stack Developer",
    "AI/ML",
    "Backend Developer",
    "Python",
    "PostgreSQL",
    "Cloud Computing",
  ],
  authors: [{ name: "Harsh Palkrutwar", url: "https://github.com/HARSHP-16" }],
  openGraph: {
    title: "Harsh Palkrutwar — Computer Engineering | Full-Stack & AI/ML",
    description:
      "Computer Engineering undergraduate building thoughtful software, full-stack applications, and AI-powered solutions.",
    url: "https://harshp-16.github.io/Portfolio-website/",
    siteName: "Harsh Palkrutwar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Palkrutwar — Computer Engineering | Full-Stack & AI/ML",
    description:
      "Computer Engineering undergraduate building thoughtful software, full-stack applications, and AI-powered solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
