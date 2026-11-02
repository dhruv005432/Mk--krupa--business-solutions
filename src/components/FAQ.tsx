import React from "react";
import { faqs } from "@/lib/constants";
import { ArrowIcon } from "./Icons";

export default function FAQ() {
  return (
    <section id="faq" className="faq-section section">
      <div className="section-wrap faq-inner">
        <div className="faq-copy">
          <span className="eyebrow">Common Questions</span>
          <h2>
            Frequently <span>asked questions.</span>
          </h2>
          <p>
            Have questions before reaching out? Here are plain-language answers about our scope,
            custom quotations, and working process.
          </p>
          <a className="text-link" href="#contact">
            Ready to discuss your project? <ArrowIcon />
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} open={index === 0}>
              <summary>
                <span>{faq.question}</span>
                <i className="fa-solid fa-chevron-down faq-chevron" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
