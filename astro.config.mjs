// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import clerk from '@clerk/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: { enabled: true } // Good for local dev, doesn't affect prod
  }),
  integrations: [
    clerk({
      // CRITICAL: Set to false because we have custom src/middleware.ts
      // Having both causes "Double Middleware" conflict
      middleware: false,
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    // CRITICAL FIX: Externalize async_hooks for Cloudflare Workers runtime
    // This fixes the "Automatically externalized node built-in module" warning
    ssr: {
      external: ['node:async_hooks', 'async_hooks'],
    },
  }
});
