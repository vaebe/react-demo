import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    react(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
})
