import Image from "next/image";

const services = [
  {
    no: "01",
    title: "OEM Manufacturing",
    description:
      "Bring your tech pack. We handle fabric sourcing, pattern grading, and bulk production to your exact specs.",
    image: "/images/service-oem.png",
    imageAlt: "Sewing line operators working on bulk underwear production",
  },
  {
    no: "02",
    title: "ODM Development",
    description:
      "Start from our in-house design library \u2014 fabric, waistband, and fit already validated. Development in as few as 4 weeks.",
    image: "/images/service-odm.png",
    imageAlt:
      "Design table with fabric swatches, tech packs, and sample garments",
  },
  {
    no: "03",
    title: "Fabric & Fit Customization",
    description:
      "Custom waistband jacquard, cotton / modal / bamboo blends, multi-size fit development for regional body standards.",
    image: "/images/service-fabric.png",
    imageAlt:
      "Stacked fabric swatches — organic cotton, premium modal, bamboo performance blend",
  },
  {
    no: "04",
    title: "Sampling & Private Label",
    description:
      "Proto, fit, and PP samples in 10\u201314 days. Hang tags, poly bags, printed inner waistband \u2014 fully white-labeled.",
    image: "/images/service-sampling.png",
    imageAlt:
      "Finished underwear samples with hang tags, woven labels, and branded packaging",
  },
];

export default function ServicesOverview() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            What We Do
          </p>
          <h2 className="mt-4 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            More than a factory &mdash; a development partner.
          </h2>
          <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
            OEM production, ODM development, fabric sourcing, pattern-making,
            and full private-label support. Every step handled in-house at our
            Zhongshan facility.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:snap-none">
          {services.map((s) => (
            <div key={s.no} className="group w-[70vw] max-w-[280px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 lg:mb-6">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 768px) 70vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover img-hover-zoom"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow font-medium">
                {s.no}
              </p>
              <h3 className="mt-3 lg:mt-4 text-base lg:text-lg font-semibold tracking-tight text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-2 lg:mt-3 text-sm text-neutral-600 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
