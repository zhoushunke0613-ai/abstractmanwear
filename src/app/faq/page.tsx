import Link from "next/link";
import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";

const faqGroups = [
  {
    title: "Product Questions",
    questions: [
      "What products do you specialize in?",
      "What materials are available?",
      "Do you only produce men's underwear?",
    ],
  },
  {
    title: "Customization Questions",
    questions: [
      "Do you offer OEM service?",
      "Do you offer ODM service?",
      "Can you customize logo / waistband / packaging?",
      "Can you develop based on samples or tech packs?",
    ],
  },
  {
    title: "MOQ & Sampling",
    questions: [
      "What is your MOQ?",
      "Do you provide samples?",
      "How long does sample development take?",
    ],
  },
  {
    title: "Production Questions",
    questions: [
      "What is your production lead time?",
      "Can you support large-volume orders?",
      "How do you manage product quality?",
    ],
  },
  {
    title: "Certification Questions",
    questions: [
      "What certifications do you have?",
      "Do you follow international production standards?",
    ],
  },
  {
    title: "Shipping & Cooperation",
    questions: [
      "Do you work with overseas clients?",
      "Do you support export shipment?",
      "How do we start cooperation?",
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* 1. Page Intro */}
      <PageIntro
        eyebrow="Support"
        title="Frequently Asked Questions"
        subtitle="[Business inquiry support note — we answer your pre-cooperation questions here]"
      />

      {/* 2-7. FAQ Groups */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:gap-16">
            {faqGroups.map((group, gi) => (
              <div key={group.title}>
                <h2 className="text-2xl lg:text-3xl font-extralight text-[#2D2621] mb-8 pb-4 border-b border-white/40">
                  <span className="text-[#A0968A] mr-4 font-mono text-lg">0{gi + 1}</span>
                  {group.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {group.questions.map((q) => (
                    <details
                      key={q}
                      className="group glass hover:glass transition-colors"
                    >
                      <summary className="p-6 cursor-pointer flex items-center justify-between gap-4 text-[#2D2621] list-none">
                        <span className="text-sm lg:text-base">{q}</span>
                        <span className="text-[#8F7A6A] group-open:rotate-45 transition-transform duration-300 text-xl font-light">
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-sm text-[#6B635A] leading-relaxed">
                        [Answer placeholder — describe our response to this question in 2-4 sentences]
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact Prompt */}
      <section className="py-24 lg:py-32  border-y border-white/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8F7A6A] mb-4">Still Have Questions?</p>
          <h2 className="text-3xl lg:text-5xl font-extralight text-[#2D2621] mb-6">
            Contact Our Team
          </h2>
          <p className="text-[#6B635A] text-base leading-relaxed mb-10 max-w-xl mx-auto">
            [Prompt inviting to reach out for anything not covered above]
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#3E3833] text-[#E8DED0] text-sm tracking-wider px-8 py-4 hover:bg-[#2D2621] transition-colors duration-300"
            >
              Send Inquiry
            </Link>
            <Link
              href="/services"
              className="inline-block border border-[#3E3833]/30 text-[#2D2621] text-sm tracking-wider px-8 py-4 hover:bg-[#3E3833] hover:text-[#E8DED0] transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
