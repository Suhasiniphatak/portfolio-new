
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Code2,
  Sparkles,
  Monitor,
} from "lucide-react";
import "./App.css";


const projects = [
  {
    number: "01",
    name: "AI Resume Analyzer",
    type: "AI-POWERED WEB APPLICATION",
    description:
      "A web application that analyzes resumes with AI and helps users understand how their skills and experience align with a role.",
    stack: ["React", "Tailwind CSS", "Express", "Gemini API"],
    features: [
    "PDF Resume Upload",
    "AI-Powered Resume Analysis",
    "Job Description Matching",
    "Resume Score & Rating",
    "AI Improvement Suggestions",
  ],
    github: "https://github.com/Suhasiniphatak/AI-Resume-Analyzer",
    live: "https://ai-resume-analyzer-jet-chi.vercel.app/",
    className: "resume-project",
    label: "RESUME / AI",
    image:"/ai-resume-analyzer.png",
  },
  {
    number: "02",
    name: "AI Mock Interview Platform",
    type: "INTERACTIVE WEB APPLICATION",
    description:
      "An AI-powered interview practice experience designed to help users prepare for interviews through structured practice.",
    stack: ["React", "JavaScript", "API Integration"],

features: [
  "AI-Generated Interview Questions",
  "Interactive Interview Practice",
  "Text & Voice Answer Submission",
  "AI-Powered Answer Feedback",
  "Performance Score & Evaluation",
  "Interview History & Progress Tracking",
  "Personalized Interview Preparation",
],

    github: "https://github.com/Suhasiniphatak/AI-Mock-Interview-Platform",
    live: "https://ai-mock-interview-platform-suhasini.vercel.app/",
    className: "interview-project",
    label: "INTERVIEW / AI",
    image:"/ai-mock-interview.png",
  },
];



const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "GitHub",
  "Responsive Design",
  "Figma",
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <a className="brand" href="#home">
        SP<span>.</span>
      </a>

      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="nav-contact"
          onClick={() => setOpen(false)}
        >
          Let's talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
