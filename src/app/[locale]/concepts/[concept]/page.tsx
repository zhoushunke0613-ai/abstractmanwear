import { notFound } from "next/navigation";
import HomeConcept, { HOME_CONCEPTS, type HomeConceptName } from "@/components/HomeConcept";

export function generateStaticParams() {
  return HOME_CONCEPTS.map((concept) => ({ concept }));
}

export default async function ConceptPage({ params }: { params: Promise<{ concept: string }> }) {
  const { concept } = await params;

  if (!HOME_CONCEPTS.includes(concept as HomeConceptName)) {
    notFound();
  }

  return <HomeConcept concept={concept as HomeConceptName} />;
}
