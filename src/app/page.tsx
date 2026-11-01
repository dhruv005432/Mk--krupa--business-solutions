"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const BUSINESS_WHATSAPP = "917862832972";
const githubRepoUrl = "https://github.com/dhruv005432/Mk--krupa--business-solutions";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    icon: "fa-solid fa-palette",
    title: "Brand Development",
    summary: "Support with brand positioning, identity coordination and launch planning.",
    inclusions: [
      "Brand positioning",
      "Identity coordination",
      "Packaging direction",
      "Launch planning",
    ],
  },
  {
    number: "02",
    icon: "fa-solid fa-store",
    title: "Marketplace Assistance",
    summary: "Guidance with seller onboarding, product listings and catalogues.",
    inclusions: [
      "Seller onboarding",
      "Product listings",
      "Catalogue preparation",
      "Documentation support",
    ],
  },
  {
    number: "03",
    icon: "fa-solid fa-boxes-stacked",
    title: "Product Sourcing & Wholesale",
    summary: "Support with supplier coordination and bulk product enquiries.",
    inclusions: [
      "Supplier coordination",
      "Bulk enquiries",
      "Quotation support",
      "Requirement mapping",
    ],
  },
  {
    number: "04",
    icon: "fa-solid fa-handshake",
    title: "Business Consulting",
    summary: "Business planning and sales-channel guidance for your product or category.",
    inclusions: [
      "Business planning",
      "Sales-channel guidance",
      "Category exploration",
      "Growth discussions",
    ],
  },
  {
    number: "05",
    icon: "fa-solid fa-globe",
    title: "Digital Presence",
    summary: "Website planning and digital catalogue support for your business.",
    inclusions: [
      "Website planning",
      "Digital catalogues",
      "Enquiry-focused content",
      "Online presence guidance",
    ],
  },
  {
    number: "06",
    icon: "fa-solid fa-layer-group",
    title: "Product Category Solutions",
    summary: "Support relevant to the product categories your business works with.",
    inclusions: [
      "Category-specific support",
      "Retail & consumer products",
      "Wholesale requirements",
      "Requirement-based discussion",
    ],
  },
];

const industries = [
  { icon: "fa-solid fa-spa", title: "Beauty & Personal Care" },
  { icon: "fa-solid fa-wind", title: "Perfumes & Fragrances" },
  { icon: "fa-solid fa-gem", title: "Fashion & Jewellery" },
  { icon: "fa-solid fa-couch", title: "Home & Kitchen" },
  { icon: "fa-solid fa-store", title: "E-commerce & Retail" },
  { icon: "fa-solid fa-solar-panel", title: "Solar & Renewable Energy" },
  { icon: "fa-solid fa-hospital", title: "Healthcare & Pharmacy" },
];

const strengths = [
  {
    number: "01",
    title: "Direct contact",
    description: "You speak with the people doing the work, not a call centre.",
  },
  {
    number: "02",
    title: "Scope in writing",
    description: "Deliverables, timeline and price agreed before any work starts.",
  },
  {
    number: "03",
    title: "Honest advice",
    description: "If something is not worth doing for your budget, we say so.",
  },
  {
    number: "04",
    title: "One point of contact",
    description: "The same person from your first enquiry through to delivery.",
  },
];

const processSteps = [
  ["01", "Share your goals", "Tell us about your business, product or project requirements."],
  ["02", "Discuss the requirements", "We understand the scope, expectations and what success looks like for you."],
  ["03", "Review a proposal", "Receive a clear outline of the agreed work, deliverables and quotation."],
  ["04", "Move forward together", "Work begins once the scope, terms and timelines are agreed."],
];

const platforms = ["Amazon", "Flipkart", "Meesho", "AJIO", "JioMart", "Etsy"];

