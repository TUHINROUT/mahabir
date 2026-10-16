import type { Metadata } from "next";
import { Globe, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Mahavira Developers LLP, Rudrapur, Bhubaneswar. Call 99373 66406 or 63706 21085 to plan a site visit.",
};

const cardClass =
  "flex items-start gap-4 rounded-xl border border-[#E6DFD5] bg-white p-5 transition hover:border-gold/50 hover:shadow-lg";
const iconClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E2CE9F] bg-[#F5EAD4] text-gold-deep";

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title={
          <>
            Let&apos;s Plan Your <span className="text-gold">Site Visit</span>
          </>
        }
        subtitle="Call us, message us on WhatsApp or drop by our office. We are happy to help."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="bg-[#FAF7F2] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <div className="space-y-5">
            <div className={cardClass}>
              <span className={iconClass}>
                <MapPin size={20} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-[#1C1917]">
                  Office Address
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#57534E]">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.line3}
                </p>
              </div>
            </div>

            <div className={cardClass}>
              <span className={iconClass}>
                <Phone size={20} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-[#1C1917]">Call Us</h3>
                <div className="mt-1 flex flex-col text-xs text-[#57534E]">
                  {site.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="py-0.5 hover:text-gold-deep"
                    >
                      +91 {p.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={cardClass}>
              <span className={iconClass}>
                <Globe size={20} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-[#1C1917]">Website</h3>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-xs text-[#57534E] hover:text-gold-deep"
                >
                  {site.web}
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-[#E6DFD5] bg-white p-7 shadow-sm md:p-10">
            <h2 className="font-display text-2xl font-bold text-[#1C1917]">
              Send Us an Enquiry
            </h2>
            <p className="mb-7 mt-2 text-xs text-[#57534E]">
              Fill in your details and we will continue the conversation on
              WhatsApp.
            </p>
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="mx-auto mt-12 max-w-7xl px-6 md:px-12">
          <div className="overflow-hidden rounded-2xl border border-[#E6DFD5] shadow-sm">
            <iframe
              title="Mahavira Developers LLP office location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
