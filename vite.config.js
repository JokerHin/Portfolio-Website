import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "tsparticles",
      "@tsparticles/react",
      "swiper/react",
      "lucide-react",
      "lottie-react"
    ],
  },
  build: {
    rollupOptions: {
      external: [
        "lucide-react",
        "tsparticles",
        "@tsparticles/react",
        "swiper/react",
        "lottie-react"
      ],
    },
  },
});





