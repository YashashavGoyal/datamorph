import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {

    return {
        name: 'Datamorph',
        short_name: 'Datamorph',
        description: 'Datamorph Application',
        start_url: '/',
        display: 'standalone',
        background_color: '#030712',
        theme_color: '#030712',
        icons: [
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/logo-bg.png',
                sizes: '1024x1024',
                type: 'image/png',
            },
        ]

    }
}
