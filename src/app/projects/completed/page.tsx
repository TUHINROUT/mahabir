import type { Metadata } from "next";
import ProjectsListing from "@/components/ui/ProjectsListing";

export const metadata: Metadata = {
  title: "Completed Projects",
  description: "Projects delivered by Mahavira Developers LLP.",
};

export default function CompletedProjectsPage() {
  return <ProjectsListing status="completed" />;
}
