import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/shared'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/shared/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@styles/global.scss' as *;
        `,
      },
    },
  },
});
