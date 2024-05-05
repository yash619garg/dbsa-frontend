import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://dbsa-ecommerce-website-2.onrender.com/",
      // "/api/": "https://dbsa-ecommerce-website-gn3v.vercel.app/",
      // means this api/ string works as http://localhost:5000/api

      "/uploads/": "https://dbsa-ecommerce-website-2.onrender.com",
      // means this uploads/ string works as http://localhost:5000/uploads

    }
  }
})
