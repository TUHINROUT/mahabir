import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const routes = [
  "",
  "/about",
  "/projects",
  "/projects/completed",
  "/projects/ongoing",
  "/projects/upcoming",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
