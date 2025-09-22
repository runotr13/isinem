// app/sitemap.ts
import { ROUTES } from "@/router/routes";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SERVICE_URL || "https://www.isinemmakina.com.tr";
  const currentDate = new Date();

  const urls: MetadataRoute.Sitemap = Object.values(ROUTES).map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: path === "/" ? 1.0 : 0.8,
  }));

  return urls;
}