function TypingText() {
  const roles = [
    "React Developer",
    "Frontend Developer",
    "Web App Builder",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="hero-role">
      <span>{roles[index]}</span>
      <span className="typing-cursor">|</span>
    </p>
  );
}
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div className="availability" variants={fadeUp}>
            <span className="pulse-dot" />
            OPEN TO FRONTEND OPPORTUNITIES
          </motion.div>

          <motion.p className="hero-kicker" variants={fadeUp}>
            HELLO, I'M SUHASINI PHATAK
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            I build things<br />
            for the <span className="gradient-text">web.</span>
          </motion.h1>

          <motion.div variants={fadeUp}>
            <TypingText />
          </motion.div>

          <motion.p className="hero-description" variants={fadeUp}>
            Frontend developer focused on building responsive,
            interactive and user-friendly web experiences with React
            and modern web technologies.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#projects" className="button-primary">
              Explore projects <ArrowUpRight size={17} />
            </a>
            <a href="#contact" className="button-secondary">
              Get in touch
            </a>
          </motion.div>

          <motion.div className="hero-socials" variants={fadeUp}>
            <a
              href="https://github.com/Suhasiniphatak"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/suhasini-phatak/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <motion.div
            className="code-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="code-card-top">
              <div className="window-dots">
                <i /><i /><i />
              </div>
              <span>developer.js</span>
            </div>

            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p className="indent"><span className="code-blue">name:</span> <span className="code-green">"Suhasini"</span>,</p>
              <p className="indent"><span className="code-blue">role:</span> <span className="code-green">"Frontend Developer"</span>,</p>
              <p className="indent"><span className="code-blue">skills:</span> [</p>
              <p className="indent double"><span className="code-green">"React"</span>, <span className="code-green">"JavaScript"</span>,</p>
              <p className="indent double"><span className="code-green">"CSS"</span>, <span className="code-green">"HTML"</span></p>
              <p className="indent">],</p>
              <p className="indent"><span className="code-blue">learning:</span> <span className="code-green">"Every day"</span></p>
              <p>{"};"}</p>
              <p className="code-comment">// Building the next idea...</p>
            </div>
          </motion.div>

          <motion.div
            className="floating-chip chip-react"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            React.js <span>✳</span>
          </motion.div>

          <motion.div
            className="floating-chip chip-code"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Code2 size={15} /> Creative code
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <Reveal>
        <p className="section-label">01 / ABOUT ME</p>
        <h2 className="section-title">
          Curious mind.
          <br />
          <span className="gradient-text">Builder's mindset.</span>
        </h2>
      </Reveal>

      <Reveal className="about-description">
        <p>
          I'm a developer with a background in Electronics and
          Communication Engineering and professional experience in
          UI/UX design. I'm focused on growing as a frontend developer
          and building useful digital products.
        </p>
        <p>
          I enjoy working with React, exploring how applications fit
          together, and turning ideas into responsive interfaces.
          My design background also helps me pay attention to usability,
          layout and visual detail.
        </p>
      </Reveal>

      <div className="about-highlights">
        {[
          ["01+", "Year of professional experience"],
          ["02", "Featured React applications"],
          ["BE", "Electronics & Communication"],
        ].map(([number, label], index) => (
          <Reveal key={label}>
            <div className="highlight-card">
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <Reveal>
        <p className="section-label">02 / TECH STACK</p>
        <h2 className="section-title">
          Tools I use to
          <br />
          <span className="gradient-text">bring ideas to life.</span>
        </h2>
      </Reveal>

      <div className="skills-layout">
        <Reveal className="skills-intro">
          <Sparkles size={27} />
          <h3>My toolkit</h3>
          <p>
            Technologies and tools I'm using to build, style and
            improve web applications.
          </p>
        </Reveal>

        <div className="skill-cloud">
          {skills.map((skill, index) => (
            <motion.span
              className="skill-pill"
              key={skill}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -7, scale: 1.06 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview ${project.className}`}>
      <div className="screenshot-browser">
        <div className="screenshot-browser-bar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>{project.name}</span>
        </div>

        <img
          src={project.image}
          alt={`${project.name} application preview`}
          className="project-screenshot"
        />
      </div>

      <div className="preview-overlay">
        <span>PROJECT {project.number}</span>
        <ArrowUpRight size={26} />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <Reveal>
        <p className="section-label">03 / SELECTED PROJECTS</p>
        <h2 className="section-title">
          Things I've
          <br />
          <span className="gradient-text">built with React.</span>
        </h2>
        <p className="projects-intro">
          A closer look at two applications I've developed while
          exploring frontend engineering and AI-powered experiences.
        </p>
      </Reveal>

      <div className="projects-grid">
        {projects.map((project) => (
          <Reveal key={project.number}>
            <motion.article
              className="project-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectPreview project={project} />

              <div className="project-details">
                <p className="project-type">{project.type}</p>
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <span>{project.number}</span>
                </div>
                <p className="project-description">{project.description}</p>
                {project.features && (
  <div className="project-features">
    <h4>KEY FEATURES</h4>

    <ul>
      {project.features.map((feature) => (
        <li key={feature}>
          <span>✦</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
)}

                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Code2 size={16} /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live demo <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <Reveal>
        <p className="section-label">04 / CONTACT</p>
        <h2>
          Let's build
          <br />
          something <span className="gradient-text">great.</span>
        </h2>
        <p className="contact-description">
          Interested in working together or have an opportunity
          to share? I'd love to hear from you.
        </p>
        <a className="button-primary" href="mailto:phataksuhasini16@gmail.com">
          Say hello <ArrowUpRight size={17} />
        </a>
      </Reveal>

      <div className="contact-socials">
        <a href="https://github.com/Suhasiniphatak" target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={15} />
        </a>
        <a href="https://www.linkedin.com/in/suhasini-phatak/" target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="brand">SP<span>.</span></a>
      <p>Designed with curiosity. Built with React.</p>
      <span>© {new Date().getFullYear()} Suhasini Phatak</span>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
