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
  server: {
    host: '0.0.0.0', // 允許外部設備連接
    port: 5173, // 預設端口，可根據需要修改
    strictPort: false, // 如果端口被占用，自動嘗試下一個可用端口
    open: false, // 不自動打開瀏覽器
  },
})