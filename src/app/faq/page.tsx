import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Abstract Man",
  description:
    "Common questions about MOQs, sampling, lead times, fabric, packaging, and payment for Abstract Man's men's underwear OEM/ODM service.",
};

const groups = [
  {
    id: "orders",
    heading: "Orders & MOQs",
    items: [
      {
        q: "What\u2019s your minimum order quantity?",
        a: "300 pcs per style per color for cut-and-sew, 500 pcs per colorway for seamless. Lower volumes may be possible for sampling or launch test runs depending on the project.",
      },
      {
        q: "Can you handle both small and large volume orders?",
        a: "Yes \u2014 from 300-pc test runs to 500,000 pcs per month at full capacity. Scheduling adapts to your order size.",
      },
      {
        q: "What are your payment terms?",
        a: "Standard payment terms are confirmed during quotation and order placement. For repeat customers or established partnerships, flexible arrangements including LC and net terms may be available.",
      },
    ],
  },
  {
    id: "sampling",
    heading: "Sampling & Development",
    items: [
      {
        q: "How long does sampling take?",
        a: "15 working days from approved tech pack for standard construction. Rush sampling (7\u201310 days) is available at a surcharge.",
      },
      {
        q: "Are sampling fees refundable?",
        a: "Sampling is charged at cost and typically credited against your first bulk order.",
      },
      {
        q: "Can you develop from scratch without a tech pack?",
        a: "Yes \u2014 that\u2019s our ODM service. Describe the fit, fabric, and target customer, and we develop from our in-house pattern library. Most ODM projects go from brief to approved sample in 4\u20136 weeks.",
      },
    ],
  },
  {
    id: "materials",
    heading: "Materials & Construction",
    items: [
      {
        q: "What fabrics do you work with?",
        a: "Cotton, modal (TENCEL\u2122, MicroModal), bamboo, polyester performance blends, nylon/spandex, and seamless-specific yarns. Custom fabric development is available for sufficient-volume orders.",
      },
      {
        q: "Do you offer both seamless and cut-and-sew?",
        a: "Yes \u2014 both constructions under one roof. Seamless for performance and modern-fit lines; cut-and-sew for classic silhouettes and detailed trims.",
      },
    ],
  },
  {
    id: "shipping",
    heading: "Packaging & Shipping",
    items: [
      {
        q: "Can you do custom packaging?",
        a: "Yes \u2014 woven labels, hang tags, poly bags, printed boxes, and barcode stickers. Send your artwork and we quote packaging alongside the product.",
      },
      {
        q: "What shipping terms do you support?",
        a: "FOB Nansha or Shenzhen is standard. CIF and DDP available on request. Sea, air, and express all supported.",
      },
      {
        q: "Can you ship directly to warehouses or fulfillment centers?",
        a: "Yes \u2014 including Amazon FBA with FNSKU labeling and FBA-compliant cartons. We also ship to third-party warehouses and distribution centers worldwide.",
      },
    ],
  },
  {
    id: "compliance",
    heading: "Quality & Compliance",
    items: [
      {
        q: "What certifications do you hold?",
        a: "BSCI and SLCP, audited annually. We can also coordinate Sedex, WRAP, or other audits on request.",
      },
      {
        q: "How do you handle quality control?",
        a: "In-house QC at every stage: inbound fabric, sampling, inline production, and final AQL 2.5 inspection before carton closure. Reports are shared before shipment.",
      },
      {
        q: "Can you share audit or compliance documents during onboarding?",
        a: "Yes \u2014 BSCI and SLCP documentation is available before you place your first order. We share full audit reports and compliance records as part of standard onboarding.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-14 lg:pt-28 lg:pb-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              FAQ
            </p>
            <h1 className="mt-4 text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Questions brands ask before working with us.
            </h1>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              If you don&apos;t see your question here, contact us at{" "}
              <a
                href="mailto:hello@abstractman.com"
                className="text-neutral-900 underline underline-offset-4 hover:text-brand-yellow"
              >
                hello@abstractman.com
              </a>
              . We reply within one working day.
            </p>
          </div>

          {/* Anchor nav pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-xs font-medium text-neutral-700 transition-all duration-200 hover:border-brand-yellow hover:text-neutral-900"
              >
                {g.heading}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ groups — single column, headings inline */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-14">
            {groups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-24">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-semibold">
                  {group.heading}
                </p>

                <div className="mt-6 divide-y divide-neutral-100 border-y border-neutral-100">
                  {group.items.map((item) => (
                    <details
                      key={item.q}
                      className="group [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between gap-6 py-4 cursor-pointer list-none rounded focus-visible:outline-2 focus-visible:outline-brand-yellow focus-visible:outline-offset-2">
                        <span className="text-[15px] font-medium text-neutral-900 leading-snug">
                          {item.q}
                        </span>
                        <span
                          aria-hidden
                          className="flex-none w-5 h-5 flex items-center justify-center rounded-full border border-neutral-300 text-neutral-400 text-xs transition-all duration-300 group-open:rotate-45 group-open:border-brand-yellow group-open:text-brand-yellow"
                        >
                          +
                        </span>
                      </summary>
                      <p className="pb-4 text-sm text-neutral-500 leading-relaxed pr-10">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-b border-neutral-200 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-900/70">
                Still have questions?
              </p>
              <h2 className="mt-3 text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
                Talk to our team about your project.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-neutral-900 text-white font-medium text-sm px-6 py-2.5 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-neutral-900 text-sm px-6 py-2.5 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
