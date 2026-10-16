import Link from "next/link";
import { projects, statusMeta, type ProjectStatus } from "@/data/projects";

const order: ProjectStatus[] = ["completed", "ongoing", "upcoming"];

export default function ProjectTabs({
  active,
}: {
  active: ProjectStatus | "all";
}) {
  const tabs = [
    { key: "all", label: "All Projects", href: "/projects", count: projects.length },
    ...order.map((s) => ({
      key: s,
      label: statusMeta[s].label,
      href: statusMeta[s].href,
      count: projects.filter((p) => p.status === s).length,
    })),
  ];

  return (
    <div
      role="tablist"
      aria-label="Project categories"
      className="flex flex-wrap gap-3"
    >
      {tabs.map((t) => {
        const isActive = t.key === active;
        return (
          <Link
            key={t.key}
            href={t.href}
            role="tab"
            aria-selected={isActive}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              isActive
                ? "border-gold bg-gold text-forest-dark shadow-md"
                : "border-[#E6DFD5] bg-white text-[#44403C] hover:border-gold hover:text-gold-deep"
            }`}
          >
            {t.label}
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] ${
                isActive ? "bg-forest-dark/15" : "bg-[#F5EAD4] text-gold-deep"
              }`}
            >
              {t.count}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
