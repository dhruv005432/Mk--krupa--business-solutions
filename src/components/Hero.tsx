import React from "react";
import Image from "next/image";
import { ArrowIcon } from "./Icons";
import { heroServiceBadges } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="section-wrap hero-inner">
        <div className="hero-copy">
          <div className="hero-badge-pill">
            <span className="hero-pulse-dot" />
            <span>Trusted B2B Commercial Partner</span>
          </div>

          <h1>
            Business Solutions That Help <span>Your Brand Move Forward.</span>
          </h1>

          <p>
            We help entrepreneurs, manufacturers, and growing businesses with brand development,
            marketplace onboarding, bulk product sourcing, and digital presence.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Contact Us <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href="#services">
              Explore Our Services
            </a>
          </div>

          <div className="hero-services-preview">
            <span className="hero-services-label">Core Services:</span>
            <div className="hero-badge-list">
              {heroServiceBadges.map((badge) => (
                <a key={badge.title} href={badge.href} className="hero-service-badge">
                  <i className="fa-solid fa-check" aria-hidden="true" />
                  <span>{badge.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Ambient Glow */}
          <div className="hero-glow-backdrop" aria-hidden="true" />

          <div className="hero-visual-card">
            {/* Top Floating Highlight Card */}
            <div className="hero-floating-card hero-floating-top">
              <div className="floating-card-icon">
                <i className="fa-solid fa-shield-halved" aria-hidden="true" />
              </div>
              <div className="floating-card-text">
                <span className="floating-card-label">Direct Accountability</span>
                <strong>Founder-Led Execution</strong>
              </div>
              <div className="floating-pulse-badge">
                <span className="pulse-dot" />
                <span>Active</span>
              </div>
            </div>

            {/* Main Image Frame */}
            <div className="hero-image-frame">
              <Image
                src="/images/hero-business-modern.jpg"
                alt="MK KRUPA Business Solutions - Professional business strategy and marketplace collaboration"
                width={640}
                height={420}
                priority
                className="hero-photo"
              />
              <div className="hero-image-gradient" />

              {/* Verified Trust Overlay */}
              <div className="hero-center-badge">
                <div className="badge-logo-mark">MK</div>
                <div className="badge-text">
                  <strong>MK KRUPA Strategic Solutions</strong>
                  <span>Brand · Marketplace · Sourcing · Consulting</span>
                </div>
              </div>
            </div>

            {/* Bottom Floating Stats / Highlight Card */}
            <div className="hero-floating-card hero-floating-bottom">
              <div className="floating-stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Core Services</span>
              </div>
              <div className="floating-stat-divider" aria-hidden="true" />
              <div className="floating-stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Written Scope</span>
              </div>
              <div className="floating-stat-divider" aria-hidden="true" />
              <div className="floating-stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">Direct Response</span>
              </div>
            </div>

            {/* Marketplace Explorer Quick Strip */}
            <div className="hero-channels-strip">
              <span className="strip-title">Major Channels:</span>
              <div className="strip-tags">
                <span className="channel-pill">Amazon</span>
                <span className="channel-pill">Flipkart</span>
                <span className="channel-pill">Meesho</span>
                <span className="channel-pill">AJIO</span>
                <span className="channel-pill">JioMart</span>
                <span className="channel-pill">Etsy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
