import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pftw/Wk.09/wk9project/new_collection/',
  server: {
    open: true
  }
})
 