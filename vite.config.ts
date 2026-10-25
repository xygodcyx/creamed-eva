import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { stdlib } from 'vite-plugin-stdlib'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
      static: fileURLToPath(new URL('./static', import.meta.url)),
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'static',
          dest: '.',
        },
      ],
    }),
    stdlib(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    port: 8080,
    open: false,
  },
})
