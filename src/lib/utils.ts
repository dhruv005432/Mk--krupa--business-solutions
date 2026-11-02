export function formatPhone(phone: string) {
  return `+${phone.slice(0, 2)} ${phone.slice(2, 7)} ${phone.slice(7)}`;
}

export async function downloadEnquiryPdf(enquiry: {
  name: string;
  phone: string;
  email: string;
  service: string;
  details: string;
}) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 48;

  doc.setFillColor(198, 146, 46);
  doc.rect(0, 0, pageWidth, 92, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.text("MK KRUPA BUSINESS SOLUTIONS", margin, 45);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Brand  ·  Marketplace  ·  Sourcing  ·  Consulting  ·  Digital Presence", margin, 66);

  doc.setTextColor(23, 22, 19);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text("New Website Enquiry", margin, 140);

  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(111, 107, 99);
  doc.text(`Submitted: ${submittedAt}`, margin, 160);

  const rows: [string, string][] = [
    ["Name", enquiry.name],
    ["Phone / WhatsApp", enquiry.phone],
    ["Email", enquiry.email || "Not provided"],
    ["Service", enquiry.service],
    ["Requirements", enquiry.details || "Not specified"],
  ];

  const valueX = margin + 150;
  const valueWidth = pageWidth - margin - valueX;
  let y = 200;

  rows.forEach(([label, value]) => {
    doc.setDrawColor(233, 228, 217);
    doc.line(margin, y - 15, pageWidth - margin, y - 15);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(23, 22, 19);
    doc.text(label, margin, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 58, 54);
    const lines = doc.splitTextToSize(value, valueWidth);
    doc.text(lines, valueX, y);
    y += Math.max(lines.length * 16, 20) + 16;
  });

  doc.setDrawColor(233, 228, 217);
  doc.line(margin, y - 15, pageWidth - margin, y - 15);
  doc.setFontSize(9);
  doc.setTextColor(140, 136, 128);
  doc.text(
    "Generated from the MK KRUPA Business Solutions website contact form.",
    margin,
    y + 16
  );

  const safeName = enquiry.name.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "");
  doc.save(`MK-KRUPA-Enquiry-${safeName || "New"}.pdf`);
}
