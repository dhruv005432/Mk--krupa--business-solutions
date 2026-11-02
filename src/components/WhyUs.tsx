import React from "react";
import { strengths } from "@/lib/constants";
import { ArrowIcon } from "./Icons";

export default function WhyUs() {
  return (
    <section className="why-us-section section">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Why MK KRUPA</span>
            <h2>
              Four principles that <span>guide our work.</span>
            </h2>
          </div>
          <p>
            We focus on clear communication, realistic commitments, and direct accountability
            to ensure your business initiatives run smoothly from start to finish.
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

        {/* Transparent Pricing & Scope alignment box per CRO Audit Section H */}
        <div className="scope-pricing-banner">
          <div className="scope-pricing-copy">
            <span className="scope-tag">Transparent Scope & Quotations</span>
            <h3>Every business has different requirements.</h3>
            <p>
              We do not force you into rigid, pre-packaged tiers. Whether you need single-service
              assistance or an end-to-end multi-channel rollout, contact us to discuss the exact
              scope, expected deliverables, and a transparent quotation.
            </p>
          </div>
          <div className="scope-pricing-action">
            <a className="btn btn-primary" href="#contact">
              Discuss Your Requirements <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
