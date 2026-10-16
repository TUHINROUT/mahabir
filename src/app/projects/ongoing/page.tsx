import type { Metadata } from "next";
import ProjectsListing from "@/components/ui/ProjectsListing";

export const metadata: Metadata = {
  title: "Ongoing Projects",
  description:
    "Plots currently available from Mahavira Developers LLP, including Bajarangi Nagar at Kuainlo, Bhubaneswar.",
};

export default function OngoingProjectsPage() {
  return <ProjectsListing status="ongoing" />;
}
