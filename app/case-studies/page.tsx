import { Metadata } from "next";

import CaseStudiesContent from "./_components/CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies | Fastscraping",
  description:
    "Real results for data-driven companies. See how we've helped businesses scale",
  openGraph: {
    title: "Case Studies | Fastscraping",
    description:
      "Real results for data-driven companies. See how we've helped businesses scale",
    url: "https://fastscraping.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
