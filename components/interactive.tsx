
"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Mail,
  Menu,
  Moon,
  Sun,
  X
} from "lucide-react";
import { site } from "@/content/site";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"]
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme =
      light ? "light" : "dark";
  }, [light]);

  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Rohit Kadu home">
          <span className="brand-mark">R<span>.</span></span>
          <span className="brand-label">ROHIT KADU</span>
        </a>

        <div className="desktop-links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={() => setLight(!light)}
            aria-label={light ? "Enable dark mode" : "Enable light mode"}
          >
            {light ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a href={site.resume} download className="nav-resume">
            Resume <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-button mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export function TypedName() {
  const [length, setLength] = useState(site.name.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setLength(0);
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setLength(index);
      if (index >= site.name.length) {
        window.clearInterval(timer);
      }
    }, 105);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="typed-name">
      <span className="sr-only">{site.name}</span>
      <span aria-hidden="true" className="typing-overlay">
        {site.name.slice(0, length)}
        <span className="typing-cursor" />
      </span>
      <span aria-hidden="true" className="typing-placeholder">
        {site.name}
      </span>
    </span>
  );
}

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <button onClick={copy} className="copy-button">
      {copied ? <Check size={17} /> : <Copy size={17} />}
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}



export function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        title="GitHub"
      >
        <ExternalLink size={19} />
      </a>

      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        title="LinkedIn"
      >
        <ExternalLink size={19} />
      </a>

      <a
        href={`mailto:${site.email}`}
        aria-label="Send email"
        title="Email"
      >
        <Mail size={19} />
      </a>
    </div>
  );
}


export function ScrollCue() {
  return (
    <a href="#about" className="scroll-cue">
      <span>SCROLL TO EXPLORE</span>
      <ArrowDown size={16} />
    </a>
  );
}
