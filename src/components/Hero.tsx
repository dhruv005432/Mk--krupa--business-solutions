import React from "react";
import Image from "next/image";
import { ArrowIcon } from "./Icons";
import { heroServiceBadges } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="section-wrap hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Comprehensive B2B Support</span>
          <h1>
            Business Solutions That Help <span>Your Brand Move Forward.</span>
          </h1>
          <p>
            We help entrepreneurs, manufacturers and businesses with brand development, marketplace
            support, product sourcing and digital presence.
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
          <div className="hero-image-frame">
            <Image
              src="/images/hero-business.jpg"
              alt="MK KRUPA Business Solutions - Professional team and strategic business support"
              width={600}
              height={400}
              priority
              className="hero-photo"
            />
            <div className="hero-trust-tag">
              <i className="fa-solid fa-handshake" aria-hidden="true" />
              <span>Direct team contact · Scope agreed in writing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
