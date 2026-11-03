"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  ExternalLink,
  Eye,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { motion } from "motion/react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

interface ProjectItem {
  n: string;
  tag: string;
  title: string;
  role: string;
  featured?: boolean;
  desc: string;
  contribution: string;
  tech: string[];
  links: { label: string; href: string; external?: boolean }[];
  privateRepo?: boolean;
}

const projects: ProjectItem[] = [
  {
    n: "01",
    tag: "SIH 2026 · In Progress",
    title: "GeM Bid Compliance Verification Platform",
    role: "Team Leader · Backend & Document Processing Developer",
    featured: true,
    desc: "A compliance verification system designed to evaluate GeM bid tender documents through automated data extraction, validation rules, and structured evidence tracking.",
    contribution:
      "Architected backend services, document-processing pipeline, API verification layer, document extraction, and evidence handling. (AI model integration collaboratively developed by teammate).",
    tech: ["Python", "PostgreSQL", "SQLAlchemy", "PyMuPDF", "PaddleOCR", "REST APIs"],
    links: [],
    privateRepo: true,
  },
  {
    n: "02",
    tag: "SIH 2025",
    title: "KMRL Document Intelligence & Sharing Platform",
    role: "Team Leader · Full-Stack Developer",
    desc: "A centralized document platform developed for Kochi Metro Rail Limited to streamline document archiving, bilingual discovery, and administrative workflows.",
    contribution:
      "Implemented full-stack architecture, bilingual summaries in English and Malayalam, Tesseract OCR for scanned records, and full-text search. Projected a 90% reduction in manual review effort.",
    tech: ["Flask", "PostgreSQL", "Google Gemini", "Tesseract OCR", "Docker", "Tailwind CSS"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/HARSHP-16/Metro-Operations-Platform",
      },
    ],
  },
  {
    n: "03",
    tag: "Web Application",
    title: "QuickDropFiles",
    role: "Full-Stack Developer",
    desc: "A lightweight, account-free file and text sharing application designed for seamless transfer between devices with automatic one-hour expiration.",
    contribution:
      "Built full-stack application supporting drag-and-drop multi-file uploads (up to 100MB), text sharing, and short code / QR code retrieval with automated cloud storage cleanup.",
    tech: ["Flask", "PostgreSQL", "Azure Blob Storage", "Docker", "Vercel"],
    links: [
      {
        label: "Live Demo",
        href: "https://quickdropfiles.vercel.app",
        external: true,
      },
      {
        label: "Source Code",
        href: "https://github.com/HARSHP-16/quickdropfiles",
      },
    ],
  },
  {
    n: "04",
    tag: "Machine Learning",
    title: "MediPredict",
    role: "ML & Backend Developer",
    desc: "A healthcare analytics application that pairs an empirical diabetes risk prediction model with a real-time REST API and interactive analytics dashboard.",
    contribution:
      "Trained and validated Logistic Regression model (achieving ~76% accuracy and 77% recall on validation sets as reported for risk-assessment support, not clinical diagnosis); built Flask API and Power BI dashboard.",
    tech: ["Python", "scikit-learn", "Flask", "MySQL", "Power BI"],
    links: [
      {
        label: "Source Code",
        href: "https://github.com/HARSHP-16/MediPredict-",
      },
    ],
  },
];

interface ExperienceItem {
  period: string;
  org: string;
  role: string;
  desc: string;
  callout: string;
  certImage?: string;
  certTitle?: string;
  certId?: string;
  certDate?: string;
  certIssuer?: string;
}

