import type { PluginOption } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { stdlib } from 'vite-plugin-stdlib'

const fullReloadPlugin: PluginOption = {
  name: 'full-reload-always',
  handleHotUpdate({ server }) {
    server.ws.send({ type: 'full-reload' })
    return [] // 返回空数组，阻止 HMR 继续处理
  },
}
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
      static: fileURLToPath(new URL('./static', import.meta.url)),
    },
  },
  plugins: [
    fullReloadPlugin,
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
