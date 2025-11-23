// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import clerk from '@clerk/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: { enabled: true }
  }),
  integrations: [
    clerk({
      // Set to false because we use custom middleware in src/middleware.ts
      middleware: false,
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    // Externalize async_hooks for Cloudflare Workers compatibility
    ssr: {
      external: ['node:async_hooks', 'async_hooks'],
    },
  }
});
