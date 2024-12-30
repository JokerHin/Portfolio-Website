import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["tsparticles", "@tsparticles/react"],
    include: ["swiper/react"],
    include: ["lucide-react"],
  },
  build: {
    rollupOptions: {
      external: ["lucide-react"],
      external: ["tsparticles", "@tsparticles/react"],
    }
  }
});


