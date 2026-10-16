import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectTabs from "@/components/ui/ProjectTabs";
import EmptyState from "@/components/ui/EmptyState";
import CTABanner from "@/components/home/CTABanner";
import { projectsByStatus, statusMeta, type ProjectStatus } from "@/data/projects";

const emptyText: Record<ProjectStatus, { title: string; text: string }> = {
  completed: {
    title: "Completed projects coming soon",
    text: "Our completed project portfolio is being updated. Meanwhile, explore the plots available right now.",
  },
  ongoing: {
    title: "No ongoing projects right now",
    text: "New plots will be listed here shortly. Contact us to hear about current availability.",
  },
  upcoming: {
    title: "No upcoming launches yet",
    text: "Our next launches will appear here. Contact us to be the first to know.",
  },
};

export default function ProjectsListing({ status }: { status: ProjectStatus }) {
  const meta = statusMeta[status];
  const list = projectsByStatus(status);

  return (
    <>
      <PageHero
        eyebrow="OUR PROJECTS"
        title={
          <>
            {meta.label} <span className="text-gold">Projects</span>
          </>
        }
        subtitle={meta.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: meta.label },
        ]}
      />

      <section className="bg-[#FAF7F2] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ProjectTabs active={status} />

          <div className="mt-10">
            {list.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {list.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            ) : (
              <EmptyState
                title={emptyText[status].title}
                text={emptyText[status].text}
              />
            )}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