const faqs = [
  {
    question: "What services does MK KRUPA provide?",
    answer:
      "We support brand development, marketplace assistance, product sourcing and wholesale, business consulting, digital presence and product category solutions. The exact scope is agreed with you before work begins.",
  },
  {
    question: "Can I enquire about just one service?",
    answer:
      "Yes. You can enquire about a single service or a combination. Tell us what you need and we will confirm what is possible.",
  },
  {
    question: "Do you work with manufacturers and wholesalers?",
    answer:
      "Yes. We work with entrepreneurs, manufacturers, suppliers, retailers and resellers on sourcing, wholesale and sales-channel requirements.",
  },
  {
    question: "Can I discuss product sourcing requirements?",
    answer:
      "Yes. Share the product, quantity and specifications you have in mind, and we will discuss supplier coordination and bulk enquiries with you.",
  },
  {
    question: "Do you provide customised service quotations?",
    answer:
      "Yes. Every business has different requirements. Contact us to discuss the scope, deliverables and quotation for your project.",
  },
  {
    question: "How can I contact the team?",
    answer:
      "Use the enquiry form above. It prepares your message and opens WhatsApp so you can review it and send it directly to our team.",
  },
];

const teamContacts = [
  {
    name: "Dhruv Dhameliya",
    phone: "917862832972",
    role: "Founder & CEO",
    description:
      "Leads new enquiries, business discussions and finalising the scope and quotation for each project.",
    image: "/images/founder-dhruv.png",
    orientation: "landscape",
  },
  {
    name: "Smit Hirpara",
    phone: "919726320890",
    role: "Co-Founder & CMO",
    description:
      "Handles brand development and marketplace support, from positioning and identity to listings and catalogues.",
    image: "/images/cofounder-smit.png",
    orientation: "landscape",
  },
  {
    name: "S. R. Savani",
    phone: "919213679919",
    role: "Business Co-ordinator",
    description:
      "Coordinates day-to-day work between clients and the team and keeps project timelines on track.",
    image: "/images/team-sr-savani.png",
    orientation: "portrait",
  },
];

