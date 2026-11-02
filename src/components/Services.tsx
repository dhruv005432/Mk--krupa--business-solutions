"use client";

import React from "react";
import { services } from "@/lib/constants";
import { ArrowIcon } from "./Icons";

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const handleServiceClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    serviceTitle: string
  ) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
  };

  return (
    <section id="services" className="services-section section">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Our Services</span>
            <h2>
              Six focused services, <span>one accountable team.</span>
            </h2>
          </div>
          <p>
            Modular B2B support tailored to your current stage. Choose a single service or combine
            offerings. Each service has a verified scope, tangible deliverables, and direct team
            coordination.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.number} className="service-card" id={`service-${service.number}`}>
              <div className="service-card-top">
                <span className="service-icon" aria-hidden="true">
                  <i className={service.icon} />
                </span>
                <span className="service-number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>
              <p className="service-summary">{service.summary}</p>

              <div className="service-inclusions-wrap">
                <span className="inclusions-title">Scope & Deliverables:</span>
                <ul className="inclusion-list">
                  {service.inclusions.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-check" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card-action">
                <a
                  className="text-link service-cta-link"
                  href="#contact"
                  onClick={(e) => handleServiceClick(e, service.title)}
                >
                  {service.cta || `Discuss ${service.title}`} <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
