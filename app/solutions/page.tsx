import { Metadata } from "next";

import SolutionsContent from "./_components/SolutionsContent";

export const metadata: Metadata = {
  title: "Data Solutions | Fastscraping",
  description:
    "Pricing intelligence, marketplace data, job market insights, LinkedIn data...",
  openGraph: {
    title: "Data Solutions | Fastscraping",
    description:
      "Pricing intelligence, marketplace data, job market insights, LinkedIn data...",
    url: "https://fastscraping.com/solutions",
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
