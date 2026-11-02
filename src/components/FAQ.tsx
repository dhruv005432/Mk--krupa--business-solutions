import React from "react";
import { faqs } from "@/lib/constants";
import { ArrowIcon } from "./Icons";

export default function FAQ() {
  return (
    <section id="faq" className="faq-section section">
      <div className="section-wrap faq-inner">
        <div className="faq-copy">
          <span className="eyebrow">Questions</span>
          <h2>
            Frequently <span>asked questions.</span>
          </h2>
          <p>
            If you have a question that isn&apos;t answered here, feel free to send an enquiry
            through the form.
          </p>
          <a className="text-link" href="#contact">
            Still have questions? <ArrowIcon />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                {faq.question}
                <i className="fa-solid fa-chevron-down" aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
