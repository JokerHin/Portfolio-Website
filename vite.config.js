import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "swiper/react",
      "swiper/css",
      "tsparticles",
      "@tsparticles/react",
      "lucide-react",
      "lottie-react",
      "sweetalert2",
      "swiper/css/pagination",
    ],
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
});
