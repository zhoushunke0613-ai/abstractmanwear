import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage() {
  return (
    <>
      {/* 1. Page Intro */}
      <PageIntro
        eyebrow="About"
        title="About Our Company"
        lede="[Company positioning statement — who we are and what we stand for]"
      />

      {/* 2. Company Introduction */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Introduction" title="Who We Are" align="left" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { title: "Who We Are", desc: "[Company identity — core business focus]" },
              { title: "What We Specialize In", desc: "[Specialization area — men's underwear manufacturing]" },
              { title: "Markets We Serve", desc: "[Geographic and client segments]" },
            ].map((item) => (
              <div key={item.title} className="glass p-8">
                <h3 className="text-lg text-[#2D2621] mb-4">{item.title}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="aspect-[4/3] glass flex items-center justify-center">
              <span className="text-[#B5A99B] text-sm">[Company Image]</span>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#8F7A6A] mb-4">Our Story</p>
              <h2 className="text-3xl lg:text-5xl font-extralight text-[#2D2621] mb-8">
                From Founding to Today
              </h2>
              <div className="space-y-6 text-[#6B635A]">
                <div>
                  <h4 className="text-[#2D2621] text-sm mb-2">Company Background</h4>
                  <p className="text-sm leading-relaxed">[Founding context, why we started]</p>
                </div>
                <div>
                  <h4 className="text-[#2D2621] text-sm mb-2">Industry Journey</h4>
                  <p className="text-sm leading-relaxed">[Our path in the industry]</p>
                </div>
                <div>
                  <h4 className="text-[#2D2621] text-sm mb-2">Growth Path</h4>
                  <p className="text-sm leading-relaxed">[How we&apos;ve grown and evolved]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Purpose" title="Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Our Mission", desc: "[Our mission statement]" },
              { title: "Our Vision", desc: "[Our vision for the future]" },
              { title: "Our Commitment", desc: "[Our commitment to partners]" },
            ].map((item) => (
              <div key={item.title} className="glass p-10">
                <h3 className="text-xl text-[#2D2621] mb-4">{item.title}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Philosophy */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Philosophy" title="Business Philosophy" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Product Philosophy",
              "Quality Philosophy",
              "Cooperation Philosophy",
            ].map((title, i) => (
              <div key={title} className="glass p-8">
                <span className="text-xs text-[#A0968A] font-mono">0{i + 1}</span>
                <h3 className="text-lg text-[#2D2621] mt-4 mb-3">{title}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">
                  [Describe our approach to this area]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Team & Expertise */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Team" title="Team & Expertise" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Product Development Team",
              "Production Team",
              "Quality Control Team",
              "Business Support Team",
            ].map((team) => (
              <div key={team} className="glass p-8">
                <h3 className="text-base text-[#2D2621] mb-3">{team}</h3>
                <p className="text-sm text-[#6B635A] leading-relaxed">[Team size, expertise, role]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Market Focus */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Markets" title="Who We Serve" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Domestic Brands",
              "Overseas Buyers",
              "Private Label Clients",
              "Wholesale / Distribution Partners",
            ].map((item) => (
              <div key={item} className="glass p-6 text-center">
                <span className="text-sm text-[#4A433C]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Milestones */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Timeline" title="Milestones" />
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: "[YYYY]", title: "Foundation", desc: "[Company founded, initial focus]" },
              { year: "[YYYY]", title: "Expansion", desc: "[Factory expansion, new capabilities]" },
              { year: "[YYYY]", title: "Certification Achievement", desc: "[Key certifications obtained]" },
              { year: "[YYYY]", title: "Capability Growth", desc: "[Production scaling, team growth]" },
            ].map((m) => (
              <div key={m.title} className="flex gap-8 pb-8 border-b border-white/40 last:border-0">
                <div className="min-w-[120px]">
                  <span className="text-2xl font-extralight text-[#2D2621]">{m.year}</span>
                </div>
                <div>
                  <h3 className="text-lg text-[#2D2621] mb-2">{m.title}</h3>
                  <p className="text-sm text-[#6B635A] leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <CTASection
        eyebrow="Learn More"
        title="Explore What We Do"
        ctas={[
          { label: "Explore Our Services", href: "/services", variant: "primary" },
          { label: "Learn About Our Capability", href: "/capability", variant: "secondary" },
          { label: "Contact Us", href: "/contact", variant: "secondary" },
        ]}
      />
    </>
  );
}
