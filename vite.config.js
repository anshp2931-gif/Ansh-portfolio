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
        // Compress PNGs: aggressive reduction for performance score
        png: imageminPngquant({ quality: [0.45, 0.65], speed: 4 }),
        // Compress JPEGs: more aggressive quality for Lighthouse green
        jpg: imageminMozjpeg({ quality: 60, progressive: true }),
        jpeg: imageminMozjpeg({ quality: 60, progressive: true }),
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

