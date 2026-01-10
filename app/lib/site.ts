// Function to get base URL

export function getBaseUrl() {
    // To be used in production
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return process.env.NEXT_PUBLIC_SITE_URL;
    }

    // Bcoz using vercel for deployment
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    // For development
    return 'http://localhost:3000';
}
