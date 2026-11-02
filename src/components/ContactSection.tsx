"use client";

import React, { FormEvent, useState } from "react";
import { ArrowIcon } from "./Icons";
import { services, teamContacts, PRIMARY_CONTACT_PHONE } from "@/lib/constants";
import { downloadEnquiryPdf } from "@/lib/utils";

interface ContactSectionProps {
  selectedService?: string;
  onSelectService?: (service: string) => void;
}

export default function ContactSection({
  selectedService = "",
  onSelectService,
}: ContactSectionProps) {
  const [currentService, setCurrentService] = useState(selectedService);
  const [prevPropService, setPrevPropService] = useState(selectedService);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [preparedText, setPreparedText] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    email: string;
    service: string;
    details: string;
  } | null>(null);
  const [pdfStatus, setPdfStatus] = useState("");

  if (selectedService !== prevPropService) {
    setPrevPropService(selectedService);
    setCurrentService(selectedService);
  }

  const handleEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    if (!name || !phone || !service) {
      return;
    }

    const payload = { name, phone, email, service, details };
    setSubmittedData(payload);

    const messageLines = [
      "Hello MK KRUPA Business Solutions team,",
      "",
      "I would like to enquire about your services:",
      `• Name: ${name}`,
      `• Phone / WhatsApp: ${phone}`,
    ];

    if (email) {
      messageLines.push(`• Email: ${email}`);
    }

    messageLines.push(`• Service Interested In: ${service}`);
    messageLines.push(
      `• Requirements: ${details || "I would like to discuss my requirements with the team."}`
    );
    messageLines.push("");
    messageLines.push("Looking forward to your response!");

    const fullMessage = messageLines.join("\n");
    setPreparedText(fullMessage);
    setIsSubmitted(true);

    // Open direct 1-to-1 WhatsApp conversation with Founder & CEO (Primary Business Contact)
    const directUrl = `https://wa.me/${PRIMARY_CONTACT_PHONE}?text=${encodeURIComponent(
      fullMessage
    )}`;
    window.open(directUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownloadPdf = async () => {
    if (!submittedData) return;
    setPdfStatus("Generating PDF…");
    try {
      await downloadEnquiryPdf(submittedData);
      setPdfStatus("PDF downloaded successfully!");
    } catch {
      setPdfStatus("Could not generate PDF. You can still message via WhatsApp.");
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setPreparedText("");
    setSubmittedData(null);
    setPdfStatus("");
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="section-wrap contact-inner">
        <div className="contact-copy">
          <span className="eyebrow">Contact & Enquiry</span>
          <h2>
            Let&apos;s discuss your <span>business requirements.</span>
          </h2>
          <p>
            Tell us about your brand, product, or project. Submitting this form prepares your
            enquiry and directly connects you with our leadership on WhatsApp for a fast, one-to-one
            discussion.
          </p>

          <div className="contact-key-benefits">
            <div className="contact-benefit-item">
              <i className="fa-solid fa-bolt" aria-hidden="true" />
              <div>
                <strong>Direct One-to-One Chat</strong>
                <p>No waiting in queues or generic bots. Talk directly to our Founder.</p>
              </div>
            </div>
            <div className="contact-benefit-item">
              <i className="fa-solid fa-file-contract" aria-hidden="true" />
              <div>
                <strong>Clear Written Scope</strong>
                <p>We review your needs and agree upon deliverables before starting.</p>
              </div>
            </div>
            <div className="contact-benefit-item">
              <i className="fa-solid fa-clock" aria-hidden="true" />
              <div>
                <strong>24-Hour Response</strong>
                <p>We review all enquiries and respond within one business day.</p>
              </div>
            </div>
          </div>

          <div className="contact-direct-phone-box">
            <span>Prefer a direct phone call?</span>
            <div className="contact-direct-links">
              {teamContacts.map((c) => (
                <a
                  key={c.phone}
                  href={`tel:+${c.phone}`}
                  className="contact-direct-link"
                >
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  <span>
                    {c.name} ({c.role.split("&")[0].trim()})
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="enquiry-success-card">
              <div className="success-badge">
                <i className="fa-solid fa-check" aria-hidden="true" />
              </div>
              <h3>Enquiry Sent to WhatsApp!</h3>
              <p className="success-instructions">
                We have opened a direct conversation with <strong>Dhruv Dhameliya (Founder &amp; CEO)</strong> with your enquiry pre-filled.
              </p>

              <div className="what-happens-next-box">
                <h4>What happens next:</h4>
                <ol>
                  <li>Click <strong>Send</strong> in WhatsApp to deliver your enquiry.</li>
                  <li>Our team will review your project details and confirm feasibility.</li>
                  <li>We will schedule a call or message exchange to outline scope and quotation.</li>
                </ol>
              </div>

              <div className="success-actions">
                <a
                  href={`https://wa.me/${PRIMARY_CONTACT_PHONE}?text=${encodeURIComponent(
                    preparedText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary wa-btn"
                >
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Reopen WhatsApp Chat
                </a>

                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  className="btn btn-ghost btn-small"
                >
                  <i className="fa-solid fa-file-pdf" aria-hidden="true" /> Download Copy as PDF
                </button>
              </div>

              {pdfStatus && <p className="pdf-status-text">{pdfStatus}</p>}

              <div className="other-team-contacts-note">
                <p>Or send this enquiry directly to another team member:</p>
                <div className="other-team-buttons">
                  {teamContacts
                    .filter((m) => !m.isPrimary)
                    .map((m) => (
                      <a
                        key={m.phone}
                        href={`https://wa.me/${m.phone}?text=${encodeURIComponent(preparedText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-small"
                      >
                        <i className="fa-brands fa-whatsapp" aria-hidden="true" /> {m.name} ({m.role.split("&")[0].trim()})
                      </a>
                    ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="btn-text-reset"
              >
                ← Submit another enquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleEnquiry}>
              <div className="form-heading">
                <span className="form-step-tag">Fast Direct Enquiry</span>
                <h3>Tell us what you are looking for.</h3>
                <p>Fill in the details below to open a direct WhatsApp chat with our team.</p>
              </div>

              <div className="form-fields">
                <div className="form-row">
                  <label>
                    Your Name <span className="req">*</span>
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
                    Phone / WhatsApp Number <span className="req">*</span>
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
                  Email Address <span className="opt">(optional)</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="e.g. priya@business.com"
                    suppressHydrationWarning
                  />
                </label>

                <label>
                  Service You Are Interested In <span className="req">*</span>
                  <select
                    name="service"
                    value={currentService}
                    onChange={(e) => {
                      setCurrentService(e.target.value);
                      if (onSelectService) {
                        onSelectService(e.target.value);
                      }
                    }}
                    required
                    suppressHydrationWarning
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Multiple Services / Full Solution">
                      Multiple Services / Full Solution
                    </option>
                    <option value="General Consultation & Scoping">
                      General Consultation &amp; Scoping
                    </option>
                  </select>
                </label>

                <label>
                  Your Requirements <span className="opt">(optional)</span>
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Briefly describe your product, current stage, quantities, or key goals..."
                    suppressHydrationWarning
                  />
                </label>
              </div>

              <button
                className="btn btn-primary form-submit wa-submit-btn"
                type="submit"
                suppressHydrationWarning
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                <span>Send Enquiry on WhatsApp</span>
                <ArrowIcon />
              </button>

              <div className="form-privacy-note">
                <i className="fa-solid fa-lock" aria-hidden="true" />
                <span>
                  Direct 1-to-1 conversation. Your information is strictly used to reply to your
                  enquiry. No spam, no automated subscription.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
