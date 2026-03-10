import { Metadata } from "next";

import ServicesContent from "./_components/ServicesContent";

export const metadata: Metadata = {
  title: "Web Scraping Services | Fastscraping",
  description:
    "Managed web scraping, enterprise crawling, mobile app data extraction...",
  openGraph: {
    title: "Web Scraping Services | Fastscraping",
    description:
      "Managed web scraping, enterprise crawling, mobile app data extraction...",
    url: "https://fastscraping.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
