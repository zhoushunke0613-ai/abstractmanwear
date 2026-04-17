import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Abstract Man",
  description:
    "Start your project with Abstract Man. Men's underwear OEM/ODM manufacturer in Zhongshan, China. Reply within one working day.",
};

const contactMethods = [
  {
    label: "Email",
    value: "hello@abstractman.com",
    href: "mailto:hello@abstractman.com",
    note: "Replies within 1 working day",
  },
  {
    label: "WhatsApp",
    value: "+86 138 0000 0000",
    href: "https://wa.me/8613800000000",
    note: "GMT+8, 09:00\u201318:00",
  },
  {
    label: "WeChat",
    value: "abstractman",
    href: "#wechat",
    note: "Search ID to add",
  },
  {
    label: "Phone",
    value: "+86 760 0000 0000",
    href: "tel:+867600000000",
    note: "Mon\u2013Fri, GMT+8",
  },
];

const projectTypes = [
  "OEM Manufacturing",
  "ODM Development",
  "Private Label",
  "Sampling Only",
  "Packaging Customization",
  "Not Sure Yet",
];

const productCategories = [
  "Boxer Briefs",
  "Trunks",
  "Briefs",
  "Seamless Series",
  "Modal Series",
  "Performance Series",
  "Not Sure Yet",
];

const volumeOptions = [
  "Under 1,000 pcs",
  "1,000\u20133,000 pcs",
  "3,000\u201310,000 pcs",
  "10,000+ pcs",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP",
  "In 1\u20132 months",
  "In 3\u20136 months",
  "More than 6 months",
  "Not finalized yet",
];

const inputStyles =
  "mt-2 block w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 transition-colors";

export default function ContactPage() {
  return (
    <>
      {/* Header — compact, flows into form section */}
      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10 lg:pt-24 lg:pb-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </p>
            <h1 className="mt-3 text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Tell us about your project.
            </h1>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Share your product concept, target volume, and launch timeline.
              We&apos;ll come back with fabric options, pricing guidance, and a
              realistic production plan &mdash; usually within one working day.
            </p>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Form card */}
            <form
              className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200 p-8 lg:p-10 shadow-sm"
              method="post"
              action="/api/contact"
            >
              {/* Your details */}
              <fieldset>
                <legend className="text-xs uppercase tracking-[0.18em] text-brand-yellow font-medium">
                  Your details
                </legend>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs text-neutral-500"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={inputStyles}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs text-neutral-500"
                    >
                      Company / Brand
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className={inputStyles}
                      placeholder="Your brand"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs text-neutral-500"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputStyles}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-xs text-neutral-500"
                    >
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      className={inputStyles}
                      placeholder="United States"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Divider */}
              <div className="my-8 border-t border-neutral-100" />

              {/* Project details */}
              <fieldset>
                <legend className="text-xs uppercase tracking-[0.18em] text-brand-yellow font-medium">
                  Project details
                </legend>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs text-neutral-500"
                    >
                      Project type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue=""
                      className={inputStyles}
                    >
                      <option value="" disabled>
                        Select type
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="productCategory"
                      className="block text-xs text-neutral-500"
                    >
                      Product category
                    </label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      defaultValue=""
                      className={inputStyles}
                    >
                      <option value="" disabled>
                        Select category
                      </option>
                      {productCategories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="volume"
                      className="block text-xs text-neutral-500"
                    >
                      Target volume
                    </label>
                    <select
                      id="volume"
                      name="volume"
                      defaultValue=""
                      className={inputStyles}
                    >
                      <option value="" disabled>
                        Select volume
                      </option>
                      {volumeOptions.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-xs text-neutral-500"
                    >
                      Launch timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      defaultValue=""
                      className={inputStyles}
                    >
                      <option value="" disabled>
                        Select timeline
                      </option>
                      {timelineOptions.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </fieldset>

              {/* Divider */}
              <div className="my-8 border-t border-neutral-100" />

              {/* Message */}
              <fieldset>
                <legend className="text-xs uppercase tracking-[0.18em] text-brand-yellow font-medium">
                  Your message
                </legend>
                <div className="mt-5">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={inputStyles}
                    placeholder="Product concept, fabric preferences, tech pack details, reference links &mdash; anything that helps us scope your project."
                  />
                </div>

                <label className="mt-4 flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="nda"
                    className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-brand-yellow focus:ring-brand-yellow"
                  />
                  <span className="text-sm text-neutral-500 leading-relaxed">
                    I&apos;d like an NDA before sharing detailed files.
                  </span>
                </label>
              </fieldset>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="rounded-full bg-neutral-900 text-white font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-neutral-800 hover:-translate-y-0.5"
                >
                  Send inquiry
                </button>
                <p className="text-xs text-neutral-400">
                  We typically reply within one working day (GMT+8).
                </p>
              </div>
            </form>

            {/* Right sidebar */}
            <aside className="lg:col-span-4 lg:col-start-9 space-y-6">
              {/* Contact methods card */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-400 font-medium">
                  Reach us directly
                </p>
                <div className="mt-4 divide-y divide-neutral-100">
                  {contactMethods.map((m) => (
                    <a
                      key={m.label}
                      href={m.href}
                      className="group flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0 transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-400">
                          {m.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-neutral-900 truncate group-hover:text-brand-yellow transition-colors">
                          {m.value}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="flex-none text-xs text-neutral-300 transition-transform group-hover:translate-x-0.5 group-hover:text-neutral-500"
                      >
                        &rarr;
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Factory photo */}
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                <Image
                  src="/images/factory-floor.png"
                  alt="Abstract Man factory floor — production lines and knitting machines"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Address card */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-400">
                  Factory address
                </p>
                <p className="mt-2.5 text-sm text-neutral-900 font-medium leading-relaxed">
                  Abstract Man Wear Co., Ltd.
                </p>
                <p className="text-sm text-neutral-600">
                  Zhongshan, Guangdong, China
                </p>
                <p className="mt-3 text-xs text-neutral-400 leading-relaxed">
                  Factory visits by appointment. Pickup available from Guangzhou
                  or Shenzhen.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
