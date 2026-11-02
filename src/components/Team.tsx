import React from "react";
import Image from "next/image";
import { teamContacts } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

export default function Team() {
  return (
    <section id="team" className="team-section section">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Our Team</span>
            <h2>
              The people behind <span>MK KRUPA.</span>
            </h2>
          </div>
          <p>
            You speak directly with the core team responsible for your project. No intermediaries,
            no call centres—just accessible professionals dedicated to your business.
          </p>
        </div>

        <div className="team-grid">
          {teamContacts.map((member) => (
            <article key={member.phone} className="team-card">
              <div className="team-image-container">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={400}
                  height={320}
                  className="team-photo"
                />
                {member.isPrimary && (
                  <span className="team-primary-badge">
                    <i className="fa-solid fa-star" aria-hidden="true" /> Lead Contact
                  </span>
                )}
              </div>

              <div className="team-card-body">
                <span className="team-role">{member.role}</span>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-responsibility">{member.description}</p>

                <div className="team-contact-row">
                  <span className="team-phone-display">
                    <i className="fa-solid fa-phone" aria-hidden="true" />
                    {formatPhone(member.phone)}
                  </span>
                  <a
                    href={`https://wa.me/${member.phone}?text=${encodeURIComponent(
                      `Hello ${member.name}, I would like to enquire about MK KRUPA Business Solutions.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-small wa-btn"
                    aria-label={`Chat with ${member.name} on WhatsApp`}
                  >
                    <i className="fa-brands fa-whatsapp" aria-hidden="true" /> WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
