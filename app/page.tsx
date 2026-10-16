
"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  Menu,
  X,
  ExternalLink,
  GraduationCap,
  Award,
  BookOpen,
  Code2,
  ShieldCheck,
  BrainCircuit
} from "lucide-react";

const profile = {
  name: "Rohit Kadu",
  email: "rohitkadu3102@gmail.com",
  github: "https://github.com/rohitkadu",
  linkedin: "https://www.linkedin.com/in/rohitkadu/",
  resume: "/Rohit_Kadu_Resume.pdf"
};

const experience = [
  {
    role: "Software Engineer",
    company: "Tata Consultancy Services",
    period: "Jun 2024 — Present",
    location: "Mumbai, India",
    description:
      "Developing enterprise applications across backend services, modern frontend interfaces, and AI-powered automation. Working with distributed systems, API design, performance optimization, and secure application development.",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular/React",
      "AWS",
      "Kafka",
      "MySQL",
      "AI/RAG"
    ]
  },
  {
    role: "Software Development Intern",
    company: "Persistent Systems",
    period: "Jun 2023 — Dec 2023",
    location: "Mumbai, India",
    description:
      "Contributed to full-stack application development using Java, Spring Boot, and Angular, including REST API integration, frontend improvements, and collaborative software delivery.",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "REST APIs"
    ]
  }
];

const skillGroups = [
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Cloud",
      "REST APIs",
      "Microservices",
      "Hibernate / JPA",
      "Kafka",
      "Redis",
      "MySQL"
    ]
  },
  {
    title: "Frontend",
    skills: [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "Git",
      "VA/PT",
      "SAST/DAST"
    ]
  },
  {
    title: "AI",
    skills: [
      "Python",
      "OpenAI API",
      "RAG",
      "AI Agents",
      "ML"
    ]
  }
];

const research = [
  {
    icon: BrainCircuit,
    title: "Generative AI & Intelligent Systems",
    description:
      "Exploring retrieval-augmented generation, AI agents, and how intelligent systems can solve practical problems."
  },
  {
    icon: ShieldCheck,
    title: "Application Security",
    description:
      "Interested in secure application design, authentication, authorization, and building dependable software."
  },
  {
    icon: Code2,
    title: "Scalable System Architecture",
    description:
      "Understanding distributed systems, event-driven architectures, application performance, and scalable backend design."
  }
];


const certifications = [
  {
    title: "Claude Certified Architect – Professional",
    issuer: "Anthropic",
    issued: "Oct 2026",
    expires: "Oct 2027",
    credentialId: "fbd3dd47-4679-431b-b581-b17ca06286ff",
    credentialUrl: "https://www.credly.com/badges/fbd3dd47-4679-431b-b581-b17ca06286ff"
  },
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    issued: "May 2026",
    expires: "May 2029",
    credentialId: "d1381238-2ece-4ffa-b32d-9e66e361e7c1",
    credentialUrl: "https://www.credly.com/badges/d1381238-2ece-4ffa-b32d-9e66e361e7c1"
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issued: "June 2026",
    expires: "June 2029",
    credentialId: "5ae7cce1-4efa-40bd-8e1a-2415a5e02adc",
    credentialUrl: "https://www.credly.com/badges/5ae7cce1-4efa-40bd-8e1a-2415a5e02adc"
  },
  {
    title: "Claude Certified Developer – Foundations",
    issuer: "Anthropic",
    issued: "Oct 2026",
    expires: "Oct 2027",
    credentialId: "371fb8b5-85b3-4a83-8bdd-6035eff2cd25",
    credentialUrl: "https://www.credly.com/badges/371fb8b5-85b3-4a83-8bdd-6035eff2cd25"
  }
];



