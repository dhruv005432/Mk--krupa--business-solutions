"use client";

import React from "react";
import Image from "next/image";
import { navLinks } from "@/lib/constants";
import { ArrowIcon } from "./Icons";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className={`site-header${menuOpen ? " nav-open" : ""}`}>
      <div className="section-wrap header-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <Image src="/images/mk-krupa-logo.png" alt="MK KRUPA Logo" width={46} height={46} />
          <span className="brand-copy">
            <strong>MK KRUPA</strong>
            <span>BUSINESS SOLUTIONS</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="mobile-nav-cta">
            <a
              className="btn btn-primary btn-small"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s Talk <ArrowIcon />
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary btn-small header-cta-desktop" href="#contact">
            Let&apos;s Talk <ArrowIcon />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
