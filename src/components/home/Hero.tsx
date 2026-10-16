import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  IndianRupee,
  MapPin,
  MapPinned,
  MessageCircle,
} from "lucide-react";
import HeroScene from "@/components/art/HeroScene";
import Photo from "@/components/ui/Photo";
import { photos } from "@/data/photos";
import PlotLayoutArt from "@/components/art/PlotLayoutArt";
import { projects, projectsByStatus } from "@/data/projects";
import { whatsappLink } from "@/data/site";

const stats = [
  {
    icon: Building2,
    value: String(projectsByStatus("ongoing").length).padStart(2, "0"),
    label: "Ongoing Project",
  },
  {
    icon: Clock3,
    value: String(projectsByStatus("upcoming").length).padStart(2, "0"),
    label: "Upcoming Project",
  },
  { icon: IndianRupee, value: "₹1,150", label: "Starting per sq.ft" },
  { icon: MapPinned, value: "Bhubaneswar", label: "Prime Locations" },
];

const chips = ["Clear Pricing", "Site Visit Support", "Prime Locations"];

export default function Hero() {
  const [first, second] = projects;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-forest-dark text-white"
    >
      <HeroScene className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 opacity-45 mix-blend-luminosity">
        <Photo
          src={photos.hero}
          alt="Aerial view of a new housing development"
          sizes="100vw"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/75 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-forest-dark to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-36 md:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[11px] font-semibold tracking-[0.25em] text-gold-light backdrop-blur">
              <BadgeCheck size={14} aria-hidden /> PLOTS FOR SALE IN BHUBANESWAR
            </p>
            <h1 className="animate-fade-up delay-1 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Own Land.
              <br />
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-deep bg-clip-text text-transparent">
                Build Your Legacy.
              </span>
            </h1>
            <p className="animate-fade-up delay-2 mt-7 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
              Thoughtfully located plotted developments in and around
              Bhubaneswar, with clear pricing and honest guidance from the
              first visit to the final booking.
            </p>

            <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-md bg-gradient-to-r from-gold-light to-gold px-8 py-4 text-sm font-bold text-forest-dark shadow-xl shadow-gold/25 transition hover:brightness-110"
              >
                Explore Projects <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:border-gold-light hover:text-gold-light"
              >
                Book a Site Visit <ArrowRight size={16} aria-hidden />
              </Link>
            </div>

            <ul className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/70">
              {chips.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Glass project cards */}
          <div className="relative mx-auto hidden h-[580px] w-full max-w-[520px] lg:block">
            <article className="animate-float absolute right-0 top-0 w-[340px] overflow-hidden rounded-2xl border border-white/15 bg-black/35 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="relative h-40">
                <PlotLayoutArt variant={first.art} />
                <span className="absolute left-3 top-3 rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                  Ongoing
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold">{first.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-[11px] text-white/60">
                  <MapPin size={12} aria-hidden /> {first.location}
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/50">
                      Starting at
                    </p>
                    <p className="font-display text-2xl font-bold text-gold-light">
                      {first.price}
                    </p>
                  </div>
                  <a
                    href={whatsappLink(
                      `Hello Mahavira Developers, I am interested in ${first.name}. Please share details.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md bg-gold px-4 py-2.5 text-xs font-bold text-forest-dark transition hover:bg-gold-light"
                  >
                    <MessageCircle size={14} aria-hidden /> Enquire
                  </a>
                </div>
              </div>
            </article>

            <article className="animate-float-slow absolute bottom-0 left-0 w-[290px] overflow-hidden rounded-2xl border border-white/15 bg-black/35 shadow-2xl shadow-black/50 backdrop-blur-xl">
              <div className="relative h-28">
                <PlotLayoutArt variant={second.art} />
                <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-forest-dark">
                  Upcoming
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold">{second.name}</h3>
                <p className="mt-1 text-[11px] leading-snug text-white/60">
                  Near Bhubaneswar New Railway Station, Patia
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Glass stats bar */}
        <div className="mt-16 max-w-4xl rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className={`flex items-center gap-3 ${
                  index !== stats.length - 1
                    ? "sm:border-r sm:border-white/10"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold-light">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-base font-bold text-white sm:text-lg">
                    {value}
                  </p>
                  <p className="text-[11px] text-gray-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
