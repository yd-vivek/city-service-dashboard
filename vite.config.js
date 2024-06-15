import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['redux-thunk'], // Exclude redux-thunk from optimization
  },
  build: {
    sourcemap: true, // Enable sourcemaps for debugging
  },
})
