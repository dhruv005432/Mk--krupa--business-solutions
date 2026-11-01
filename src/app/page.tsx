"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState, useSyncExternalStore } from "react";

const GATE_STORAGE_KEY = "mkkrupa-accepted";

function subscribeGate(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getGateAccepted() {
  try {
    return window.localStorage.getItem(GATE_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getGateAcceptedOnServer() {
  return true;
}

const services = [
  {
    number: "01",
    icon: "fa-solid fa-palette",
    title: "Brand Development",
    description:
      "Support with brand positioning, identity coordination and launch planning.",
    tags: ["Brand positioning", "Identity coordination", "Packaging direction", "Launch planning"],
  },
  {
    number: "02",
    icon: "fa-solid fa-store",
    title: "Marketplace Assistance",
    description:
      "Guidance with seller onboarding, product listings and catalogues.",
    tags: ["Seller onboarding", "Product listings", "Catalogue preparation", "Documentation support"],
  },
  {
    number: "03",
    icon: "fa-solid fa-boxes-stacked",
    title: "Product Sourcing & Wholesale",
    description:
      "Support with supplier coordination and bulk product enquiries.",
    tags: ["Supplier coordination", "Bulk enquiries", "Quotation support", "Requirement mapping"],
  },
  {
    number: "04",
    icon: "fa-solid fa-handshake",
    title: "Business Consulting",
    description:
      "Business planning and sales-channel guidance for your product or category.",
    tags: ["Business planning", "Sales-channel guidance", "Category exploration", "Growth discussions"],
  },
  {
    number: "05",
    icon: "fa-solid fa-globe",
    title: "Digital Presence",
    description:
      "Website planning and digital catalogue support for your business.",
    tags: ["Website planning", "Digital catalogues", "Enquiry-focused content", "Online presence guidance"],
  },
  {
    number: "06",
    icon: "fa-solid fa-layer-group",
    title: "Product Category Solutions",
    description:
      "Support relevant to the product categories your business works with.",
    tags: ["Category-specific support", "Retail & consumer products", "Wholesale requirements", "Requirement-based discussion"],
  },
];

const industries = [
  { icon: "fa-solid fa-sparkles", title: "Beauty & Personal Care", tone: "rose" },
  { icon: "fa-solid fa-wind", title: "Perfumes & Fragrances", tone: "sand" },
  { icon: "fa-solid fa-gem", title: "Fashion & Jewellery", tone: "lilac" },
  { icon: "fa-solid fa-couch", title: "Home & Kitchen", tone: "sage" },
  { icon: "fa-solid fa-store", title: "E-commerce & Retail", tone: "blue" },
  { icon: "fa-solid fa-solar-panel", title: "Solar & Renewable Energy", tone: "yellow" },
  { icon: "fa-solid fa-hospital", title: "Healthcare & Pharmacy", tone: "mint" },
];

const processSteps = [
  ["01", "Share your goals", "Tell us about your business, product or project requirements."],
  ["02", "Discuss the requirements", "We understand the scope, expectations and what success looks like for you."],
  ["03", "Review a proposal", "Receive a clear outline of the agreed work, deliverables and quotation."],
  ["04", "Move forward together", "Work begins once the scope, terms and timelines are agreed."],
];

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
      "Use the enquiry form below. It prepares your message and opens WhatsApp so you can review it and send it directly to our team.",
  },
];

const githubRepoUrl = "https://github.com/dhruv005432/Mk--krupa--business-solutions";
const teamContacts = [
  {
    name: "Dhruv Dhameliya",
    phone: "917862832972",
    role: "Founder & CEO",
    description:
      "Leads new enquiries, business discussions and finalising the scope and quotation for each project.",
    image: "/images/founder-dhruv.png",
    color: "sage",
  },
  {
    name: "Smit Hirpara",
    phone: "919726320890",
    role: "Co-Founder & CMO",
    description:
      "Handles brand development and marketplace support, from positioning and identity to listings and catalogues.",
    image: "/images/cofounder-smit.png",
    color: "blush",
  },
  {
    name: "S. R. Savani",
    phone: "919213679919",
    role: "Business Co-ordinator",
    description:
      "Coordinates day-to-day work between clients and the team and keeps project timelines on track.",
    image: "/images/team-sr-savani.png",
    color: "mint",
  },
];

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
  const [gateDismissed, setGateDismissed] = useState(false);
  const [gateStep, setGateStep] = useState<"terms" | "welcome" | "greeting">("terms");
  const [agreed, setAgreed] = useState(false);
  const [visitorName, setVisitorName] = useState("");
  const gateAccepted = useSyncExternalStore(subscribeGate, getGateAccepted, getGateAcceptedOnServer);
  const gateVisible = !gateAccepted && !gateDismissed;

  useEffect(() => {
    if (!gateVisible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [gateVisible]);

  useEffect(() => {
    if (gateStep !== "greeting") return;
    const timer = window.setTimeout(() => {
      try {
        window.localStorage.setItem(GATE_STORAGE_KEY, "true");
      } catch {
        // storage unavailable — continue without remembering
      }
      setGateDismissed(true);
    }, 2600);
    return () => window.clearTimeout(timer);
  }, [gateStep]);

  function enterSite() {
    try {
      window.localStorage.setItem(GATE_STORAGE_KEY, "true");
    } catch {
      // storage unavailable — continue without remembering
    }
    setGateDismissed(true);
  }

  async function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const details = String(formData.get("details") ?? "").trim();

    if (!name || !phone || !service) {
      setFormMessage("Please add your name, contact number and the service you need.");
      return;
    }

    const message = [
      "Hello MK KRUPA Business Solutions, I would like to make an enquiry.",
      "",
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      `Service: ${service}`,
      details ? `Requirements: ${details}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setPreparedMessage(message);
    const encoded = encodeURIComponent(message);
    teamContacts.forEach((member) => {
      window.open(`https://wa.me/${member.phone}?text=${encoded}`, "_blank", "noopener,noreferrer");
    });
    setFormMessage(
      "WhatsApp is opening for all three team members with your details pre-filled. Review each message and press Send.",
    );

    try {
      await navigator.clipboard.writeText(message);
    } catch {
      // clipboard unavailable — the prepared message is shown on the page instead
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {gateVisible && (
        <div className="gate" role="dialog" aria-modal="true" aria-label="Welcome to MK KRUPA Business Solutions">
          <div className="gate-panel">
            <div className="gate-topbar">
              <span className="gate-brand">
                <Image src="/images/mk-krupa-logo.png" alt="" width={44} height={44} />
                <span className="brand-copy"><strong>MK KRUPA</strong><span>BUSINESS SOLUTIONS</span></span>
              </span>
              <span className="gate-progress">
                {gateStep === "terms" ? "STEP 1 / 2" : "STEP 2 / 2"}
              </span>
            </div>

            {gateStep === "terms" && (
              <div className="gate-body">
                <p className="eyebrow">Terms &amp; conditions</p>
                <h2>Please review before you continue.</h2>
                <div className="gate-scroll">
                  <p>
                    Welcome to MK KRUPA Business Solutions. By continuing to the website,
                    you confirm that you have read and accept these terms.
                  </p>
                  <ul>
                    <li>The information on this website is provided for general business information only.</li>
                    <li>Any service, quotation, scope, or timeline is confirmed separately in writing before work begins.</li>
                    <li>We do not guarantee marketplace approval, sales, or any specific business outcome.</li>
                    <li>Platform and brand names shown belong to their respective owners; no affiliation is implied.</li>
                    <li>Enquiries you send are used only to respond to your request.</li>
                  </ul>
                </div>
                <label className="gate-agree">
                  <input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} />
                  <span>I have read and agree to the Terms &amp; Conditions.</span>
                </label>
                <button className="button gate-action" type="button" disabled={!agreed} onClick={() => setGateStep("welcome")}>
                  I agree &amp; continue <ArrowIcon />
                </button>
              </div>
            )}

            {gateStep === "welcome" && (
              <div className="gate-body">
                <p className="eyebrow">Welcome</p>
                <h2>Before we begin,<br /><span>what should we call you?</span></h2>
                <label className="gate-field">
                  Your name
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(event) => setVisitorName(event.target.value)}
                    placeholder="e.g. Priya Shah"
                    autoComplete="name"
                  />
                </label>
                <button
                  className="button gate-action"
                  type="button"
                  disabled={!visitorName.trim()}
                  onClick={() => setGateStep("greeting")}
                >
                  Continue <ArrowIcon />
                </button>
              </div>
            )}

            {gateStep === "greeting" && (
              <div className="gate-body gate-greeting">
                <h2>Welcome, {visitorName.trim()}.</h2>
                <p>Thanks for visiting MK KRUPA Business Solutions. Taking you to the website now…</p>
                <button className="button gate-action" type="button" onClick={enterSite}>
                  Enter website now <ArrowIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="MK KRUPA home" onClick={closeMenu}>
            <Image
              src="/images/mk-krupa-logo.png"
              alt=""
              width={76}
              height={76}
              className="brand-mark"
              priority
            />
            <span className="brand-copy">
              <strong>MK KRUPA</strong>
              <span>BUSINESS SOLUTIONS</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>

          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#industries" onClick={closeMenu}>Industries</a>
            <a href="#team" onClick={closeMenu}>Our team</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="button button-small nav-cta" href="#contact" onClick={closeMenu}>
              Let&apos;s talk <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* 1 — Hero & Platforms */}
        <section id="home">
          <div className="hero section-wrap">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Business support, without the guesswork</p>
              <h1>
                Business solutions that help
                <br />
                your brand <span>move forward.</span>
              </h1>
              <p className="hero-description">
                We help entrepreneurs, manufacturers and businesses with brand
                development, marketplace support, product sourcing and digital presence.
              </p>
              <div className="hero-actions">
                <a className="button" href="#services">
                  Explore our services <ArrowIcon />
                </a>
                <a className="button button-outline" href="#contact">
                  Contact us
                </a>
              </div>
              <div className="hero-note">
                <span className="note-icon" aria-hidden="true"><i className="fa-solid fa-check"></i></span>
                <span>Brand development · Marketplace assistance · Product sourcing · Business consulting · Digital presence · Category solutions</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                <Image
                  src="/images/founder-dhruv.png"
                  alt="Dhruv Dhameliya, founder of MK KRUPA Business Solutions"
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 48vw"
                  className="hero-image"
                />
                <div className="image-caption">
                  <span>YOUR VISION</span>
                  <i />
                  <span>OUR SOLUTION</span>
                </div>
              </div>
            </div>
            <a className="scroll-cue" href="#services">
              <span /> Scroll to explore
            </a>
          </div>

          <div className="platform-section">
            <div className="section-wrap platform-inner">
              <div>
                <h2 className="platform-heading">Platforms we can<br />help you explore.</h2>
              </div>
              <div className="platform-content">
                <p>
                  Platform selection depends on your products, pricing and business
                  requirements. We can help you explore the marketplaces that fit.
                </p>
                <div className="platform-list" aria-label="Marketplace platforms">
                  <span className="platform-amazon">amazon</span>
                  <span className="platform-flipkart">Flipkart</span>
                  <span className="platform-meesho">meesho</span>
                  <span className="platform-ajio">AJIO</span>
                  <span className="platform-jiomart">JioMart</span>
                  <span className="platform-etsy">Etsy</span>
                </div>
                <small>Platform names belong to their respective owners; no official partnership or endorsement is implied.</small>
              </div>
            </div>
          </div>
        </section>

        {/* 2 — Services / Solutions */}
        <section className="section-wrap section services-section" id="services">
          <div className="section-heading">
            <div>
              <h2>Six services,<br /><span>one point of contact.</span></h2>
            </div>
            <p className="heading-aside">
              Every service includes a clear scope and a written quotation. Pick the one
              that fits where you are today — if you are not sure, send an enquiry and we
              will point you in the right direction.
            </p>
          </div>
          <div className="services-zigzag">
            {services.map((service, index) => (
              <article
                className={`service-card ${index % 2 === 0 ? "service-card-left" : "service-card-right"}`}
                key={service.number}
              >
                <div className="service-card-top">
                  <span className="service-icon" aria-hidden="true"><i className={service.icon}></i></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="tag-list">
                  {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <a className="text-link" href="#contact" aria-label={`Enquire about ${service.title}`}>
                  Discuss {service.title} <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* 3 — Why Choose Us & Industries */}
        <section id="why">
          <div className="why-section">
            <div className="section-wrap why-inner">
              <div className="why-copy">
                <h2>What working with us<br />actually looks like.</h2>
                <p>
                  Tell us what you sell or plan to sell. We will come back with what we
                  can do, what it costs, and what we need from you.
                </p>
                <a className="button button-light" href="#about">
                  Get to know us <ArrowIcon />
                </a>
              </div>
              <div className="values-grid">
                <article className="value-card">
                  <span>01</span><h3>Direct contact</h3>
                  <p>You speak with the people doing the work, not a call centre.</p>
                </article>
                <article className="value-card">
                  <span>02</span><h3>Scope in writing</h3>
                  <p>Deliverables, timeline, and price agreed before work starts.</p>
                </article>
                <article className="value-card">
                  <span>03</span><h3>Honest advice</h3>
                  <p>If something is not worth doing for your budget, we say so.</p>
                </article>
                <article className="value-card">
                  <span>04</span><h3>One point of contact</h3>
                  <p>The same person from your first enquiry to delivery.</p>
                </article>
              </div>
            </div>
          </div>

          <div className="section-wrap section industries-section" id="industries">
            <div className="section-heading">
              <div>
                <h2>Industries and categories<br /><span>we currently work with.</span></h2>
              </div>
              <p className="heading-aside">
                Not every service applies to every category. Tell us what you deal in and
                we will confirm the support we can genuinely offer.
              </p>
            </div>
            <div className="industry-grid">
              {industries.map((industry, index) => (
                <a
                  className={`industry-card tone-${industry.tone}`}
                  href={`#contact`}
                  key={industry.title}
                >
                  <span className="industry-number">0{index + 1}</span>
                  <span className="industry-icon" aria-hidden="true"><i className={industry.icon}></i></span>
                  <span className="industry-title">{industry.title}</span>
                  <span className="industry-arrow"><ArrowIcon diagonal /></span>
                </a>
              ))}
            </div>
            <p className="section-footnote">
              Product availability and category-specific services are confirmed individually. Some categories may require relevant licences or compliance.
            </p>
          </div>
        </section>

        {/* 4 — How we work */}
        <section id="work">
          <div className="work-section">
            <div className="section-wrap work-inner">
              <div className="work-copy">
                <h2>From first message<br />to <span>agreed scope.</span></h2>
                <p>
                  Four simple steps, and you know where you stand at each one. Nothing
                  starts until you have the scope and price in writing.
                </p>
                <a className="text-link" href="#contact">Start a conversation <ArrowIcon /></a>
              </div>
              <div className="process-list">
                {processSteps.map(([number, title, description]) => (
                  <article className="process-step" key={number}>
                    <span className="process-number">{number}</span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5 — Team */}
        <section id="team">
          <div className="team-section">
            <div className="section-wrap team-inner">
              <div className="team-heading">
                <h2>We, the terrific team of MK KRUPA</h2>
                <p>
                  Three people run MK KRUPA — leadership, brand and marketplace support,
                  and day-to-day coordination. Your enquiry goes to the person who owns it.
                </p>
              </div>

              <div className="team-zigzag">
                {teamContacts.map((member, index) => {
                  const positionClass = index % 2 === 0 ? "item-left" : "item-right";

                  return (
                    <article
                      key={member.name}
                      className={`team-zigzag-item ${positionClass}`}
                    >
                    <div className={`team-zigzag-photo photo-${member.color}`}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 760px) 100vw, 30vw"
                      />
                    </div>
                    <div className="team-zigzag-copy">
                      <p className="team-role-green">{member.role}</p>
                      <h3>{member.name}</h3>
                      <p className="team-desc">{member.description}</p>
                      <div className="team-contact-actions">
                        <a href={`tel:+${member.phone}`} className="team-phone">
                          +{member.phone.slice(0, 2)} {member.phone.slice(2, 7)} {member.phone.slice(7)}
                        </a>
                        <a
                          href={`https://wa.me/${member.phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button button-small team-wa-btn"
                        >
                          WhatsApp me <ArrowIcon diagonal />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
              </div>
            </div>
          </div>
        </section>

        {/* 6 — About & FAQ */}
        <section id="about">
          <div className="section-wrap section about-section">
            <div className="about-mark">
              <Image src="/images/mk-krupa-logo.png" alt="MK KRUPA Business Solutions logo" fill sizes="(max-width: 760px) 80vw, 38vw" />
            </div>
            <div className="about-copy">
              <h2>Your vision.<br /><span>Our solution.</span></h2>
              <p>
                MK KRUPA Business Solutions works with entrepreneurs and companies on
                brand development, marketplace assistance, product sourcing, and
                consulting.
              </p>
              <p>
                Every enquiry gets a specific reply — what we can do, what it costs, and
                how long it takes. If we are not the right fit for a project, we will say
                so. There are no fixed packages or invented prices.
              </p>
              <a className="text-link" href="#contact">Tell us about your project <ArrowIcon /></a>
            </div>
          </div>

          <div className="faq-section" id="faq">
            <div className="section-wrap faq-inner">
              <div className="faq-heading">
                <h2>Questions we<br /><span>get asked most.</span></h2>
                <p>Have a question that’s not covered here? Send us a message and we’ll be happy to discuss it.</p>
                <a className="text-link" href="#contact">Ask us directly <ArrowIcon /></a>
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
          </div>
        </section>

        {/* 7 — Contact */}
        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-copy">
              <h2>Tell us what<br />you are working on.</h2>
              <p>
                Share a few details and we will prepare your message and open WhatsApp
                with our team so you can review it and press Send.
              </p>
              <div className="contact-promise">
                <span className="promise-icon" aria-hidden="true"><i className="fa-solid fa-check"></i></span>
                <p><strong>A clear conversation, first.</strong><br />No commitment required to make an enquiry.</p>
              </div>
              <div className="contact-details">
                <span>MK KRUPA BUSINESS SOLUTIONS</span>
                <small>Business enquiries · Service discussions · Wholesale requirements</small>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleEnquiry}>
              <div className="form-heading">
                <span>01 / ENQUIRY FORM</span>
                <h3>Tell us what you&apos;re looking for.</h3>
                <p>Fields marked with * are required.</p>
              </div>
              <label>
                Your name <span>*</span>
                <input type="text" name="name" autoComplete="name" placeholder="e.g. Priya Shah" required suppressHydrationWarning />
              </label>
              <label>
                Phone / WhatsApp number <span>*</span>
                <input type="tel" name="phone" autoComplete="tel" placeholder="e.g. +91 98765 43210" required suppressHydrationWarning />
              </label>
              <label>
                Service you&apos;re interested in <span>*</span>
                <select name="service" defaultValue="" required suppressHydrationWarning>
                  <option value="" disabled>Select a service</option>
                  <option>Brand Development</option>
                  <option>Marketplace Assistance</option>
                  <option>Product Sourcing &amp; Wholesale</option>
                  <option>Business Consulting</option>
                  <option>Digital Presence</option>
                  <option>Product Category Solutions</option>
                </select>
              </label>
              <label>
                Your requirements <small>(optional)</small>
                <textarea name="details" rows={3} placeholder="What are you planning, and how can we help?" suppressHydrationWarning />
              </label>
              <button className="button form-submit" type="submit" suppressHydrationWarning>
                Send enquiry on WhatsApp <ArrowIcon />
              </button>
              {formMessage && <p className="form-message" role="status">{formMessage}</p>}
              {preparedMessage && (
                <>
                  <label className="prepared-message-label">
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
                        className="group-link"
                        href={`https://wa.me/${member.phone}?text=${encodeURIComponent(preparedMessage)}`}
                        key={member.phone}
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
                Your message opens in WhatsApp for each team member with the details
                pre-filled. Review it and press Send. This form does not store enquiries
                or book appointments.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home">
              <Image src="/images/mk-krupa-logo.png" alt="" width={64} height={64} />
              <span className="brand-copy"><strong>MK KRUPA</strong><span>BUSINESS SOLUTIONS</span></span>
            </a>
            <p>Brand, marketplace, sourcing, and consulting support for small businesses.</p>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#about">About us</a><a href="#team">Our team</a><a href="#work">Our approach</a><a href="#faq">FAQs</a>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <a href="#services">Brand development</a><a href="#services">Marketplace assistance</a><a href="#services">Product sourcing</a><a href="#services">Business consulting</a>
          </div>
          <div className="footer-column">
            <h3>Let&apos;s connect</h3>
            <a href="#contact">Request a quote <ArrowIcon /></a>
            <a href="#contact">Discuss a project <ArrowIcon /></a>
            <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">GitHub repository <ArrowIcon /></a>
            {teamContacts.map((member) => (
              <a
                className="footer-contact"
                href={`https://wa.me/${member.phone}`}
                key={member.phone}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer-contact-name">{member.name} <ArrowIcon /></span>
                <span className="footer-contact-number">
                  +{member.phone.slice(0, 2)} {member.phone.slice(2, 7)} {member.phone.slice(7)}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="section-wrap footer-bottom">
          <span>© 2026 MK KRUPA Business Solutions. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
          <span>Platform names belong to their respective owners.</span>
        </div>
      </footer>
    </>
  );
}
