import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Abstract Man",
  description:
    "Common questions about MOQs, sampling, lead times, fabric, packaging, and payment for Abstract Man's men's underwear OEM/ODM service.",
};

const groups = [
  {
    heading: "Orders & MOQs",
    items: [
      {
        q: "What's your minimum order quantity?",
        a: "Our standard MOQ is 300 pcs per style per colorway for cut-and-sew and 500 pcs per colorway for seamless production. We can accommodate lower volumes for sampling and launch test runs — tell us about your specific launch plan and we'll work out a realistic MOQ with you.",
      },
      {
        q: "Can you handle both small and large volume orders?",
        a: "Yes. We run orders as small as a 300-pc sampling batch for DTC launches, up to 500,000 pcs per month at full production capacity. Our scheduling adapts to your order size, not the other way around.",
      },
      {
        q: "What are your payment terms?",
        a: "Standard terms are 30% deposit on order confirmation, 70% balance before shipment. For repeat customers with established order history, we can discuss more flexible terms including LC at sight or net-30.",
      },
    ],
  },
  {
    heading: "Sampling & Development",
    items: [
      {
        q: "How long does sampling take?",
        a: "Our standard sampling turnaround is 15 working days from approved tech pack. Seamless-construction samples may take a few extra days depending on knit machine availability. Rush sampling (7–10 days) is available at a surcharge.",
      },
      {
        q: "Are sampling fees refundable?",
        a: "Sampling is charged at cost. Fees are typically refunded or credited against your first bulk order once production confirms.",
      },
      {
        q: "Can you develop from scratch if we don't have a tech pack?",
        a: "Yes — this is our ODM service. You describe the fit, fabric, and target customer; we develop from our in-house pattern library, create samples, and iterate until the product is ready. Most ODM projects move from brief to approved sample in 4–6 weeks.",
      },
    ],
  },
  {
    heading: "Fabric & Construction",
    items: [
      {
        q: "What fabrics do you work with?",
        a: "Cotton, modal (TENCEL™ and MicroModal), bamboo, polyester performance blends, nylon/spandex knits, and seamless-specific yarns. We source from established mills and can accommodate custom fabric development for sufficient-volume orders.",
      },
      {
        q: "Do you offer both seamless and cut-and-sew?",
        a: "Yes — both constructions under one roof. Seamless for performance-oriented and modern-fit product lines; cut-and-sew for classic silhouettes, detailed trims, and specific brand aesthetics.",
      },
    ],
  },
  {
    heading: "Packaging & Shipping",
    items: [
      {
        q: "Can you do custom packaging?",
        a: "Yes. Woven labels, hang tags, poly bags, printed boxes, barcode stickers, FNSKU labels for Amazon — all in-house or through our trim partners. Send your artwork and we'll quote packaging alongside the product.",
      },
      {
        q: "What shipping terms do you support?",
        a: "FOB Nansha or Shenzhen is standard. CIF and DDP available on request. We work with your preferred freight forwarder or can book with ours. Sea, air, and express all supported.",
      },
      {
        q: "Do you handle Amazon FBA shipments?",
        a: "Yes — FNSKU-labeled cartons, FBA-compliant packaging, and direct-to-warehouse shipping are all part of our standard cross-border service.",
      },
    ],
  },
  {
    heading: "Quality & Compliance",
    items: [
      {
        q: "What certifications do you hold?",
        a: "BSCI and SLCP audits annually. Documentation is available to clients before onboarding. We can also coordinate additional audits (Sedex, WRAP, etc.) on request.",
      },
      {
        q: "How do you handle quality control?",
        a: "In-house QC at every stage — inbound fabric, sampling, inline production, and final AQL inspection before carton closure. Final inspection reports are shared before shipment.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              FAQ
            </p>
            <h1 className="mt-4 text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              The things brands usually ask us first.
            </h1>
            <p className="mt-5 text-neutral-600 leading-relaxed text-base lg:text-lg">
              If something isn&apos;t covered below, send us a note at{" "}
              <a
                href="mailto:hello@abstractman.com"
                className="text-neutral-900 underline underline-offset-4 hover:text-brand-yellow"
              >
                hello@abstractman.com
              </a>{" "}
              — we reply within one working day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ groups */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-16">
            {groups.map((group) => (
              <div
                key={group.heading}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10"
              >
                <div className="lg:col-span-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-medium">
                    {group.heading}
                  </p>
                </div>

                <div className="lg:col-span-8 divide-y divide-neutral-200 border-y border-neutral-200">
                  {group.items.map((item) => (
                    <details
                      key={item.q}
                      className="group py-5 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                        <span className="text-base font-medium text-neutral-900">
                          {item.q}
                        </span>
                        <span
                          aria-hidden
                          className="flex-none text-neutral-500 transition-transform duration-300 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-sm text-neutral-600 leading-relaxed pr-8">
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

      {/* Still have questions CTA */}
      <section className="border-b border-neutral-200 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-900/70">
                Still have questions?
              </p>
              <h2 className="mt-3 text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
                Talk to a real person on our team.
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
                href="/catalog"
                className="rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-neutral-900 text-sm px-6 py-2.5 shadow-sm transition-all duration-300 ease-out hover:bg-white hover:-translate-y-0.5"
              >
                Download Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
