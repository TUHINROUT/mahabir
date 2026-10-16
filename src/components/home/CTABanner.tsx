import Image from "next/image";
import Photo from "@/components/ui/Photo";
import { photos } from "@/data/photos";
import PlotLayoutArt from "@/components/art/PlotLayoutArt";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export default function CTABanner() {
  return (
    <section className="bg-forest-dark py-20 text-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 overflow-hidden rounded-lg lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col justify-center gap-6 bg-forest p-8 md:p-12">
            <div>
              <h3 className="font-display text-2xl font-bold leading-snug md:text-3xl">
                Ready to find your perfect plot?
              </h3>
              <p className="mt-3 text-sm text-white/60">
                Talk to our team and plan a site visit at a time that suits
                you.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="text-xs text-white/50">Call Us</p>
                  {site.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="block text-sm font-medium hover:text-gold-light"
                    >
                      +91 {p.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-xs text-white/50">Visit Us</p>
                  <p className="text-sm font-medium">Rudrapur, Bhubaneswar</p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-forest-dark transition hover:bg-gold-light"
            >
              Get in Touch →
            </Link>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-forest-light">
            <Photo src={photos.houseDusk} alt="Modern home at dusk" sizes="(max-width: 1024px) 100vw, 60vw" fallback={<PlotLayoutArt variant="bajarangi" />} />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-forest/70 to-transparent" />
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gold/50">
              <Image
                src="/logo.jpg"
                alt="Mahavira Developers LLP logo"
                fill
                sizes="160px"
                loading="eager"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
