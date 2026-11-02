import React from "react";
import { platforms } from "@/lib/constants";

export default function Platforms() {
  return (
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
  );
}
