import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Axios': path.resolve(__dirname, './src/axios/index.ts'),
      '@Common': path.resolve(__dirname, './src/common'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Context': path.resolve(__dirname, './src/contexts'),
    },
  },
})
