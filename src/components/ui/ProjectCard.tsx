"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Maximize2, MapPin, MessageCircle, X } from "lucide-react";
import Photo from "@/components/ui/Photo";
import PlotLayoutArt from "@/components/art/PlotLayoutArt";
import { statusMeta, type Project } from "@/data/projects";
import { whatsappLink } from "@/data/site";

const badgeClass: Record<Project["status"], string> = {
  completed: "bg-emerald-500 text-white",
  ongoing: "bg-brand-red text-white",
  upcoming: "bg-gold text-forest-dark",
};

export default function ProjectCard({ project }: { project: Project }) {
  const [viewing, setViewing] = useState(false);

  useEffect(() => {
    if (!viewing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setViewing(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [viewing]);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#E6DFD5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10">
      <div className="relative h-72 overflow-hidden bg-forest">
        <Photo
          src={project.photo}
          alt={`${project.name} plots`}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="transition duration-700 group-hover:scale-105"
          fallback={<PlotLayoutArt variant={project.art} />}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${badgeClass[project.status]}`}
        >
          {statusMeta[project.status].label}
        </span>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
          <h3 className="font-display text-2xl font-bold">{project.name}</h3>
          <span className="shrink-0 rounded-md bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur">
            {project.price}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-start gap-2 text-xs font-medium text-gold-deep">
          <MapPin size={15} className="mt-0.5 shrink-0" />
          {project.location}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
          {project.summary}
        </p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2.5 text-xs text-[#44403C]"
            >
              <CheckCircle2
                size={15}
                className="mt-px shrink-0 text-gold"
                aria-hidden
              />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3 pt-1">
          <a
            href={whatsappLink(
              `Hello Mahavira Developers, I am interested in ${project.name}. Please share details.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-forest px-5 py-3 text-xs font-semibold text-white transition hover:bg-forest-light"
          >
            <MessageCircle size={15} aria-hidden /> Enquire on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setViewing(true)}
            className="inline-flex items-center gap-2 rounded-md border border-[#E6DFD5] px-5 py-3 text-xs font-semibold text-[#1C1917] transition hover:border-gold hover:text-gold-deep"
          >
            <Maximize2 size={14} aria-hidden /> View Banner
          </button>
        </div>
      </div>

      {viewing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} banner`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setViewing(false)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setViewing(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={22} />
          </button>
          <Image
            src={project.banner.src}
            alt={`${project.name} banner`}
            width={project.banner.width}
            height={project.banner.height}
            sizes="90vw"
            onClick={(e) => e.stopPropagation()}
            className="h-auto max-h-[88vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </article>
  );
}
