import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";
import CTASection from "@/components/sections/CTASection";

const categories = [
  {
    name: "Boxer Briefs",
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    fabrics: "[Cotton / Modal / Bamboo]",
    craft: "[Seamless / Flatlock / Cut & Sew]",
    markets: "[US / EU / AU]",
  },
  {
    name: "Trunks",
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    fabrics: "[Cotton / Modal / Bamboo]",
    craft: "[Seamless / Flatlock / Cut & Sew]",
    markets: "[US / EU / AU]",
  },
  {
    name: "Briefs",
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    fabrics: "[Cotton / Modal / Bamboo]",
    craft: "[Seamless / Flatlock / Cut & Sew]",
    markets: "[US / EU / AU]",
  },
  {
    name: "Seamless Series",
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    fabrics: "[Nylon / Spandex blend]",
    craft: "[3D Seamless Knitting]",
    markets: "[Global]",
  },
  {
    name: "Modal Series",
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    fabrics: "[Micro-Modal / Modal blend]",
    craft: "[Cut & Sew / Flatlock]",
    markets: "[Premium markets]",
  },
  {
    name: "Functional Series",
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    fabrics: "[Moisture-wicking / Antibacterial]",
    craft: "[Performance construction]",
    markets: "[Sport / Active]",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* 1. Page Intro */}
      <PageIntro
        eyebrow="Products"
        title="Products Overview"
        subtitle="[Product positioning statement — what makes our product range unique, and who we serve]"
      />

      {/* 2. Product Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Categories" title="Core Product Categories" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="aspect-square glass flex items-center justify-center text-center p-6 hover:bg-white/[0.08] transition-colors cursor-pointer"
              >
                <div>
                  <h3 className="text-base lg:text-lg text-[#2D2621] tracking-wide mb-2">{cat.name}</h3>
                  <p className="text-xs text-[#8F7A6A]">[View Details]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Category Detail Blocks */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Details" title="Category Breakdown" />
          <div className="flex flex-col gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="grid grid-cols-1 lg:grid-cols-6 gap-8 glass p-8"
              >
                <div className="lg:col-span-2">
                  <h3 className="text-xl text-[#2D2621] font-light mb-3">{cat.name}</h3>
                  <p className="text-xs text-[#8B8074] leading-relaxed">
                    [Category introduction — positioning, fit, target use]
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-[#A0968A] mb-3">Key Features</p>
                  <ul className="text-xs text-[#6B635A] space-y-2">
                    {cat.features.map((f) => (
                      <li key={f}>— {f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-[#A0968A] mb-3">Fabrics</p>
                  <p className="text-xs text-[#6B635A]">{cat.fabrics}</p>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-[#A0968A] mb-3">Construction</p>
                  <p className="text-xs text-[#6B635A]">{cat.craft}</p>
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-[#A0968A] mb-3">Markets</p>
                  <p className="text-xs text-[#6B635A]">{cat.markets}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Material Options */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Materials"
            title="Fabric & Material Options"
            subtitle="[Brief intro to our fabric sourcing and options]"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fabric Types", items: ["Cotton", "Modal", "Micro-Modal", "Bamboo", "Nylon", "Polyester"] },
              { title: "Functional Fabrics", items: ["Moisture-wicking", "Antibacterial", "Cooling", "Quick-dry", "Eco-friendly"] },
              { title: "Performance Highlights", items: ["Breathability", "Softness", "Stretch", "Durability", "Color retention"] },
            ].map((block) => (
              <div key={block.title} className="glass p-8">
                <h3 className="text-base text-[#2D2621] mb-6">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="text-sm text-[#6B635A]">— {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Customization Options */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Customization"
            title="What You Can Customize"
            subtitle="[Overview of customization scope for brands]"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              "Logo",
              "Waistband",
              "Label",
              "Color",
              "Size Range",
              "Packaging",
              "Fit / Pattern",
            ].map((item) => (
              <div
                key={item}
                className="aspect-square glass flex items-center justify-center text-center p-4"
              >
                <span className="text-sm text-[#2D2621]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Product Development Support */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Development" title="Product Development Support" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sample-Based Development", desc: "[Send us a sample, we replicate or improve]" },
              { title: "Tech Pack Development", desc: "[Full tech pack to finished product]" },
              { title: "Design Adaptation", desc: "[Adjust our designs to your specs]" },
            ].map((item, i) => (
              <div key={item.title} className="glass p-8">
                <span className="text-xs text-[#A0968A] font-mono">0{i + 1}</span>
                <h3 className="text-lg text-[#2D2621] mt-4 mb-3">{item.title}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <CTASection
        eyebrow="Next Step"
        title="Bring Your Product to Life"
        ctas={[
          { label: "Request Product Catalog", href: "/contact", variant: "primary" },
          { label: "Discuss Requirements", href: "/contact", variant: "secondary" },
          { label: "Start Sampling", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
