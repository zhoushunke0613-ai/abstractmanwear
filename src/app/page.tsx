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
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      {/* Hero + TrustBar: above fold, no scroll animation needed */}
      <Hero />
      <TrustBar />

      {/* Each section fades up on scroll */}
      <AnimateOnScroll>
        <ServicesOverview />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ProductSpecialization />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhyChooseUs />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <OrderProcess />
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
