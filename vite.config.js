import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'swiper/react',
      'swiper/css', // Add swiper/css here for pre-bundling
      "tsparticles",
      "@tsparticles/react",
      "lucide-react",
      "lottie-react",
      "sweetalert2"
    ],
  },
  build: {
    rollupOptions: {
      external: [
        "lucide-react",
        "tsparticles",
        "@tsparticles/react",
        "swiper/react",
        "lottie-react",
        "sweetalert2"
      ],
    },
  },
});