const experience: ExperienceItem[] = [
  {
    period: "JUL 2025 – AUG 2025",
    org: "Edunet Foundation & Shell",
    role: "AI & Data Analytics Intern",
    desc: "Worked on the EV Demand Prediction project within the AICTE Virtual Internship Program. Personally handled dataset cleaning, exploratory data analysis, and feature preprocessing.",
    callout: "Optimized preprocessing pipeline, resulting in a reported 40% reduction in execution time.",
    certImage: "/certificates/edunet-shell-internship.jpeg",
    certTitle: "Artificial Intelligence & Data Analytics Internship Certificate",
    certId: "STU6842d3014bc211749209857",
    certDate: "15 Jul 2025 – 16 Aug 2025",
    certIssuer: "AICTE · Shell India · Edunet Foundation",
  },
  {
    period: "MAY 2026 – PRESENT",
    org: "GirlScript Summer of Code (GSSoC)",
    role: "Open Source Contributor · AI Agents Track",
    desc: "Contributing code and documentation to open-source AI agent tooling and libraries. Focused on improving core module reliability, edge-case handling, and documentation.",
    callout: "Orchestrated 12 pull request merges meeting repository testing and quality standards.",
  },
  {
    period: "MAR 2026 – PRESENT",
    org: "AWS Cloud Club, I²IT",
    role: "Web Development Team Member",
    desc: "Assisting the student club web development team with frontend updates, ongoing site maintenance, and technical content publishing for the community portal.",
    callout: "Collaborating on community web portal improvements and technical project initiatives.",
  },
  {
    period: "2026 · SIH",
    org: "Smart India Hackathon 2026",
    role: "Team Leader · GeM Bid Verification",
    desc: "Leading project execution for the national hackathon problem statement, coordinating development milestones, and aligning deliverables across team members.",
    callout: "Personally spearheading backend architecture, OCR document extraction services, and API verification layers.",
  },
  {
    period: "2025 · SIH",
    org: "Smart India Hackathon 2025",
    role: "Team Leader · KMRL Document Platform",
    desc: "Led a student engineering team building the enterprise document intelligence platform for Kochi Metro Rail Limited, managing cross-functional integration milestones.",
    callout: "Delivered a prototype bilingual system integrating Google Gemini AI and Tesseract OCR.",
  },
];

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    category: "Web & Backend",
    skills: ["HTML", "CSS", "Flask", "REST APIs", "Tailwind CSS"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "AI/ML & Data",
    skills: [
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "PaddleOCR",
      "Tesseract OCR",
      "Data Analysis",
    ],
  },
  {
    category: "Cloud & Developer Tools",
    skills: [
      "Azure",
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "Jupyter Notebook",
    ],
  },
];

interface CertificationItem {
  title: string;
  issuer: string;
  credentialId?: string;
  date?: string;
  image: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft Certified",
    credentialId: "D204952AC5985B22",
    date: "Earned: 16 Aug 2026",
    image: "/certificates/azure-fundamentals.jpeg",
  },
  {
    title: "GitHub Copilot Certification",
    issuer: "GitHub / Microsoft",
    credentialId: "DCBC8C7FC9EE1A47",
    date: "Earned: 15 Jun 2026",
    image: "/certificates/github-copilot.jpeg",
  },
  {
    title: "AI & Data Analytics Internship Certificate",
    issuer: "AICTE · Shell India · Edunet Foundation",
    credentialId: "STU6842d3014bc211749209857",
    date: "Completed: 16 Aug 2025",
    image: "/certificates/edunet-shell-internship.jpeg",
  },
];

