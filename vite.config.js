import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from '@vheemstra/vite-plugin-imagemin'
import imageminPngquant from 'imagemin-pngquant'
import imageminMozjpeg from 'imagemin-mozjpeg'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      plugins: {
        // Compress PNGs: quality 65-80, significant reduction with minimal visual loss
        png: imageminPngquant({ quality: [0.65, 0.80], speed: 1 }),
        // Compress JPEGs: quality 75, progressive for faster perceived load
        jpg: imageminMozjpeg({ quality: 75, progressive: true }),
        jpeg: imageminMozjpeg({ quality: 75, progressive: true }),
      },
    }),
  ],
  build: {
    // Increase warning threshold (portfolio has heavy animation libs)
    chunkSizeWarningLimit: 800,
    // Minify with esbuild (default) for fast builds; terser for production
    minify: 'esbuild',
    target: 'es2015',
    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal HTTP/2 caching
        manualChunks: {
          // Core React runtime (changes rarely)
          'vendor-react': ['react', 'react-dom'],
          // Animation library (large, isolated chunk)
          'vendor-motion': ['framer-motion'],
          // Icon library (large, tree-shaken at build time)
          'vendor-icons': ['lucide-react'],
          // Smooth scroll (tiny, but separate for clarity)
          'vendor-lenis': ['lenis'],
        },
      },
    },
  },
})

