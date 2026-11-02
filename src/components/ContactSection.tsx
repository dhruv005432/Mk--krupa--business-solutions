"use client";

import React, { FormEvent, useState } from "react";
import { ArrowIcon } from "./Icons";
import { services, teamContacts, WHATSAPP_GROUP_LINK } from "@/lib/constants";
import { downloadEnquiryPdf } from "@/lib/utils";

export default function ContactSection() {
  const [formMessage, setFormMessage] = useState("");
  const [preparedMessage, setPreparedMessage] = useState("");

  async function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    const message = [
      "New enquiry for MK KRUPA Business Solutions",
      "",
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      email ? `Email: ${email}` : "Email: (not provided)",
      `Service: ${service}`,
      details ? `Requirements: ${details}` : "Requirements: (not specified)",
    ].join("\n");

    setPreparedMessage(message);

    // WhatsApp group links cannot carry a pre-filled message, so open the group
    // first (while the user gesture is still active), then hand over the PDF.
    window.open(WHATSAPP_GROUP_LINK, "_blank", "noopener,noreferrer");
    setFormMessage("Preparing your enquiry PDF…");

    try {
      await downloadEnquiryPdf({ name, phone, email, service, details });
      setFormMessage(
        "Your enquiry PDF has been downloaded and the WhatsApp group is open. Attach the PDF and send it to the group."
      );
    } catch {
      setFormMessage("The WhatsApp group is open. Your details are shown below so you can send them.");
    }
  }

  return (
    <section id="contact" className="section-wrap contact-inner">
      <div className="contact-copy">
        <span className="eyebrow">Contact us</span>
        <h2>
          Tell us what <span>you are working on.</span>
        </h2>
        <p>
          Share a few details and we will prepare a PDF of your enquiry and open our WhatsApp
          group so you can attach the PDF and send it to the team.
        </p>
        <div className="contact-details">
          <span>MK KRUPA BUSINESS SOLUTIONS</span>
          <small>Business enquiries · Service discussions · Wholesale requirements</small>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleEnquiry}>
        <div className="form-heading">
          <span>01 / ENQUIRY FORM</span>
          <h3>Tell us what you are looking for.</h3>
          <p>Fields marked with * are required.</p>
        </div>

        <fieldset className="form-group">
          <legend className="form-group-title">Your details</legend>
          <div className="form-row">
            <label>
              Your name <span>*</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="e.g. Priya Shah"
                required
                suppressHydrationWarning
              />
            </label>
            <label>
              Phone / WhatsApp <span>*</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="e.g. +91 98765 43210"
                required
                suppressHydrationWarning
              />
            </label>
          </div>
          <label>
            Email <small>(optional)</small>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="e.g. priya@example.com"
              suppressHydrationWarning
            />
          </label>
        </fieldset>

        <fieldset className="form-group">
          <legend className="form-group-title">Your requirement</legend>
          <label>
            Service you are interested in <span>*</span>
            <select name="service" defaultValue="" required suppressHydrationWarning>
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
          <label>
            Your requirements
            <textarea
              name="details"
              rows={4}
              placeholder="What are you planning, and how can we help?"
              suppressHydrationWarning
            />
          </label>
        </fieldset>

        <button className="btn btn-primary form-submit" type="submit" suppressHydrationWarning>
          Download PDF &amp; open WhatsApp group <ArrowIcon />
        </button>

        {formMessage && (
          <p className="form-message" role="status">
            {formMessage}
          </p>
        )}

        {preparedMessage && (
          <>
            <label className="prepared-label">
              Your enquiry summary
              <textarea
                className="prepared-message"
                rows={6}
                readOnly
                value={preparedMessage}
                onFocus={(event) => event.currentTarget.select()}
              />
            </label>
            <div className="wa-fallback">
              <span>Did the group not open?</span>
              <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer">
                Open our WhatsApp group <ArrowIcon diagonal />
              </a>
              {teamContacts.map((member) => (
                <a
                  key={member.phone}
                  href={`https://wa.me/${member.phone}?text=${encodeURIComponent(preparedMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send directly to {member.name} <ArrowIcon diagonal />
                </a>
              ))}
            </div>
          </>
        )}

        <p className="form-note">
          On submit, a PDF of your enquiry is downloaded and our WhatsApp group opens. Attach the
          downloaded PDF to the group message and send it. This form does not store enquiries or
          book appointments.
        </p>
      </form>
    </section>
  );
}
