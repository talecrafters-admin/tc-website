import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://talecrafters.in'
  
  const routes = [
    '',
    '/services',
    '/case-studies',
    '/process',
    '/about',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Add blog posts
  const blogPosts = [
    '/blog/andromeda-update',
    '/blog/creative-strategies',
    '/blog/pmax-guide',
    '/blog/1-digital-marketing-myths-debunked',
    '/blog/2-the-digital-revolution-in-real-estate',
    '/blog/3-navigating-the-changing-dynamics-of-digital-marketing',
    '/blog/4-Mastering-Technical-SEO',
    '/blog/5-best-seo-tools',
    '/blog/74-important-seo-statistics',
    '/blog/best-marketing-agency-in-hyderabad',
    '/blog/grow-your-d2c-brand',
    '/blog/hyper-personalization-key-to-winning',
    '/blog/the-future-of-marketing',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogPosts]
}
