import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 使用 @import 或 @use 都可以，建議用 @import 以相容舊代碼
        additionalData: `@use "@/styles/shared" as *;`
      },
    },
  },
})