const education = [
  {
    degree: "Bachelor of Technology (B.Tech/B.E)",
    detail: "Computer Science and Engineering",
    institution: "University of Mumbai",
    period: "2020 — 2024",
    extra: "CGPA: 9.4 / 10",
    verified: true
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    detail: "Class XII",
    institution: "B.K.Birla College of Arts, Science and Commerce",
    period: "2018",
    extra: "CGPA: 87%",
    verified: true
  },
  {
    degree: "Secondary School Certificate (SSC)",
    detail: "Class X",
    institution: "C.R.M. Oak High School",
    period: "2016",
    extra: "97%",
    verified: true
  }
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.28-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.16 1.18A11 11 0 0 1 12 6.42c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.41-2.69 5.39-5.25 5.67.41.36.77 1.06.77 2.14v2.76c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.46 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.29 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.75 1.36-1.55 2.79-1.55 2.98 0 3.58 1.96 3.58 4.51v5.29Z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <GitHubIcon />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a href={`mailto:${profile.email}`} aria-label="Email">
        <Mail size={19} />
      </a>
    </div>
  );
}

function SectionTitle({
  number,
  label,
  title,
  description
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-title">
      <div className="section-label">
        <span>{number}</span>
        {label}
      </div>
      <h2>{title}<span>.</span></h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Research", "#research"],
    ["Contact", "#contact"]
  ];

  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#home" className="logo">Rohit Kadu<span>.</span></a>

          <div className="nav-links">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a className="nav-resume" href={profile.resume} download>
              Resume <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            className="menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-menu" id="mobile-navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a href={profile.resume} download onClick={() => setMenuOpen(false)}>
              Download Resume
            </a>
          </div>
        )}
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              SOFTWARE ENGINEER
            </div>

            <h1>Rohit Kadu<span>.</span></h1>

            <h2>
              Curious soul,
              <br />
              passionate about <span>AI.</span>
            </h2>

            <p>
              I enjoy building secure, scalable, and reliable applications,
              with a deep interest in software architecture, performance,
              and emerging technologies.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Get in touch <ArrowUpRight size={18} />
              </a>
              <a href={profile.resume} download className="button button-secondary">
                <Download size={17} /> Resume
              </a>
            </div>

            <div className="hero-bottom">
              <SocialLinks />
              <span>Mumbai, India</span>
            </div>
          </div>

          <div className="hero-visual">
              <img
                src="/hero.gif"
                alt="Rohit Kadu"
                className="hero-image"
              />
           
            {/* <div className="hero-placeholder" aria-hidden="true">
              <div className="placeholder-ring ring-one" />
              <div className="placeholder-ring ring-two" />
              <div className="placeholder-core" />
            </div> */}
          </div>

          <a href="#about" className="scroll-hint">
            SCROLL TO EXPLORE <ArrowDown size={16} />
          </a>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <SectionTitle number="01" label="INTRODUCTION" title="About me" />

            <div className="about-copy">
              <h3>
                I like understanding
                <br />
                how things work.
              </h3>
              <p>
                I'm a software engineer with an interest in building
                applications that are efficient, secure, and designed
                to scale. I enjoy working across backend systems,
                frontend experiences, and cloud technologies.
              </p>
              <p>
                Beyond traditional software development, I'm particularly
                curious about artificial intelligence and its potential
                to change how we build and interact with software.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <SectionTitle
              number="02"
              label="PROFESSIONAL JOURNEY"
              title="Experience"
              description="A snapshot of my professional experience."
            />

            <div className="experience-list">
              {experience.map((job) => (
                <article className="experience-item" key={job.company}>
                  <div className="experience-meta">
                    <span>{job.period}</span>
                    <small>{job.location}</small>
                  </div>

                  <div className="experience-body">
                    <h3>{job.role}</h3>
                    <span className="company">{job.company}</span>
                    <p>{job.description}</p>
                    <div className="tags">
                      {job.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionTitle
              number="03"
              label="TECHNOLOGIES"
              title="Technical skills"
              description="Technologies and tools I work with."
            />

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="container">
            <SectionTitle
              number="04"
              label="CREDENTIALS"
              title="Certifications"
              description="Professional certifications in cloud engineering and AI."
            />

            <div className="certifications-grid">
              {certifications.map((cert) => (
                <article className="certification-card" key={cert.title}>
                  <div className="certification-header">
                    <div className="certification-provider">
                      {cert.issuer === "Anthropic" ? "A" : "aws"}
                    </div>
                    <span className="certification-issuer">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3>{cert.title}</h3>

                  <div className="certification-details">
                    <div>
                      <span>Issued</span>
                      <strong>{cert.issued || "To be added"}</strong>
                    </div>

                    <div>
                      <span>Expires</span>
                      <strong>{cert.expires || "To be added"}</strong>
                    </div>
                  </div>

                  {cert.credentialId && (
                    <div className="credential-id">
                      <span>Credential ID</span>
                      <code>{cert.credentialId}</code>
                    </div>
                  )}

                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="verify-link"
                    >
                      View credential <ArrowUpRight size={17} />
                    </a>
                  ) : (
                    <span className="credential-pending">
                      Verification link to be added
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container">
            <SectionTitle
              number="06"
              label="ACADEMIC BACKGROUND"
              title="Education"
            />

            <div className="education-list">
              {education.map((item) => (
                <article className="education-item" key={item.degree}>
                  <div className="education-icon">
                    <GraduationCap size={23} />
                  </div>
                  <div className="education-body">
                    <h3>{item.degree}</h3>
                    <p>{item.detail}</p>
                    <span>{item.institution}</span>
                    {item.extra && <small>{item.extra}</small>}
                    {!item.verified && (
                      <small className="edit-placeholder">
                        Details to be updated
                      </small>
                    )}
                  </div>
                  <span className="education-period">{item.period}</span>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section id="research" className="section research-section">
          <div className="container">
            <SectionTitle
              number="06"
              label="PUBLICATION"
              title="Research"
              description="Published academic research."
            />

            <article className="publication">
              <div className="publication-meta">
                <span className="publication-badge">
                  Published Research
                </span>
                <span>April 2024</span>
              </div>

              <h3>
                E-commerce Product Recommendation System and
                Comparative Study of Recommendation Algorithms
              </h3>

              <p className="publication-journal">
                International Journal of Creative Research Thoughts
                (IJCRT) · Volume 12, Issue 4
              </p>

              <p className="publication-description">
                A comparative study of machine learning algorithms
                for personalized e-commerce product recommendations.
                The research evaluates collaborative filtering and
                matrix factorization approaches, including SVD,
                SVD++, ALS, and nearest-neighbor methods.
                SVD++ demonstrated the strongest performance
                in the reported evaluation.
              </p>

              <div className="publication-tags">
                <span>Machine Learning</span>
                <span>Recommendation Systems</span>
                <span>Collaborative Filtering</span>
                <span>SVD++</span>
              </div>

              <div className="publication-footer">
                <div className="publication-details">
                  <span>Paper ID: IJCRT24A4023</span>
                  <span>Pages: i874–i887</span>
                </div>

                <a
                  href="https://ijcrt.org/viewfull.php?paper=IJCRT24A4023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  Read publication <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          </div>
        </section>


        <section id="contact" className="section contact-section">
          <div className="container contact-inner">
            <div className="section-label">
              <span>07</span>
              GET IN TOUCH
            </div>

            <h2>
              Let's work
              <br />
              <span>together.</span>
            </h2>

            <p>
              I'm interested in opportunities where I can contribute
              to meaningful engineering challenges, build reliable
              software, and continue growing as an engineer.
            </p>

            <a href={`mailto:${profile.email}`} className="contact-button">
              Contact me <ArrowUpRight size={20} />
            </a>

            <div className="contact-details">
              <a href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub <ArrowUpRight size={15} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Rohit Kadu</span>
          <a href="#home">Back to top <ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </>
  );
}
