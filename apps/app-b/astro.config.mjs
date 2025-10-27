// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
    build: {
        inlineStylesheets: "never"
    },
    output: "server",
    adapter: node({
        mode: 'standalone',
    }),
});
