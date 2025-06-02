export default async function sitemap() {
  const baseUrl = "https://jakub-lewandowski.dev";

  const routes = ["", "/projects", "/resume"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.9,
  }));

  const pdfUrl = {
    url: `${baseUrl}/docs/CV.pdf`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.7,
  };

  return [...routes, pdfUrl];
}
