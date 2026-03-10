import { Metadata } from "next";

import IndustriesContent from "./_components/IndustriesContent";

export const metadata: Metadata = {
  title: "Industries We Serve | Fastscraping",
  description:
    "Ecommerce, real estate, recruitment, ticketing, food delivery, AI/ML...",
  openGraph: {
    title: "Industries We Serve | Fastscraping",
    description:
      "Ecommerce, real estate, recruitment, ticketing, food delivery, AI/ML...",
    url: "https://fastscraping.com/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
