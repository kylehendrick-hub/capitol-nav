import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /\/maps\/.*\.svg$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'floor-plans',
              expiration: { maxEntries: 100, maxAgeSeconds: 30 * 24 * 3600 },
            },
          },
        ],
      },
      manifest: {
        name: 'Capitol Navigator',
        short_name: 'CapNav',
        description: 'Navigate all Capitol Hill buildings — find rooms, get directions, explore floor plans',
        theme_color: '#1a365d',
        background_color: '#f7fafc',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
})
