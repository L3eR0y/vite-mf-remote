import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'synergy-elka-services',
      filename: 'remoteEntry.js',
      exposes: {
        './NestedRoutingCmp': './src/pages/NestedRouting/index.vue',
        './Routes': './src/routes/routes.ts'
      },
      shared: ['vue', 'pinia', 'vue-router']
    })
  ],
  server: {
    port: 3030
  },
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
  }
})
