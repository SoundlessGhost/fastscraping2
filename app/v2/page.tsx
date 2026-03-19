import CTAVariant002 from "@/components/v2/CTA_variant_002";
import HeroVariant002 from "@/components/v2/Hero_variant_002";
import StatsVariant002 from "@/components/v2/Stats_variant_002";
import WhyUsVariant002 from "@/components/v2/WhyUs_variant_002";
import NavbarVariant002 from "@/components/v2/Navbar_variant_002";
import FooterVariant002 from "@/components/v2/Footer_variant_002";
import ClientsVariant002 from "@/components/v2/Clients_variant_002";
import ServicesVariant002 from "@/components/v2/Services_variant_002";

const VersionTwoPage = () => {
  return (
    <main className="min-h-screen">
      <NavbarVariant002 />
      <HeroVariant002 />
      <ServicesVariant002 />
      <StatsVariant002 />
      <WhyUsVariant002 />
      <ClientsVariant002 />
      <CTAVariant002 />
      <FooterVariant002 />
    </main>
  );
};

export default VersionTwoPage;
