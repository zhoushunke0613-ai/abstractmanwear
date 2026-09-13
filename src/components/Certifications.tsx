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

export default function Certifications() {
  const t = useTranslations("Certifications");

  const certs: Cert[] = [
    {
      badge: "BSCI",
      title: t("bsciTitle"),
      description: t("bsciDesc"),
      image: null,
      imageAlt: "",
      placeholder: {
        label: "BSCI Certificate",
        description: "BSCI audit certificate scan or official BSCI badge image",
      },
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
      image: "/images/qc-inspection.png",
      imageAlt: "QC inspector examining underwear under magnifying lamp",
      placeholder: null,
    },
  ];

  const linkClass =
    "mt-4 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-brand-yellow";

  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-2xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
            {t("headline")}
          </h2>
          <p className="mt-4 text-sm lg:text-base text-neutral-600 leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="mt-10 lg:mt-14 -mx-6 px-6 lg:mx-0 lg:px-0 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 lg:pb-0 scrollbar-hide lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:overflow-visible lg:snap-none">
          {certs.map((c) => (
            <div
              key={c.badge}
              className="group w-[75vw] max-w-[300px] flex-shrink-0 snap-start lg:w-auto lg:max-w-none lg:flex-shrink border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-yellow hover:-translate-y-0.5 hover:shadow-md"
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
              <div className="p-5 lg:p-8">
                <div className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-brand-yellow text-sm font-semibold tracking-tight text-neutral-900">
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
