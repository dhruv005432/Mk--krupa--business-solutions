import React from "react";
import { industries } from "@/lib/constants";
import { ArrowIcon } from "./Icons";

export default function Industries() {
  return (
    <section id="industries" className="section-wrap industries-section section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Industries & Categories</span>
          <h2>
            Product categories <span>we support.</span>
          </h2>
        </div>
        <p>
          Our practical experience spans consumer goods, retail channels, and specialized B2B
          sectors. We help you navigate category-specific onboarding and distribution requirements.
        </p>
      </div>

      <div className="industry-grid">
        {industries.map((industry) => (
          <div className="industry-card" key={industry.title}>
            <div className="industry-icon-wrap" aria-hidden="true">
              <i className={industry.icon} />
            </div>
            <div className="industry-content">
              <h3>{industry.title}</h3>
              <p>{industry.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="industry-disclaimer-box">
        <div className="industry-disclaimer-text">
          <i className="fa-solid fa-circle-info" aria-hidden="true" />
          <span>
            <strong>Note on category scope:</strong> Sourcing feasibility, regulatory guidelines,
            and platform approval rules vary significantly by category. We verify specific project
            parameters before agreeing on scope.
          </span>
        </div>
        <a className="btn btn-ghost btn-small" href="#contact">
          Discuss Your Category <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
