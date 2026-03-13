import { Metadata } from "next";

import SolutionsContent from "./_components/SolutionsContent";
import SolutionsOptionA from "./_components/SolutionsOptionA";
import SolutionsOptionB from "./_components/SolutionsOptionB";
import SolutionsOptionC from "./_components/SolutionsOptionC";

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
  return <SolutionsOptionC />;
}
