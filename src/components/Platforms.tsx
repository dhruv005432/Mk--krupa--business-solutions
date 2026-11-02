import React from "react";
import { platforms } from "@/lib/constants";
import { ArrowIcon } from "./Icons";

export default function Platforms() {
  return (
    <section id="platforms" className="platforms-section section">
      <div className="section-wrap platforms-inner">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Sales & Discovery Channels</span>
            <h2>
              Platforms we can <span>help you explore.</span>
            </h2>
          </div>
          <p>
            Channel selection depends on your products, margins, target customers, and operational
            capacity. We help coordinate onboarding, catalogue structures, and listing compliance.
          </p>
        </div>

        <div className="platforms-grid">
          {platforms.map((platform) => (
            <div key={platform.name} className="platform-card">
              <div className="platform-header">
                <span className="platform-badge-icon">
                  <i className="fa-solid fa-store" aria-hidden="true" />
                </span>
                <span className="platform-name">{platform.name}</span>
              </div>
              <p className="platform-role">{platform.role}</p>
            </div>
          ))}
          <div className="platform-card platform-card-custom">
            <div className="platform-header">
              <span className="platform-badge-icon">
                <i className="fa-solid fa-globe" aria-hidden="true" />
              </span>
              <span className="platform-name">Direct Business Website</span>
            </div>
            <p className="platform-role">Informational catalogues & B2B lead generation</p>
          </div>
        </div>

        <div className="platforms-footer-note">
          <p>
            <i className="fa-solid fa-circle-exclamation" aria-hidden="true" /> Platform names,
            logos, and trademarks belong solely to their respective owners. MK KRUPA Business
            Solutions provides independent operational and listing support; no official partnership,
            sponsorship, or platform endorsement is implied.
          </p>
          <a className="text-link" href="#contact">
            Enquire about channel onboarding <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
