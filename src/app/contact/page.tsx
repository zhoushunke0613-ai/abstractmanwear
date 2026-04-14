import PageIntro from "@/components/sections/PageIntro";
import SectionHeader from "@/components/sections/SectionHeader";

export default function ContactPage() {
  return (
    <>
      {/* 1. Page Intro */}
      <PageIntro
        eyebrow="Contact"
        title="Start Your OEM/ODM Project"
        lede="[Reach out for product inquiries, quotation requests, or cooperation discussions]"
      />

      {/* 2. Business Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Contact Info" title="Business Contact" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Email", value: "info@abstractmanwear.com" },
              { label: "Phone", value: "+86 XXX-XXXX-XXXX" },
              { label: "WhatsApp", value: "+86 XXX-XXXX-XXXX" },
              { label: "WeChat", value: "[WeChat ID]" },
              { label: "Address", value: "[Factory Address]" },
            ].map((item) => (
              <div key={item.label} className="glass p-6">
                <p className="text-xs tracking-wider uppercase text-[#8F7A6A] mb-2">{item.label}</p>
                <p className="text-sm text-[#2D2621]/80 break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Inquiry Form */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="Inquiry Form"
            title="Send Your Requirements"
            lede="[The more detail you provide, the faster we can respond with a meaningful quotation]"
          />
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { name: "name", label: "Name", required: true },
              { name: "company", label: "Company", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "country", label: "Country / Region", required: false },
              { name: "productType", label: "Product Type", required: false },
              { name: "quantity", label: "Estimated Quantity", required: false },
            ].map((field) => (
              <div key={field.name} className="flex flex-col">
                <label className="text-xs tracking-wider uppercase text-[#8F7A6A] mb-3">
                  {field.label} {field.required && <span className="text-[#2D2621]">*</span>}
                </label>
                <input
                  type={field.type || "text"}
                  required={field.required}
                  className="bg-white/30 border-b border-[#8F7A6A]/30 pb-3 text-sm text-[#2D2621] focus:outline-none focus:border-white transition-colors"
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="text-xs tracking-wider uppercase text-[#8F7A6A] mb-3 block">
                Project Type
              </label>
              <div className="flex flex-wrap gap-3">
                {["OEM", "ODM", "Private Label", "Wholesale", "Other"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 px-4 py-2 border border-[#8F7A6A]/30 text-sm text-[#4A433C] cursor-pointer hover:glass-strong"
                  >
                    <input type="checkbox" className="accent-white" />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="text-xs tracking-wider uppercase text-[#8F7A6A] mb-3 block">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="[Describe your project, specs, timeline, volume, etc.]"
                className="w-full bg-white/30 border border-[#8F7A6A]/30 p-4 text-sm text-[#2D2621] placeholder:text-[#B5A99B] focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs tracking-wider uppercase text-[#8F7A6A] mb-3 block">
                Attach File (Tech pack / Reference)
              </label>
              <input
                type="file"
                className="text-sm text-[#6B635A] file:bg-white/10 file:border-0 file:text-[#2D2621] file:px-4 file:py-2 file:mr-4 file:cursor-pointer hover:file:bg-white/20"
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="bg-[#3E3833] text-[#E8DED0] text-sm tracking-wider px-10 py-4 hover:bg-[#2D2621] transition-colors duration-300"
              >
                Send Inquiry →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 4. Inquiry Guidance */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Guidance" title="What to Include in Your Inquiry" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Project Information",
                items: ["Product type", "Target market", "Estimated volume", "Timeline"],
              },
              {
                title: "Technical Information",
                items: ["Fabric preference", "Size range", "Fit references", "Special features"],
              },
              {
                title: "Reference Materials",
                items: ["Tech pack (if available)", "Sample images", "Existing samples", "Competitor references"],
              },
            ].map((block) => (
              <div key={block.title} className="glass p-8">
                <h3 className="text-lg text-[#2D2621] mb-6">{block.title}</h3>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="text-sm text-[#6B635A]">— {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Response Commitment */}
      <section className="py-24 lg:py-32 ">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8F7A6A] mb-4">Our Commitment</p>
          <h2 className="text-3xl lg:text-5xl font-extralight text-[#2D2621] mb-6">
            We Respond Within 24 Hours
          </h2>
          <p className="text-[#6B635A] text-base leading-relaxed max-w-2xl mx-auto mb-12">
            [Response time commitment — business inquiry handling process]
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8">
              <h3 className="text-lg text-[#2D2621] mb-3">Response Time</h3>
              <p className="text-sm text-[#6B635A]">[Typical response timeframe]</p>
            </div>
            <div className="glass p-8">
              <h3 className="text-lg text-[#2D2621] mb-3">Business Inquiry Handling</h3>
              <p className="text-sm text-[#6B635A]">[How we process incoming inquiries]</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Location / Map */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader eyebrow="Location" title="Visit Our Factory" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 aspect-[16/9] glass flex items-center justify-center">
              <span className="text-[#B5A99B] text-sm">[Map / Satellite Image]</span>
            </div>
            <div className="glass p-8">
              <h3 className="text-lg text-[#2D2621] mb-6">Office / Factory</h3>
              <div className="space-y-4 text-sm text-[#6B635A]">
                <div>
                  <p className="text-[#8F7A6A] uppercase text-xs tracking-wider mb-1">Address</p>
                  <p>[Full factory address]</p>
                </div>
                <div>
                  <p className="text-[#8F7A6A] uppercase text-xs tracking-wider mb-1">Visiting Hours</p>
                  <p>Mon - Fri, 9:00 - 18:00 (GMT+8)</p>
                </div>
                <div>
                  <p className="text-[#8F7A6A] uppercase text-xs tracking-wider mb-1">Nearest Airport</p>
                  <p>[Airport / Station]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 lg:py-32  border-y border-white/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-extralight text-[#2D2621] mb-10">
            Ready to Start?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#top"
              className="inline-block bg-[#3E3833] text-[#E8DED0] text-sm tracking-wider px-8 py-4 hover:bg-[#2D2621] transition-colors"
            >
              Send Inquiry Now
            </a>
            <a
              href="mailto:info@abstractmanwear.com"
              className="inline-block border border-[#3E3833]/30 text-[#2D2621] text-sm tracking-wider px-8 py-4 hover:bg-[#3E3833] hover:text-[#E8DED0] transition-all"
            >
              Discuss Your Project
            </a>
            <a
              href="#top"
              className="inline-block border border-[#3E3833]/30 text-[#2D2621] text-sm tracking-wider px-8 py-4 hover:bg-[#3E3833] hover:text-[#E8DED0] transition-all"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
