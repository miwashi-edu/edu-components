import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                { src: 'src/assets/fonts/*', dest: 'assets/fonts' }
            ]
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'ementor-components',
            formats: ['es', 'umd', 'cjs'],
            fileName: (format) => `ementor-components.${format}.js`
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React'
                },
                assetFileNames: `assets/[name]-[hash][extname]`
            }
        }
    },
    resolve: {
        dedupe: ['react']
    }
});