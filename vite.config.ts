import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePlugin from '@curves_digital/builder/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePlugin() ],
  server: {
    // open: true
  },
  build: {
    minify: false
  }
})
