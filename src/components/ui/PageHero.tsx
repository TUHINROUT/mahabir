import Link from "next/link";
import SkylineStrip from "@/components/art/SkylineStrip";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-forest-dark pb-20 pt-40 text-white md:pb-24 md:pt-48">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-gold/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-transparent to-forest-dark"
      />

      <SkylineStrip className="absolute inset-x-0 bottom-0 h-24 w-full" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <nav aria-label="Breadcrumb" className="animate-fade-up mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/60">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-gold">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight size={12} />}
              </li>
            ))}
          </ol>
        </nav>
        <p className="animate-fade-up delay-1 mb-3 text-xs font-semibold tracking-[0.3em] text-gold-light">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up delay-2 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="animate-fade-up delay-3 mt-5 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
