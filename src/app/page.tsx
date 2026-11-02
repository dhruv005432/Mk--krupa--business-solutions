"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowIcon } from "@/components/Icons";
import ContactSection from "@/components/ContactSection";
import {
  navLinks,
  services,
  industries,
  strengths,
  processSteps,
  platforms,
  faqs,
  teamContacts,
  githubRepoUrl,
} from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <header className={`site-header${menuOpen ? " nav-open" : ""}`}>
        <div className="section-wrap header-inner">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <Image src="/images/mk-krupa-logo.png" alt="" width={46} height={46} />
            <span className="brand-copy">
              <strong>MK KRUPA</strong>
              <span>BUSINESS SOLUTIONS</span>
            </span>
          </a>

          <nav className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn-primary btn-small" href="#contact">
              Get Started <ArrowIcon />
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* 01 — Hero */}
        <section id="home" className="section-wrap hero-section">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">Expert Business Support</span>
              <h1>
                Your partner for <span>brand and marketplace growth.</span>
              </h1>
              <p>
                We support entrepreneurs and businesses with brand development, marketplace
                assistance, product sourcing and digital presence to help you reach more customers.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">
                  Start your enquiry <ArrowIcon />
                </a>
                <a className="btn btn-ghost" href="#services">
                  View services
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  src="/images/hero-business.png"
                  alt="MK KRUPA Business Support"
                  width={600}
                  height={400}
                  priority
                  className="hero-photo"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 02 — About */}
        <section id="about" className="about-section section">
          <div className="section-wrap about-inner">
            <div className="about-mark">
              <Image src="/images/mk-krupa-logo.png" alt="" width={120} height={120} />
            </div>
            <div className="about-copy">
              <span className="eyebrow">About MK KRUPA</span>
              <h2>
                A modular team for <span>modern business needs.</span>
              </h2>
              <p>
                MK KRUPA Business Solutions provides a range of B2B support services. We understand
                that every business has unique requirements, so we offer modular solutions across
                branding, marketplace operations and sourcing.
              </p>
              <p>
                Our goal is to provide honest, clear and actionable support that helps you focus on
                running your business while we handle the technical and operational details.
              </p>
              <a className="text-link" href="#contact">
                Contact us to discuss your project <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* 03 — Services */}
        <section id="services" className="services-section section">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Our Services</span>
                <h2>
                  Six services, <span>one point of contact.</span>
                </h2>
              </div>
              <p>
                Modular B2B support designed to fit your business requirements. We help you choose what
                fits where you are today — if you are not sure, send an enquiry and we will point
                you in the right direction.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.number} className="service-card">
                  <div className="service-card-top">
                    <span className="service-icon" aria-hidden="true">
                      <i className={service.icon} />
                    </span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul className="inclusion-list">
                    {service.inclusions.map((item) => (
                      <li key={item}>
                        <i className="fa-solid fa-check" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a className="text-link" href="#contact">
                    Discuss {service.title} <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — Industries */}
        <section id="industries" className="section-wrap industries-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Industries & Categories</span>
              <h2>
                Product categories <span>we support.</span>
              </h2>
            </div>
            <p>
              Our experience spans across retail, consumer products and specialized B2B categories.
              We help you navigate the specific requirements of each industry.
            </p>
          </div>
          <div className="industry-grid">
            {industries.map((industry) => (
              <a className="industry-card" href="#contact" key={industry.title}>
                <i className={industry.icon} aria-hidden="true" />
                <span>{industry.title}</span>
              </a>
            ))}
          </div>
        </section>

        {/* 05 — Platforms */}
        <section id="platforms" className="platforms-section">
          <div className="section-wrap platforms-inner">
            <div className="platforms-copy">
              <h2>
                Platforms we can <span>help you explore.</span>
              </h2>
              <p>
                Platform selection depends on your products, pricing and business requirements.
                We help you coordinate onboarding and listings across major marketplaces.
              </p>
              <ul className="platform-list" aria-label="Marketplace platforms">
                {platforms.map((platform) => (
                  <li key={platform}>{platform}</li>
                ))}
              </ul>
              <p className="platforms-note">
                Platform names belong to their respective owners; no official partnership or
                endorsement is implied.
              </p>
            </div>
          </div>
        </section>

        {/* 06 — Why Us */}
        <section className="section-wrap section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Why MK KRUPA</span>
              <h2>
                Four reasons to <span>work with us.</span>
              </h2>
            </div>
            <p>
              We believe in clear communication, honest advice and a single point of contact to
              make your project run smoothly.
            </p>
          </div>
          <div className="strengths-grid">
            {strengths.map((strength) => (
              <div className="strength-card" key={strength.number}>
                <span className="strength-number">{strength.number}</span>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 07 — How We Work */}
        <section className="work-section section">
          <div className="section-wrap work-inner">
            <div className="work-copy">
              <span className="eyebrow">Our Process</span>
              <h2>
                How we move from <span>enquiry to delivery.</span>
              </h2>
              <p>
                A simple four-step process to ensure everyone is on the same page before any work
                begins.
              </p>
              <a className="text-link" href="#contact">
                Start your enquiry today <ArrowIcon />
              </a>
            </div>
            <div className="process-list">
              {processSteps.map(([num, title, desc]) => (
                <div className="process-item" key={num}>
                  <span className="process-num">{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 08 — Team */}
        <section id="team" className="section-wrap section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Meet the Team</span>
              <h2>
                Expertise behind <span>every project.</span>
              </h2>
            </div>
            <p>
              A modular team that brings together founders and coordinators to ensure
              day-to-day coordination. Your enquiry goes to the person who owns it.
            </p>
          </div>
          <div className="team-grid">
            {teamContacts.map((member, index) => (
              <article
                key={member.phone}
                className={`team-item ${index % 2 === 0 ? "" : "team-item-right"}`}
              >
                <div className="team-visual">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={index % 2 === 0 ? 267 : 533}
                    className={`team-photo photo-${member.orientation}`}
                  />
                </div>
                <div className="team-copy">
                  <span className="team-role">{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.description}</p>
                  <div className="team-contact-actions">
                    <span className="team-phone">
                      <i className="fa-solid fa-phone" aria-hidden="true" />
                      {formatPhone(member.phone)}
                    </span>
                    <a
                      href={`https://wa.me/${member.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-small wa-btn"
                    >
                      <i className="fa-brands fa-whatsapp" aria-hidden="true" /> WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 09 — FAQ */}
        <section id="faq" className="faq-section section">
          <div className="section-wrap faq-inner">
            <div className="faq-copy">
              <span className="eyebrow">Questions</span>
              <h2>
                Frequently <span>asked questions.</span>
              </h2>
              <p>
                If you have a question that isn&apos;t answered here, feel free to send an enquiry
                through the form.
              </p>
              <a className="text-link" href="#contact">
                Still have questions? <ArrowIcon />
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>
                    {faq.question}
                    <i className="fa-solid fa-chevron-down" aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 10 — Contact */}
        <ContactSection />
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home">
              <Image src="/images/mk-krupa-logo.png" alt="" width={54} height={54} />
              <span className="brand-copy">
                <strong>MK KRUPA</strong>
                <span>BUSINESS SOLUTIONS</span>
              </span>
            </a>
            <p>Brand, marketplace, sourcing and consulting support for small businesses.</p>
          </div>
          <div className="footer-nav">
            <strong>Quick Links</strong>
            <a href="#about">About us</a>
            <a href="#services">Our services</a>
            <a href="#contact">Request a quote</a>
            <a href="#contact">Discuss a project</a>
          </div>
          <div className="footer-nav">
            <strong>Connect</strong>
            {teamContacts.map((member) => (
              <div key={member.phone} className="footer-contact">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                <div>
                  <span className="footer-contact-name">{member.name}</span>
                  <span className="footer-contact-number">{formatPhone(member.phone)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-wrap footer-bottom">
          <span>&copy; {currentYear} MK KRUPA Business Solutions.</span>
          <span>Platform names belong to their respective owners.</span>
          <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </footer>
    </>
  );
}
