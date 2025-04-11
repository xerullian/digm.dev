import { defineConfig } from 'astro/config';

// third party
import bun from '@nurodev/astro-bun';
import clerk from '@clerk/astro';
import astroExpressiveCode from 'astro-expressive-code';

// astro integrations
import pages from 'astro-pages';

// vite
import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    site: process.env.PUBLIC_SITE_URL,
    adapter: bun(),
    output: 'server',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        alpinejs(),
        clerk(),
        pages(
            {
                dir: 'app/pages',
                cwd: './', // project root
            },
            {
                dir: 'app/api',
                cwd: './',
                pattern: ({ pattern }) => '/api' + pattern,
            },
        ),
    ],
});
