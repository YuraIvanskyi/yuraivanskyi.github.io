import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: true,
  },
  publicDir: 'dist',
  server: {
    host: true,
  },
  base: "./"
})
