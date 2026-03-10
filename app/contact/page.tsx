import { Metadata } from "next";

import ContactContent from "./_components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Fastscraping",
  description:
    "Book a demo or request a free sample. Get structured data within 48-72 hours",
  openGraph: {
    title: "Contact Us | Fastscraping",
    description:
      "Book a demo or request a free sample. Get structured data within 48-72 hours",
    url: "https://fastscraping.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
