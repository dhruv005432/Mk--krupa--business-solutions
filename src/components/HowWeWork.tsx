import React from "react";
import { processSteps } from "@/lib/constants";
import { ArrowIcon } from "./Icons";

export default function HowWeWork() {
  return (
    <section className="work-section section">
      <div className="section-wrap work-inner">
        <div className="work-copy">
          <span className="eyebrow">Our Process</span>
          <h2>
            How we move from <span>enquiry to delivery.</span>
          </h2>
          <p>
            A simple four-step process to ensure everyone is on the same page before any work
            begins.
          </p>
          <a className="text-link" href="#contact">
            Start your enquiry today <ArrowIcon />
          </a>
        </div>
        <div className="process-list">
          {processSteps.map(([num, title, desc]) => (
            <div className="process-item" key={num}>
              <span className="process-num">{num}</span>
              <div>
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
