import React from "react";
import { industries } from "@/lib/constants";

export default function Industries() {
  return (
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
  );
}
