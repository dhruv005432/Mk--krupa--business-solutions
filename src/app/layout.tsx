import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MK KRUPA Business Solutions | Brand, Marketplace & Sourcing Support",
  description:
    "MK KRUPA Business Solutions helps entrepreneurs, manufacturers and businesses with brand development, marketplace assistance, product sourcing, business consulting and digital presence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
