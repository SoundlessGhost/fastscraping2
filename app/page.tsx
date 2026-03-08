import {
  Navbar,
  Hero,
  Services,
  Stats,
  WhyChooseUs,
  Clients,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
}
