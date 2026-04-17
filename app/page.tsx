import CTAVariant003 from "@/components/v3/CTA_variant_003";
import HeroVariant003 from "@/components/v3/Hero_variant_003";
import StatsVariant003 from "@/components/v3/Stats_variant_003";
import WhyUsVariant003 from "@/components/v3/WhyUs_variant_003";
import FooterVariant003 from "@/components/v3/Footer_variant_003";
import NavbarVariant003 from "@/components/v3/Navbar_variant_003";
import ClientsVariant003 from "@/components/v3/Clients_variant_003";
import ServicesVariant003 from "@/components/v3/Services_variant_003";

const Homepage = () => {
  return (
    <main className="min-h-screen">
      <NavbarVariant003 />
      <HeroVariant003 />
      <ServicesVariant003 />
      <StatsVariant003 />
      <WhyUsVariant003 />
      <ClientsVariant003 />
      <CTAVariant003 />
      <FooterVariant003 />
    </main>
  );
};

export default Homepage;
