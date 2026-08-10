import { createFileRoute } from '@tanstack/react-router'
import { featuredProjects } from '@/data/portfolio'

const SUPPORTED_LANGS = ['en', 'hi', 'de']

export const Route = createFileRoute('/api/public/sitemap')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url)
        const langParam = url.searchParams.get('lang')
        const domain = 'https://rajeevnayan.in'
        const lastMod = new Date().toISOString().split('T')[0]
        
        // If no lang requested, return sitemap index
        if (!langParam) {
          const sitemaps = SUPPORTED_LANGS.map(lang => `
  <sitemap>
    <loc>${domain}/api/public/sitemap?lang=${lang}</loc>
    <lastmod>${lastMod}</lastmod>
  </sitemap>`).join('')

          const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`

          return new Response(xml, {
            headers: {
              'Content-Type': 'application/xml',
              'Cache-Control': 'public, max-age=86400',
            },
          })
        }

        const pathPrefix = langParam === 'en' ? '' : `/${langParam}`
        
        const projectUrls = featuredProjects.map(p => {
          const loc = `${domain}${pathPrefix}/projects/${p.repo}`
          return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${domain}/projects/${p.repo}"/>
    <xhtml:link rel="alternate" hreflang="hi" href="${domain}/hi/projects/${p.repo}"/>
    <xhtml:link rel="alternate" hreflang="de" href="${domain}/de/projects/${p.repo}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}/projects/${p.repo}"/>
  </url>`
        }).join('')

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${domain}${pathPrefix}/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${domain}/"/>
    <xhtml:link rel="alternate" hreflang="hi" href="${domain}/hi/"/>
    <xhtml:link rel="alternate" hreflang="de" href="${domain}/de/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}/"/>
  </url>${projectUrls}
</urlset>`
        
        return new Response(xml, {
          headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400',
          },
        })
      },
    },
  },
})
