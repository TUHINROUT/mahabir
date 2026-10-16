import Photo from "@/components/ui/Photo";
import PlotLayoutArt from "@/components/art/PlotLayoutArt";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { projects, statusMeta } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="bg-forest-dark py-20 text-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold">
              OUR WORK
            </p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-2 rounded-sm border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-gold hover:text-gold sm:flex"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={statusMeta[p.status].href}
              className="group relative block overflow-hidden rounded-xl"
            >
              <div className="relative h-96">
                <Photo
                  src={p.photo}
                  alt={`${p.name} plots`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="transition duration-700 group-hover:scale-105"
                  fallback={<PlotLayoutArt variant={p.art} />}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-forest-dark">
                {statusMeta[p.status].label}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-2xl font-semibold">{p.name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-white/70">
                  <MapPin size={13} /> {p.location}
                </p>
                <p className="mt-3 text-sm font-semibold text-gold-light">
                  {p.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-sm border border-white/20 px-6 py-3 text-sm font-semibold transition hover:border-gold hover:text-gold"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
