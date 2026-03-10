import { Metadata } from "next";

import PricingContent from "./_components/PricingContent";

export const metadata: Metadata = {
  title: "Pricing | Fastscraping",
  description:
    "Transparent pricing for Scrayz API and FastScraping enterprise data pipelines",
  openGraph: {
    title: "Pricing | Fastscraping",
    description:
      "Transparent pricing for Scrayz API and FastScraping enterprise data pipelines",
    url: "https://fastscraping.com/pricing",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
