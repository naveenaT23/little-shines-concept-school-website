import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://littleshinesconceptschool.com'
  
  const routes = [
    '',
    '/about',
    '/academics',
    '/facilities',
    '/activities',
    '/gallery',
    '/admissions',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
