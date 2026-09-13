import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesOverview from "@/components/ServicesOverview";
import ProductSpecialization from "@/components/ProductSpecialization";
import CapabilitySnapshot from "@/components/CapabilitySnapshot";
import Certifications from "@/components/Certifications";
import WhoWeServe from "@/components/WhoWeServe";
import FinalCTA from "@/components/FinalCTA";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      {/* Hero + TrustBar: above fold, no scroll animation needed */}
      <Hero />
      <TrustBar />

      {/* Each section fades up on scroll. Order follows the nav: what we make,
          how we work with you, why the factory can be trusted. The full
          process lives on /services#process. */}
      <AnimateOnScroll>
        <ProductSpecialization />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ServicesOverview />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CapabilitySnapshot />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Certifications />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhoWeServe />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FinalCTA />
      </AnimateOnScroll>
    </>
  );
}
