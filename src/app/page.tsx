import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesOverview from "@/components/ServicesOverview";
import ProductSpecialization from "@/components/ProductSpecialization";
import WhyChooseUs from "@/components/WhyChooseUs";
import OrderProcess from "@/components/OrderProcess";
import CapabilitySnapshot from "@/components/CapabilitySnapshot";
import Certifications from "@/components/Certifications";
import WhoWeServe from "@/components/WhoWeServe";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <ProductSpecialization />
      <WhyChooseUs />
      <OrderProcess />
      <CapabilitySnapshot />
      <Certifications />
      <WhoWeServe />
      <FinalCTA />
    </>
  );
}
