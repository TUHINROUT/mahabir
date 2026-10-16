import { photos } from "@/data/photos";

/**
 * Add, edit or move projects here. Every page (Home, Projects, Completed,
 * Ongoing, Upcoming) reads from this single list.
 *
 * To add a completed project, push an object with `status: "completed"`.
 */

export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  location: string;
  price: string;
  summary: string;
  highlights: string[];
  art: "bajarangi" | "maruti";
  photo: string;
  banner: { src: string; width: number; height: number };
};

export const statusMeta: Record<
  ProjectStatus,
  { label: string; href: string; title: string; description: string }
> = {
  completed: {
    label: "Completed",
    href: "/projects/completed",
    title: "Completed Projects",
    description:
      "Projects we have delivered and handed over to our happy plot owners.",
  },
  ongoing: {
    label: "Ongoing",
    href: "/projects/ongoing",
    title: "Ongoing Projects",
    description:
      "Plots available right now. Visit the site, pick your plot and book with confidence.",
  },
  upcoming: {
    label: "Upcoming",
    href: "/projects/upcoming",
    title: "Upcoming Projects",
    description:
      "New launches in the pipeline. Register your interest to get early details.",
  },
};

export const projects: Project[] = [
  {
    slug: "bajarangi-nagar",
    name: "Bajarangi Nagar",
    status: "ongoing",
    location: "Mauza - Kuainlo, Bhubaneswar",
    price: "₹1,150 / sq.ft",
    summary:
      "Demarcated residential plots with internal road access at Mauza Kuainlo, Bhubaneswar, offered at a clear per sq.ft price.",
    highlights: [
      "Demarcated plots with boundary markers",
      "Internal road access",
      "Layout plan available on request",
      "Transparent price of ₹1,150 per sq.ft",
    ],
    art: "bajarangi",
    photo: photos.fields,
    banner: {
      src: "/projects/bajarangi-banner.png",
      width: 833,
      height: 1470,
    },
  },
  {
    slug: "maruti-nagar",
    name: "Maruti Nagar",
    status: "upcoming",
    location: "Near Bhubaneswar New Railway Station, Patia, Raghunathpur",
    price: "Price on enquiry",
    summary:
      "An upcoming plotted development near Bhubaneswar New Railway Station at Patia, Raghunathpur, well placed for rail connectivity.",
    highlights: [
      "Near Bhubaneswar New Railway Station",
      "Patia, Raghunathpur locality",
      "Layout and pricing shared on enquiry",
      "Early enquiries open",
    ],
    art: "maruti",
    photo: photos.cityAerial,
    banner: {
      src: "/projects/maruti-banner.png",
      width: 784,
      height: 1372,
    },
  },
];

export function projectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((p) => p.status === status);
}
