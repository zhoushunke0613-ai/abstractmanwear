import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";

const channels = [
  { label: "Email", value: "hello@abstractmanwear.com", note: "General inquiries · quotations" },
  { label: "Tech pack", value: "dev@abstractmanwear.com", note: "Routes directly to development team" },
  { label: "WhatsApp", value: "+86 138 0013 8000", note: "Mon–Fri · 09:00–19:00 CST" },
  { label: "WeChat", value: "abstract_mw", note: "Scan or add by ID" },
];

const fields: Array<{ name: string; label: string; type?: string; required?: boolean }> = [
  { name: "name", label: "Name", required: true },
  { name: "company", label: "Company", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "country", label: "Country / region" },
  { name: "productType", label: "Product type" },
  { name: "quantity", label: "Estimated quantity (pcs)" },
];

const projectTypes = ["OEM", "ODM", "Private Label", "Wholesale", "Other"];

const guidance = [
  {
    title: "The brief",
    items: ["Style and target fit", "Fabric preference", "Target market", "Target retail tier"],
  },
  {
    title: "The numbers",
    items: ["Estimated volume", "Size curve", "Timeline", "Target landed cost"],
  },
  {
    title: "The reference",
    items: ["Tech pack (if any)", "Physical sample", "Competitor references", "Moodboard"],
  },
];

const visit = [
  { label: "Address", value: "Bldg 7, Shaxi Creative Park, Zhongshan 528471" },
  { label: "Visiting hours", value: "Mon — Fri · 09:00 – 18:00 (GMT+8)" },
  { label: "Nearest airport", value: "ZUH — Zhuhai Jinwan · 50 min by car" },
  { label: "Nearest station", value: "Zhongshan Station · Guangzhou–Zhuhai intercity rail" },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Get in touch."
        lede="Send us a brief, a sample, or a tech pack. We reply within one business day — in English, Mandarin, or Japanese."
      />

      {/* I — CHANNELS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Contact channels"
            title={"Four ways to reach us."}
            lede="Pick whichever is fastest for you. All replies come directly from our team — not a ticket queue."
          />

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {channels.map((c, i) => (
              <li
                key={c.label}
                className="bg-[var(--color-paper)] p-8 lg:p-10 min-h-[220px] flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-3">
                    {c.label}
                  </p>
                  <p className="font-display text-lg lg:text-xl text-[var(--color-ink)] leading-tight break-words">
                    {c.value}
                  </p>
                  <p className="mt-3 text-xs text-[var(--color-ink-soft)]">
                    {c.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* II — INQUIRY FORM */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="Inquiry form"
            title={"Send us your requirements."}
            lede="The more detail you provide, the better our first reply. Optional fields help us skip back-and-forth."
          />

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-3">
                  {field.label}
                  {field.required && <span className="text-[var(--color-terracotta)] ml-1">*</span>}
                </label>
                <input
                  type={field.type || "text"}
                  required={field.required}
                  name={field.name}
                  className="bg-transparent border-b border-[var(--color-rule)] pb-3 text-base text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-ink)] transition-colors"
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-4">
                Project type
              </p>
              <div className="flex flex-wrap gap-3">
                {projectTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 px-5 py-3 border border-[var(--color-rule)] text-sm text-[var(--color-ink)] cursor-pointer hover:bg-[var(--color-paper)] transition-colors"
                  >
                    <input
                      type="checkbox"
                      name="projectType"
                      value={type}
                      className="accent-[var(--color-ink)]"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-3 block">
                Message
              </label>
              <textarea
                rows={6}
                name="message"
                placeholder="Describe your programme — target market, fit preference, volume, timeline, any references you can share."
                className="w-full bg-transparent border border-[var(--color-rule)] p-4 text-base text-[var(--color-ink)] placeholder:text-[var(--color-taupe)] focus:outline-none focus:border-[var(--color-ink)] transition-colors resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-3 block">
                Attach — tech pack · reference sketch · sample photo
              </label>
              <input
                type="file"
                name="attachment"
                className="text-sm text-[var(--color-ink-soft)] file:bg-[var(--color-ink)] file:border-0 file:text-[var(--color-paper)] file:px-6 file:py-3 file:mr-4 file:cursor-pointer hover:file:bg-[var(--color-terracotta)] file:transition-colors"
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="group inline-flex items-center gap-4 bg-[var(--color-ink)] text-[var(--color-paper)] px-10 py-5 text-sm tracking-wide hover:bg-[var(--color-terracotta)] transition-colors duration-500"
              >
                <span>Send inquiry</span>
                <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* III — GUIDANCE */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionHeader
            eyebrow="What to include"
            title={"Helpful details."}
            lede="Three categories. Skip any — our first reply will ask for whatever's missing."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-rule)] border border-[var(--color-rule)]">
            {guidance.map((g, gi) => (
              <article
                key={g.title}
                className="bg-[var(--color-paper)] p-10 lg:p-12"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-4">
                  {String(gi + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl text-[var(--color-ink)] leading-tight">
                  {g.title}
                </h3>
                <ul className="mt-8 divide-y divide-[var(--color-rule)]">
                  {g.items.map((item, i) => (
                    <li
                      key={item}
                      className="py-3 flex items-baseline gap-5 text-sm text-[var(--color-ink-soft)]"
                    >
                      <span className="font-mono text-[10px] text-[var(--color-taupe)] tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IV — LOCATION */}
      <section className="py-32 lg:py-48 bg-[var(--color-paper-warm)] border-y border-[var(--color-rule)]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)] mb-6">
                Visit us
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-tight text-[var(--color-ink)]">
                Visit our factory.
              </h2>
              <p className="mt-8 text-base text-[var(--color-ink-soft)] leading-[1.6] max-w-[42ch]">
                Buyer visits welcomed Monday through Friday. Schedule two weeks ahead — we&apos;ll arrange airport pickup and a private tour.
              </p>

              <dl className="mt-12 divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
                {visit.map((v) => (
                  <div key={v.label} className="py-5 grid grid-cols-12 gap-4">
                    <dt className="col-span-12 md:col-span-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                      {v.label}
                    </dt>
                    <dd className="col-span-12 md:col-span-8 text-sm text-[var(--color-ink)] leading-[1.5]">
                      {v.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure className="col-span-12 lg:col-span-8 relative aspect-[16/9] overflow-hidden border border-[var(--color-rule)]">
              <img
                src="/images/map.svg"
                alt="Abstract Manwear · Shaxi, Zhongshan"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* V — COMMITMENT */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-taupe)]">
                Our commitment
              </p>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] tracking-tight text-[var(--color-ink)]">
                A reply within
                <br />
                <span className="text-[var(--color-graphite)]">one business day.</span>
              </h2>
              <p className="mt-10 max-w-[55ch] text-lg text-[var(--color-ink-soft)] leading-[1.6]">
                Every inquiry is read by a program lead — not an auto-responder — and receives a first-pass feasibility note within 24 hours. If a quote takes longer, we&apos;ll tell you why.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
