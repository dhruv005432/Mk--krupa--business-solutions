import React from "react";
import Image from "next/image";
import { ArrowIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="section-wrap about-inner">
        <div className="about-mark">
          <Image src="/images/mk-krupa-logo.png" alt="" width={120} height={120} />
        </div>
        <div className="about-copy">
          <span className="eyebrow">About MK KRUPA</span>
          <h2>
            A modular team for <span>modern business needs.</span>
          </h2>
          <p>
            MK KRUPA Business Solutions provides a range of B2B support services. We understand
            that every business has unique requirements, so we offer modular solutions across
            branding, marketplace operations and sourcing.
          </p>
          <p>
            Our goal is to provide honest, clear and actionable support that helps you focus on
            running your business while we handle the technical and operational details.
          </p>
          <a className="text-link" href="#contact">
            Contact us to discuss your project <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
