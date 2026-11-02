import React from "react";
import Image from "next/image";
import { teamContacts, githubRepoUrl } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

interface FooterProps {
  currentYear: number;
}

export default function Footer({ currentYear }: FooterProps) {
  return (
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
  );
}
