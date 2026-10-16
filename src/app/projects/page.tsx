import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectTabs from "@/components/ui/ProjectTabs";
import EmptyState from "@/components/ui/EmptyState";
import CTABanner from "@/components/home/CTABanner";
import { projectsByStatus, statusMeta, type ProjectStatus } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore completed, ongoing and upcoming plotted projects by Mahavira Developers LLP in Bhubaneswar.",
};

const order: ProjectStatus[] = ["ongoing", "upcoming", "completed"];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR PROJECTS"
        title={
          <>
            Find Your <span className="text-gold">Perfect Plot</span>
          </>
        }
        subtitle="Browse our completed, ongoing and upcoming projects across Bhubaneswar."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="bg-[#FAF7F2] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ProjectTabs active="all" />

          <div className="mt-12 space-y-16">
            {order.map((status) => {
              const list = projectsByStatus(status);
              const meta = statusMeta[status];
              return (
                <div key={status}>
                  <div className="mb-6 flex items-end justify-between gap-4">
                    <h2 className="font-display text-2xl font-bold text-[#1C1917] md:text-3xl">
                      {meta.title}
                    </h2>
                    <Link
                      href={meta.href}
                      className="flex items-center gap-1.5 text-sm font-semibold text-gold-deep hover:text-gold"
                    >
                      View all <ArrowRight size={15} />
                    </Link>
                  </div>
                  {list.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      {list.map((p) => (
                        <ProjectCard key={p.slug} project={p} />
                      ))}
                    </div>
                  ) : (
                    <EmptyState
                      title="Completed projects coming soon"
                      text="Our completed project portfolio is being updated. Meanwhile, explore the plots available right now."
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
