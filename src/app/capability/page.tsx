import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";
import CTASection from "@/components/sections/CTASection";

export default function CapabilityPage() {
  return (
    <>
      {/* 1. Page Intro */}
      <PageIntro
        eyebrow="Capability"
        title="Manufacturing Capability Overview"
        subtitle="[Production & supply chain statement — scale, reliability, and expertise]"
      />

      {/* 2. Factory Overview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Facility" title="Factory Overview" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { label: "Founded", value: "[Year]" },
              { label: "Location", value: "[City, China]" },
              { label: "Factory Size", value: "[X,XXX m²]" },
              { label: "Workforce", value: "[XXX+ staff]" },
              { label: "Monthly Capacity", value: "[X M pcs]" },
            ].map((item) => (
              <div key={item.label} className="glass p-8 text-center">
                <p className="text-xs tracking-wider uppercase text-[#8F7A6A] mb-3">{item.label}</p>
                <p className="text-xl lg:text-2xl font-light text-[#2D2621]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Production Capability */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Production" title="Production Capability" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Production Lines", desc: "[Number of lines, configuration]" },
              { title: "Core Processes", desc: "[Cutting, sewing, finishing, inspection]" },
              { title: "Order Volume Flexibility", desc: "[MOQ range, scaling capability]" },
              { title: "Lead Time Management", desc: "[Typical lead times by category]" },
            ].map((item) => (
              <div key={item.title} className="glass p-8">
                <h3 className="text-base text-[#2D2621] mb-3">{item.title}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Development Capability */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Development" title="Development Capability" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Product Development Support",
              "Pattern / Fit Development",
              "Sampling Room",
              "New Product Innovation",
            ].map((item) => (
              <div key={item} className="glass p-8">
                <h3 className="text-base text-[#2D2621] mb-3">{item}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">[Brief description]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quality Control */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="QC" title="Quality Control Process" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Incoming Material Inspection",
              "In-Line Inspection",
              "Final Inspection",
              "Needle Detection",
              "Packing Inspection",
            ].map((step, i) => (
              <div key={step} className="glass p-6">
                <span className="text-xs font-mono text-[#A0968A]">QC{i + 1}</span>
                <h3 className="text-sm text-[#2D2621] mt-3 leading-snug">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Supply Chain Strength */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Supply Chain" title="Supply Chain Strength" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Material Supply Stability",
              "Trim & Packaging Coordination",
              "Production Scheduling",
              "Delivery Reliability",
            ].map((item) => (
              <div key={item} className="glass p-8">
                <h3 className="text-base text-[#2D2621] mb-3">{item}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">[Brief description]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Certifications */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Standards" title="Certifications & Standards" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Compliance Certifications",
              "Quality System Standards",
              "Production Standard Alignment",
            ].map((item) => (
              <div key={item} className="glass p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 border border-[#8F7A6A]/30 rounded-full flex items-center justify-center">
                  <span className="text-[#8F7A6A] text-xs">LOGO</span>
                </div>
                <h3 className="text-base text-[#2D2621] mb-3">{item}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">[ISO / BSCI / OEKO-TEX / etc.]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Workshop & Facility */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Facility Tour" title="Workshop & Facility" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Factory Exterior",
              "Production Workshop",
              "Sampling Room",
              "Inspection Area",
              "Packing Area",
            ].map((item) => (
              <div key={item} className="aspect-square glass flex items-end p-4">
                <span className="text-sm text-[#4A433C]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Key Numbers */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="By the Numbers" title="Key Metrics" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { label: "Years Experience", value: "[XX+]" },
              { label: "Facility Size", value: "[X,XXX m²]" },
              { label: "Employees", value: "[XXX+]" },
              { label: "Monthly Output", value: "[X M pcs]" },
              { label: "Cooperation Models", value: "OEM / ODM" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-extralight text-[#2D2621] mb-3">{item.value}</p>
                <p className="text-xs tracking-wider uppercase text-[#8F7A6A]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Section */}
      <CTASection
        eyebrow="Work With Us"
        title="Let&apos;s Build Together"
        ctas={[
          { label: "Request Factory Profile", href: "/contact", variant: "primary" },
          { label: "Ask About Capacity", href: "/contact", variant: "secondary" },
          { label: "Contact for Cooperation", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
