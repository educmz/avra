import type { MetadataRoute } from "next";
import { indexablePaths, siteUrl } from "@/config/seo";
export default function sitemap(): MetadataRoute.Sitemap { return indexablePaths.map(path => ({ url: new URL(path, siteUrl).href })); }
