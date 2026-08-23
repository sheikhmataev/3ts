import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/tjenester", "/produkter", "/om-oss", "/kontakt", "/faktura", "/album"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.3ts.no${route}`,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7,
  }));
}
