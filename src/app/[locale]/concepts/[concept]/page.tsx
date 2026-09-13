import { notFound } from "next/navigation";
import HomeConcept, { HOME_CONCEPTS, type HomeConceptName } from "@/components/HomeConcept";
import TrustBar from "@/components/TrustBar";
import ProductSpecialization from "@/components/ProductSpecialization";
import ServicesOverview from "@/components/ServicesOverview";
import CapabilitySnapshot from "@/components/CapabilitySnapshot";
import Certifications from "@/components/Certifications";
import WhoWeServe from "@/components/WhoWeServe";
import FinalCTA from "@/components/FinalCTA";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export function generateStaticParams() {
  return HOME_CONCEPTS.map((concept) => ({ concept }));
}

export default async function ConceptPage({ params }: { params: Promise<{ concept: string }> }) {
  const { concept } = await params;

  if (!HOME_CONCEPTS.includes(concept as HomeConceptName)) {
    notFound();
  }

  return (
    <>
      <HomeConcept concept={concept as HomeConceptName} />
      <TrustBar />
      <AnimateOnScroll><ProductSpecialization /></AnimateOnScroll>
      <AnimateOnScroll><ServicesOverview /></AnimateOnScroll>
      <AnimateOnScroll><CapabilitySnapshot /></AnimateOnScroll>
      <AnimateOnScroll><Certifications /></AnimateOnScroll>
      <AnimateOnScroll><WhoWeServe /></AnimateOnScroll>
      <AnimateOnScroll><FinalCTA /></AnimateOnScroll>
    </>
  );
}