const fadeAnim = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
  },
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "experience",
        "education",
        "skills",
        "contact",
      ];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      {/* Sticky Header */}
      <header className="header-sticky">
        <div className="container-wrap header-content">
          <a className="logo-link" href="#home" aria-label="Harsh Palkrutwar Portfolio">
            HP<span className="logo-dot">.</span>
          </a>

          <nav className="nav-desktop" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  activeSection === item.href.slice(1) ? "active" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              className="nav-resume-btn"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={14} /> Resume
            </a>
            <a className="nav-cta-btn" href="#contact">
              Get in Touch <ArrowUpRight size={14} />
            </a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`nav-mobile-drawer ${menuOpen ? "open" : ""}`}
          aria-hidden={!menuOpen}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${
                activeSection === item.href.slice(1) ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            style={{ fontWeight: 600, color: "var(--accent)" }}
          >
            View Resume (PDF) ↗
          </a>
          <a
            className="btn-primary"
            href="#contact"
            onClick={closeMenu}
            style={{ marginTop: 8 }}
          >
            Get in Touch <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="container-wrap hero-section">
          <motion.div
            className="hero-kicker-wrap"
            initial="hidden"
            animate="visible"
            variants={fadeAnim(0)}
          >
            <div className="hero-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>Pune, Maharashtra, India · I²IT Pune</span>
            </div>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial="hidden"
            animate="visible"
            variants={fadeAnim(0.08)}
          >
            Harsh Palkrutwar
          </motion.h1>

          <motion.h2
            className="hero-headline"
            initial="hidden"
            animate="visible"
            variants={fadeAnim(0.14)}
          >
            Computer Engineering student building full-stack applications, backend systems, and AI-powered solutions.
          </motion.h2>

          <motion.p
            className="hero-subline"
            initial="hidden"
            animate="visible"
            variants={fadeAnim(0.2)}
          >
            Focused on backend engineering, document intelligence, and cloud-native development.
          </motion.p>

          <motion.div
            className="hero-cta-group"
            initial="hidden"
            animate="visible"
            variants={fadeAnim(0.26)}
          >
            <a className="btn-primary" href="#projects">
              View Projects <ArrowDown size={16} />
            </a>
            <a
              className="btn-secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={16} /> View Resume <ArrowUpRight size={14} />
            </a>
            <a className="btn-secondary" href="#contact">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            className="hero-social-links"
            initial="hidden"
            animate="visible"
            variants={fadeAnim(0.32)}
          >
            <a
              className="social-text-link"
              href="https://github.com/HARSHP-16"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              className="social-text-link"
              href="https://www.linkedin.com/in/harsh-palkrutwar-893810322/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>
        </section>

        {/* 1. About Section — Deliberate Two-Column Composition */}
        <section id="about" className="section-block">
          <div className="container-wrap">
            <div className="about-two-col">
              <motion.div
                className="about-main-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeAnim(0)}
              >
                <span className="section-eyebrow">About Me</span>
                <h2 className="section-title">Background & Engineering Focus</h2>
                <p>
                  I am a Computer Engineering undergraduate at I²IT Pune focused on backend systems, document intelligence, and cloud deployment. My work centers on practical software engineering—designing document verification pipelines, automated extraction workflows, RESTful APIs, and database modeling.
                </p>
                <p>
                  I prioritize clear system boundaries, database integrity, and building dependable services that solve concrete operational challenges. From automating compliance verification checks to deploying containerized applications, I enjoy building software that is structured, maintainable, and reliable.
                </p>
              </motion.div>

              <motion.div
                className="about-snapshot-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeAnim(0.1)}
              >
                <h3>Profile Snapshot</h3>
                <div className="snapshot-list">
                  <div className="snapshot-item">
                    <span className="snapshot-label">Education</span>
                    <span className="snapshot-value">B.E. Computer Engineering</span>
                    <span className="snapshot-sub">I²IT Pune · Class of 2028</span>
                  </div>
                  <div className="snapshot-item">
                    <span className="snapshot-label">Academic Merit</span>
                    <span className="snapshot-value">CGPA: 8.80 / 10</span>
                  </div>
                  <div className="snapshot-item">
                    <span className="snapshot-label">Location</span>
                    <span className="snapshot-value">Pune, Maharashtra, India</span>
                  </div>
                  <div className="snapshot-item">
                    <span className="snapshot-label">Curriculum Vitae</span>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="snapshot-resume-link"
                    >
                      <FileText size={14} /> resume.pdf <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Featured Projects Section */}
        <section id="projects" className="section-block">
          <div className="container-wrap">
            <span className="section-eyebrow">Featured Work</span>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-lead">
              Systems built around real workflows, document processing, and data-driven architectures.
            </p>

            <div className="projects-grid">
              {projects.map((proj, idx) => (
                <motion.article
                  key={proj.title}
                  className={`project-card ${proj.featured ? "featured-card" : ""}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeAnim(idx * 0.08)}
                >
                  <div className="project-top-meta">
                    <span className="project-index">{proj.n}</span>
                    <div className="project-meta-right">
                      {proj.featured && (
                        <span className="featured-pill">Featured</span>
                      )}
                      <span className="project-tag-badge">{proj.tag}</span>
                    </div>
                  </div>

                  <h3 className="project-card-title">{proj.title}</h3>
                  <span className="project-role-line">{proj.role}</span>
                  <p className="project-card-desc">{proj.desc}</p>

                  <div className="project-contribution">
                    <span className="project-contribution-label">My Contribution</span>
                    <p className="project-contribution-text">{proj.contribution}</p>
                  </div>

                  <div className="project-tech-tags">
                    {proj.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links-row">
                    <div className="project-action-links">
                      {proj.links.map((link) => (
                        <a
                          key={link.label}
                          className="project-action-link"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label} <ArrowUpRight size={14} />
                        </a>
                      ))}
                    </div>
                    {proj.privateRepo && (
                      <span className="project-status-note">
                        <ShieldCheck size={14} /> Repository: Private / SIH 2026
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Experience & Leadership Section */}
        <section id="experience" className="section-block">
          <div className="container-wrap">
            <span className="section-eyebrow">Career & Leadership</span>
            <h2 className="section-title">Experience & Initiatives</h2>
            <p className="section-lead">
              Contributing to technical organizations, open-source initiatives, and team engineering projects.
            </p>

            <div className="timeline-list">
              {experience.map((item, idx) => (
                <motion.div
                  key={item.org + item.period}
                  className="timeline-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeAnim(idx * 0.06)}
                >
                  <div className="timeline-meta">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-org">{item.org}</span>
                  </div>

                  <div className="timeline-content">
                    <h4>{item.role}</h4>
                    <p className="timeline-desc">{item.desc}</p>
                    <div className="timeline-callout">{item.callout}</div>

                    {item.certImage && (
                      <div style={{ marginTop: 4 }}>
                        <button
                          type="button"
                          className="timeline-cert-btn"
                          onClick={() =>
                            setSelectedCert({
                              title: item.certTitle || "Internship Certificate",
                              image: item.certImage!,
                              issuer: item.certIssuer || item.org,
                              credentialId: item.certId,
                              date: item.certDate,
                            })
                          }
                        >
                          <Award size={14} /> View Internship Certificate <ArrowUpRight size={13} />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Education & Certifications Section — Full-Width Card + 3-Col Certs Row */}
        <section id="education" className="section-block">
          <div className="container-wrap">
            <span className="section-eyebrow">Academic & Credentials</span>
            <h2 className="section-title">Education & Certifications</h2>
            <p className="section-lead">
              Academic qualifications and verified credentials in cloud systems, AI tooling, and data analytics.
            </p>

            {/* Full-Width Education Card */}
            <motion.div
              className="edu-full-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeAnim(0)}
            >
              <div className="edu-full-header">
                <span className="edu-timeline-badge">
                  <GraduationCap
                    size={15}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: 6,
                    }}
                  />
                  2024 – 2028 (Expected)
                </span>
                <span className="cgpa-pill">CGPA: 8.80 / 10</span>
              </div>

              <h3 className="edu-institution">
                International Institute of Information Technology (I²IT), Pune
              </h3>
              <p className="edu-degree">
                Bachelor of Engineering (B.E.) in Computer Engineering · SPPU, Pune
              </p>

              <div className="edu-metrics-horizontal">
                <div className="edu-metric-item">
                  <span className="edu-metric-label">B.E. Current Standing</span>
                  <span className="edu-metric-val">CGPA: 8.80 / 10</span>
                </div>
                <div className="edu-metric-item">
                  <span className="edu-metric-label">Class XII (HSC)</span>
                  <span className="edu-metric-val">81.50%</span>
                </div>
                <div className="edu-metric-item">
                  <span className="edu-metric-label">Class X (SSC)</span>
                  <span className="edu-metric-val">91.60%</span>
                </div>
              </div>
            </motion.div>

            {/* Certifications Subheading */}
            <div className="certs-subheading">
              <h3>Verified Certifications & Credentials</h3>
            </div>

            {/* 3 Equal-Width Certification Cards Row */}
            <div className="certs-row-grid">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  className="cert-card-compact"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeAnim(idx * 0.08)}
                >
                  <div className="cert-top-row">
                    <div className="cert-icon-mark" aria-hidden="true">
                      <Award size={18} />
                    </div>
                    {cert.date && <span className="cert-id-tag">{cert.date}</span>}
                  </div>

                  <h4 className="cert-compact-title">{cert.title}</h4>
                  <p className="cert-compact-issuer">{cert.issuer}</p>

                  <div className="cert-compact-meta">
                    {cert.credentialId && (
                      <span className="cert-id-tag">ID: {cert.credentialId}</span>
                    )}
                    <div className="cert-action-btns">
                      <button
                        type="button"
                        className="cert-view-btn"
                        onClick={() => setSelectedCert(cert)}
                      >
                        <Eye size={13} /> Preview
                      </button>
                      <a
                        className="cert-view-btn"
                        href={cert.image}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink size={13} /> Open Image
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Skills Section — Balanced Editorial Layout */}
        <section id="skills" className="section-block">
          <div className="container-wrap">
            <span className="section-eyebrow">Technical Stack</span>
            <h2 className="section-title">Skills & Competencies</h2>
            <p className="section-lead">
              Structured overview of programming languages, backend frameworks, databases, and tools.
            </p>

            <div className="skills-editorial-list">
              {skillCategories.map((cat, idx) => (
                <motion.div
                  key={cat.category}
                  className="skill-row"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeAnim(idx * 0.05)}
                >
                  <h3 className="skill-row-title">{cat.category}</h3>
                  <div className="skill-tags-wrap">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="skill-tag-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Contact Section — Clean 4-Column Grid */}
        <section id="contact" className="contact-block">
          <div className="container-wrap">
            <span className="section-eyebrow">Let’s Connect</span>
            <h2 className="contact-headline">
              Have an interesting project or opportunity in mind? Let’s connect.
            </h2>
            <p className="contact-subtext">
              I am open to software engineering internships, open-source collaborations, and discussions on backend systems, document intelligence, and cloud architectures.
            </p>

            <div className="contact-cards-grid">
              <a
                className="contact-tile"
                href="mailto:palkrutwarharsh@gmail.com"
                aria-label="Send email to palkrutwarharsh@gmail.com"
              >
                <div className="contact-tile-header">
                  <span className="contact-tile-label">Email</span>
                  <Mail size={18} />
                </div>
                <span className="contact-tile-value">palkrutwarharsh@gmail.com</span>
              </a>

              <a
                className="contact-tile"
                href="https://www.linkedin.com/in/harsh-palkrutwar-893810322/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit LinkedIn Profile"
              >
                <div className="contact-tile-header">
                  <span className="contact-tile-label">LinkedIn</span>
                  <Linkedin size={18} />
                </div>
                <span className="contact-tile-value">LinkedIn Profile</span>
              </a>

              <a
                className="contact-tile"
                href="https://github.com/HARSHP-16"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit GitHub Profile"
              >
                <div className="contact-tile-header">
                  <span className="contact-tile-label">GitHub</span>
                  <Github size={18} />
                </div>
                <span className="contact-tile-value">GitHub Profile</span>
              </a>

              <div
                className="contact-tile"
                style={{ cursor: "default" }}
                tabIndex={0}
                aria-label="Location: Pune, Maharashtra, India"
              >
                <div className="contact-tile-header">
                  <span className="contact-tile-label">Location</span>
                  <MapPin size={18} />
                </div>
                <span className="contact-tile-value">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-bar">
        <div className="container-wrap footer-content">
          <span className="footer-credits">
            © {new Date().getFullYear()} Harsh Palkrutwar · Designed with clarity and precision
          </span>
          <a className="footer-top-link" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>

      {/* Certificate Lightbox Preview Modal */}
      {selectedCert && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 id="cert-modal-title" className="modal-title">
                {selectedCert.title}
              </h3>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="modal-image"
              />
            </div>
            <div className="modal-footer">
              <span className="cert-id-tag" style={{ fontSize: 13 }}>
                {selectedCert.credentialId
                  ? `Credential ID: ${selectedCert.credentialId}`
                  : selectedCert.issuer}
              </span>
              <a
                className="btn-primary"
                href={selectedCert.image}
                target="_blank"
                rel="noreferrer"
                style={{ padding: "8px 16px", fontSize: 14 }}
              >
                Open Original Image <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
