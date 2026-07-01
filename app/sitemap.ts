import { MetadataRoute } from 'next';
import { PROJECTS } from './constants/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vastrainstitute.website';

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
  ];

  // Dynamic project routes
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
