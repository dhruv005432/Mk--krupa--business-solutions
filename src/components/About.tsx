import React from "react";
import Image from "next/image";
import { ArrowIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="section-wrap about-inner">
        <div className="about-mark">
          <Image
            src="/images/mk-krupa-logo.png"
            alt="MK KRUPA Emblem"
            width={120}
            height={120}
          />
        </div>
        <div className="about-copy">
          <span className="eyebrow">About MK KRUPA</span>
          <h2>
            A practical partner for <span>growing businesses.</span>
          </h2>
          <p>
            MK KRUPA Business Solutions was built to give manufacturers, independent brands, and
            entrepreneurs a dependable, modular team. We bridge the gap between product creation
            and commercial execution.
          </p>
          <p>
            Whether you are establishing a new brand identity, listing on leading marketplaces,
            sourcing bulk inventory, or setting up your digital presence, you work directly with our
            core team. Every project has a clearly defined scope, deliverables, and transparent
            pricing agreed upon before work begins.
          </p>
          <div className="about-actions">
            <a className="text-link" href="#contact">
              Discuss your project with our team <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