function formatPhone(phone: string) {
  return `+${phone.slice(0, 2)} ${phone.slice(2, 7)} ${phone.slice(7)}`;
}

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className={diagonal ? "arrow-diagonal" : ""}
    >
      <path
        d="M4.75 12h14.5m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [preparedMessage, setPreparedMessage] = useState("");

  function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    const message = [
      "New enquiry for MK KRUPA Business Solutions",
      "",
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      `Service: ${service}`,
      details ? `Requirements: ${details}` : "Requirements: (not specified)",
    ].join("\n");

    setPreparedMessage(message);
    setFormMessage("Your details are ready. WhatsApp is opening so you can review and send the message.");

    window.open(
      `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <>
      <header className={`site-header${menuOpen ? " nav-open" : ""}`}>
        <div className="section-wrap header-inner">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <Image src="/images/mk-krupa-logo.png" alt="" width={46} height={46} />
            <span className="brand-copy">
              <strong>MK KRUPA</strong>
              <span>BUSINESS SOLUTIONS</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn-primary btn-small" href="#contact">
              Let&apos;s Talk
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              suppressHydrationWarning
            >
              <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* 01 — Hero */}
        <section id="home" className="hero">
          <div className="section-wrap hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">MK KRUPA Business Solutions</span>
              <h1>
                Business solutions that help your brand <span>move forward.</span>
              </h1>
              <p className="hero-lead">
                We help entrepreneurs, manufacturers and businesses with brand development,
                marketplace support, product sourcing and digital presence.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#services">
                  Explore our services <ArrowIcon />
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Contact us
                </a>
              </div>
              <ul className="hero-tags">
                <li>Brand development</li>
                <li>Marketplace assistance</li>
                <li>Product sourcing</li>
                <li>Business consulting</li>
                <li>Digital presence</li>
                <li>Category solutions</li>
              </ul>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  src="/images/founder-dhruv.png"
                  alt="Dhruv Dhameliya, founder of MK KRUPA Business Solutions"
                  fill
                  priority
                  sizes="(max-width: 880px) 90vw, 44vw"
                />
                <div className="image-caption">
                  <span>YOUR VISION</span>
                  <i />
                  <span>OUR SOLUTION</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — About */}
        <section id="about" className="section-wrap section about-section">
          <div className="about-mark">
            <Image
              src="/images/mk-krupa-logo.png"
              alt="MK KRUPA Business Solutions logo"
              fill
              sizes="(max-width: 880px) 60vw, 30vw"
            />
          </div>
          <div className="about-copy">
            <span className="eyebrow">About MK KRUPA</span>
            <h2>
              Your vision. <span>Our solution.</span>
            </h2>
            <p>
              MK KRUPA Business Solutions works with entrepreneurs and companies on brand
              development, marketplace assistance, product sourcing and business consulting.
            </p>
            <p>
              Every enquiry gets a specific reply — what we can do, what it costs and how long
              it takes. There are no fixed packages or invented prices. If we are not the right
              fit for a project, we will say so.
            </p>
            <a className="text-link" href="#contact">
              Tell us about your project <ArrowIcon />
            </a>
          </div>
        </section>

        {/* 03 — Services */}
        <section id="services" className="section services-section">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <h2>
                  Six services, <span>one point of contact.</span>
                </h2>
              </div>
              <p className="heading-aside">
                Every service includes a clear scope and a written quotation. Pick the one that
                fits where you are today — if you are not sure, send an enquiry and we will point
                you in the right direction.
              </p>
            </div>

            <div className="services-zigzag">
              {services.map((service, index) => (
                <article
                  key={service.number}
                  className={`service-card ${index % 2 === 0 ? "service-card-left" : "service-card-right"}`}
                >
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

        {/* 04 — Industries */}
        <section id="industries" className="section-wrap industries-section">
          <div className="section-heading">
            <div>
              <h2>
                Industries and categories <span>we currently work with.</span>
              </h2>
            </div>
            <p className="heading-aside">
              Not every service applies to every category. Tell us what you deal in and we will
              confirm the support we can genuinely offer.
            </p>
          </div>
          <div className="industry-grid">
            {industries.map((industry, index) => (
              <a className="industry-card" href="#contact" key={industry.title}>
                <span className="industry-icon" aria-hidden="true">
                  <i className={industry.icon} />
                </span>
                <span className="industry-number">0{index + 1}</span>
                <span className="industry-title">{industry.title}</span>
              </a>
            ))}
          </div>
          <p className="section-footnote">
            Product availability and category-specific services are confirmed individually. Some
            categories may require relevant licences or compliance.
          </p>
        </section>

        {/* 05 — Platforms */}
        <section id="platforms" className="platforms-section">
          <div className="section-wrap platforms-inner">
            <div className="platforms-copy">
              <h2>
                Platforms we can <span>help you explore.</span>
              </h2>
              <p>
                Platform selection depends on your products, pricing and business requirements.
                We can help you explore the marketplaces that fit.
              </p>
            </div>
            <div>
              <ul className="platform-list" aria-label="Marketplace platforms">
                {platforms.map((platform) => (
                  <li key={platform}>{platform}</li>
                ))}
              </ul>
              <p className="platforms-note">
                Platform names belong to their respective owners; no official partnership or
                endorsement is implied.
              </p>
            </div>
          </div>
        </section>

        {/* 06 — Why work with us */}
        <section id="why" className="section-wrap section">
          <div className="why-inner">
            <div className="why-copy">
              <h2>
                What working with us <span>actually looks like.</span>
              </h2>
              <p>
                Tell us what you sell or plan to sell. We will come back with what we can do, what
                it costs and what we need from you.
              </p>
              <a className="btn btn-light" href="#about">
                Get to know us <ArrowIcon />
              </a>
            </div>
            <div className="strengths-grid">
              {strengths.map((item) => (
                <article className="strength-card" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 07 — How we work */}
        <section id="work" className="work-section">
          <div className="section-wrap work-inner">
            <div className="work-copy">
              <h2>
                From first message <span>to agreed scope.</span>
              </h2>
              <p>
                Four simple steps, and you know where you stand at each one. Nothing starts until
                you have the scope and price in writing.
              </p>
              <a className="text-link" href="#contact">
                Start a conversation <ArrowIcon />
              </a>
            </div>
            <div className="process-list">
              {processSteps.map(([number, title, description]) => (
                <article className="process-step" key={number}>
                  <span className="process-number">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 08 — Team */}
        <section id="team" className="section-wrap section">
          <div className="team-heading">
            <span className="eyebrow">Our Team</span>
            <h2>
              We, the terrific team <span>of MK KRUPA.</span>
            </h2>
            <p>
              Three people run MK KRUPA — leadership, brand and marketplace support, and
              day-to-day coordination. Your enquiry goes to the person who owns it.
            </p>
          </div>

          <div className="team-zigzag">
            {teamContacts.map((member, index) => (
              <article
                key={member.name}
                className={`team-item ${index % 2 === 0 ? "team-item-left" : "team-item-right"}`}
              >
                <div className={`team-photo photo-${member.orientation}`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 880px) 100vw, 32vw"
                  />
                </div>
                <div className="team-copy">
                  <p className="team-role">{member.role}</p>
                  <h3>{member.name}</h3>
                  <p className="team-desc">{member.description}</p>
                  <div className="team-actions">
                    <a className="team-phone" href={`tel:+${member.phone}`}>
                      <i className="fa-solid fa-phone" aria-hidden="true" />
                      {formatPhone(member.phone)}
                    </a>
                    <a
                      className="btn btn-whatsapp btn-small"
                      href={`https://wa.me/${member.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 09 — FAQ */}
        <section id="faq" className="faq-section">
          <div className="section-wrap faq-inner">
            <div className="faq-heading">
              <h2>
                Questions we <span>get asked most.</span>
              </h2>
              <p>
                Have a question that is not covered here? Send us a message and we will be happy to
                discuss it.
              </p>
              <a className="text-link" href="#contact">
                Ask us directly <ArrowIcon />
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question}>
                  <summary>
                    <span className="faq-index">0{index + 1}</span>
                    <span>{faq.question}</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 10 — Contact */}
        <section id="contact" className="section-wrap contact-inner">
          <div className="contact-copy">
            <span className="eyebrow">Contact us</span>
            <h2>
              Tell us what <span>you are working on.</span>
            </h2>
            <p>
              Share a few details and we will prepare your message and open WhatsApp with our team
              so you can review it and press send.
            </p>
            <div className="contact-promise">
              <i className="fa-solid fa-check" aria-hidden="true" />
              <p>
                <strong>A clear conversation, first.</strong>
                <br />
                No commitment required to make an enquiry.
              </p>
            </div>
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
              Phone / WhatsApp number <span>*</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="e.g. +91 98765 43210"
                required
                suppressHydrationWarning
              />
            </label>
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
              Your requirements <small>(optional)</small>
              <textarea
                name="details"
                rows={3}
                placeholder="What are you planning, and how can we help?"
                suppressHydrationWarning
              />
            </label>
            <button className="btn btn-primary form-submit" type="submit" suppressHydrationWarning>
              Send enquiry on WhatsApp <ArrowIcon />
            </button>
            {formMessage && (
              <p className="form-message" role="status">
                {formMessage}
              </p>
            )}
            {preparedMessage && (
              <>
                <label className="prepared-label">
                  Your message to the team
                  <textarea
                    className="prepared-message"
                    rows={6}
                    readOnly
                    value={preparedMessage}
                    onFocus={(event) => event.currentTarget.select()}
                  />
                </label>
                <div className="wa-fallback">
                  <span>What if WhatsApp did not open?</span>
                  {teamContacts.map((member) => (
                    <a
                      key={member.phone}
                      href={`https://wa.me/${member.phone}?text=${encodeURIComponent(preparedMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Send to {member.name} <ArrowIcon diagonal />
                    </a>
                  ))}
                </div>
              </>
            )}
            <p className="form-note">
              Your message opens in WhatsApp with the details pre-filled. Review it and press send.
              This form does not store enquiries or book appointments.
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home">
              <Image src="/images/mk-krupa-logo.png" alt="" width={54} height={54} />
              <span className="brand-copy">
                <strong>MK KRUPA</strong>
                <span>BUSINESS SOLUTIONS</span>
              </span>
            </a>
            <p>Brand, marketplace, sourcing and consulting support for small businesses.</p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#about">About us</a>
            <a href="#team">Our team</a>
            <a href="#work">Our approach</a>
            <a href="#faq">FAQs</a>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            {services.slice(0, 4).map((service) => (
              <a href="#services" key={service.title}>
                {service.title}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3>Let&apos;s connect</h3>
            <a href="#contact">Request a quote</a>
            <a href="#contact">Discuss a project</a>
            <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
              GitHub repository
            </a>
            {teamContacts.map((member) => (
              <a
                className="footer-contact"
                key={member.phone}
                href={`https://wa.me/${member.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer-contact-name">{member.name}</span>
                <span className="footer-contact-number">{formatPhone(member.phone)}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="section-wrap footer-bottom">
          <span>© 2026 MK KRUPA Business Solutions. All rights reserved.</span>
          <a href="#home">Back to top</a>
          <span>Platform names belong to their respective owners.</span>
        </div>
      </footer>
    </>
  );
}
