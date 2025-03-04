import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Furniro/',
  plugins: [tailwindcss(),react()],
  resolve: {
    alias: {
      '@': '/src', // Adjust this path according to your project structure
    },
  },
})
