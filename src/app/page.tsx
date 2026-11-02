"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Platforms from "@/components/Platforms";
import WhyUs from "@/components/WhyUs";
import HowWeWork from "@/components/HowWeWork";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { PRIMARY_CONTACT_PHONE } from "@/lib/constants";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    // Smooth scroll to contact section
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 01 Header */}
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        {/* 02 Hero */}
        <Hero />

        {/* 03 About MK KRUPA */}
        <About />

        {/* 04 Our Services */}
        <Services onSelectService={handleSelectService} />

        {/* 05 Industries We Serve */}
        <Industries />

        {/* 06 Platforms We Support */}
        <Platforms />

        {/* 07 Why Work With Us */}
        <WhyUs />

        {/* 08 How We Work */}
        <HowWeWork />

        {/* 09 Our Team */}
        <Team />

        {/* 10 FAQ */}
        <FAQ />

        {/* 11 Contact Us */}
        <ContactSection
          selectedService={selectedService}
          onSelectService={setSelectedService}
        />
      </main>

      {/* 12 Footer */}
      <Footer />

      {/* Mobile Sticky Quick-Action: Direct 1-tap WhatsApp chat */}
      <aside className="mobile-sticky-contact" aria-label="Direct WhatsApp Contact">
        <a
          href={`https://wa.me/${PRIMARY_CONTACT_PHONE}?text=${encodeURIComponent(
            "Hello MK KRUPA Business Solutions, I would like to enquire about your services."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-wa-btn"
          aria-label="Direct WhatsApp Chat with Dhruv Dhameliya, Founder & CEO"
        >
          <i className="fa-brands fa-whatsapp" aria-hidden="true" />
          <span>Chat on WhatsApp</span>
        </a>
      </aside>
    </>
  );
}
