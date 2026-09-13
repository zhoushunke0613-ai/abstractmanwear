import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.contact" });
  return { title: t("title"), description: t("description") };
}

const inputStyles = "field-control";

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ form?: string }>;
}) {
  const { locale } = await params;
  const { form } = await searchParams;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  const contactMethods = [
    {
      label: t("contactEmail"),
      value: t("contactEmailValue"),
      href: "mailto:hello@abstractman.com",
      note: t("contactEmailNote"),
    },
    {
      label: t("contactWhatsApp"),
      value: t("contactWhatsAppValue"),
      href: "https://wa.me/8613800000000",
      note: t("contactWhatsAppNote"),
    },
    {
      label: t("contactWeChat"),
      value: t("contactWeChatValue"),
      href: "#wechat",
      note: t("contactWeChatNote"),
    },
    {
      label: t("contactPhone"),
      value: t("contactPhoneValue"),
      href: "tel:+867600000000",
      note: t("contactPhoneNote"),
    },
  ];

  const projectTypes = [
    { value: "OEM Manufacturing", label: t("pt1") },
    { value: "ODM Development", label: t("pt2") },
    { value: "Private Label", label: t("pt3") },
    { value: "Sampling Only", label: t("pt4") },
    { value: "Packaging Customization", label: t("pt5") },
    { value: "Not Sure Yet", label: t("pt6") },
  ];

  const productCategories = [
    { value: "Boxer Briefs", label: t("pc1") },
    { value: "Trunks", label: t("pc2") },
    { value: "Briefs", label: t("pc3") },
    { value: "Seamless Series", label: t("pc4") },
    { value: "Modal Series", label: t("pc5") },
    { value: "Performance Series", label: t("pc6") },
    { value: "Not Sure Yet", label: t("pc7") },
  ];

  const volumeOptions = [
    { value: "Under 1,000 pcs", label: t("vol1") },
    { value: "1,000–3,000 pcs", label: t("vol2") },
    { value: "3,000–10,000 pcs", label: t("vol3") },
    { value: "10,000+ pcs", label: t("vol4") },
    { value: "Not sure yet", label: t("vol5") },
  ];

  const timelineOptions = [
    { value: "ASAP", label: t("tl1") },
    { value: "In 1–2 months", label: t("tl2") },
    { value: "In 3–6 months", label: t("tl3") },
    { value: "More than 6 months", label: t("tl4") },
    { value: "Not finalized yet", label: t("tl5") },
  ];

  return (
    <>
      {/* Header — compact, flows into form section */}
      <section className="page-hero border-b-0">
        <div className="page-hero-inner pb-10 lg:pb-14">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t("eyebrow")}
            </p>
            <h1 className="page-title text-neutral-900">
              {t("headline")}
            </h1>
            <p className="body-copy mt-6">
              {t("description")}
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
              className="lg:col-span-7 border-t border-neutral-300 py-8 lg:p-10 lg:pt-8"
              method="post"
              action="/api/contact"
            >
              <input type="hidden" name="locale" value={locale} />
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              {form && (
                <p
                  role="status"
                  className={`mb-7 border px-4 py-3 text-sm leading-relaxed ${
                    form === "success"
                      ? "border-emerald-700/30 bg-emerald-50 text-emerald-900"
                      : "border-red-700/30 bg-red-50 text-red-900"
                  }`}
                >
                  {form === "success"
                    ? t("formSuccess")
                    : form === "invalid"
                      ? t("formInvalid")
                      : t("formError")}
                </p>
              )}
              {/* Your details */}
              <fieldset>
                <legend className="text-xs uppercase tracking-[0.18em] text-brand-yellow font-medium">
                  {t("yourDetails")}
                </legend>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs text-neutral-500"
                    >
                      {t("labelName")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={inputStyles}
                      placeholder={t("placeholderName")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs text-neutral-500"
                    >
                      {t("labelCompany")}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className={inputStyles}
                      placeholder={t("placeholderCompany")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs text-neutral-500"
                    >
                      {t("labelEmail")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputStyles}
                      placeholder={t("placeholderEmail")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-xs text-neutral-500"
                    >
                      {t("labelCountry")}
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      className={inputStyles}
                      placeholder={t("placeholderCountry")}
                    />
                  </div>
                </div>
              </fieldset>

              {/* Divider */}
              <div className="my-8 border-t border-neutral-100" />

              {/* Project details */}
              <fieldset>
                <legend className="text-xs uppercase tracking-[0.18em] text-brand-yellow font-medium">
                  {t("projectDetails")}
                </legend>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs text-neutral-500"
                    >
                      {t("labelProjectType")}
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue=""
                      className={inputStyles}
                    >
                      <option value="" disabled>
                        {t("selectType")}
                      </option>
                      {projectTypes.map((pt) => (
                        <option key={pt.value} value={pt.value}>
                          {pt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="productCategory"
                      className="block text-xs text-neutral-500"
                    >
                      {t("labelProductCategory")}
                    </label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      defaultValue=""
                      className={inputStyles}
                    >
                      <option value="" disabled>
                        {t("selectCategory")}
                      </option>
                      {productCategories.map((pc) => (
                        <option key={pc.value} value={pc.value}>
                          {pc.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="volume"
                      className="block text-xs text-neutral-500"
                    >
                      {t("labelVolume")}
                    </label>
                    <select
                      id="volume"
                      name="volume"
                      defaultValue=""
                      className={inputStyles}
                    >
                      <option value="" disabled>
                        {t("selectVolume")}
                      </option>
                      {volumeOptions.map((v) => (
                        <option key={v.value} value={v.value}>
                          {v.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-xs text-neutral-500"
                    >
                      {t("labelTimeline")}
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      defaultValue=""
                      className={inputStyles}
                    >
                      <option value="" disabled>
                        {t("selectTimeline")}
                      </option>
                      {timelineOptions.map((tl) => (
                        <option key={tl.value} value={tl.value}>
                          {tl.label}
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
                  {t("yourMessage")}
                </legend>
                <div className="mt-5">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={inputStyles}
                    placeholder={t("messagePlaceholder")}
                  />
                </div>

                <label className="mt-4 flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="nda"
                    className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-brand-yellow focus:ring-brand-yellow"
                  />
                  <span className="text-sm text-neutral-500 leading-relaxed">
                    {t("ndaLabel")}
                  </span>
                </label>
              </fieldset>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {t("submitButton")}
                </button>
                <p className="text-xs text-neutral-400">
                  {t("submitNote")}
                </p>
              </div>
            </form>

            {/* Right sidebar */}
            <aside className="lg:col-span-4 lg:col-start-9 space-y-6">
              {/* Contact methods card */}
              <div className="border-y border-neutral-300 py-6">
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-400 font-medium">
                  {t("reachUs")}
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

              {/* Reception — what a visiting buyer sees first */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src="/images/brand/reception.jpg"
                  alt="Abstract Man reception with the company name wall"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Address card */}
              <div className="border-y border-neutral-300 py-6">
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-400">
                  {t("factoryAddress")}
                </p>
                <p className="mt-2.5 text-sm text-neutral-900 font-medium leading-relaxed">
                  {t("companyName")}
                </p>
                <p className="text-sm text-neutral-600">
                  {t("companyLocation")}
                </p>
                <p className="mt-3 text-xs text-neutral-400 leading-relaxed">
                  {t("visitNote")}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
