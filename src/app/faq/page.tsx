import Link from "next/link";
import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";

interface QA {
  q: string;
  a: string;
}

interface FaqGroup {
  title: string;
  eyebrow: string;
  items: QA[];
}

const groups: FaqGroup[] = [
  {
    title: "Product questions",
    eyebrow: "01",
    items: [
      {
        q: "What products do you specialise in?",
        a: "Men's underwear, and only men's underwear. Four primary cuts — boxer briefs, briefs, trunks, sport — in cotton, modal, bamboo, and engineered performance fabrics. We don't produce socks, undershirts, or women's lines.",
      },
      {
        q: "What materials do you keep in the library?",
        a: "Combed cotton (80–200 g/m²), modal and micro-modal, bamboo viscose, nylon/spandex blends, recycled polyester, and proprietary ice-silk blends. Full fabric card sent on request.",
      },
      {
        q: "Can you develop outside the standard lineup?",
        a: "Yes — within the men's underwear category. If it's a genuinely new garment type (for example, an undershirt) we'll politely decline rather than produce it badly.",
      },
    ],
  },
  {
    title: "Cooperation models",
    eyebrow: "02",
    items: [
      {
        q: "Do you offer OEM?",
        a: "Yes — OEM (your tech pack, our production) is our core discipline. Sealed-sample process, calibrated lines, inline AQL 2.5.",
      },
      {
        q: "Do you offer ODM?",
        a: "Yes — ODM (our patterns, your brand) gives faster time-to-shelf. Our pattern library covers 80+ blocks tuned for Asia, EU, and US fits.",
      },
      {
        q: "Private label — what's included?",
        a: "Existing stock patterns, custom waistband jacquard, hangtag, label, and packaging branded to your identity. Ship in 30–45 days from sign-off.",
      },
      {
        q: "Can you develop from a reference sample?",
        a: "Yes. Post the sample; we reverse-pattern, match fabric from our library or source-to-brief, and return a first proto within 10 working days.",
      },
    ],
  },
  {
    title: "MOQ & sampling",
    eyebrow: "03",
    items: [
      {
        q: "What is your MOQ?",
        a: "500 pcs per SKU per colour for OEM; 200 pcs for stock-pattern private label. We flex for startups — talk to us before assuming.",
      },
      {
        q: "Do you charge for samples?",
        a: "First proto is on the house for qualified briefs. Up to three revisions free. Courier paid by requestor, refunded against first bulk order.",
      },
      {
        q: "How long does sampling take?",
        a: "10 working days from brief receipt to first proto dispatched. Revisions add 5–7 working days each.",
      },
    ],
  },
  {
    title: "Production",
    eyebrow: "04",
    items: [
      {
        q: "What is your lead time?",
        a: "28–42 days from sealed-sample approval, depending on fabric lead time and order volume. Rush programs accommodated — ask.",
      },
      {
        q: "Can you handle large volumes?",
        a: "Monthly capacity is 5 million pieces across 24 lines. Peak season volumes are scheduled 60 days ahead.",
      },
      {
        q: "How do you ensure quality?",
        a: "Five-gate regime: incoming material, inline patrol, end-of-line AQL 2.5, needle detection at 1.2 mm, and final audit (third-party optional).",
      },
    ],
  },
  {
    title: "Certifications",
    eyebrow: "05",
    items: [
      {
        q: "What certifications do you hold?",
        a: "ISO 9001 (quality), BSCI (social compliance, Grade A), OEKO-TEX® Standard 100 (skin-contact certified across full fabric library). Audit reports under NDA.",
      },
      {
        q: "Do you follow international production standards?",
        a: "Yes. AQL 2.5 per ANSI/ASQ Z1.4, ASTM F963 for any bundled accessories, REACH and CPSIA compliance available on request.",
      },
    ],
  },
  {
    title: "Logistics",
    eyebrow: "06",
    items: [
      {
        q: "Do you ship internationally?",
        a: "We ship FOB Nansha or Shekou as standard. CIF to most major ports available. DDP arranged through a nominated broker on request.",
      },
      {
        q: "Do you accept visits to the factory?",
        a: "Yes. Buyer visits Monday–Friday, two weeks' notice preferred. Airport pick-up arranged from ZUH (Zhuhai) or CAN (Guangzhou).",
      },
      {
        q: "How do we begin?",
        a: "Send a brief, a sample, or a tech pack through the contact form. First reply within one business day, in the language of your choosing.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Frequently asked questions."
        lede="The questions we hear most often — answered directly by our team, not a call-center script. If your question isn&apos;t here, send it to us directly."
      />

      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="space-y-24 lg:space-y-32">
            {groups.map((group, gi) => (
              <div key={group.title}>
                <SectionHeader
                  eyebrow={group.eyebrow}
                  title={group.title}
                  lede={`${group.items.length.toString().padStart(2, "0")} questions`}
                />

                <ol className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
                  {group.items.map((qa, i) => (
                    <li key={qa.q} className="py-8 lg:py-10">
                      <details className="group">
                        <summary className="cursor-pointer list-none grid grid-cols-12 gap-6 items-baseline">
                          <span className="col-span-2 lg:col-span-1 font-mono text-xs text-[var(--color-taupe)] tabular-nums">
                            {String(gi + 1).padStart(2, "0")}.{String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="col-span-9 lg:col-span-10 font-display text-xl lg:text-2xl text-[var(--color-ink)] leading-tight">
                            {qa.q}
                          </h3>
                          <span className="col-span-1 text-right font-display text-2xl text-[var(--color-taupe)] transition-transform duration-500 group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <div className="mt-6 grid grid-cols-12 gap-6">
                          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
                            <p className="text-base lg:text-lg text-[var(--color-ink-soft)] leading-[1.65] max-w-[68ch]">
                              {qa.a}
                            </p>
                          </div>
                        </div>
                      </details>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact nudge */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                Still have questions?
              </p>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] tracking-tight text-[var(--color-ink)]">
                Can&apos;t find what
                <br />
                <span className="text-[var(--color-graphite)]">you&apos;re looking for?</span>
              </h2>
              <p className="mt-10 max-w-[55ch] text-lg text-[var(--color-ink-soft)] leading-[1.6]">
                Send us your question. We&apos;ll answer within one business day — and if the answer is useful to others, we&apos;ll add it here.
              </p>
              <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 bg-[var(--color-ink)] text-[var(--color-paper)] px-10 py-5 text-sm tracking-wide hover:bg-[var(--color-yellow)] hover:text-[var(--color-ink)] transition-colors duration-500"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                    01
                  </span>
                  <span>Send a question</span>
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>
                <Link href="/services" className="text-sm text-[var(--color-ink)] link-rule">
                  Explore services&nbsp;→
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
