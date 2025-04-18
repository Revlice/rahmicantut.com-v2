import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'swiper': 'swiper/swiper-bundle.min.js', // Swiper için doğru yolu belirtin
    },
  },
});
