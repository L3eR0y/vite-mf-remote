import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './',
  plugins: [
    vue(),
    federation({
      name: 'vite-mf-remote',
      exposes: {
        './MainPage': './src/services/Main/index.vue',
        './MainPageRoutes': './src/routes/routes.ts'
      },
      shared: ['vue', 'pinia', 'vue-router']
    })
  ],
  base: 'http://localhost:5173',
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@app-types": path.resolve(__dirname, "./types"),
      "@components": path.resolve(__dirname, "./src/components")
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/scss/index.scss";',
      },
    },
  },
})
