import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ImagePlaceholder from "./ImagePlaceholder";

type Cert = {
  badge: string;
  title: string;
  description: string;
  image: string | null;
  imageAlt: string;
  imageFit?: "contain";
  placeholder: { label: string; description: string } | null;
  /** Typographic record shown in place of an image, for documents without a certificate */
  facts?: { eyebrow: string; rows: { label: string; value: string }[] };
  href?: string;
  hrefLabel?: string;
  /** Localized site route rather than a static file */
  hrefInternal?: boolean;
};

export default function Certifications({ id }: { id?: string }) {
  const t = useTranslations("Certifications");

  const certs: Cert[] = [
    {
      badge: "BSCI",
      title: t("bsciTitle"),
      description: t("bsciDesc"),
      image: "/images/cert-bsci-cover.jpg",
      imageAlt: "amfori BSCI audit report cover",
      imageFit: "contain",
      placeholder: null,
    },
    {
      badge: "SLCP",
      title: t("slcpTitle"),
      description: t("slcpDesc"),
      image: null,
      imageAlt: "",
      placeholder: null,
      facts: {
        eyebrow: t("slcpFactsEyebrow"),
        rows: [
          { label: t("slcpFactId"), value: "PRJ839999" },
          { label: t("slcpFactStatus"), value: t("slcpFactStatusValue") },
          { label: t("slcpFactVerifier"), value: "Madeown International" },
          { label: t("slcpFactCompleted"), value: t("slcpFactCompletedValue") },
          { label: t("slcpFactPlatform"), value: "Worldly" },
        ],
      },
      href: "/contact",
      hrefLabel: t("slcpRequest"),
      hrefInternal: true,
    },
    {
      badge: "Higg",
      title: t("higgTitle"),
      description: t("higgDesc"),
      image: "/images/cert-higg-fslm-2026.png",
      imageAlt: "Cascale Higg FSLM self-assessment certificate of completion, 2026",
      imageFit: "contain",
      placeholder: null,
      href: "/certificates/higg-fslm-2026.pdf",
      hrefLabel: t("higgView"),
    },
    {
      badge: "AQL",
      title: t("aqlTitle"),
      description: t("aqlDesc"),
      image: "/images/brand/qc-station.webp",
      imageAlt: t("aqlImageAlt"),
      placeholder: null,
    },
  ];

  const linkClass = "text-link mt-5";

  return (
    <section id={id} className="scroll-mt-20 border-b border-neutral-200 bg-[#fcfaf6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">
            {t("eyebrow")}
          </p>
          <h2 className="section-title text-neutral-900">
            {t("headline")}
          </h2>
          <p className="body-copy mt-5">
            {t("description")}
          </p>
        </div>

        <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-hide border-y border-neutral-300 lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:overflow-visible lg:snap-none">
          {certs.map((c) => (
            <div
              key={c.badge}
              className="group w-[78vw] max-w-[320px] flex-shrink-0 snap-start border-r border-neutral-300 last:border-r-0 lg:w-auto lg:max-w-none lg:flex-shrink overflow-hidden"
            >
              {c.image ? (
                <div
                  className={`relative aspect-[5/3] ${
                    c.imageFit === "contain" ? "bg-neutral-50 border-b border-neutral-200" : ""
                  }`}
                >
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 768px) 75vw, (max-width: 1280px) 50vw, 25vw"
                    className={c.imageFit === "contain" ? "object-contain p-3" : "object-cover"}
                  />
                </div>
              ) : c.facts ? (
                <div className="aspect-[5/3] flex flex-col justify-center bg-neutral-50 border-b border-neutral-200 px-5 lg:px-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    {c.facts.eyebrow}
                  </p>
                  <dl className="mt-2.5">
                    {c.facts.rows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-baseline justify-between gap-4 border-t border-neutral-200 py-1 first:border-t-0"
                      >
                        <dt className="text-[11px] text-neutral-500 whitespace-nowrap">
                          {row.label}
                        </dt>
                        <dd className="text-xs font-medium text-neutral-900 text-right tabular-nums">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : c.placeholder ? (
                <ImagePlaceholder
                  label={c.placeholder.label}
                  description={c.placeholder.description}
                  className="aspect-[5/3] rounded-none border-0 border-b-2"
                />
              ) : null}
              <div className="p-5 lg:p-7">
                <div className="font-display text-3xl tracking-[-0.035em] text-brand-yellow">
                  {c.badge}
                </div>
                <p className="mt-4 lg:mt-6 text-base font-semibold tracking-tight text-neutral-900">
                  {c.title}
                </p>
                <p className="mt-2 lg:mt-3 text-sm text-neutral-600 leading-relaxed">
                  {c.description}
                </p>
                {c.href && c.hrefInternal ? (
                  <Link href={c.href} className={linkClass}>
                    {c.hrefLabel} →
                  </Link>
                ) : c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {c.hrefLabel} ↗
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
