import { MetadataRoute } from 'next'
import { getBaseUrl } from './lib/site';

export default function robots(): MetadataRoute.Robots {

    const siteUrl = getBaseUrl() || 'http://localhost:3000';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    }
}
