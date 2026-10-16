import Image from "next/image";
import Photo from "@/components/ui/Photo";
import { photos } from "@/data/photos";
import VillaArt from "@/components/art/VillaArt";
import Link from "next/link";
import { ArrowRight, Eye, HeartHandshake, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const badges = [
  { icon: ShieldCheck, title: "Clear Pricing", desc: "Per sq.ft rates, stated upfront." },
  { icon: Eye, title: "Open Process", desc: "Visit, verify and then decide." },
  { icon: HeartHandshake, title: "Genuine Guidance", desc: "Advice that puts you first." },
];

export default function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-20 text-[#1C1917]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div
              className="relative overflow-hidden rounded-[32px] p-2 shadow-xl"
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

          <div className="space-y-7">
            <SectionHeading
              eyebrow="ABOUT US"
              title={
                <>
                  Turning Land into{" "}
                  <span className="font-display italic font-normal text-gold">
                    Lasting Homes
                  </span>
                </>
              }
              description="Mahavira Developers LLP is a Bhubaneswar-based real estate developer offering plots in growing localities. We believe buying land should be simple, transparent and stress-free, so we share clear rates, let you see the site first and guide you through the next steps."
            />

            <div className="grid gap-5 border-t border-[#E6DFD5] pt-6 sm:grid-cols-3">
              {badges.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E2CE9F] bg-[#F5EAD4] text-gold-deep shadow-sm">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold">{title}</h4>
                    <p className="mt-0.5 text-[11px] text-[#78716C]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-sm bg-forest px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-light"
            >
              Know More About Us <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
