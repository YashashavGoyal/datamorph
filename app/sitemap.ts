import { MetadataRoute } from 'next'
import { getBaseUrl } from './lib/site';

export default function sitemap(): MetadataRoute.Sitemap {

    const siteUrl = getBaseUrl() || 'http://localhost:3000';

    return [
        {
            url: `${siteUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ]
}
