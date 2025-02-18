import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@Pages": path.resolve(__dirname, "./src/Pages"),
      "@Components": path.resolve(__dirname, "./src/Components"),
      "@Types": path.resolve(__dirname, "./src/Types"),
      "@Hooks": path.resolve(__dirname, "./src/Hooks"),
    }
  }
})
