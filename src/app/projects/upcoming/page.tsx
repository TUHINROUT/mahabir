import type { Metadata } from "next";
import ProjectsListing from "@/components/ui/ProjectsListing";

export const metadata: Metadata = {
  title: "Upcoming Projects",
  description:
    "Upcoming plotted developments by Mahavira Developers LLP, including Maruti Nagar near Bhubaneswar New Railway Station.",
};

export default function UpcomingProjectsPage() {
  return <ProjectsListing status="upcoming" />;
}
