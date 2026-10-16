import type { Metadata } from "next";
import Image from "next/image";
import Photo from "@/components/ui/Photo";
import { photos } from "@/data/photos";
import VillaArt from "@/components/art/VillaArt";
import {
  Compass,
  Eye,
  Handshake,
  MapPin,
  Scale,
  Sparkles,
  Target,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/home/CTABanner";
import { addressOneLine } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mahavira Developers LLP, a Bhubaneswar-based developer offering plots with transparent pricing and honest guidance.",
};

const values = [
  {
    icon: Scale,
    title: "Transparency",
    desc: "Clear per sq.ft rates and open communication from the very first call.",
  },
  {
    icon: Handshake,
    title: "Trust",
    desc: "We build relationships first, because land is a long-term decision.",
  },
  {
    icon: Compass,
    title: "Right Locations",
    desc: "We choose localities with growth, access and everyday convenience in mind.",
  },
  {
    icon: Sparkles,
    title: "Customer First",
    desc: "Site visits, answers and guidance, whenever you need them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title={
          <>
            Building Trust, <span className="text-gold">One Plot at a Time</span>
          </>
        }
        subtitle="Mahavira Developers LLP helps families and investors own land in and around Bhubaneswar with clarity and confidence."
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Story */}
      <section className="bg-[#FAF9F6] py-20 text-[#1C1917]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="OUR STORY"
              title={
                <>
                  A Developer You Can{" "}
                  <span className="font-display italic font-normal text-gold">
                    Rely On
                  </span>
                </>
              }
            />
            <p className="text-sm leading-relaxed text-[#57534E]">
              Mahavira Developers LLP is a real estate developer based in
              Rudrapur, Bhubaneswar. We develop and sell plots in growing
              localities, with projects such as Bajarangi Nagar at Kuainlo and
              Maruti Nagar near Bhubaneswar New Railway Station.
            </p>
            <p className="text-sm leading-relaxed text-[#57534E]">
              Our approach is simple: show you the land, share the price
              openly and guide you through every step of the booking. No
              pressure, no confusion, just honest help in making one of life&apos;s
              biggest decisions.
            </p>
            <p className="flex items-start gap-2 text-xs font-medium text-gold-deep">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              {addressOneLine}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div
              className="overflow-hidden rounded-[32px] p-2 shadow-xl"
              style={{
                border: "6px solid transparent",
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(135deg, #E2C085 0%, #8C6221 50%, #F3E0BD 100%) border-box",
                boxShadow: "0 12px 36px rgba(197, 155, 39, 0.18)",
              }}
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-[22px] bg-forest">
                <Photo src={photos.villa} alt="Modern villa" sizes="(max-width: 1024px) 90vw, 440px" fallback={<VillaArt />} />
                <div className="absolute bottom-4 right-4 h-16 w-16 overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gold/50">
                  <Image
                    src="/logo.jpg"
                    alt="Mahavira Developers LLP logo"
                    fill
                    sizes="64px"
                    className="scale-[1.12] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-forest-dark py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 md:px-12">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To make buying land simple, transparent and stress-free by offering well-located plots, clear pricing and dependable guidance.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be a name that families across Odisha trust when they think of owning their own plot and building their future on it.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-gold/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-light">
                <Icon size={24} strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#FAF7F2] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <SectionHeading
            eyebrow="OUR VALUES"
            title={
              <>
                What We <span className="text-gold">Stand For</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-[#E6DFD5] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <Icon className="text-gold" size={36} strokeWidth={1.3} />
                <h3 className="mt-5 font-display text-lg font-bold text-[#1C1917]">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#57534E]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
