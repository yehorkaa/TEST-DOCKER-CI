import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    watch: {
      usePolling: true, // Использование опроса для отслеживания изменений (может помочь в некоторых окружениях)
    },
  },
})
