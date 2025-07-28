import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [react(), tailwindcss(), createHtmlPlugin()],
  server: {
    historyApiFallback: true,
  },
  build: {
    base: '/Portfolio/',  
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
