import React from "react";
import { services } from "@/lib/constants";
import { ArrowIcon } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Our Services</span>
            <h2>
              Six services, <span>one point of contact.</span>
            </h2>
          </div>
          <p>
            Modular B2B support designed to fit your business requirements. We help you choose what
            fits where you are today — if you are not sure, send an enquiry and we will point
            you in the right direction.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.number} className="service-card">
              <div className="service-card-top">
                <span className="service-icon" aria-hidden="true">
                  <i className={service.icon} />
                </span>
                <span className="service-number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="inclusion-list">
                {service.inclusions.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-check" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="text-link" href="#contact">
                Discuss {service.title} <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
