import { Metadata } from "next";

import AboutContent from "./_components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Fastscraping",
  description:
    "Meet the team behind FastScraping - enterprise web scraping specialists",
  openGraph: {
    title: "About Us | Fastscraping",
    description:
      "Meet the team behind FastScraping - enterprise web scraping specialists",
    url: "https://fastscraping.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
