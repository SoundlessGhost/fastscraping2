import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fastscraping - Your Web Scraping Team on Demand",
  description:
    "We deliver structured data at large scale - no Cloudflare, no Captchas, no hassles. Enterprise web scraping, data pipeline engineering, and LinkedIn API solutions.",
  keywords: [
    "web scraping",
    "data extraction",
    "Cloudflare bypass",
    "LinkedIn API",
    "data pipeline",
    "enterprise scraping",
  ],
  authors: [{ name: "FastScraping" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "FastScraping - Your Web Scraping Team on Demand",
    description:
      "We deliver structured data at large scale - no Cloudflare, no Captchas, no hassles.",
    url: "https://fastscraping.com",
    siteName: "FastScraping",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
