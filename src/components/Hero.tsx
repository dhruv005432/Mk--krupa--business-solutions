import React from "react";
import Image from "next/image";
import { ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="section-wrap hero-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Expert Business Support</span>
          <h1>
            Business Solutions That Help <span>Your Brand Move Forward.</span>
          </h1>
          <p>
            We help entrepreneurs, manufacturers and businesses with brand development, marketplace
            support, product sourcing and digital presence to reach more customers.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Start your enquiry <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href="#services">
              View services
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="/images/hero-business.png"
              alt="MK KRUPA Business Support"
              width={600}
              height={400}
              priority
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
