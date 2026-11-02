import React from "react";
import Image from "next/image";
import { teamContacts } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

export default function Team() {
  return (
    <section id="team" className="section-wrap section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Meet the Team</span>
          <h2>
            Expertise behind <span>every project.</span>
          </h2>
        </div>
        <p>
          A modular team that brings together founders and coordinators to ensure
          day-to-day coordination. Your enquiry goes to the person who owns it.
        </p>
      </div>
      <div className="team-grid">
        {teamContacts.map((member, index) => (
          <article
            key={member.phone}
            className={`team-item ${index % 2 === 0 ? "" : "team-item-right"}`}
          >
            <div className="team-visual">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={index % 2 === 0 ? 267 : 533}
                className={`team-photo photo-${member.orientation}`}
              />
            </div>
            <div className="team-copy">
              <span className="team-role">{member.role}</span>
              <h3>{member.name}</h3>
              <p>{member.description}</p>
              <div className="team-contact-actions">
                <span className="team-phone">
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  {formatPhone(member.phone)}
                </span>
                <a
                  href={`https://wa.me/${member.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-small wa-btn"
                >
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" /> WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
