import type { MetadataRoute } from 'next'
import { SECTORS, SITE_URL } from '@/lib/site'
import { COMPETITORS } from '@/lib/comparativas'
import { POSTS } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/precios`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/terminos`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/reembolsos`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const sectorPages: MetadataRoute.Sitemap = SECTORS.map(sector => ({
    url: `${SITE_URL}/industria/${sector.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const comparativaPages: MetadataRoute.Sitemap = COMPETITORS.map(competitor => ({
    url: `${SITE_URL}/comparativa/${competitor.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = POSTS.map(post => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...sectorPages, ...comparativaPages, ...blogPages]
}
