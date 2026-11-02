import React from "react";
import { strengths } from "@/lib/constants";

export default function WhyUs() {
  return (
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
  );
}
