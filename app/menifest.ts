import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DayBeforeEnd Survival Core',
    short_name: 'DayBeforeEnd',
    description: 'Offline-first survival protocols and PDF archive.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#f97316',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}