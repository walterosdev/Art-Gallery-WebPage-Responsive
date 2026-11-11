import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: './',
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            // Todas las páginas HTML que deben incluirse en /dist
            input: {
                main: resolve(import.meta.dirname, 'Index.html'),
                location: resolve(import.meta.dirname, 'Location.html'),
            },
        },
    },
})
