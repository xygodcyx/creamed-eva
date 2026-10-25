import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { stdlib } from 'vite-plugin-stdlib'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
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
