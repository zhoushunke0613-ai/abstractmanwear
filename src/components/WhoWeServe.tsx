const clients = [
  {
    type: "Global Brands",
    description:
      "Private label and OEM production for branded underwear labels across the US, EU, and APAC.",
  },
  {
    type: "Private Label Businesses",
    description:
      "Full branding support — custom wovens, poly bags, printed boxes, hang tags, and barcode stickers.",
  },
  {
    type: "Wholesalers",
    description:
      "Consistent bulk supply with flexible MOQs and ready-to-ship base styles from our core library.",
  },
  {
    type: "Distributors",
    description:
      "Reliable lead times, carton marking to your spec, and FOB/CIF shipping from Nansha or Shenzhen.",
  },
  {
    type: "Cross-Border Sellers",
    description:
      "Amazon FBA-ready packaging, FNSKU labeling, and small-batch production for e-commerce launches.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Who We Serve
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            Designed for the way you go to market.
          </h2>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            Our production cadence adapts to whoever&apos;s placing the order —
            from a 300-pc sampling run for a DTC launch to a 100,000-pc
            distributor contract.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {clients.map((c) => (
            <div
              key={c.type}
              className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-brand-yellow transition-colors"
            >
              <div className="h-1 w-8 bg-brand-yellow" />
              <h3 className="mt-5 text-base font-semibold tracking-tight text-neutral-900">
                {c.type}
              </h3>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
