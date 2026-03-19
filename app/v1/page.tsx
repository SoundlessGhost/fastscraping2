import CTAVariant001 from "@/components/v1/CTA_variant_001";
import HeroVariant001 from "@/components/v1/Hero_variant_001";
import StatsVariant001 from "@/components/v1/Stats_variant_001";
import WhyUsVariant001 from "@/components/v1/WhyUs_variant_001";
import NavbarVariant001 from "@/components/v1/Navbar_variant_001";
import FooterVariant001 from "@/components/v1/Footer_variant_001";
import ClientsVariant001 from "@/components/v1/Clients_variant_001";
import ServicesVariant001 from "@/components/v1/Services_variant_001";

const VersionOnePage = () => {
  return (
    <main className="min-h-screen">
      <NavbarVariant001 />
      <HeroVariant001 />
      <ServicesVariant001 />
      <StatsVariant001 />
      <WhyUsVariant001 />
      <ClientsVariant001 />
      <CTAVariant001 />
      <FooterVariant001 />
    </main>
  );
};

export default VersionOnePage;
