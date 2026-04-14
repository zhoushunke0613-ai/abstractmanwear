import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";
import CTASection from "@/components/sections/CTASection";

export default function ServicesPage() {
  return (
    <>
      {/* 1. Page Intro */}
      <PageIntro
        eyebrow="Services"
        title="Services Overview"
        subtitle="[Services overview + cooperation models — OEM, ODM, Private Label]"
      />

      {/* 2. OEM Manufacturing */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#8F7A6A] mb-4">01 · OEM</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-[#2D2621] mb-6">OEM Manufacturing</h2>
              <p className="text-[#6B635A] text-base leading-relaxed mb-8">
                [OEM service introduction — we produce according to your exact specifications]
              </p>
              <ul className="space-y-3 text-sm text-[#6B635A]">
                <li>— Production Execution</li>
                <li>— Brand-Specified Manufacturing</li>
                <li>— Quality to Your Standards</li>
              </ul>
            </div>
            <div className="aspect-[4/3] glass flex items-center justify-center">
              <span className="text-[#B5A99B] text-sm">[OEM Image]</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ODM Development */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] glass flex items-center justify-center order-2 lg:order-1">
              <span className="text-[#B5A99B] text-sm">[ODM Image]</span>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs tracking-[0.3em] uppercase text-[#8F7A6A] mb-4">02 · ODM</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-[#2D2621] mb-6">ODM Development</h2>
              <p className="text-[#6B635A] text-base leading-relaxed mb-8">
                [ODM service introduction — we design, develop, and manufacture]
              </p>
              <ul className="space-y-3 text-sm text-[#6B635A]">
                <li>— Design & Development Support</li>
                <li>— Product Concept to Production</li>
                <li>— Market-Driven Innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Private Label Service */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#8F7A6A] mb-4">03 · Private Label</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-[#2D2621] mb-6">Private Label Service</h2>
              <p className="text-[#6B635A] text-base leading-relaxed mb-8">
                [Private Label overview — ready-to-brand products with your identity]
              </p>
              <ul className="space-y-3 text-sm text-[#6B635A]">
                <li>— Branding Support</li>
                <li>— Market-Ready Product Solutions</li>
                <li>— Fast Go-to-Market</li>
              </ul>
            </div>
            <div className="aspect-[4/3] glass flex items-center justify-center">
              <span className="text-[#B5A99B] text-sm">[Private Label Image]</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sampling & Prototyping */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Sampling" title="Sampling & Prototyping" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Sample Development", desc: "[Full sample creation from tech pack or reference]" },
              { title: "Fit / Construction Testing", desc: "[Multiple rounds of fit validation]" },
              { title: "Sample Revision Process", desc: "[Iterative refinement until approval]" },
            ].map((item) => (
              <div key={item.title} className="glass p-8">
                <h3 className="text-lg text-[#2D2621] mb-3">{item.title}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Material & Trim Sourcing */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Sourcing" title="Material & Trim Sourcing" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Fabric Sourcing",
              "Waistband / Label / Accessory",
              "Packaging Material Coordination",
            ].map((item) => (
              <div key={item} className="glass p-8">
                <h3 className="text-lg text-[#2D2621] mb-3">{item}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">[Description of sourcing support]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Packaging Customization */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Packaging" title="Packaging Customization" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Retail Packaging", desc: "[Shelf-ready solutions]" },
              { title: "Basic Packaging", desc: "[Poly bag / simple wrap]" },
              { title: "Brand Packaging", desc: "[Full custom brand experience]" },
            ].map((item) => (
              <div key={item.title} className="glass p-8">
                <h3 className="text-lg text-[#2D2621] mb-3">{item.title}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Customization Scope */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Scope" title="Full Customization Scope" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {["Product", "Fabric", "Logo", "Label", "Packaging", "Sizing", "Color"].map((item) => (
              <div key={item} className="aspect-square glass flex items-center justify-center">
                <span className="text-sm text-[#4A433C]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Service Workflow */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Workflow" title="Service Workflow" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Initial Inquiry",
              "Requirement Confirmation",
              "Quotation",
              "Sampling",
              "Approval",
              "Bulk Production",
              "Inspection",
              "Shipment",
            ].map((step, i) => (
              <div key={step} className="border-l-2 border-[#8F7A6A]/30 pl-4">
                <span className="text-xs font-mono text-[#A0968A]">0{i + 1}</span>
                <h3 className="text-sm text-[#2D2621] mt-2">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Suitable Clients */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Clients" title="Who We Work With" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Startup Brands",
              "Established Brands",
              "Wholesalers",
              "Distributors",
              "Importers",
              "Cross-Border Sellers",
            ].map((client) => (
              <div key={client} className="glass p-6 text-center">
                <span className="text-sm text-[#4A433C]">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA Section */}
      <CTASection
        eyebrow="Partner With Us"
        title="Start Your OEM/ODM Project"
        ctas={[
          { label: "Start OEM Project", href: "/contact", variant: "primary" },
          { label: "Send Your Tech Pack", href: "/contact", variant: "secondary" },
          { label: "Contact Our Team", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
