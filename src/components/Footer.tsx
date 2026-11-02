import React from "react";
import Image from "next/image";
import { teamContacts, githubRepoUrl, services } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

interface FooterProps {
  currentYear?: number;
}

export default function Footer({ currentYear = 2026 }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <div className="footer-brand">
          <a className="brand brand-footer" href="#home">
            <Image
              src="/images/mk-krupa-logo.png"
              alt="MK KRUPA Business Solutions"
              width={54}
              height={54}
            />
            <span className="brand-copy">
              <strong>MK KRUPA</strong>
              <span>BUSINESS SOLUTIONS</span>
            </span>
          </a>
          <p>
            Dependable, modular B2B services: Brand Development, Marketplace Assistance, Product
            Sourcing &amp; Wholesale, Business Consulting, and Digital Presence.
          </p>
          <div className="footer-quick-cta">
            <a href="#contact" className="btn btn-primary btn-small">
              Start an Enquiry
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <strong>Core Services</strong>
          {services.map((s) => (
            <a key={s.number} href="#services">
              {s.title}
            </a>
          ))}
        </div>

        <div className="footer-nav">
          <strong>Quick Links</strong>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#industries">Industries</a>
          <a href="#platforms">Platforms</a>
          <a href="#team">Our Team</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-nav">
          <strong>Direct Leadership Contact</strong>
          {teamContacts.map((member) => (
            <div key={member.phone} className="footer-contact">
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              <div>
                <a
                  href={`https://wa.me/${member.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  <span className="footer-contact-name">{member.name}</span>
                  <span className="footer-contact-role">{member.role}</span>
                  <span className="footer-contact-number">{formatPhone(member.phone)}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-wrap footer-legal-note">
        <p>
          <strong>Disclaimer:</strong> Marketplace names (Amazon, Flipkart, Meesho, AJIO, JioMart, Etsy, etc.) are trademarks of their respective owners. MK KRUPA Business Solutions provides independent operational support and does not claim formal partnership or platform endorsement. Sourcing and listing services are customized to each client&apos;s verified business requirements.
        </p>
      </div>

      <div className="section-wrap footer-bottom">
        <span>&copy; {currentYear} MK KRUPA Business Solutions. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#contact">Contact Support</a>
          <span className="sep">·</span>
          <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </footer>
  );
}
