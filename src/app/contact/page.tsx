import Image from "next/image";
import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";

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
    note: "Scan QR or search ID",
  },
  {
    label: "Phone",
    value: "+86 760 0000 0000",
    href: "tel:+867600000000",
    note: "Mon\u2013Fri, GMT+8",
  },
];

const projectTypes = [
  "OEM (Manufacturing to tech pack)",
  "ODM (Develop from brief)",
  "Custom fabric / fit",
  "Private label packaging",
  "Sampling only",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </p>
            <h1 className="mt-4 text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Tell us what you&apos;re building.
            </h1>
            <p className="mt-5 text-neutral-600 leading-relaxed text-base lg:text-lg">
              Share your concept, target volumes, and launch window. We&apos;ll
              come back with fabric options, pricing, and a realistic production
              timeline &mdash; usually within one working day.
            </p>
          </div>
        </div>
      </section>

      {/* Form + contact methods */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <form
              className="lg:col-span-7"
              method="post"
              action="/api/contact"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-medium">
                Send an inquiry
              </p>
              <h2 className="mt-4 text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
                Start your project.
              </h2>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Company / Brand
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                    placeholder="Your brand"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                    placeholder="United States"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="projectType"
                    className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Project type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue=""
                    className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2 grid grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="volume"
                      className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                    >
                      Target volume
                    </label>
                    <input
                      id="volume"
                      name="volume"
                      type="text"
                      className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                      placeholder="e.g. 5,000 pcs"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                    >
                      Launch timeline
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                      placeholder="e.g. Q3 2026"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.18em] text-neutral-600"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-2 block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                    placeholder="Product concept, fabric preferences, existing tech pack, reference links — anything that helps us scope."
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="nda"
                      className="mt-1 h-4 w-4 rounded border-neutral-300 text-brand-yellow focus:ring-brand-yellow"
                    />
                    <span className="text-sm text-neutral-600 leading-relaxed">
                      I&apos;d like an NDA before sharing detailed files.
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="rounded-full bg-brand-yellow border border-brand-yellow-light text-neutral-900 font-medium text-sm px-8 py-3 shadow-sm transition-all duration-300 ease-out hover:bg-brand-yellow-light hover:shadow-md hover:-translate-y-0.5"
                >
                  Send inquiry
                </button>
                <p className="text-xs text-neutral-500">
                  We reply within one working day (GMT+8).
                </p>
              </div>
            </form>

            {/* Contact methods */}
            <aside className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-medium">
                Or reach us directly
              </p>
              <h2 className="mt-4 text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900">
                Talk to a real person on our team.
              </h2>

              <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
                {contactMethods.map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    className="group flex items-start justify-between gap-6 py-5 hover:text-neutral-900 transition-colors"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                        {m.label}
                      </p>
                      <p className="mt-2 text-base font-medium text-neutral-900 group-hover:text-brand-yellow transition-colors">
                        {m.value}
                      </p>
                      <p className="mt-1 text-xs text-neutral-500">{m.note}</p>
                    </div>
                    <span
                      aria-hidden
                      className="pt-2 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-neutral-900"
                    >
                      &rarr;
                    </span>
                  </a>
                ))}
              </div>

              {/* Factory photo */}
              <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/factory-floor.png"
                  alt="Abstract Man factory floor — production lines and knitting machines"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 rounded-2xl bg-neutral-50 border border-neutral-200 p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Factory address
                </p>
                <p className="mt-3 text-sm text-neutral-800 leading-relaxed">
                  Abstract Man Wear Co., Ltd.
                  <br />
                  Zhongshan, Guangdong, China
                </p>
                <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
                  Factory visits by appointment. We can arrange pickup from
                  Guangzhou or Shenzhen for scheduled tours.
                </p>
              </div>

              {/* WeChat QR placeholder */}
              <ImagePlaceholder
                label="WeChat QR Code"
                description="WeChat business account QR code for quick scan-to-add"
                className="mt-6 aspect-square max-w-[180px]"
              />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
