import React from "react";
import { processSteps } from "@/lib/constants";
import { ArrowIcon } from "./Icons";

export default function HowWeWork() {
  return (
    <section className="work-section section">
      <div className="section-wrap work-inner">
        <div className="work-copy">
          <span className="eyebrow">Our Working Process</span>
          <h2>
            Four simple steps from <span>enquiry to agreed scope.</span>
          </h2>
          <p>
            A straightforward process designed to reduce uncertainty and ensure complete alignment
            before any work or payment begins.
          </p>
          <a className="text-link" href="#contact">
            Start your enquiry today <ArrowIcon />
          </a>
        </div>

        <div className="process-list">
          {processSteps.map(([num, title, desc]) => (
            <div className="process-item" key={num}>
              <span className="process-num">{num}</span>
              <div className="process-text">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
