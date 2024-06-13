
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                tour: resolve(__dirname, 'tours/tour1.html'),
            },
        },
    },
    base: '/museum/',
}