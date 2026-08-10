import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/public/robots')({
  server: {
    handlers: {
      GET: async () => {
        const domain = 'https://rajeevnayan.in'
        const content = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${domain}/api/public/sitemap
`
        return new Response(content, {
          headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, max-age=86400',
          },
        })
      },
    },
  },
})
